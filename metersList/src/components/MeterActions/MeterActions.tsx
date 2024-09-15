import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import { TableData } from '@src/components/ui/TableData';
import { useStore } from '@src/hooks/useStore';
import { Button } from '@src/components/ui/Button';
import { Icon } from '@src/components/ui/Icon';

import { Props } from './types';
import { TableDataStyled } from './styles';

export const MeterActionsComponent: FC<Props> = ({ dataId, ...rest }) => {
  const { meter } = useStore();

  return (
    <TableDataStyled {...rest} data-id={dataId}>
      <></>
      {meter.currentId === dataId && (
        <Button data-action={'delete'} data-id={dataId} type={'error'}>
          <Icon type={'Trash'} />
        </Button>
      )}
    </TableDataStyled>
  );
};

export const MeterActions = observer(MeterActionsComponent);
