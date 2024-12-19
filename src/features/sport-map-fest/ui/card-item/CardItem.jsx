import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';

export function CardItem({ data }) {     
  return (
    <div className={classes.cardItem}>
      {data.place && (
        <div className={classes.cardItemHeader + ' ' + classes[data.color]}>
          <p className={classes.cardItemTitle}>{ data.place }</p>
        </div>
      )}
      
      <div className={classes.cardItemBody}>
        <span className='typography-body2'>{ data.name }</span>
        <span className='typography-body2'>{ data.time }</span>
      </div>
    </div>    
  );
}

CardItem.propTypes = {
  data: PropTypes.object.isRequired,
}