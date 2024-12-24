import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { RunningLine } from '@widgets/running-line';
import { MapUI } from '@features/sport-location/ui/map';
import parse from 'html-react-parser';

export function SportLocation({ data }) {  
  const lineData = {
    text: data.bottomLine.title,
    date: data.bottomLine.subtitle
  }

  return (
    <>
      <section id="locations" className={classes.location} data-section>
        <div className="container">
          <div className="container-inner">
            <h1 className={`${classes.locationTitle} typography-h1 white`}>{ parse(data.title) }</h1>
            {data.items.length > 0 && data.items.map((item, index) => {
              return (
                <div key={ index }>
                  <h2 className={`${classes.locationSubtitle} typography-h2 white`}>{ parse(item.title) }</h2>
                  <p className={`${classes.locationDescription} typography-body1 white`}>{ parse(item.description) }</p>
                </div>
              )
            })}
            
            <div className={classes.locationMap}>
              <MapUI coords={ [43.683159, 40.266893] } />
            </div>            
          </div>          
        </div>
      </section>  
      <RunningLine data={ lineData } />    
    </>    
  );
}

SportLocation.propTypes = {
  data: PropTypes.object.isRequired,
}