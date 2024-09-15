import { observer } from 'mobx-react-lite';

import { MatersHeader } from '@src/components/MetersHeader';
import { MetersBody } from '@src/components/MetersBody';
import { useStore } from '@src/hooks/useStore';
import { getDataset } from '@src/utils/getDataset';
import { MetersPagination } from '@src/components/MetersPagination';
import { Title } from '@src/components/ui/Title';

import { ContainerStyled, TableContainerStyled } from './styles';

import { MetersFooter } from '../MetersFooter';

export const MetersTableComponent = () => {
  const { meter } = useStore();

  return (
    <ContainerStyled>
      <Title>Список счётчиков</Title>
      <TableContainerStyled
        onClick={() => {
          meter.deleteMeter();
        }}
        onMouseOver={(e) => {
          const dataset = getDataset(e.target as HTMLElement);
          meter.setCurrentId(dataset['id']);
        }}
        onMouseLeave={() => {
          meter.setCurrentId('reset');
        }}
      >
        <MatersHeader />
        <MetersBody />
        <MetersFooter />
        <MetersPagination />
      </TableContainerStyled>
    </ContainerStyled>
  );
};

export const MetersTable = observer(MetersTableComponent);
