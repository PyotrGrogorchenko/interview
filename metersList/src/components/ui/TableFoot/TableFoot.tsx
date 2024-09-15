import { FC } from 'react';

import { Props } from './types';
import { TFootStyled } from './styles';

export const TableFoot: FC<Props> = ({ children, ...rest }) => {
  return <TFootStyled {...rest}>{children}</TFootStyled>;
};
