import { Column, Row } from '@src/types'
import { ActionRemoveColumn, ActionRemoveRow, Actions, ActionSetColumn, ActionSetValue } from './actions'

export const getInitialState = () => {
  const columns: Column[] = []
  const rows: Row[] = []
  const rowsToUpdate: Row[] = []

  return {
    tableName: 'tableFirst',
    columns,
    rows,
    rowsToUpdate,
    currentColumn: '',
    currentRow: ''
  }
}

export type State = ReturnType<typeof getInitialState>;

const setColumn = (state: State, action: ActionSetColumn) => {
  const { index, col } = action.payload
  const { columns } = state
  columns[+index] = { ...columns[+index], ...col }
  return { ...state, columns: [...columns]}
}

const removeRow = (state: State, action: ActionRemoveRow) => {
  const index = +action.payload
  return { ...state, rows: [...state.rows.slice(0, index), ...state.rows.slice(index + 1)]}
}

const setValue = (state: State, action: ActionSetValue) => {
  const { row, col, val } = action.payload
  const column = state.columns[+col]
  state.rows[+row][column.id] = val
  return { ...state }
}

const removeColumn = (state: State, action: ActionRemoveColumn) => {
  const index = +action.payload
  const col = state.columns[index]
  const { rowsToUpdate } = state
  rowsToUpdate.length = 0
  state.rows.forEach((r) => {
    if (Object.keys(r).includes(col.id)) {
      delete r[col.id]
      rowsToUpdate.push(r)
    }
  })
  return {
    ...state,
    columns: [...state.columns.slice(0, index), ...state.columns.slice(index + 1)],
    rows: [...state.rows],
    rowsToUpdate: [...rowsToUpdate]
  }
}

export const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'ADD_COLUMN':
      state.columns.push({ ...action.payload })
      return { ...state, columns: [...state.columns]}
    case 'SET_COLUMN':
      return setColumn(state, action)
    case 'REMOVE_COLUMN':
      return removeColumn(state, action)
    case 'SET_COLUMNS':
      return { ...state, columns: [...action.payload]}
    case 'ADD_ROW':
      state.rows.push({ id: action.payload })
      return { ...state, rows: [...state.rows]}
    case 'REMOVE_ROW':
      return removeRow(state, action)
    case 'SET_ROWS':
      return { ...state, rows: [...action.payload]}
    case 'SET_VALUE':
      return setValue(state, action)
    case 'SET_CURRENT_COLUMN':
      return { ...state, currentColumn: action.payload }
    case 'SET_CURRENT_ROW':
      return { ...state, currentRow: action.payload }
    case 'SET_TABLE':
      return { ...state, columns: [...action.payload[0]], rows: [...action.payload[1]]}
    default:
      return state
  }
}
