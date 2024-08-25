import { FC } from 'react'
import { ColumnDialog } from '../ColumnDialog'
import * as styles from './styles.css'

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <ColumnDialog/>
    </div>
  )
}
