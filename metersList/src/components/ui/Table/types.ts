import { ReactNode, TableHTMLAttributes } from 'react';

export type Props = {
  children: ReactNode;
} & TableHTMLAttributes<HTMLTableElement>;
