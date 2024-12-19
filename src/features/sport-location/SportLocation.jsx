import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { RunningLine } from '@widgets/running-line';
import { MapUI } from '@features/sport-location/ui/map';

export function SportLocation({ data, line }) {   
  return (
    <>
      <section id="locations" className={classes.location} data-section>
        <div className="container">
          <div className="container-inner">
            <h1 className={`${classes.locationTitle} typography-h1 white`}>{ data.title }</h1>
            <h2 className={`${classes.locationSubtitle} typography-h2 white`}>{ data.subTitle }</h2>
            <p className={`${classes.locationDescription} typography-body1 white`}>{ data.description }</p>
            <div className={classes.locationMap}>
              <MapUI coords={ data.coords } />
            </div>            
          </div>          
        </div>
      </section>  
      <RunningLine data={ line } />    
    </>    
  );
}

SportLocation.propTypes = {
  data: PropTypes.object.isRequired,
  line: PropTypes.object.isRequired,
}