import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';

export function Burger({ open, setOpen }) { 
  return (
    <div className={open ? classes.burger + ' ' + classes.burgerClose : classes.burger} onClick={() => setOpen(!open)}>      
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

Burger.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
}