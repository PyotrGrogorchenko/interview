import styled from 'styled-components';
import { Props } from './types';

export const ThStyled = styled.th<Props>`
  text-align: left;
  padding: 8px 12px;
  ${(props) => (props.width ? `width: ${props.width}` : '')}
`;
