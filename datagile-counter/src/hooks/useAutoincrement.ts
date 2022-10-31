import { useCallback } from 'react'
import { useTypedSelector } from './useTypedSelector'

export function useAutoincrement(id: string) {
  const { autoIncrement } = useTypedSelector((state) => state.counter)
  return useCallback(() => {
    return autoIncrement.includes(id)
  }, [autoIncrement, id])()
}
