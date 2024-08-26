import { FC, useEffect } from 'react'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { useAction } from '@src/hooks/useAction'
import { CounterItem } from './CounterItem'
import { Button } from './UI/Button'
import styled from 'styled-components'
import { useAutoIncrement } from '@src/hooks/useAutoIncrement'

export const Container = styled.div(() => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`)

export const CountersList: FC = () => {
  const { counters } = useTypedSelector((state) => state.counter)
  const { addCounter, setCounter, removeCounter, setAutoincrement } = useAction()
  useAutoIncrement()

  useEffect(() => {
    const keys = Object.keys(counters)
    const data = []
    for (let i = 3; i < keys.length; i = i + 4) {
      data.push(keys[i])
    }
    setAutoincrement(data)
  }, [counters])


  const onClick = (e: OnClick) => {
    const { action } = (e.target as HTMLElement).dataset
  
    if (!action) {
      return
    }
    
    const [cmd, id] = action.split(':')

    switch(cmd) {
      case 'add':
        addCounter()
        break
      case 'remove':
        removeCounter(id)
        break
      case 'increment':
        setCounter([{ id, value: 1 }])
        break
      case 'decrement':
        setCounter([{ id, value: -1 }])
        break
      default:
        return
    }
  }

  return (
    <Container onClick={onClick}>
      <Button color='green' data-action={`add`}>Добавить счетик</Button>
      <div>
        <table>
          <tbody>
            {Object.keys(counters).map((key) => <CounterItem key={key} id={key}/>)}
          </tbody>
        </table>
      </div>
    </Container>
  )
}
