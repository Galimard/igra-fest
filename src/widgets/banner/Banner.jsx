import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import img from '../../assets/images/banner.jpg';
import { Button } from '@widgets/button';
import { RunningLine } from '@widgets/running-line';

export function Banner({ data }) { 
    return (
      <>
        <div className={classes.banner}>   
          <div className={`${classes.bannerInner} container`}>
            <Button
              text='купить билет'
              url='https://dzen.ru/'
              color='white'
              className={classes.bannerButton}
            />
          </div>
          <img src={img} alt="" />
        </div>
        <RunningLine data={ data } />
      </>      
    );
}

Banner.propTypes = {
  data: PropTypes.object.isRequired,
}