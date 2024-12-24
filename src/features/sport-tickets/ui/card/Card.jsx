import PropTypes from 'prop-types';
import classes from '../../styles.module.scss';
import { Button } from '@widgets/button';
import parse from 'html-react-parser';

export function Card({ data, colorCard }) {  
  
  return (
    <div className={classes.card + ' ' + colorCard} >
      <p className={`${classes.cardTitle} typography-h2`}>{ parse(data.title) }</p>
      <p className={`${classes.cardSubtitle} typography-body2 bold uppercase`}>{ parse(data.subtitle) }</p>
      <div className={classes.cardText}>
        <p>{ parse(data.additionalServices.title) }</p>
        <ul>
          {data.additionalServices.items.length > 0 && data.additionalServices.items.map((item, index) => {
            return (
              <li key={ index }>
                { parse(item) }
              </li>
            )
          })}
        </ul>
      </div>

      <Button
        text={ data.buyLink.title }
        url={ data.buyLink.subtitle }
        color={colorCard === 'pink-card' ? 'black' : 'pink'}
        className={classes.cardButton}
        target='_blank'
      />
    </div>    
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  colorCard: PropTypes.string,
}