export type SnackType = 'info' | 'warn' | 'error' | 'success'

export type SnackData = {
  id: string
  text: string
  added: Date
  type: SnackType
}
