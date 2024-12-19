import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import parse from 'html-react-parser';

export function SportFaq({ data }) {   
  return (
    <section className={classes.faq}>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.faqTitle} typography-h1 pink`}>{ parse(data.title) }</h1>

          {data.blocks.length > 0 && data.blocks.map(item => {
            return (
              <div key={item.id}>
                <h2 className={`${classes.faqSubtitle} typography-h2`}>{ parse(item.title) }</h2>
                <div className={`${classes.faqText} typography-body1`}>{ parse(item.text) }</div>
              </div>
            )
          })}
                
        </div>          
      </div>
    </section>      
  );
}

SportFaq.propTypes = {
  data: PropTypes.object.isRequired,
}