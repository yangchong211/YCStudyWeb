# Shared Methods

The following functions are available on both Node.js and Client.

## Data Related

Encode/decode and zip/unzip data.

This is useful in markdown plugins when you want to encode string content and pass it to the component through props.

You may simply achieve this with `encodeURIComponent` and `decodeURIComponent`, but it can be very large if the content contains lots of special characters.

So we provide `encodeData` and `decodeData` to zip and encode content.

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

## Type Helper

- `isDef(x)`: Check if `x` is defined.
- `isBoolean(x)`: Check if `x` is a boolean.
- `isString(x)`: Check if `x` is a string.
- `isNumber(x)`: Check if `x` is a number.
- `isPlainObject(x)`: Check if `x` is a plain object.
- `isArray(x)`: Check if `x` is an array.
- `isFunction(x)`: Check if `x` is a function.
- `isRegExp(x)`: Check if `x` is a regular expression.

## String Related

- `startsWith(a, b)`: Check if string `a` starts with string `b`.
- `endsWith(a, b)`: Check if string `a` ends with string `b`.

Return `false` if `a` is not a string.

## Object Related

- `keys(x)`: Return an array of keys of object `x`.
- `values(x)`: Return an array of values of object `x`.
- `entries(x)`: Convert object `x` to an array of key-value pairs.
- `fromEntries(x)`: Convert an array of key-value pairs `x` to an object.
- `deepAssign(x, y, ...)`: A deep version of `Object.assign`.

  ::: details Example

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

## Date Related

- `getDate(x)`: Convert input `x` to a date. It can support `Date`, timestamp, and date string. The support degree of date string depends on the `Date.parse` support degree of the environment. Return `null` when it cannot be converted to a date.

  ::: details Example

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

- `dateSorter`: Sort the values that can be converted to dates from new to old, and the values that cannot be converted to dates will be at the end.

  ::: details Example

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

## Link Related

- `isLinkHttp(x)`: Check if `x` is a valid HTTP URL.
- `isLinkWithProtocol(x)`: Check if `x` is a valid URL with protocol.
- `isLinkExternal(x)`: Check if `x` is a valid external URL.
- `isLinkAbsolute(x)`: Check if `x` is a valid absolute URL.
- `ensureEndingSlash(x)`: Ensure `x` ends with a slash.
- `ensureLeadingSlash(x)`: Ensure `x` starts with a slash.
- `removeEndingSlash(x)`: Ensure `x` does not end with a slash.
- `removeLeadingSlash(x)`: Ensure `x` does not start with a slash.
