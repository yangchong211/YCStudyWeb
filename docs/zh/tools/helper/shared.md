# 共享方法

以下函数在 Node.js 和客户端上均可用。

## 数据相关

此方法在 MarkdownIt 插件中很有用。有些时候你可能需要在 Markdown 插件中生成组件，并将复杂的数据写入到组件属性中，一个通常做法是使用 `JSON.stringify` + `encodeURIComponent`，并在客户端 `decodeURIComponent` + `JSON.parse`。但如果内容包含很多特殊字符，转换结果会很长。

所以我们提供 `encodeData` 和 `decodeData` 来压缩和编码内容。

```ts
export const encodeData: (
  data: string,
  level: DeflateOptions['level'] = 6,
) => string

export const decodeData: (compressed: string) => string
```

::: details

```ts
const content = `
{
  "type": "bar",
  "data": {
    "labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "datasets": [
      {
        "label": "# of Votes",
        "data": [12, 19, 3, 5, 2, 3],
        "backgroundColor": [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        "borderColor": [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        "borderWidth": 1
      }
    ]
  },
  "options": {
    "scales": {
      "y": {
        "beginAtZero": true
      }
    }
  }
}
`

const prop = encodeData(content) // "eJyNUsFOwzAMve8rrHABKZqWlg5WxAE4cARxAMHEIV1NmQhNlaaCCe3fcdKtW0sLWGpjxy/v+UV512mlcIyfhTa2hHP4GgHYVYExsEQaxqlMpZWxbwAomaAqY5izO0wZB3apKnTrIyqlP1x2bRBzl9xWplC+eWNkniF7dmw1X4nWsfgaNtwNP2kfgH6Be22x9CPUUQ8yFwEHMeMQcog4UBFuiF0kcvGWGV3l6ZVW2uw0XDCTJfIwiOjYjAhESIcn4+BoT2MLio6pP6V+EBJ6AOSZgsmUwyl9A6ATwoiZn3lYTkTkRkycnuP8TU9ENPqUxuuA9i9BmxTNPy9A/G2/F9I23wtpW++FdIwPKzW2W5Afph+WqX2NQWz313XicT7XhV3qnB5f/ejKhVTYVACrXUqUmC3zC/uERsdgTYUdVr/Qb302+gZxe7S/"

decodeData(prop) // will be the original content

// if you use `encodeURIComponent`, it will be much longer
encodeURIComponent(content) // '%0A%7B%0A%20%20%22type%22%3A%20%22bar%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22labels%22%3A%20%5B%22Red%22%2C%20%22Blue%22%2C%20%22Yellow%22%2C%20%22Green%22%2C%20%22Purple%22%2C%20%22Orange%22%5D%2C%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22%23%20of%20Votes%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B12%2C%2019%2C%203%2C%205%2C%202%2C%203%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%200.2)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%200.2)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderColor%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%2099%2C%20132%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(54%2C%20162%2C%20235%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20206%2C%2086%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(75%2C%20192%2C%20192%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(153%2C%20102%2C%20255%2C%201)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rgba(255%2C%20159%2C%2064%2C%201)%22%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22borderWidth%22%3A%201%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22y%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22beginAtZero%22%3A%20true%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A'
```

:::

## 类型助手

- `isDef(x)`: 判断 x 是否定义。
- `isBoolean(x)`: 判断 x 是否为布尔值。
- `isString(x)`: 判断 x 是否为字符串。
- `isNumber(x)`: 判断 x 是否为数字。
- `isPlainObject(x)`: 判断值是否为纯对象。
- `isArray(x)`: 判断 x 是否为数组
- `isFunction(x)`: 判断 x 是否为函数。
- `isRegExp(x)`: 判断 x 是否为正则表达式

## 字符串相关

- `startsWith(a, b)`: 判断字符串 a 是否以指定字符串 b 开头
- `endsWith(a, b)`: 判断字符串 a 是否以指定字符串 b 结尾

当 a 不是字符串时返回 `false`

## 对象相关

- `keys(x)`: 以数组形式返回对象 x 的键
- `values(x)`: 以数组形式返回对象 x 的值
- `entries(x)`: 将对象 x 转换为键值对数组。
- `fromEntries(x)`: 将键值对数组 x 转换为对象。
- `deepAssign(x, y, ...)`: `Object.assign` 的深度版本。

  ::: details 示例

  ```ts
  // or @vuepress/helper/client
  import { deepAssign } from '@vuepress/helper'

  const defaultOptions = {
    optionA: {
      optionA1: 'defaultOptionA1',
      optionA2: 'defaultOptionA2',
      optionA3: 'defaultOptionA3',
    },
    optionB: true,
    optionC: 'optionC',
  }

  const userOptions = {
    optionA: {
      optionA1: 'optionA1',
      optionA2: 'optionA2',
    },
    optionB: false,
  }

  deepAssign(defaultOptions, userOptions)
  // {
  //   optionA: {
  //     optionA1: "optionA1",
  //     optionA2: "optionA2",
  //     optionA3: "defaultOptionA3",
  //   },
  //   optionB: false,
  //   optionC: "optionC",
  // }
  ```

  :::

## 日期相关

- `getDate(x)`: 将输入 x 转换为日期，可以支持 Date，时间戳，日期字符串。日期字符串的支持度以环境的 `Date.parse` 支持度为准。当不能转换为日期时返回 `null`

  ::: details 示例

  ```ts
  getDate('2021-01-01') // a Date object represents 2021-01-01
  getDate(1609459200000) // a Date object represents 2021-01-01
  getDate('2021-01-01T00:00:00.000Z') // a Date object represents 2021-01-01
  getDate('2021/01/01') // a Date object represents 2021-01-01 (might be null in some browsers)
  getDate('invalid date') // null
  getDate(undefined) // null
  getDate(-32) // null
  ```

  :::

- `dateSorter`: 将可转换为日期的值从新到旧排序，不能转换为日期的值会在最后。

  ::: details 示例

  ```ts
  const arr = [
    '2020-01-01',
    1609459200000,
    '2022-01-01T00:00:00.000Z',
    '2023/01/01',
    'invalid date',
    undefined,
    -32,
  ]

  arr.sort(dateSorter)
  // [
  //   '2023/01/01',
  //   '2022-01-01T00:00:00.000Z',
  //   1609459200000,
  //   '2020-01-01',
  //   'invalid date',
  //   undefined,
  //   -32,
  // ]
  ```

## 链接相关

- `isLinkHttp(x)`: x 是否是有效的 HTTP URL。
- `isLinkWithProtocol(x)`: x 是否是有效的带有协议的 URL。
- `isLinkExternal(x)`: x 是否是有效的外部 URL。
- `isLinkAbsolute(x)`: x 是否是有效的绝对 URL。
- `ensureEndingSlash(x)`: 确保 x 以斜杠结尾。
- `ensureLeadingSlash(x)`: 确保 x 以斜杠开头。
- `removeEndingSlash(x)`: 确保 x 不以斜杠结尾。
- `removeLeadingSlash(x)`: 确保 x 不以斜杠开头。
