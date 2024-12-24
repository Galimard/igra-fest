import PropTypes from 'prop-types';
import classes from './styles.module.scss';
export function MusicPartners({ data }) {   
  return (
    <section className={classes.partners}>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.partnersTitle} typography-h1 pink`}>{ data.title }</h1>
          
          <div className={classes.partnersWrap}>
            {data.items.length > 0 ? data.items.map(item => {
              return (
                <span key={item.title} className={classes.partnersItem}><img src={item.image} alt="" /></span>
              );
            }) : null}
          </div>
        </div>          
      </div>
    </section>      
  );
}

MusicPartners.propTypes = {
  data: PropTypes.object.isRequired,
}