import { FC } from 'react';

import { Props } from './types';
import { TheadStyled } from './styles';

export const TableHead: FC<Props> = ({ children, ...rest }) => {
  return <TheadStyled {...rest}>{children}</TheadStyled>;
};
