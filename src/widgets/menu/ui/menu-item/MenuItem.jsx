import { Link } from "react-router";
import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';

export function MenuItem({ data, activeSection, open, setOpen }) {  
  const { text, url } = data;
  
  return (
    <li className={classes.menuItem}>
      <Link 
        to={"#" + url}
        className={(activeSection === url) ? classes.active : '' } 
        onClick={setOpen ? () => setOpen(!open) : null}
      >
        { text }
      </Link>
    </li>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  activeSection: PropTypes.string,
  setOpen: PropTypes.func,
  open: PropTypes.bool,
}