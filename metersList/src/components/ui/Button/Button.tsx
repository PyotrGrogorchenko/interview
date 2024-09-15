import { FC } from 'react';

import { Props } from './types';
import { ButtonStyled } from './styles';

export const Button: FC<Props> = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
