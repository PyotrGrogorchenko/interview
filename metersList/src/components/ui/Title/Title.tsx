import { FC } from 'react';

import { Props } from './types';
import { TitleStyled } from './styles';

export const Title: FC<Props> = ({ children, ...rest }) => {
  return <TitleStyled {...rest}>{children}</TitleStyled>;
};
