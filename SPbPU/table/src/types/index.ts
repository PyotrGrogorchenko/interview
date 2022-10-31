import { icons } from '@src/shared/icons'

export type ColumnData = {
  view: string
  type: string
  format: string
}

export type ColumnDataChangeable = Pick<ColumnData, 'view'>

export type Column = {
  id: string
  data: ColumnData
}

export type Row = Record<string, string> & { id: string }

export type Glyph = keyof typeof icons
