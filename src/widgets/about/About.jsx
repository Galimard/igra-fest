import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import parse from 'html-react-parser';
export function About({ data }) {   
  return (
    <section id='about' className={classes.about} data-section>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.aboutTitle} typography-h1 pink`}>{ parse(data.title) }</h1>
          <h2 className={`${classes.aboutSubtitle} typography-h2`}>{ parse(data.subtitle) }</h2>
          <p className={`${classes.aboutDescription} typography-body1`}>{ parse(data.description) }</p>
          <h2 className="typography-h2 pink">{ parse(data.subtitleFooter) }</h2>
        </div>          
      </div>
    </section>      
  );
}

About.propTypes = {
  data: PropTypes.object.isRequired,
}