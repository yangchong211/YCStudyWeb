const padZero = (num: number, length = 2): string =>
  num.toString().padStart(length, '0')

const getFullYear = (date: Date): string => padZero(date.getFullYear(), 4)

const getMonth = (date: Date): string => padZero(date.getMonth() + 1)

const getDate = (date: Date): string => padZero(date.getDate())

const getHours = (date: Date): string => padZero(date.getHours())

const getMinutes = (date: Date): string => padZero(date.getMinutes())

const getSeconds = (date: Date): string => padZero(date.getSeconds())

export const getDateString = (date: Date): string =>
  `${getFullYear(date)}-${getMonth(date)}-${getDate(date)}`

export const getTimeString = (date: Date): string =>
  `${getHours(date)}:${getMinutes(date)}:${getSeconds(date)}`

export const getFullDateString = (date: Date): string =>
  `${getDateString(date)} ${getTimeString(date)}`
