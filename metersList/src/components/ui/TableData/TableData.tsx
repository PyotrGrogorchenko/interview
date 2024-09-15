import { FC } from 'react';

import { Props } from './types';
import { TdStyled } from './styles';

export const TableData: FC<Props> = ({ children, ...rest }) => {
  return <TdStyled {...rest}>{children}</TdStyled>;
};
