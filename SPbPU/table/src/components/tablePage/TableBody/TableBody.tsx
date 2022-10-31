import { Button } from '@src/components/UI/Button'
import { getDefaultValue } from '@src/shared/format/getDefaultValue'
import { FC } from 'react'
import { useTable } from '../TableProvider'
import styles from './styles.css'

export const TableBody: FC = () => {
  const { selectState } = useTable()
  const { rows, columns, currentRow } = selectState()

  return (
    <>
      <tbody>
        {rows.map((r, rI) =>{
          return <tr
            className={styles.tr}
            key ={r.id}
            data-row={`${rI}`}
          >
            {columns.map((c, cI) =>
              <td
                className={styles.td}
                key={c.id}
                contentEditable={String(rI) === currentRow}
                suppressContentEditableWarning
                data-cell={`${rI}:${cI}`}
              >
                {/* <input
                  className={styles.cell}
                  defaultValue={r[c.id] ?? getDefaultValue(c.data.type, c.data.format)}
                /> */}
                {r[c.id] ?? getDefaultValue(c.data.type, c.data.format)}
              </td>)}
            <td
              className={styles.td}
            >
              <Button view='secondary' glyph='edit' data-action={`${rI}:edit`} active={String(rI) === currentRow}/>
              <Button view='secondary' glyph='delete' data-action={`${rI}:delete`}/>
            </td>
          </tr>
        } )}
      </tbody>
    </>
  )
}
