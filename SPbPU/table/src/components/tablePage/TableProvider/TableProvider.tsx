import { dbDeleteColumn, dbDeleteRow, dbGetColumns, dbGetRows, dbSaveColumn, dbSaveRow } from '@src/services/tableService'
import { getId } from '@src/shared/utils/getId'
import { ColumnData, ColumnDataChangeable } from '@src/types'
import { createContext, FC, ReactNode, useContext, useEffect, useReducer } from 'react'
import { getInitialState, reducer, State } from './reducer'
import { addColumn, addRow, setValue, removeRow, setColumn, removeColumn, setCurrentColumn, setCurrentRow, setTable } from './actions'

type Props = {
  children: ReactNode
}

export type Context = {
  selectState: () => State
  postColumn: (column: ColumnData) => void
  putColumn: (index: string, column: ColumnDataChangeable) => void
  deleteColumn: (index: string) => void
  postRow: () => void
  deletRow: (index: string) => void
  putValue: (data: string, value: string) => void
  fixValue: (data: string, value: string) => void
  putCurrentColumn: (column: string) => void
  putCurrentRow: (row: string) => void
}

const TableContext = createContext<Partial<Context>>({})
export const useTable = (): Context => useContext(TableContext) as Context

export const TableProvider: FC<Props> = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, getInitialState())
  const { tableName, rows, columns, rowsToUpdate } = state

  const selectState = () => state

  const postColumn = (c: ColumnData) => {
    const column = {
      id: getId(),
      data: c
    }
    dispatch(addColumn(column))
    dbSaveColumn(tableName, column)
  }

  const putColumn = (i: string, c: ColumnDataChangeable) => {
    const column = { ...state.columns[+i] }
    column.data = { ...column.data, ...c }
    dispatch(setColumn(i, column))
    dbSaveColumn(tableName, column)
  }

  const deleteColumn = (i: string) => {
    dbDeleteColumn(tableName, columns[+i].id)
    dispatch(removeColumn(i))
  }

  const postRow = () => {
    const id = getId()
    dispatch(addRow(id))
    dbSaveRow(tableName, { id })
  }

  const putValue = (d: string, v: string) => {
    const [row, col] = d.split(':')
    dispatch(setValue(row, col, v))
    dbSaveRow(tableName, rows[+row])
  }

  const fixValue = (d: string, v: string) => {
    const [row, col] = d.split(':')
    dispatch(setValue(row, col, v))
  }

  const deletRow = (i: string) => {
    dbDeleteRow(tableName, rows[+i].id)
    dispatch(removeRow(i))
  }

  const fetchData = async () => {
    const resColumns = await dbGetColumns(tableName)
    const resRows = await dbGetRows(tableName)
    dispatch(setTable(resColumns, resRows))
  }

  const putCurrentColumn = (c: string) => {
    dispatch(setCurrentColumn(c))
  }

  const putCurrentRow = (r: string) => {
    dispatch(setCurrentRow(r))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!rowsToUpdate.length) return
    rowsToUpdate.forEach((r) => {
      dbSaveRow(tableName, r)
    })
    rowsToUpdate.length = 0
  }, [rowsToUpdate])

  return (
    <TableContext.Provider value={{
      selectState,
      postColumn,
      putColumn,
      deleteColumn,
      postRow,
      deletRow,
      putValue,
      fixValue,
      putCurrentColumn,
      putCurrentRow
    } as Context}
    >
      {children}
    </TableContext.Provider>
  )
}
