import { FC, FocusEvent, FormEvent, useCallback } from 'react'
import { formatValue } from '@src/shared/format/formatValue'
import { getDataset } from '@src/shared/utils/getDataset'
import { usePrompt } from '@src/components/UI/Prompt'
import { TableBody } from '../TableBody'
import { TableFoot } from '../TableFoot'
import { TableHead } from '../TableHead'
import { useTable } from '../TableProvider'
import styles from './styles.css'

const cache: Record<string, string> = {}

export const TableController: FC = () => {
  const { putValue, deletRow, putCurrentColumn, putCurrentRow, selectState } = useTable()
  const { currentRow, columns } = selectState()
  const { showPrompt } = usePrompt()

  const onBlur = useCallback((e: FocusEvent) => {
    const data = getDataset(e, 'data-cell')
    if (!data) return
    putValue(data, '' + e.target.textContent)
    delete cache[data]
  }, [putValue])

  const onClick = useCallback((e: OnClick) => {
    const data = getDataset(e, 'data-action', 'button')
    if (!data) return
    const [row, action] = data.split(':')
    switch (action) {
      case 'delete':
        showPrompt('Are you sure?', (del) => {
          if (!del) return
          deletRow(row)
        })
        break
      case 'edit':
        putCurrentRow(row === currentRow ? '' : row)
        break
      default:
        break
    }
  }, [deletRow])

  const onDoubleClick = useCallback((e: OnClick) => {
    const data = getDataset(e, 'data-head')
    if (!data) return
    putCurrentColumn(data.split(':')[0])
  }, [putCurrentColumn])

  const onInput = useCallback((e: FormEvent<HTMLElement>) => {
    const data = getDataset(e, 'data-cell')
    if (!data) return

    const el = (e.target as HTMLElement)
    const caretPos = Number(window.getSelection()?.anchorOffset)

    const [, col] = data.split(':')
    const column = columns[+col]
    const value = formatValue(column.data.type, column.data.format, '' + el.textContent)

    el.textContent = value ?? cache[data]
    window.getSelection()?.setPosition(el.firstChild, Math.min(caretPos, String(el.textContent).length))
    cache[data] = '' + el.textContent
  }, [columns])

  const onFocus = useCallback((e: FormEvent<HTMLElement>) => {
    const data = getDataset(e, 'data-cell')
    if (!data) return
    cache[data] = '' + (e.target as HTMLElement).textContent
  }, [])

  return (
    <div className={ styles.container }>
      <table
        className={ styles.table }
        onBlur={onBlur}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        onInput={onInput}
        onFocus={onFocus}
      >
        <TableHead/>
        <TableBody/>
        <TableFoot/>
      </table>
    </div>
  )
}
