import React from 'react';
import TableRow from './TableRow/TableRow';
import { columns } from '../../utils';
import { ApiData } from '../../models';
import classes from './Table.module.scss'



type Props = {
  rows: ApiData
  onTableCellClick: (newRows: ApiData) => void
}

const Table: React.FC<Props> = ({ rows, onTableCellClick }) => {

  const handleCellClick = (rows: ApiData, category: keyof ApiData, index: number, cell: "pii" | "masked") => {
    const newRows = { ...rows }
    if (newRows[category]?.[index]) {
      newRows[category][index][cell] = !newRows[category][index][cell]
      onTableCellClick(newRows)
    }
  }
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          {columns.map((column, index) =>
            <th className={`${classes.th} ${index === columns.length - 1 ? classes.th__last : ""}`} key={column}>
              <div className={classes.th__content}>{column} {index < columns.length - 1 ? <div className={classes.th__divider}></div> : <></>} </div>
            </th>)}
        </tr>
      </thead>
      <tbody>
        {(Object.keys(rows) as Array<keyof ApiData>).map(category => (
          <TableRow key={`${category}-${rows[category]}`} category={category}>
            {rows[category] ? rows[category].map((param, index) => (
              <tr key={`${param}-${index}`}>
                <td className={classes.td}></td>
                <td className={classes.td}>{param.name}</td>
                <td className={classes.td}>
                  <div onClick={() => handleCellClick(rows, category, index, "pii")} className={`${classes.pii} ${param.pii ? classes.pii__true : ""}`}>pii</div>
                </td>
                <td className={classes.td}>
                  <div onClick={() => handleCellClick(rows, category, index, "masked")} className={`${classes.masked} ${param.masked ? classes.masked__true : ""}`}>
                    masked
                  </div>
                </td>
                <td className={classes.td}>{param.type}</td>

              </tr>
            )) : <></>}
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};



export default Table;