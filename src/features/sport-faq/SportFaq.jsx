import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import parse from 'html-react-parser';

export function SportFaq({ data }) {   
  return (
    <section className={classes.faq}>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.faqTitle} typography-h1 pink`}>{ parse(data.title) }</h1>

          {data.items.length > 0 && data.items.map((item, index) => {
            return (
              <div key={index}>
                <h2 className={`${classes.faqSubtitle} typography-h2`}>{ parse(item.title) }</h2>
                <div className={`${classes.faqText} typography-body1`}>
                  { item.items.length > 0 && item.items.map((item, index) => {
                    if (item.description) {
                      return (
                        <span key={index} className={classes.faqDescr}>{ parse(item.description) }</span>
                      )
                    } else {
                      return (
                        <img key={index} src={ item.image } alt="" />
                      )
                    }                    
                  })}
                </div>
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