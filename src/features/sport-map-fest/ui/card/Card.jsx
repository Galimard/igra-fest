import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';
import { CardItem } from '@features/sport-map-fest/ui/card-item/CardItem';
import parse from 'html-react-parser';
export function Card({ data }) {   
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <p className='typography-h2 white'>{ parse(data.title) }</p>
        <p className={classes.cardDay}>{ parse(data.subtitle) }</p>
      </div>
      <div className={classes.cardBody}>
        {data.items ? data.items.map((item, index) => {          
          return (
            <CardItem key={ index } data={ item } />
          );
        }) : null}
      </div>
    </div>    
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}