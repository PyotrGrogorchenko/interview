import { TableRow } from '@src/components/ui/TableRow';
import { CellHeader } from '@src/components/ui/CellHeader';
import { columnsMap } from '@src/models/index';

import { TableStyled } from './styles';

import { TableFoot } from '../ui/TableFoot';

export const MetersFooter = () => {
  return (
    <TableStyled>
      <TableFoot>
        <TableRow type="footer">
          {Object.keys(columnsMap).map((_, index) => {
            return (
              <CellHeader key={index}>
                <></>
              </CellHeader>
            );
          })}
        </TableRow>
      </TableFoot>
    </TableStyled>
  );
};
