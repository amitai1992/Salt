import { FC } from "react";
import classes from "./Header.module.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

type Props = {
  method: string;
  api?: string;
  path: string;
  className?: string;
};

const Header: FC<Props> = ({ method, path, className }) => {
  return (
    <div className={className}>
      <div className={`${classes.route__wrapper}`}>
        <ArrowBackIosNewOutlinedIcon fontSize="small" />
        <h2
          className={classes.path__headline}
        >{`${method.toUpperCase()} ${path}`}</h2>
      </div>
      <div className={classes.breadcrumbs__wrapper}>
        <span className={classes.selected__breadcrumb}>Inventory </span>
        <ArrowForwardIosOutlinedIcon fontSize="small" />
        <span className={classes.selected__breadcrumb}>Endpoints Group{" "}</span>
        <ArrowForwardIosOutlinedIcon fontSize="small" />
        <span>Endpoint Details</span>
      </div>
    </div>
  );
};

export default Header;
