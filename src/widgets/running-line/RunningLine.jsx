import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import parse from 'html-react-parser';

export function RunningLine({ data }) {  
  const { text, date } = data;

  return (
    <>      
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