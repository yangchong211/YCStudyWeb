// eslint-disable-next-line vue/prefer-import-from-vue
import { isHTMLTag, isMathMLTag, isSVGTag } from '@vue/shared'
import type { AnyNode, Element } from 'cheerio'
import { load } from 'cheerio'
import matter from 'gray-matter'
import type { App, Page } from 'vuepress/core'
import { isLinkHttp, removeEndingSlash } from 'vuepress/shared'
import { isArray, isLinkAbsolute, startsWith } from '../../shared/index.js'

const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export interface PageExcerptOptions {
  /**
   * Excerpt separator
   *
   * 摘要分隔符
   *
   * @default "<!-- more -->"
   */
  separator?: string

  /**
   * Length of excerpt
   *
   * @description Excerpt length will be the minimal possible length reaching this value
   *
   * 摘要的长度
   *
   * @description 摘要的长度会尽可能的接近这个值
   *
   * @default 300
   */
  length?: number

  /**
   * Tags which is considered as custom elements
   *
   * @description This is used to determine whether a tag is a custom element since all unknown tags are removed in excerpt.
   *
   * 被认为是自定义元素的标签
   *
   * @description 用于判断一个标签是否是自定义元素，因为在摘要中，所有的未知标签都会被移除。
   */
  isCustomElement?: (tagName: string) => boolean

  /**
   * Whether keep page title (first h1) in excerpt
   *
   * 是否保留页面标题 (第一个 h1)
   *
   * @default false
   */
  keepPageTitle?: boolean

  /**
   * Whether preserve tags like line numbers and highlight lines for code blocks
   *
   * 是否保留代码块的标签，诸如行号和高亮行
   *
   * @default false
   */
  keepFenceDom?: boolean
}

interface NodeOptions
  extends Required<
    Pick<PageExcerptOptions, 'isCustomElement' | 'keepFenceDom'>
  > {
  base: string
}

const handleNode = (
  node: AnyNode,
  { base, isCustomElement, keepFenceDom }: NodeOptions,
): AnyNode | null => {
  if (node.type === 'tag') {
    // image using relative urls shall be dropped
    if (node.tagName === 'img') {
      const { src } = node.attribs

      // this is not a resolvable image link
      if (!isLinkHttp(src) && !isLinkAbsolute(src)) return null
    }

    // toc should be dropped
    if (
      [node.attribs.class, node.attribs.id].some((item) =>
        ['table-of-contents', 'toc'].includes(item),
      )
    )
      return null

    // standard tags can be returned
    if (
      isHTMLTag(node.tagName) ||
      isSVGTag(node.tagName) ||
      isMathMLTag(node.tagName)
    ) {
      // handing heading tags
      if (HEADING_TAGS.includes(node.tagName)) {
        // remove heading id tabindex
        delete node.attribs.id
        delete node.attribs.tabindex

        // extract heading tags and remove anchor
        if (
          node.children.length === 1 &&
          node.children[0].type === 'tag' &&
          node.children[0].tagName === 'a' &&
          node.children[0].attribs?.class === 'header-anchor'
        )
          node.children = (node.children[0].children[0] as Element).children
      }

      if (
        node.tagName === 'div' &&
        startsWith(node.attribs.class, 'language-')
      ) {
        const pre = node.children.find(
          (node) =>
            node.type === 'tag' &&
            node.tagName === 'pre' &&
            startsWith(node.attribs.class, 'language-'),
        )

        if (
          // we are sure this is a code fence
          pre &&
          !keepFenceDom
        ) {
          node.attribs.class = node.attribs.class.replace(
            ' line-numbers-mode',
            '',
          )
          node.children = [pre]
        }
      }

      // remove `v-pre` attribute on code
      if (node.tagName === 'code' || node.tagName === 'pre')
        delete node.attribs['v-pre']

      node.children = handleNodes(node.children, {
        base,
        isCustomElement,
        keepFenceDom,
      })

      return node
    }

    // we shall convert `<RouteLink>` and `<RouterLink>` to `<a>` tag
    if (node.tagName === 'routelink' || node.tagName === 'routerlink') {
      node.tagName = 'a'
      node.attribs.href = `${removeEndingSlash(base)}${node.attribs.to}`
      node.attribs.target = '_blank'
      delete node.attribs.to

      node.children = handleNodes(node.children, {
        base,
        isCustomElement,
        keepFenceDom,
      })

      return node
    }

    // keep custom element as is
    if (isCustomElement(node.tagName)) return node

    // other tags are considered as vue components and dropped
    return null
  }

  return node
}

const handleNodes = (
  nodes: AnyNode[] | null,
  { base, isCustomElement, keepFenceDom }: NodeOptions,
): AnyNode[] =>
  isArray(nodes)
    ? nodes
        .map((node) =>
          handleNode(node, {
            base,
            isCustomElement,
            keepFenceDom,
          }),
        )
        .filter((node): node is AnyNode => node !== null)
    : []

const $ = load('')

const isH1Tag = (node: AnyNode): boolean =>
  node.type === 'tag' && node.tagName === 'h1'

export const getPageExcerptContent = (
  content: string,
  separator = '<!-- more -->',
): string | undefined =>
  matter(content, {
    excerpt: true,
    excerpt_separator: separator,
  }).excerpt

export const getPageExcerpt = (
  { markdown, options: { base } }: App,
  { content, contentRendered, filePath, filePathRelative, frontmatter }: Page,
  {
    isCustomElement = (): boolean => false,
    separator = '<!-- more -->',
    length = 300,
    keepPageTitle = false,
    keepFenceDom = false,
  }: PageExcerptOptions = {},
): string => {
  // get page content
  const excerpt = getPageExcerptContent(content, separator)

  if (excerpt) {
    const renderedContent = markdown.render(
      excerpt,
      // markdown env
      {
        base,
        filePath,
        filePathRelative,
        frontmatter: { ...frontmatter },
      },
    )

    const rootNodes = $.parseHTML(renderedContent) ?? []

    if (rootNodes[0] && !keepPageTitle && isH1Tag(rootNodes[0]))
      rootNodes.shift()

    return $.html(
      handleNodes(rootNodes, {
        base,
        isCustomElement,
        keepFenceDom,
      }),
    )
  } else if (length > 0) {
    let excerpt = ''
    const rootNodes = $.parseHTML(contentRendered) ?? []

    if (rootNodes[0] && !keepPageTitle && isH1Tag(rootNodes[0]))
      rootNodes.shift()

    for (const node of rootNodes) {
      const resolvedNode = handleNode(node, {
        base,
        isCustomElement,
        keepFenceDom,
      })

      if (resolvedNode) {
        excerpt += `${$.html(resolvedNode)}`
        if (excerpt.length >= length) break
      }
    }

    return excerpt
  }

  return ''
}
