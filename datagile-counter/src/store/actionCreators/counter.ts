import { CounterAction, CounterActionsTypes, CounterData } from '@src/models/Counter'

export const setCounter = (payload: CounterData[]): CounterAction => {
  return {
    type: CounterActionsTypes.COUNTER_SET,
    payload
  }
}

export const addCounter = (): CounterAction => {
  return {
    type: CounterActionsTypes.COUNTER_ADD
  }
}

export const removeCounter = (payload: string): CounterAction => {
  return {
    type: CounterActionsTypes.COUNTER_REMOVE,
    payload
  }
}

export const setAutoincrement = (payload: string[]): CounterAction => {
  return {
    type: CounterActionsTypes.COUNTER_SET_AUTOINCREMENT,
    payload
  }
}
