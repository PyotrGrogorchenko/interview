import { BrowserRouter } from 'react-router-dom'
import { Router } from '@src/components/Router'
import { ErrorBoundary } from '@src/components/ErrorBoundary'
import { GameProvider } from '@src/components/Game'
import './app.css'

export const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <GameProvider>
          <Router/>
        </GameProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

