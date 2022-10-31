import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { counterReducer } from './reducers/counterReducer'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
