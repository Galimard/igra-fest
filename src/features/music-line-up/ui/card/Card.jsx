import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';
import parse from 'html-react-parser';
export function Card({ data }) {   
  return (
    <div className={classes.card}>
      <div className={classes.cardPerson}>
        <img src={ data.image } alt="" className={classes.cardImg} />
        <div className={classes.cardName}><p className='typography-h2'>{ parse(data.title) }</p></div>
      </div>
      <div className={classes.cardText}><p className='typography-body2'>{ parse(data.description) }</p></div>
    </div>    
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}