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

          {data.items.length > 0 ? data.items.map((item, index) => {
            if (index === 0) {
              return (
                <div key={index}>
                  <h2 className={`${classes.ticketsSubtitle} typography-h2`}>{ parse(item.title) }</h2>
                  <p className={`${classes.ticketsDescription} typography-body1`}>{ parse(item.description) }</p>
                </div>
              )
            } else if (index === 1) {
              return (
                <div key={index} className={classes.ticketsList}>
                  {item.items ? item.items.map((item, index) => {
                    return (
                      <Card key={ index } data={ item } colorCard={index === 0 ? 'pink-card' : 'blue-card'} />
                    );
                  }) : null}
                </div> 
              )
            } else {
              return (
                <Slider key={index} data={ item.gallery } theme='pink' /> 
              )
            }
          }) : null}
        </div>          
      </div>
    </section>      
  );
}

SportTickets.propTypes = {
  data: PropTypes.object.isRequired,
}