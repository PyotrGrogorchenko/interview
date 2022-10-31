import { CounterAction, CounterActionsTypes } from '@src/models/Counter'
import { getId } from '@src/utils/getId'

const initialState = {
  counters: {} as Record<string, number>,
  autoIncrement: [] as string[],
  sum: 0
}

export const counterReducer = (state = initialState, action: CounterAction): typeof initialState => {
  switch (action.type) {
    case CounterActionsTypes.COUNTER_SET:
      return { ...state,
        sum: action.payload.reduce((r, { value }) => {
          return r + (value || 1)
        }, state.sum),
        counters: { ...action.payload.reduce((r, { id, value }) => {
          r[id] += (value || 1)
          return r
        }, { ...state.counters })
        }
      }
    case CounterActionsTypes.COUNTER_ADD:
      return { ...state,
        sum: state.sum * 2,
        counters: {
          ...state.counters,
          [getId()]: state.sum
        }
      }
    case CounterActionsTypes.COUNTER_REMOVE:
      const counters = { ...state.counters }
      const sum = state.sum - counters[action.payload]
      delete counters[action.payload]
      return { ...state, counters, sum }
    case CounterActionsTypes.COUNTER_SET_AUTOINCREMENT:
      return { ...state, autoIncrement: [...action.payload]}
    default:
      return state
  }
}
