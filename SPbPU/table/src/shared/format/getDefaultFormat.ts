import { defaultFormats } from './defaultFormats'

export const getDefaultFormat = (type: string) => {
  if (!Object.keys(defaultFormats).includes(type)) return ''
  return defaultFormats[type as keyof typeof defaultFormats]
}
