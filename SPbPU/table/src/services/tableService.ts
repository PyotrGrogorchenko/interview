import { Column, Row } from '@src/types'
import { getObjectStore } from './dbService'

const promisifyRequest = <R>(req: IDBRequest): Promise<R> =>
  new Promise((resolve, reject) => {
    req.onsuccess = () => {
      resolve(req.result)
    }
    req.onerror = () => {
      reject(new Error('Failed'))
    }
  })

export const dbSaveColumn = async (tableName: string, column: Column ) => {
  const store = await getObjectStore(tableName, 'columns', 'readwrite')
  return promisifyRequest(store.put(column))
}

export const dbDeleteColumn = async (tableName: string, columnId: string ) => {
  const store = await getObjectStore(tableName, 'columns', 'readwrite')
  return promisifyRequest(store.delete(columnId))
}

export const dbGetColumns = async (tableName: string): Promise<Column[]> => {
  const store = await getObjectStore(tableName, 'columns', 'readonly')
  return promisifyRequest<Column[]>(store.getAll())
}

export const dbSaveRow = async (tableName: string, row: Row ) => {
  const store = await getObjectStore(tableName, 'rows', 'readwrite')
  return promisifyRequest(store.put(row))
}

export const dbGetRows = async (tableName: string): Promise<Row[]> => {
  const store = await getObjectStore(tableName, 'rows', 'readonly')
  return promisifyRequest(store.getAll())
}

export const dbDeleteRow = async (tableName: string, rowId: string ) => {
  const store = await getObjectStore(tableName, 'rows', 'readwrite')
  return promisifyRequest(store.delete(rowId))
}
