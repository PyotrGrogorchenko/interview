import styled from 'styled-components';

import ColdWater from './coldWater.svg';

export const Container = styled.div`
  &:first-child {
    color: #3698fa;
  }
`;

export const ColdWaterIcon = () => {
  return (
    <Container>
      <ColdWater />
    </Container>
  );
};
