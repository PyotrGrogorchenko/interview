import { useAction } from '@src/hooks/useAction'
import { useAutoincrement } from '@src/hooks/useAutoincrement'
import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { FC, useCallback, useEffect } from 'react'
import { Button } from './UI/Button'
import styled from 'styled-components'

export const StyledTr = styled.tr(() => `
  vertical-align: middle;
  text-align: center;
`)

export const StyledTd = styled.td(() => `
  min-width: 30px;
`)


export const CounterItem: FC<{ id: string }> = ({ id }) => {
  const { counters } = useTypedSelector((state) => state.counter)
  const autoincrement = useAutoincrement(id)
  const { setCounter, removeCounter, setAutoincrement } = useAction()

  useEffect(() => {
    const keys = Object.keys(counters)
    const data = []
    for (let i = 3; i < keys.length; i = i + 4) {
      data.push(keys[i])
    }
    setAutoincrement(data)
  }, [counters])

  const onClickPlus = useCallback(() => {
    setCounter([{ id, value: 1 }])
  }, [id, setCounter])

  const onClickMinus = useCallback(() => {
    setCounter([{ id, value: -1 }])
  }, [id, setCounter])

  const onClickRemove = useCallback(() => {
    removeCounter(id)
  }, [id, removeCounter])
  return (
    <StyledTr>
      <StyledTd>
        <Button color='red' onClick={onClickRemove}>Удалить счетик</Button>
      </StyledTd>
      <StyledTd>
        {!autoincrement && <Button color='green' onClick={onClickPlus}>+</Button>}
      </StyledTd>
      <StyledTd>
        {counters[id]}
      </StyledTd>
      <StyledTd>
        {!autoincrement &&<Button color='red' onClick={onClickMinus}>-</Button>}
      </StyledTd>
    </StyledTr>
  )
}
