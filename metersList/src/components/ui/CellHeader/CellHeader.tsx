import { FC } from 'react';

import { Props } from './types';
import { ThStyled } from './styles';

export const CellHeader: FC<Props> = ({ children, ...rest }) => {
  return <ThStyled {...rest}>{children}</ThStyled>;
};
