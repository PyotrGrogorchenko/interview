import { Provider } from 'react-redux'
import { setupStore } from './store'
import { ErrorBoundary } from './components/ErrorBoundary'
import { CountersList } from './components/CountersList'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}`


export const App = () => {
  return (
    <ErrorBoundary>
      <Global/>
      <Provider store={setupStore()}>
        <CountersList/>
      </Provider>
    </ErrorBoundary>
  )
}

