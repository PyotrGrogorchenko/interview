import { Component, ReactNode } from 'react'

type State = {
  hasError: boolean,
  errorInfo?: string
}

type Props = {
  children?: ReactNode
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, errorInfo: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error ? error.message : '' }
  }

  render() {
    const { hasError, errorInfo } = this.state
    const { children } = this.props

    if (hasError) {
      return <h1>{errorInfo}</h1>
    }

    return children
  }
}

export { ErrorBoundary }
