import { FC } from "react";
import { BooleanCell, Params } from "../../../models";
import classes from "../Table.module.scss";

type ExpandedRowProps = {
  param: Params;
  onClick: (cell: BooleanCell) => void;
};

const ExpandedRow: FC<ExpandedRowProps> = ({ onClick, param }) => {
  return (
    <tr>
      <td className={classes.td}></td>
      <td className={classes.td}>{param.name}</td>
      <td className={classes.td}>
        <div
          onClick={() => onClick("pii")}
          className={`${classes.pii} ${param.pii ? classes.pii__true : ""}`}
        >
          pii
        </div>
      </td>
      <td className={classes.td}>
        <div
          onClick={() => onClick("masked")}
          className={`${classes.masked} ${
            param.masked ? classes.masked__true : ""
          }`}
        >
          masked
        </div>
      </td>
      <td className={classes.td}>{param.type}</td>
    </tr>
  );
};

export default ExpandedRow;
