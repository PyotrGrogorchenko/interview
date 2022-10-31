import { FC } from 'react'
import styles from './styles.css'

type Props = {
  count: number
  pos: 'top' | 'left' | 'right'
  view?: 'primary' | 'secondary'
}

const map = [
  [6],
  [2, 3],
  [2, 3, 6],
  [0, 2, 3, 5],
  [0, 2, 3, 5, 6],
  [0, 1, 2, 3, 4, 5]
]

export const Edge: FC<Props> = ({ view = 'primary', pos, count, ...rest }) => {
  return (
    <div
      className={
        `${styles.container}
        ${styles['view_' + view]}
        ${styles[`pos_${pos}`]}`
      }
      {...rest}
    >
      {(new Array(7).fill(0)).map((_, i) =>
        <span
          key={i}
          className={
            `${styles.dot}
            ${map[count].includes(i) ? '' : styles.hide}`
          }>
        </span>)}
    </div>
  )
}
