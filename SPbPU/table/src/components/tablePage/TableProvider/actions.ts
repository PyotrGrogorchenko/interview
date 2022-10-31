import { Column, Row } from '@src/types'

export type ActionADDColumn = {
  type: 'ADD_COLUMN'
  payload: Column
}

export type ActionSetColumn = {
  type: 'SET_COLUMN'
  payload: {
    index: string
    col: Column
  }
}

export type ActionRemoveColumn = {
  type: 'REMOVE_COLUMN'
  payload: string
}

export type ActionSetColumns = {
  type: 'SET_COLUMNS'
  payload: Column[]
}

export type ActionAddRow = {
  type: 'ADD_ROW'
  payload: string
}

export type ActionRemoveRow = {
  type: 'REMOVE_ROW'
  payload: string
}

export type ActionSetValue = {
  type: 'SET_VALUE'
  payload: {
    row: string
    col: string
    val: string
  }
}

export type ActionSetRows = {
  type: 'SET_ROWS'
  payload: Row[]
}

export type ActionSetCurrentRow = {
  type: 'SET_CURRENT_ROW'
  payload: string
}
export type ActionSetCurrentColumn = {
  type: 'SET_CURRENT_COLUMN'
  payload: string
}

export type ActionSetTable = {
  type: 'SET_TABLE'
  payload: [Column[], Row[]]
}

export type Actions = ActionADDColumn | ActionAddRow | ActionSetValue | ActionSetColumns
  | ActionSetRows | ActionRemoveRow | ActionSetColumn | ActionRemoveColumn | ActionSetCurrentColumn | ActionSetCurrentRow | ActionSetTable

export const addColumn = (c: Column): ActionADDColumn => ({ type: 'ADD_COLUMN', payload: c })
export const setColumn = (i: string, c: Column): ActionSetColumn => ({ type: 'SET_COLUMN', payload: { index: i, col: c }})
export const removeColumn = (i: string): ActionRemoveColumn => ({ type: 'REMOVE_COLUMN', payload: i })
export const setColumns = (c: Column[]): ActionSetColumns => ({ type: 'SET_COLUMNS', payload: c })

export const addRow = (id: string): ActionAddRow => ({ type: 'ADD_ROW', payload: id })
export const removeRow = (i: string): ActionRemoveRow => ({ type: 'REMOVE_ROW', payload: i })

export const setValue = (r: string, c: string, v: string): ActionSetValue => ({ type: 'SET_VALUE', payload: { row: r, col: c, val: v }})
export const setRows = (r: Row[]): ActionSetRows => ({ type: 'SET_ROWS', payload: r })

export const setCurrentColumn = (c: string): ActionSetCurrentColumn => ({ type: 'SET_CURRENT_COLUMN', payload: c })
export const setCurrentRow = (r: string): ActionSetCurrentRow => ({ type: 'SET_CURRENT_ROW', payload: r })

export const setTable = (c: Column[], r: Row[]): ActionSetTable => ({ type: 'SET_TABLE', payload: [c, r]})
