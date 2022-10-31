import { SnackBarProvider } from '@src/components/UI/SnackBar'
import { PromptProvider } from '@src/components/UI/Prompt'
import { Table } from '@src/pages/Table'
import { ErrorBoundary } from '@src/components/ErrorBoundary'
import './app.css'

export const App = () => {
  return (
    <ErrorBoundary>
      <PromptProvider>
        <SnackBarProvider>
          <Table/>
        </SnackBarProvider>
      </PromptProvider>
    </ErrorBoundary>
  )
}

