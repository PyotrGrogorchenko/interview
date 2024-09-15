import { observer } from 'mobx-react-lite';

import { useStore } from '@src/hooks/useStore';
import { Pagination } from '@src/components/ui/Pagination';

import { ContainerStyled } from './styles';

export const MetersPaginationComponent = () => {
  const { meter } = useStore();
  const { limit, offset, count } = meter;

  return (
    <ContainerStyled>
      <Pagination
        limit={limit}
        offset={offset}
        count={count}
        cb={(page) => {
          meter.setOffset(page - 1);
          meter.fetchMeters();
        }}
      />
    </ContainerStyled>
  );
};

export const MetersPagination = observer(MetersPaginationComponent);
