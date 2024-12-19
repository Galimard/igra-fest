import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { Card } from '@features/sport-map-fest/ui/card/Card';

export function SportMapFest({ data }) {   
  return (
    <section id='map-fest' className={classes.mapfest} data-section>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.mapfestTitle} typography-h1 white`}>{ data.title }</h1>
          
          <div className={classes.mapfestList}>
            {data.days ? data.days.map(item => {
              return (
                <Card key={ item.id } data={ item } />
              );
            }) : null}
          </div>
        </div>          
      </div>
    </section>      
  );
}

SportMapFest.propTypes = {
  data: PropTypes.object.isRequired,
}