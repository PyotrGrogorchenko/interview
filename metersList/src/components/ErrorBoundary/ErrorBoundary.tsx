import { Component } from 'react';
import { ContainerStyled } from './styles';

import { Props, State } from './types';

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorInfo: error ? error.message : '' };
  }

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ContainerStyled>
          <h3>{errorInfo}</h3>
        </ContainerStyled>
      );
    }

    return children;
  }
}

export { ErrorBoundary };
