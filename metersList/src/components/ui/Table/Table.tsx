import { FC } from 'react';

import { Props } from './types';
import { TableStyled } from './styles';

export const Table: FC<Props> = ({ children, ...rest }) => {
  return <TableStyled {...rest}>{children}</TableStyled>;
};
