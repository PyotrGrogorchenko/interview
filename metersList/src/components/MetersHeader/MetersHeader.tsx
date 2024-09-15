import { TableHead } from '@src/components/ui/TableHead';
import { TableRow } from '@src/components/ui/TableRow';
import { CellHeader } from '@src/components/ui/CellHeader';
import { columnsMap } from '@src/models/index';

import { TableStyled } from './styles';

export const MatersHeader = () => {
  return (
    <TableStyled>
      <TableHead>
        <TableRow type="header">
          {Object.entries(columnsMap).map(([key, value], index) => {
            if (key === 'actions') {
              return (
                <CellHeader key={index}>
                  <></>
                </CellHeader>
              );
            }

            return <CellHeader key={index}>{value}</CellHeader>;
          })}
        </TableRow>
      </TableHead>
    </TableStyled>
  );
};
