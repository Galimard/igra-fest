import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';
import { CardItem } from '@features/sport-map-fest/ui/card-item/CardItem';

export function Card({ data }) {   
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <p className='typography-h2 white'>{ data.date }</p>
        <p className={classes.cardDay}>день { data.id }</p>
      </div>
      <div className={classes.cardBody}>
        {data.schedule ? data.schedule.map(item => {
          return (
            <CardItem key={ item.id } data={ item } />
          );
        }) : null}
      </div>
    </div>    
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}