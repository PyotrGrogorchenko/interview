import { MetersTable } from '@src/components/MetersTable';
import { ContainerStyled } from './styles';

const HostComponent = () => {
  return (
    <ContainerStyled>
      <MetersTable />
    </ContainerStyled>
  );
};

export const HostPage = HostComponent;
