import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { Link } from "react-router";

export function MainCard({ data }) {     
  return (
    <Link to={ data.url } className={data.url === '/sport' ? classes['left'] : classes['right']}>
      <span className={classes.card} style={{background: `url(${data.img}) center center no-repeat`}}>
        <span className={classes.cardInfo}>
          <span className={`${classes.cardTitle} typography-h2`}>{ data.title }</span>
          <span className={classes.cardDate}>{ data.date }</span>
        </span>    
      </span>
    </Link>
  );
}

MainCard.propTypes = {
  data: PropTypes.object.isRequired,
}