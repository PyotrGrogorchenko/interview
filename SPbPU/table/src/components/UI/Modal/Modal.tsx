import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './styles.css'

type Props = {
  children: ReactNode,
  zIndex?: '800' | '900' | '1000'
} & HTMLAttributes<HTMLDivElement>

export const Modal: FC<Props> = ({ children, zIndex = '800' }) => {
  return (
    <div className={ `${styles.container} ${styles['zIndex_' + zIndex]}` }>
      {children}
    </div>
  )
}
