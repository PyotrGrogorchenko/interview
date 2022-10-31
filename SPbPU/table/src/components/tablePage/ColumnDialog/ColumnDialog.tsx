import { FC, useCallback, useState, useEffect } from 'react'
import { useTable } from '@src/components/tablePage/TableProvider'
import { Button } from '@src/components/UI/Button'
import { ColumnForm } from './ColumnForm'
import { Modal } from '@src/components/UI/Modal'

export const ColumnDialog: FC = () => {
  const [show, setShow] = useState(false)

  const { selectState, putCurrentColumn } = useTable()
  const { currentColumn } = selectState()

  const addColumnClick = useCallback(() => {
    putCurrentColumn('')
    setShow(true)
  }, [putCurrentColumn])

  useEffect(() => {
    if (!currentColumn) return
    setShow(true)
  }, [currentColumn])

  return (
    <>
      <Button glyph='add' onClick={addColumnClick}>Add column</Button>
      {show &&
        <Modal>
          <ColumnForm hide={() => setShow(false)}/>
        </Modal>}
    </>
  )
}
