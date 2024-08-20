import { FC, useState } from "react";
import classes from "../Table.module.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ApiData } from "../../../models";
import {categoriesTrans} from '../../../utils';


type Props = {
  category: keyof ApiData;
  children:JSX.Element | JSX.Element[]
};

const TableRow: FC<Props> = ({ category, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(!isExpanded);
  return (
    <>
      <tr onClick={handleClick} >
        <td colSpan={5} className={classes.td}>
        <div className={classes.expanded__div}>{isExpanded ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>} {categoriesTrans[category]}</div>
        </td>
      </tr>
      {isExpanded && children}
    </>
  );
};

export default TableRow;




