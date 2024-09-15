import { useContext } from 'react';
import { StoreContext } from '@src/index';

export const useStore = () => {
  return useContext(StoreContext);
};
