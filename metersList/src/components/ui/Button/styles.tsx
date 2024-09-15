import styled from 'styled-components';
import { Props } from './types';

export const ButtonStyled = styled.button<Props>`
  text-align: center;

  height: ${({ size }) => (size === 'small' ? '32px' : '40px')};
  width: ${({ size }) => (size === 'small' ? '32px' : '40px')};

  border-width: 1px;
  border: ${({ mode }) => (mode === 'primary' ? '1px solid' : 'none')};
  border-radius: ${({ size }) => (size === 'small' ? '6px' : '8px')};

  border-color: ${({ type, theme }) =>
    `${theme.colors[type || 'default'].border}`};
  background-color: ${({ type, theme }) =>
    `${theme.colors[type || 'default'].secondary}`};
  color: ${({ type, theme }) => `${theme.colors[type || 'default'].primary}`};
  &: hover {
    ${({ mode, type, theme }) =>
      mode === 'primary'
        ? `background-color: ${theme.colors[type || 'default'].tertiary};`
        : `color: ${theme.colors[type || 'default'].tertiary};`}
`;
