import { FC } from 'react';

import { Props } from './types';
import { TrStyled } from './styles';

export const TableRow: FC<Props> = ({ children, ...rest }) => {
  return <TrStyled {...rest}>{children}</TrStyled>;
};
