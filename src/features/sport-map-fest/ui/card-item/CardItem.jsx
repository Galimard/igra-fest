import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';
import parse from 'html-react-parser';
export function CardItem({ data }) {      
  return (
    <div className={classes.cardItem}>
      {data.subtitle && (
        <div className={classes.cardItemHeader} style={{backgroundColor: data.backgroundColor}}>
          <p className={classes.cardItemTitle}>{ parse(data.subtitle) }</p>
        </div>
      )}
      
      <div className={classes.cardItemBody}>
        <span className='typography-body2'>{ parse(data.title) }</span>
        <span className='typography-body2'>{ parse(data.description) }</span>
      </div>
    </div>    
  );
}

CardItem.propTypes = {
  data: PropTypes.object.isRequired,
}