import { Link } from "react-router";
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

function SvgArrow(props) {
  return (
    <svg width={27} height={22} {...props} fill="none">
      <path d="M2 11.0001H25M2 11.0001L10.6286 20M2 11.0001L10.6286 2" stroke={props.stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function BackLink({ ...props }) {  
    return (
      <Link to='/' className={classes.backLink + ' ' + props.className}>
        <SvgArrow />
        вернуться на главную
      </Link>
    );
}

BackLink.propTypes = {
  className: PropTypes.string,
}

SvgArrow.propTypes = {
  stroke: PropTypes.string,
}