import { FC } from 'react';

import { Props } from './types';
import { HotWaterIcon } from './icons/HotWaterIcon/HotWaterIcon';
import { ColdWaterIcon } from './icons/ColdWaterIcon/ColdWater';
import { TrashIcon } from './icons/TrashIcon/TrashIcon';

export const Icon: FC<Props> = ({ type }) => {
  switch (type) {
    case 'ColdWaterAreaMeter':
      return <ColdWaterIcon />;
    case 'HotWaterAreaMeter':
      return <HotWaterIcon />;
    case 'Trash':
      return <TrashIcon />;
    default:
      return null;
  }
};
