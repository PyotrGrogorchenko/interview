import styled from 'styled-components';

export const TheadStyled = styled.thead`
  height: 32px;
  font-size: 13px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
