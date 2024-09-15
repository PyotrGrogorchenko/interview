import styled from 'styled-components';

import Trash from './trash.svg';

export const Container = styled.div``;

export const TrashIcon = () => {
  return (
    <Container>
      <Trash />
    </Container>
  );
};
