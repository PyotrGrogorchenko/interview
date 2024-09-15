import { ReactNode } from 'react';

export type State = {
  hasError: boolean;
  errorInfo?: string;
};

export type Props = {
  children?: ReactNode;
};
