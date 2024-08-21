import { memo } from "react";
import TableRow from "./TableRow/TableRow";
import { ApiData, BooleanCell } from "../../models";
import classes from "./Table.module.scss";
import TableHeaders from "./TableHeaders/TableHeaders";
import ExpandedRow from "./ExpandedRow/ExpandedRow";

type Props = {
  rows: ApiData;
  onTableCellClick: (
    category: keyof ApiData,
    cell: BooleanCell ,
    name: string
  ) => void;
};

const Table: React.FC<Props> = ({ rows, onTableCellClick }) => {
  const handleCellClick = (
    rows: ApiData,
    category: keyof ApiData,
    index: number,
    cell: BooleanCell 
  ) => {
    if (rows[category]?.[index]) {
      onTableCellClick(category, cell, rows[category][index].name);
    }
  };
  return (
    <table className={classes.table}>
      <thead>
        <TableHeaders />
      </thead>
      <tbody>
        {(Object.keys(rows) as Array<keyof ApiData>).map((category) => (
          <TableRow key={`${category}-${rows[category]}`} category={category}>
            {rows[category] ? (
              rows[category].map((param, index) => (
                <ExpandedRow
                  onClick={(cell: BooleanCell ) =>
                    handleCellClick(rows, category, index, cell)
                  }
                  param={param}
                  key={`${param}-${index}`}
                />
              ))
            ) : (
              <></>
            )}
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
