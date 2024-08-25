import { Button } from '@src/components/UI/Button'
import { Input } from '@src/components/UI/Input'
import { Select } from '@src/components/UI/Select'
import { FC, FormEvent, useCallback, useEffect, useMemo } from 'react'
import { Label } from '@src/components/UI/Label'
import { useSnackBar } from '@src/components/UI/SnackBar'
import { usePrompt } from '@src/components/UI/Prompt'
import { useHTMLElement } from '@src/hooks/useHTMLElement'
import { chekFormat } from '@src/shared/format/chekFormat'
import { getDefaultFormat } from '@src/shared/format/getDefaultFormat'
import { useTable } from '../TableProvider'
import * as styles from './styles.css'

type Props = {
  hide: () => void
}

export const ColumnForm: FC<Props> = ({ hide }) => {
  const { postColumn, putColumn, deleteColumn, selectState, putCurrentColumn } = useTable()
  const { columns, currentColumn } = selectState()
  const { pushSnack } = useSnackBar()
  const { showPrompt } = usePrompt()

  const isNew = useMemo(() => !currentColumn, [])
  const columnData: Record<string, string> = useMemo(() => isNew ? {} : columns[+currentColumn].data, [])

  const view = useHTMLElement<HTMLInputElement>(columnData.view ?? '')
  const type = useHTMLElement<HTMLSelectElement>(columnData.type ?? '')
  const format = useHTMLElement<HTMLInputElement>(columnData.format ?? '')

  const closeClick = useCallback(() => {
    putCurrentColumn('')
    hide()
  }, [putCurrentColumn, hide])

  const deleteClick = () => {
    const question = `Data of \"${columns[+currentColumn].data.view}\" will be deleted from the rows. Continue?`
    showPrompt(question, (del) => {
      if (!del) return
      deleteColumn(currentColumn)
      putCurrentColumn('')
      hide()
    })
  }

  const saveClick = () => {
    if (!view.value) {
      pushSnack('NAME is not filled!', 'error')
      return
    }

    if (isNew) {
      postColumn({
        view: view.value,
        type: type.value,
        format: format.value
      })
    } else {
      putColumn(currentColumn, { view: view.value })
    }
    putCurrentColumn('')
    hide()
  }

  const formatInput = useCallback((e: FormEvent<HTMLInputElement>) => {
    const el = e.target as HTMLInputElement
    if (chekFormat(type.value, el.value)) return
    el.value = format.value
  }, [format])

  useEffect(() => {
    if (!isNew) return
    format.value = getDefaultFormat(type.value)
  }, [type.value])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <Button glyph='remove' onClick={closeClick} undress/>
        </div>
        <div className={styles.header}>
          <Label>{isNew ? 'ADD COLUMN' : 'EDIT COLUMN'}</Label>
        </div>
        <div className={styles.data}>
          <Input label='NAME'{...view}/>
          <Select
            label='TYPE'
            disabled={!isNew}
            options={[{ value: 'text' }, { value: 'number' }, { value: 'date' }]}
            {...type}
          />
          {type.value && type.value !== 'text' &&
            <Input
              label='FORMAT'
              onInput={formatInput}
              disabled={!isNew}
              {...format}
            />}
        </div>
        <div className={styles.bottom}>
          <Button glyph='save' onClick={saveClick}>Save</Button>
          {currentColumn && <Button view='secondary' glyph='delete' onClick={deleteClick}>Delete</Button>}
        </div>
      </div>
    </>
  )
}
