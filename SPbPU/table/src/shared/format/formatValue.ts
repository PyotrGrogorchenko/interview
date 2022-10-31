import { defaultFormats } from './defaultFormats'

export const formatValue = (type: string, format: string, value: string): string | null => {
  if (!Object.keys(defaultFormats).includes(type)) return value
  if (!value) return value
  switch (type) {
    case 'number':
      return formatNumber(format, value)
    case 'date':
      return formatDate(format, value)
    default:
      return value
  }
}

export const formatNumber = (format: string, value: string) => {
  const f = format.split('.')
  const v = value.split('.')

  if (f.length !== v.length) return null
  if (v[0].length < f[0].length) v[0] += '0'

  if (f.length > 1) {
    if (v[1].length > f[1].length) v[1] = v[1].slice(0, f[1].length)
    if (v[1].length < f[1].length) v[1] += '0'.repeat(f[1].length - v[1].length)
  }

  return isNaN(+(v.join('.'))) ? null : v.join('.')
}

export const formatDate = (format: string, value: string) => {
  const f = format.toUpperCase().split('.')
  const v = value.split('.')

  if (f.length !== v.length) return null

  const parts: Record<string, number> = {}

  for (let i = 0; i < v.length; i++) {
    if (v[i].length > f[i].length) v[i] = v[i].slice(0, f[i].length)
    if (f[i].length === 0) continue
    const num = +v[i]
    if (isNaN(num)) return null
    parts[f[i][0]] = num || 1
  }

  if (parts.M) parts.M = Math.min(12, parts.M)

  if (parts.D) {
    const now = new Date()
    const formatDate = new Date(
        parts.Y ?? now.getFullYear(),
        parts.M ? parts.M : now.getMonth(), 0)
    parts.D = Math.min(formatDate.getDate(), parts.D)
  }

  return Object.values(parts).join('.')
}

