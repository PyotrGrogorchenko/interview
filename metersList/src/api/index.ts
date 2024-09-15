import axios from 'axios';
import { difference } from 'lodash';

export const getMetersList = async (limit: number, offset: number) => {
  const res = await axios({
    method: 'get',
    url: `http://showroom.eis24.me/api/v4/test/meters?limit=${limit}&offset=${offset}`,
  });

  return res.data;
};

export const removeMeter = async (id: string) => {
  const res = await axios({
    method: 'delete',
    url: `http://showroom.eis24.me/api/v4/test/meters/${id}`,
  });
};

export const getAdresses = async (
  list: { id: string }[],
  adresses: Map<string, string[]>
): Promise<Record<string, string[]>> => {
  const idsRequired = list.reduce((acc, { id }) => {
    acc.push(id);
    return acc;
  }, []);

  const idsCached = Object.keys(adresses).reduce((acc, key) => {
    acc.push(key);
    return acc;
  }, []);

  const ids: string[] = difference(idsRequired, idsCached);
  const requests = ids.map((id) =>
    axios({
      method: 'get',
      url: `http://showroom.eis24.me/api/v4/test/areas?id__in=${id}`,
    })
  );

  const res = await Promise.all(requests);

  return res.reduce(
    (r, v, i) => {
      r[ids[i]] = v.data.results;
      return r;
    },
    {} as Record<string, string[]>
  );
};
