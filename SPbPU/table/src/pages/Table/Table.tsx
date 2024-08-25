import { TableProvider } from '@src/components/tablePage/TableProvider'
import { Footer } from '@src/components/tablePage/Footer'
import { Header } from '@src/components/tablePage/Header'
import { TableController } from '@src/components/tablePage/TableController'
import { FC } from 'react'
import * as styles from './styles.css'

export const Table: FC = () => {
  return (
    <TableProvider>
      <div className={styles.container}>
        <Header/>
        <TableController/>
        <Footer/>
      </div>
    </TableProvider>
  )
}
