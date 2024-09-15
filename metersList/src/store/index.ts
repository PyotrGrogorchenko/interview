import { types } from 'mobx-state-tree';

import MeterStore from './meter';

const RootStore = types.model('RootStore', {
  meter: types.optional(MeterStore, {}),
});

export default RootStore;
