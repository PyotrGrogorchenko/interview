import styled from 'styled-components';

import HotWater from './hotWater.svg';

export const Container = styled.div`
  &:first-child {
    color: red;
  }

  :nth-child(2) {
    color: white;
  }
`;

export const HotWaterIcon = () => {
  return (
    <Container>
      <HotWater />
    </Container>
  );
};
