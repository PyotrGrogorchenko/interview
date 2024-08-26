import { useTypedSelector } from '@src/hooks/useTypedSelector'
import { FC } from 'react'
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
  const counter = useTypedSelector((state) => state.counter.counters[id])
  const autoIncrement = useTypedSelector((state) => state.counter.autoIncrement.includes(id))
  
  return (
    <StyledTr>
      <StyledTd>
        <Button color='red' data-action={`remove:${id}`}>Удалить счетик</Button>
      </StyledTd>
      <StyledTd>
        {!autoIncrement && <Button color='green' data-action={`increment:${id}`}>+</Button>}
      </StyledTd>
      <StyledTd>
        {counter}
      </StyledTd>
      <StyledTd>
        {!autoIncrement &&<Button color='red' data-action={`decrement:${id}`}>-</Button>}
      </StyledTd>
    </StyledTr>
  )
}
