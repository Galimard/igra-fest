import PropTypes from 'prop-types';
import classes from './styles.module.scss';

export function RunningLine({ data }) {  
  const { text, date } = data;

  return (
    <div className={classes.runningLineWrap}>
      <div className={classes.runningLine}>
        <div className={classes.runningLineText}>{ text } <span>{ date }</span></div>
      </div>
      <div aria-hidden="true" className={classes.runningLine}>
        <div className={classes.runningLineText}>{ text } <span>{ date }</span></div>
      </div>
    </div>
    
  );
}

RunningLine.propTypes = {
  data: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}