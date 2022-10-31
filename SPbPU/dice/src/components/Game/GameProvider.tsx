
import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { Dice } from '@src/types'
import { getDice, postDice } from '@src/services/diceService'

type Props = {
  children: ReactNode
}

type Context = {
  selectDice: () => Dice
  putDice: (dice: Dice) => void
  saveDice: () => void
  swap: (a: string, b: string) => void
  rollDice: () => number[]
}

const mapDice = [
  [1, 4, 3, 5],
  [0, 5, 2, 4],
  [1, 5, 3, 4],
  [0, 4, 2, 5],
  [0, 1, 2, 3],
  [0, 3, 2, 1]
]

const GameContext = createContext<Partial<Context>>({})
export const useGame = (): Context => useContext(GameContext) as Context

export const GameProvider: FC<Props> = ({ children }) => {
  const [dice, setDice] = useState<Dice>(getDice())

  const selectDice = () => dice
  const putDice = (d: Dice) => {
    setDice([...d])
  }
  const swap = (a: string, b: string) => {
    [dice[+a], dice[+b]] = [dice[+b], dice[+a]]
    setDice([...dice])
  }

  const saveDice = () => postDice(dice)

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6)
    const result = dice[random]
    const neighbors = [...mapDice[random], ...mapDice[random]]
    const randomNeighbor = Math.floor(Math.random() * 4)
    const [l, r] = neighbors.slice(randomNeighbor, randomNeighbor + 2)
    return [result, dice[l], dice[r]]
  }

  return (
    <GameContext.Provider value={{
      selectDice,
      putDice,
      swap,
      saveDice,
      rollDice
    } as Context}>
      {children}
    </GameContext.Provider>
  )
}
