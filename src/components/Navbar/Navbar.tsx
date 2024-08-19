import { FC} from "react";
import classes from './Navbar.module.scss'

type Props = {
  className?: string
  callback: (val: 0 | 1) => void
  activeIndex: 0 | 1
};

const Navbar: FC<Props> = ({ className, callback, activeIndex }) => {
  const handleClick = (index: 0 | 1) => {
    callback(index)
  }
  return (
    <div className={`${classes.navbar} ${className}`}>
      <span onClick={() => handleClick(0)} className={activeIndex === 0 ? classes.active : classes.not__active}>Request</span>
      <span onClick={() => handleClick(1)} className={activeIndex === 1 ? classes.active : classes.not__active}>Response</span>
    </div>
  );
};

export default Navbar;