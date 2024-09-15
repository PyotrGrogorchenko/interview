import { HTMLAttributes, ReactNode } from 'react';

export type Props = {
  size?: 'small' | 'large';
  type?: 'error' | 'default';
  mode?: 'primary' | 'secondary';
  active?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
