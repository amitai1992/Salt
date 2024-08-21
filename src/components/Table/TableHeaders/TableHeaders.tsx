import { columns } from "../../../utils";
import classes from '../Table.module.scss'

const TableHeaders = () => {
    return(
        <tr>
        {columns.map((column, index) => (
          <th
            className={`${classes.th} ${
              index === columns.length - 1 ? classes.th__last : ""
            }`}
            key={column}
          >
            <div className={classes.th__content}>
              {column}{" "}
              {index < columns.length - 1 ? (
                <div className={classes.th__divider}></div>
              ) : (
                <></>
              )}{" "}
            </div>
          </th>
        ))}
      </tr>
    )
}

export default TableHeaders;