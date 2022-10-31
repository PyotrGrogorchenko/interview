import { FC, useCallback } from 'react'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { useAction } from '@src/hooks/useAction'
import { CounterItem } from './CounterItem'
import { CounterTimer } from './CounterTimer'
import { Button } from './UI/Button'
import styled from 'styled-components'

export const Container = styled.div(() => `
  display: grid;
  grid-template-areas: 'data' 'buttons';
  grid-template-columns: 300px;
  grid-template-rows: 300px;
  justify-content: center;
`)

export const CountersList: FC = () => {
  const { counters } = useTypedSelector((state) => state.counter)
  const { addCounter } = useAction()

  const onClickAdd = useCallback(() => {
    addCounter()
  }, [addCounter])

  return (
    <div>
      <CounterTimer/>
      <Button color='green' onClick={onClickAdd}>Добавить счетик</Button>
      <table>
        <tbody>
          {Object.keys(counters).map((key) => <CounterItem key={key} id={key}/>)}
        </tbody>
      </table>

    </div>
  )
}
