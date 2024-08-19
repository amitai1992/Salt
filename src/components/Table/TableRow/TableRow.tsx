import { FC, useState } from "react";
import classes from "../Table.module.scss";


type Props = {
  category: string;
  children:JSX.Element | JSX.Element[]
};

const TableRow: FC<Props> = ({ category, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(!isExpanded);
  return (
    <>
      <tr onClick={handleClick} style={categoryRowStyle}>
        <td colSpan={4}>
          {category} {isExpanded ? "▲" : "▼"}
        </td>
      </tr>
      {isExpanded && children}
    </>
  );
};

export default TableRow;

const categoryRowStyle: React.CSSProperties = {
  backgroundColor: "#f2f2f2",
  cursor: "pointer",
};

const tableCellStyle: React.CSSProperties = {
  padding: "8px",
  borderBottom: "1px solid #ddd",
};
