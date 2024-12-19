import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';
import { Button } from '@widgets/button';
import parse from 'html-react-parser';

export function Card({ data }) {  
  
  return (
    <div className={classes.card + ' ' + data.colorCard} >
      <p className={`${classes.cardTitle} typography-h2`}>{ data.title }</p>
      <p className={`${classes.cardSubtitle} typography-body2 bold uppercase`}>{ data.subtitle }</p>
      <div className={classes.cardText}>{ parse(data.text) }</div>

      <Button
        text='купить билет'
        url='https://dzen.ru/'
        color={data.colorCard === 'pink-card' ? 'black' : 'pink'}
        className={classes.cardButton}
      />
    </div>    
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
}