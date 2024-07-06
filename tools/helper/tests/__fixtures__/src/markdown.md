# Content Example

## Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

### Heading with **markdown** and <span>html</span>

## Text

This sentence has **bold**、_italic_ and ~~delete~~ style text.

## Paragraph

This is a paragraph.

This is another paragraph.

## Line Break

I would like to line break at  
this point

::: tip

In codes above, two spaces are behind `at`.

:::

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## List

### Unordered List

- Create a list by starting a line with `-`
- Make sub-lists by indenting 2 spaces:

  - Marker character change forces new list start:

    - Ac tristique libero volutpat at
    - Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit  
      link break

      New paragraph

- It’s easy!

### Ordered List

1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit  
   line break  
   line break again
1. Integer molestie lorem at massa

## HR

---

## Link

- [relative markdown link](./excerpt.md)
- [relative html link](./excerpt.html)
- [absolute markdown link](/README.md)
- [absolute html link](/index.html)
- [Anchor](#link)

## Image

![Logo](/logo.png)

![logo](https://exmaple.com/logo.png)

A inline image ![relative](./assets/relative.jpg), ![image with absolute link](/logo.png) and a ![image with full url](https://exmaple.com/logo.png).

## Emoji

Classic:

:wink: :cry: :laughing: :yum:

## Tables

|           center           |                    right | left                    |
| :------------------------: | -----------------------: | :---------------------- |
| For center align use `:-:` | For right align use `-:` | For left align use `:-` |
|         table text         |                aaaaaaaaa | aaaa                    |
|             c              |                     aaaa | a                       |

## Codes

Inline Code: `inline code`

Block code:

```
Sample text here...
```

Syntax highlighting:

```js {2}
var foo = function (bar) {
  return bar++
}

console.log(foo(5))
```

## Comment

<!-- Here is a comment -->
