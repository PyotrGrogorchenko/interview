/* eslint-disable no-unused-vars */

export enum CounterActionsTypes {
  COUNTER_SET = 'COUNTER_SET',
  COUNTER_ADD = 'COUNTER_ADD',
  COUNTER_REMOVE = 'COUNTER_REMOVE',
  COUNTER_SET_AUTOINCREMENT = 'COUNTER_SET_AUTOINCREMENT'
}

export type CounterData = {
  id: string
  value: number
}

type SetAction = {
  type: CounterActionsTypes.COUNTER_SET
  payload: CounterData[]
}

type AddAction = {
  type: CounterActionsTypes.COUNTER_ADD
}

type RemoveAction = {
  type: CounterActionsTypes.COUNTER_REMOVE
  payload: string
}

type AutoincrementAction = {
  type: CounterActionsTypes.COUNTER_SET_AUTOINCREMENT
  payload: string[]
}

export type CounterAction = SetAction | AddAction | RemoveAction | AutoincrementAction
