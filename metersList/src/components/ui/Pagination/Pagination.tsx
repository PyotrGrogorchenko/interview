import { FC, useEffect, useMemo, useState } from 'react';

import { makeRangeArray } from '@src/utils/makeRangeArray';
import { getDataset } from '@src/utils/getDataset';

import { Props } from './types';
import { ContainerStyled, ButtonStyled } from './styles';

export const Pagination: FC<Props> = ({ limit, count, cb }) => {
  const [pages, setPages] = useState<number[]>([]);
  const [page, setPage] = useState(0);

  const countPages = useMemo(
    () => Math.floor(count / limit + 1),
    [count, limit]
  );

  const calcPages = (page = 0) => {
    if (Number.isNaN(countPages) || Number.isNaN(page)) {
      return;
    }

    setPage(page);

    if (!pages.length) {
      setPages(makeRangeArray(1, 6));
      return;
    }

    if (page === pages.at(0)) {
      const firstPage = Math.max(1, page - 5);
      setPages(makeRangeArray(firstPage, firstPage + 5));
      return;
    }

    if (page === pages.at(-1)) {
      const lastPage = Math.min(countPages, page + 5);
      setPages(makeRangeArray(lastPage - 5, lastPage));
      return;
    }

    setPages(makeRangeArray(page, page + 5));
  };

  useEffect(() => {
    calcPages();
  }, [countPages]);

  return (
    <ContainerStyled
      onClick={(e) => {
        const dataset = getDataset(e.target as HTMLElement);
        if (dataset['page']) {
          calcPages(Number(dataset['page']));
          cb(Number(dataset['page']));
        }
      }}
    >
      {pages.slice(0, 3).map((v, i) => (
        <ButtonStyled
          key={i}
          data-page={v}
          mode={'primary'}
          active={String(page === v)}
          size="small"
        >
          {v}
        </ButtonStyled>
      ))}
      <ButtonStyled key={'pagination_devider'} mode={'primary'} size="small">
        ...
      </ButtonStyled>
      {pages.slice(3, 6).map((v, i) => (
        <ButtonStyled
          key={i}
          data-page={v}
          mode={'primary'}
          active={String(page === v)}
          size="small"
        >
          {v}
        </ButtonStyled>
      ))}
    </ContainerStyled>
  );
};
