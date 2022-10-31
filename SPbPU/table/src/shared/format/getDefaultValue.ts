export const getDefaultValue = (type: string, format: string) => {
  switch (type) {
    case 'number':
      return format
    case 'date':
      return format.toUpperCase().split('.')
          .reduce(
              (r, c) => {
                switch (c[0]) {
                  case 'D':
                    return r.concat((!r ? '' : '.') + String(new Date().getDate()))
                  case 'M':
                    return r.concat((!r ? '' : '.') + String(new Date().getMonth() + 1))
                  case 'Y':
                    return r.concat((!r ? '' : '.') + String(new Date().getFullYear()))
                  default:
                    return r
                }
              }, '')
    default:
      return ''
  }
}
