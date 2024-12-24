import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { Card } from '@features/sport-map-fest/ui/card/Card';
import parse from 'html-react-parser';
export function SportMapFest({ data }) {   
  return (
    <section id='map-fest' className={classes.mapfest} data-section>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.mapfestTitle} typography-h1 white`}>{ parse(data.title) }</h1>
          
          <div className={classes.mapfestList}>
            {data.items ? data.items.map((item, index) => {
              return (
                <Card key={ index } data={ item } />
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