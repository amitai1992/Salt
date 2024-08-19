import React from 'react';
import TableRow from './TableRow/TableRow';
import { columns } from '../../utils';
import { ApiData } from '../../models';


type Props = {
  rows: ApiData
  onTableCellClick: (newRows: ApiData) => void
}

const Table: React.FC<Props> = ({ rows, onTableCellClick }) => {

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          {columns.map((column) => <th key={column} style={tableHeaderStyle}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {(Object.keys(rows) as Array<keyof ApiData>).map(category => (
          <TableRow key={`${category}-${rows[category]}`} category={category}>
            {rows[category] ? rows[category].map((param, index) => (
              <tr key={`${param}-${index}`}>
                <td></td>
                <td>{param.name}</td>
                <td onClick={() => {
                  const newRows = { ...rows }
                  if (newRows[category]?.[index]) {
                    newRows[category][index].pii = !newRows[category][index].pii
                    onTableCellClick(newRows)
                  }
                }}>
                  {`${param.pii}`}
                </td>
                <td onClick={() => {
                  const newRows = { ...rows }
                  if (newRows[category]?.[index]) {
                    newRows[category][index].masked = !newRows[category][index].masked
                    onTableCellClick(newRows)
                  }
                }}>{`${param.masked}`}</td>
                <td >{param.type}</td>

              </tr>
            )) : <></>}
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '8px',
  borderBottom: '1px solid #ddd',
};

export default Table;