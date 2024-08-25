import { FC, useCallback } from 'react'
import { useInterval } from '@src/hooks/useInterval'
import { Button } from '@src/components/UI/Button'
import { getDataset } from '@src/shared/utils/getDataset'
import { SnackData } from './types'
import * as styles from './styles.css'

type Props = {
  snacks: SnackData[]
  deleteSnacks: (id: string[]) => void
  updateSnacks: () => void
}

export const Snacks: FC<Props> = ({ snacks, deleteSnacks, updateSnacks }) => {
  useInterval(updateSnacks, 500)

  const onClick = useCallback((e: OnClick) => {
    const data = getDataset(e, 'data-snack', 'button')
    if (!data) return
    const [id, action] = data.split(':')
    if (action === 'close') {
      deleteSnacks([id])
    }
  }, [deleteSnacks])

  return (
    <div
      className={styles.container}
      onClick={onClick}
    >
      {snacks.map((s) =>
        <div
          className={`${styles.snack} ${styles[s.type]}`}
          key={s.id}
        >
          {s.text}
          <Button
            view='secondary'
            glyph='remove'
            undress
            data-snack={`${s.id}:close`}
          ></Button>
        </div>)}
    </div>
  )
}
