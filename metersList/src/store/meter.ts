import { getAdresses, getMetersList, removeMeter } from '@src/api';
import { flow, Instance, types } from 'mobx-state-tree';

const AreaModel = types.model('Area', {
  id: types.string,
});

const MeterModel = types.model('Counter', {
  id: types.string,
  _type: types.maybeNull(types.array(types.string)),
  area: types.maybeNull(AreaModel),
  is_automatic: types.maybeNull(types.boolean),
  communication: types.maybeNull(types.string),
  description: types.maybeNull(types.string),
  serial_number: types.maybeNull(types.string),
  installation_date: types.maybeNull(types.string),
  brand_name: types.maybeNull(types.string),
  model_name: types.maybeNull(types.string),
  initial_values: types.array(types.number),
});

const MeterStore = types
  .model('MeterStore', {
    count: types.maybe(types.number),
    next: types.maybeNull(types.string),
    results: types.maybe(types.array(MeterModel)),
    adresses: types.map(types.array(types.string)),
    currentId: types.maybeNull(types.string),
    offset: types.maybeNull(types.number),
    limit: types.maybeNull(types.number),
  })
  .actions((self) => {
    const fetchMeters = flow(function* fetchMeters() {
      const res = yield getMetersList(self.limit, self.offset);

      self.count = res.count;
      self.next = res.next;
      self.results = res.results;

      yield fetchAdresses();
    });

    const deleteMeter = flow(function* deleteMeter() {
      if (!self.currentId) {
        return;
      }
      const res = yield removeMeter(self.currentId);

      fetchMeters();
    });

    const fetchAdresses = flow(function* fetchAdresses() {
      const res = yield getAdresses(
        self.results,
        self.adresses as Map<string, string[]>
      );

      Object.entries(res).forEach((value) => {
        return self.adresses.set(value[0], value[1] as string[]);
      });
    });

    const setCurrentId = (id: string | null = null) => {
      if (id === 'reset') {
        self.currentId = null;
        return;
      }

      if (id === self.currentId || id === null) {
        return;
      }
      self.currentId = id;
    };

    const setOffset = (page: number) => {
      self.offset = self.limit * page;
    };

    return {
      fetchMeters,
      deleteMeter,
      setCurrentId,
      setOffset,
      afterCreate() {
        self.limit = 20;
        self.offset = 0;
        fetchMeters();
      },
    };
  });

export interface IMeterStore extends Instance<typeof MeterStore> {}

export default MeterStore;
