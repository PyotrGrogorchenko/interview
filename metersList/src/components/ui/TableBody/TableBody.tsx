import { FC } from 'react';

import { Props } from './types';
import { TbodyStyled } from './styles';

export const TableBody: FC<Props> = ({ children, ...rest }) => {
  return <TbodyStyled {...rest}>{children}</TbodyStyled>;
};
