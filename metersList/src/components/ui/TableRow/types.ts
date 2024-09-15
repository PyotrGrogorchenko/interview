import { HTMLAttributes } from 'react';

export type Props = {
  width?: string;
  type?: 'row' | 'header' | 'footer';
} & HTMLAttributes<HTMLTableRowElement>;
