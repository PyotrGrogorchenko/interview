import styled from 'styled-components';
import { Button } from '@src/components/ui/Button';

export const ContainerStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: flex-end;
`;

export const ButtonStyled = styled(Button)<{ active?: string }>`
  ${({ active, theme }) =>
    active === 'true' && `background-color: ${theme.colors.default.tertiary};`}
`;
