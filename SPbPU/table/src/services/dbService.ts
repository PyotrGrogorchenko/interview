export const getConnection = (dbName: string): Promise<IDBOpenDBRequest> => {
  return new Promise((resolve, reject) => {
    const dbConnection = indexedDB.open(dbName, 2)

    dbConnection.onsuccess = () => {
      resolve(dbConnection)
    }

    dbConnection.onupgradeneeded = () => {
      const db = dbConnection.result
      db.createObjectStore('columns', { keyPath: 'id' })
      db.createObjectStore('rows', { keyPath: 'id' })
    }

    dbConnection.onerror = () => {
      reject(new Error('Failed to connect'))
    }
  })
}

export const getObjectStore = async (tableName: string, storeName: string, mode: IDBTransactionMode = 'readonly'): Promise<IDBObjectStore> => {
  const dbConnection = await getConnection(tableName)
  const transaction = dbConnection.result.transaction(storeName, mode)
  const objectStore = transaction.objectStore(storeName)
  return objectStore
}

