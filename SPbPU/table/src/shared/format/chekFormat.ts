import { defaultFormats } from './defaultFormats'

export const chekFormat = (type: string, value: string) => {
  if (!Object.keys(defaultFormats).includes(type)) return true
  if (!value) return false
  switch (type) {
    case 'number':
      return defaultFormats.number.startsWith(value)
    case 'date':
      return checkDate(value)
    default:
      return true
  }
}

const checkDate = (value: string) => {
  const v = value.toUpperCase()
  const f = defaultFormats.date.toUpperCase()
  const short = 'DM'.split('')

  const fSymbols = new Set(f.split(''))
  const vSymbols = Array.from(new Set(v.split('')))
  for (let i = 0; i < vSymbols.length; i++) {
    if (!fSymbols.has(vSymbols[i])) return false
  }
  const pieces = v.split('.')
  if (pieces.length > 3) return false

  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].length > 4) return false
    if (new Set(pieces[i]).size > 1) return false
    if (short.includes(pieces[i][0]) && pieces[i].length > 2) return false
  }

  return true
}
