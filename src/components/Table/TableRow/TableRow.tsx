import { FC, useState } from "react";
import classes from "../Table.module.scss";
import { ApiData } from "../../../models";
import { categoriesTrans } from "../../../utils";
import { DownArrow, UpArrow } from "../../../styles";

type Props = {
  category: keyof ApiData;
  children: JSX.Element | JSX.Element[];
};

const TableRow: FC<Props> = ({ category, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(!isExpanded);
  return (
    <>
      <tr>
        <td colSpan={5} className={classes.td}>
          <div className={classes.expanded__div}>
            {isExpanded ? (
              <UpArrow onClick={handleClick} />
            ) : (
              <DownArrow onClick={handleClick} />
            )}{" "}
            {categoriesTrans[category]}
          </div>
        </td>
      </tr>
      {isExpanded && children}
    </>
  );
};

export default TableRow;
