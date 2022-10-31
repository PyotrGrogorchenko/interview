import { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

type Props = { color: 'red' | 'green'} & ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<Props>((props) => `
  cursor:pointer;
  padding: 20px;
  font-size: 15px;
  background-color: ${props.color};
  color: white;
  border-radius: 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`)

export const Button: FC<Props> = (props) => {
  return (
    <StyledButton {...props}/>
  )
}
