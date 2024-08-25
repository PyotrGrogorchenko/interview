import { FC, InputHTMLAttributes } from 'react'
import * as styles from './styles.css'

type Props = { active?: boolean } & InputHTMLAttributes<HTMLInputElement>

export const ButtonEdge: FC<Props> = ({ active, ...rest }) => {
  return (
    <input
      className={`${styles.input} ${active ? styles.active : ''}`}
      {...rest}
      type='button'
    />
  )
}
