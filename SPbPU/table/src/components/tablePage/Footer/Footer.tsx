import { FC, useCallback } from 'react'
import { Button } from '@src/components/UI/Button'
import styles from './styles.css'
import { useTable } from '../TableProvider'

export const Footer: FC = () => {
  const { postRow } = useTable()

  const addRowClick = useCallback(() => {
    postRow()
  }, [postRow])

  return (
    <div className={styles.container}>
      <Button glyph='add' onClick={addRowClick}>Add row</Button>
    </div>
  )
}
