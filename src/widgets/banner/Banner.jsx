import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { Button } from '@widgets/button';
import { RunningLine } from '@widgets/running-line';

export function Banner({ data }) { 
  const lineData = {
    text: data.title,
    date: data.subtitle
  }
  
  return (
    <>
      <div className={classes.banner}>   
        <div className={`${classes.bannerInner} container`}>
          <Button
            text={ data.buyLink }
            url='#tickets'
            color='white'
            className={classes.bannerButton}
          />
        </div>
        {data.video && data.video.length > 0 ? 
        (
          <video
            src={data.video[0]} 
            loop 
            muted 
            autoPlay
            playsInline
            disablePictureInPicture
          ></video>
        ) : (
          <img src={data.image} alt="" />
        )}        
      </div>
      <RunningLine data={ lineData } />
    </>      
  );
}

Banner.propTypes = {
  data: PropTypes.object.isRequired,
}