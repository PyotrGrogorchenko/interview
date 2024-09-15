import { FC } from 'react';

// import { TableData } from '@src/components/ui/TableData';
import { Icon } from '@src/components/ui/Icon';

import { Props } from './types';
import { TableDataStyled } from './styles';

export const MeterCellType: FC<Props> = ({ id, value }) => {
  return (
    <TableDataStyled data-id={id}>
      <Icon type={value[0]} />
      {value[0] === 'ColdWaterAreaMeter' && 'ХВС'}
      {value[0] === 'HotWaterAreaMeter' && 'ГВС'}
    </TableDataStyled>
  );
};
