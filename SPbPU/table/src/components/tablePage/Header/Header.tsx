import { FC } from 'react'
import { ColumnDialog } from '../ColumnDialog'
import styles from './styles.css'

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <ColumnDialog/>
    </div>
  )
}
