import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGame } from '@src/components/Game'
import { Button } from '@src/components/UI/Button'
import { ButtonEdge } from '@src/components/UI/ButtonEdge'
import { getDataset } from '@src/shared/utils/getDataset'
import styles from './styles.css'

export const Settings: FC = () => {
  const { selectDice, swap, saveDice } = useGame()
  const navigate = useNavigate()
  const [selected, setSelected] = useState('-1')

  const onClick = (e: OnClick) => {
    const data = getDataset(e, 'data-edge')
    if (!data) return
    if (data === selected) {
      setSelected('-1')
      return
    }
    if (selected === '-1') {
      setSelected('' + data)
      return
    }
    swap('' + data, selected)
    setSelected('-1')
  }

  return (
    <div className={styles.container}>
      <div className={styles.diceArea}>
        <div className={styles.dice} onClick={onClick}>
          {selectDice().map((v, i) =>
            <ButtonEdge
              key={v}
              value={v + 1}
              active={+selected === i}
              data-edge={i}
            />
          )}
        </div>
      </div>
      <div className={styles.actionsArea}>
        <Button onClick={() => saveDice()}>SAVE</Button>
        &nbsp;
        <Button onClick={() => navigate('/')}>BACK</Button>
      </div>
    </div>
  )
}
