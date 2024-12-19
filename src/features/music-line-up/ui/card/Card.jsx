import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';

export function Card({ data }) {   
  return (
    <div className={classes.card}>
      <div className={classes.cardPerson}>
        <img src={ data.img } alt="" className={classes.cardImg} />
        <div className={classes.cardName}><p className='typography-h2'>{ data.name }</p></div>
      </div>
      <div className={classes.cardText}><p className='typography-body2'>{ data.text }</p></div>
    </div>    
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}