import { FC } from "react";
import classes from './Navbar.module.scss'

type Props = {
    className?:string
};

const Navbar: FC<Props> = ({className}) => {
  return (
    <div className={`${classes.navbar} ${className}`}>
      <span>Request</span>
      <span>Response</span>
    </div>
  );
};

export default Navbar;