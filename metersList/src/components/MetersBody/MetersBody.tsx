import { observer } from 'mobx-react-lite';

import { TableRow } from '@src/components/ui/TableRow';
import { TableBody } from '@src/components/ui/TableBody';
import { TableData } from '@src/components/ui/TableData';
import { ColemnsKeys, columnsMap } from '@src/models/index';
import { useStore } from '@src/hooks/useStore';
import { MeterActions } from '@src/components/MeterActions';
import { formatDate } from '@src/utils/formatDate';
import { MeterCellType } from '@src/components/MeterCells/MeterCellType';

import { ContainerStyled, TableStyled } from './styles';

export const MetersBodyComponent = () => {
  const { meter } = useStore();

  return (
    <ContainerStyled>
      <TableStyled>
        <TableBody>
          {meter.results &&
            meter.results.map((row, rowIndex) => (
              <TableRow key={`body_row_${rowIndex}`} data-id={row.id}>
                {Object.keys(columnsMap).map((key: ColemnsKeys, i) => {
                  switch (key) {
                    case 'number':
                      return (
                        <TableData key={`td_${key}_${row.id}`} data-id={row.id}>
                          {meter.offset + rowIndex + 1}
                        </TableData>
                      );
                    case '_type':
                      return (
                        <MeterCellType
                          key={`td_${key}_${row.id}`}
                          id={row.id}
                          value={row._type}
                        />
                      );
                    case 'address':
                      return (
                        <TableData key={`td_${key}_${row.id}`} data-id={row.id}>
                          <></>
                        </TableData>
                      );
                    case 'installation_date':
                      return (
                        <TableData key={`td_${key}_${row.id}`} data-id={row.id}>
                          {formatDate(row.installation_date)}
                        </TableData>
                      );
                    case 'actions':
                      return (
                        <MeterActions
                          key={`td_${key}_${row.id}`}
                          dataId={row.id}
                        />
                      );
                    default:
                      if (row.hasOwnProperty(key)) {
                        return (
                          <TableData
                            key={`td_${key}_${row.id}`}
                            data-id={row.id}
                          >
                            {row[key]}
                          </TableData>
                        );
                      }
                      return (
                        <TableData key={`td_${key}_${row.id}`} data-id={row.id}>
                          <></>
                        </TableData>
                      );
                  }
                })}
              </TableRow>
            ))}
        </TableBody>
      </TableStyled>
    </ContainerStyled>
  );
};

export const MetersBody = observer(MetersBodyComponent);
