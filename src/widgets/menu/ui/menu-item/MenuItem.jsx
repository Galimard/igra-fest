import { Link } from "react-router";
import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';

export function MenuItem({ data }) {  
  const { text, url } = data;
  
  return (
    <li className={classes.menuItem}><Link to={"#" + url}>{ text }</Link></li>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
}