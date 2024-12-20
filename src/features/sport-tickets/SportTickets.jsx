import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { Card } from '@features/sport-tickets/ui/card/Card';
import { Slider } from '@widgets/slider';
import parse from 'html-react-parser';

export function SportTickets({ data }) {   
  return (
    <section id='tickets' className={classes.tickets} data-section>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.ticketsTitle} typography-h1 pink`}>{ parse(data.title) }</h1>
          <h2 className={`${classes.ticketsSubtitle} typography-h2`}>{ parse(data.subTitle) }</h2>
          <p className={`${classes.ticketsDescription} typography-body1`}>{ parse(data.description) }</p>
          
          <div className={classes.ticketsList}>
            {data.tickets ? data.tickets.map(item => {
              return (
                <Card key={ item.id } data={ item } />
              );
            }) : null}
          </div> 
          <Slider data={ data.images } theme='pink' /> 
        </div>          
      </div>
    </section>      
  );
}

SportTickets.propTypes = {
  data: PropTypes.object.isRequired,
}