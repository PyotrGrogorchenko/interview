import { FC } from 'react'
import { useTable } from '../TableProvider'
import * as styles from './styles.css'

export const TableHead: FC = () => {
  const { selectState } = useTable()
  const { columns } = selectState()

  return (
    <>
      <thead className={styles.thead}>
        <tr>
          {columns.map((c, i) =>
            <th
              className={styles.th}
              key={c.id}
              data-head={`${i}`}
            >{c.data.view}</th>)}
          <th className={styles.th_options}>&nbsp;</th>
        </tr>
      </thead>
    </>
  )
}
