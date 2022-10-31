import { Dice } from '@src/types'

export const getDice = () => {
  const data = localStorage.getItem('dice')
  if (data) return JSON.parse(data)
  return [0, 1, 2, 3, 4, 5]
}

export const postDice = (dice: Dice) => {
  localStorage.setItem('dice', JSON.stringify(dice))
}
