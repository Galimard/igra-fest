import { Link } from "react-router";
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

export function Button({ ...props }) {  
    return (
      <Link 
        to={ props.url } 
        className={`${classes.button} ${classes[props.color]} ${props.className}`} 
        target='_blank'
      >
          { props.text }
      </Link>
    );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
}