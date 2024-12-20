import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { RunningLine } from '@widgets/running-line';
import { Slider } from '@widgets/slider';
import parse from 'html-react-parser';

export function MusicDresscode({ data, line }) {   
  return (
    <>
      <section id="dresscode" className={classes.dresscode} data-section>
        <div className="container">
          <div className="container-inner">
            <h1 className={`${classes.dresscodeTitle} typography-h1 white`}>{ parse(data.title) }</h1>
            <h2 className={`${classes.dresscodeSubtitle} typography-h2 white`}>{ parse(data.subTitle) }</h2>
            <div className={`${classes.dresscodeDescription} typography-body1 white`}>{ parse(data.description) }</div>
            <Slider data={ data.images } theme='white' /> 
          </div>          
        </div>
      </section>  
      <RunningLine data={ line } />    
    </>    
  );
}

MusicDresscode.propTypes = {
  data: PropTypes.object.isRequired,
  line: PropTypes.object.isRequired,
}