# markdown-math

<NpmBadge package="@vuepress/plugin-markdown-math" />

在你的 Markdown 添加数学支持。

此插件允许你使用 `mathjax` 或 `katex` 在 Markdown 中渲染 $\TeX$ 内容。

## 使用方法

```bash
npm i -D @vuepress/plugin-markdown-math@next

# 安装下列包之一:
npm i -D mathjax-full
npm i -D katex
```

```ts
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default {
  plugins: [
    markdownMathPlugin({
      // 选项
    }),
  ],
}
```

## 格式

- 内联模式：`$xxx$`

  Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

  ```md
  Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.
  ```

- 显示模式：

  ```md
  $$xxx$$

  $$
  xxx
  $$
  ```

  $$
  \frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
  = \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}
  $$

  ```md
  $$
  \frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
  = \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}
  $$
  ```

::: tip 转义

可以通过在 `$` 字符之前使用 `\` 或在 `$` 字符前后添加空格来完成转义：

$a=1$ 是一个 TeX 方程，而 $ a=1 $ 和 \$a=1$ 不是。

```md
$a=1$ 是一个 TeX 方程，而 $ a=1 $ 和 \$a=1$ 不是。
```

:::

## 支持列表

TeX 教程:

- [TeX 教程](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes)
- [TeX 速查表](https://mdit-plugins.github.io/zh/tex.html#tex-tutorial)

插件教程和常见问题: [TeX](https://mdit-plugins.github.io/zh/tex.html#tex-%E6%95%99%E7%A8%8B)

Katex:

- [KaTeX 支持功能](https://katex.org/docs/supported.html)
- [KaTeX 支持列表](https://katex.org/docs/support_table.html)

Mathjax:

- [支持的 TeX/LaTeX 命令](https://docs.mathjax.org/en/latest/input/tex/macros/index.html#tex-commands)

## 配置项

### 类型

- 类型：`'katex' | 'mathjax'`
- 详情：

  用于渲染 $\TeX$ 内容的包。

  - `'katex'`：使用 [KaTeX](https://katex.org/)
  - `'mathjax'`：使用 [MathJax](https://www.mathjax.org/)

  当未指定此选项时，插件将尝试检测安装了哪个包。如果两者都安装了，它将使用“mathjax”。

### 使用 KaTeX

使用 KaTeX 时，任何其他选项都将作为 `KatexOptions` 传递给 KaTeX。有关所有可用选项，请参阅 [KaTeX 文档](https://katex.org/docs/options.html)。

此外，还支持 2 个特殊选项：

- `copy`：是否启用复制扩展。
- `mhchem`：是否启用 mhchem 扩展。

### 使用 MathJax

使用 MathJax 时，您可以设置：

- `tex`：传递给 TeX 输入解析器的选项
- `output`：`'svg'`（默认）或 `'chtml'` 来更改输出格式为 SVG 或 HTML。
- `chtml`：传递给通用 HTML 输出解析器的选项
- `svg`：传递给 SVG 输出解析器的选项
