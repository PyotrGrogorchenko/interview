import styled from 'styled-components';

import { Props } from './types';

export const TrStyled = styled.tr<Props>`
  height: 52px;
  box-shadow: 0px -1px 0px 0px ${({ theme }) => theme.colors.border.primary};
  ${(props) => (props.width ? `width: ${props.width}` : '')}
  &:hover {
    ${({ theme, type = 'row' }) => type === 'row' && `background-color:${theme.colors.bg.tertiary};`}
`;
