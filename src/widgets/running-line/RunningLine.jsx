import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import parse from 'html-react-parser';

export function RunningLine({ data }) {  
  const { text, date } = data;

  return (
    <>      
      {/* <div className={classes.runningLineWrap}>
        <div className={classes.runningLine}>
          <div className={classes.runningLineText}>{ parse(text) } <span>{ date }</span></div>
        </div>
        <div aria-hidden="true" className={classes.runningLine}>
          <div className={classes.runningLineText}>{ parse(text) } <span>{ date }</span></div>
        </div>
      </div>     */}
      <div className={classes.lineWrap}>
        <div className={classes.line + ' ' + classes.animation}>
          <div className={classes.lineText}>{ parse(text) } <span>{ date }</span></div>
        </div>
        <div aria-hidden="true" className={classes.line + ' ' + classes.animation}>
          <div className={classes.lineText}>{ parse(text) } <span>{ date }</span></div>
        </div>
      </div>
    </>
  );
}

RunningLine.propTypes = {
  data: PropTypes.object.isRequired,
}