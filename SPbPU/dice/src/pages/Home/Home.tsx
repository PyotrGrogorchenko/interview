import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@src/components/UI/Button'
import { useGame } from '@src/components/Game'
import { Edge } from '@src/components/Edge'
import * as styles from './styles.css'

export const Home: FC = () => {
  const { rollDice } = useGame()
  const navigate = useNavigate()

  const [res, setRes] = useState(-1)
  const [left, setLeft] = useState(-1)
  const [right, setRight] = useState(-1)

  const roll = () => {
    const [result, l, r] = rollDice()
    setRes(result)
    setLeft(l)
    setRight(r)
  }

  useEffect(() => {
    roll()
  }, [])

  const onRoll = () => {
    roll()
  }

  return (
    <div className={styles.container}>
      {res >= 0 &&
        <div className={styles.diceArea}>
          <div className={styles.dice}>
            <Edge pos='top' count={res}/>
            <Edge pos='left' count={left} view='secondary'/>
            <Edge pos='right' count={right} view='secondary'/>
          </div>
        </div>
      }
      <div className={styles.actionsArea}>
        <Button onClick={onRoll}>ROLL</Button>
        &nbsp;
        <Button view='secondary' glyph='gear' onClick={() => navigate('/settings')}/>
      </div>
    </div>
  )
}
