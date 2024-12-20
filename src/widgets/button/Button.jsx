import { Link } from "react-router";
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

export function Button({ ...props }) {  
    return (
      <Link 
        to={ props.url } 
        className={`${classes.button} ${classes[props.color]} ${props.className}`} 
        target={props.target ? props.target : '_self'}
      >
          { props.text }
      </Link>
    );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
}