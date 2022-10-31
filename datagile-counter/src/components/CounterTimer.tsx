import { FC } from 'react'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { useInterval } from '@src/hooks/useInterval'
import { useAction } from '@src/hooks/useAction'
import { CounterData } from '@src/models/Counter'

export const CounterTimer: FC = () => {
  const { autoIncrement } = useTypedSelector((state) => state.counter)
  const { setCounter } = useAction()

  useInterval(() => {
    setCounter(autoIncrement.reduce<CounterData[]>((r, id) => {
      r.push({ id, value: 1 })
      return r
    }, []))
  }, 1000)

  return null
}
