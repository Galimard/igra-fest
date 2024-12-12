import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import img from '../../assets/images/partners.png';

export function MusicPartners({ data }) {   
  return (
    <section className={classes.partners}>
      <div className="container">
        <div className="container-inner">
          <h1 className={`${classes.partnersTitle} typography-h1 pink`}>{ data.title }</h1>
          
          <img src={img} alt="" className={classes.partnersImg} />
          {/* <div className={classes.partnersWrap}>
            <a href="#" className={classes.partnersItem}><img src={img} alt="" /></a>
            <a href="#" className={classes.partnersItem}><img src={img} alt="" /></a>
            <a href="#" className={classes.partnersItem}><img src={img} alt="" /></a>
            <a href="#" className={classes.partnersItem}><img src={img} alt="" /></a>
          </div> */}
        </div>          
      </div>
    </section>      
  );
}

MusicPartners.propTypes = {
  data: PropTypes.object.isRequired,
}