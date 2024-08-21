import { FC } from "react";
import classes from "./Header.module.scss";
import { BackArrow, ForwardArrow } from "../../styles";

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
        <BackArrow fontSize="small" />
        <h2
          className={classes.path__headline}
        >{`${method.toUpperCase()} ${path}`}</h2>
      </div>
      <div className={classes.breadcrumbs__wrapper}>
        <span className={classes.selected__breadcrumb}>Inventory </span>
        <ForwardArrow />
        <span className={classes.selected__breadcrumb}>Endpoints Group{" "}</span>
        <ForwardArrow />
        <span>Endpoint Details</span>
      </div>
    </div>
  );
};

export default Header;
