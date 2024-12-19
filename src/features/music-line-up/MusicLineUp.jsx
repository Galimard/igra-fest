import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { Card } from '@features/music-line-up/ui/card/Card';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import bg1 from '../../assets/images/arena-bg.png';
// import bg2 from '../../assets/images/bg.jpg';

export function MusicLineUp({ data }) {   
  return (
    <section id='lineup' className={classes.lineup} data-section>
      <div className="container">
        <div className="container-inner" style={{paddingBottom: 0}}>
          <h1 className={`${classes.lineupTitle} typography-h1 white`}>{ data.title }</h1>
          
          <div className={classes.lineupList}>
            {data.artists ? data.artists.map(item => {
              return (
                <Card key={ item.name } data={ item } />
              );
            }) : null}
          </div>
        </div>          
      </div>
      {/* <div className={classes.lineupImg}>
        <ParallaxBanner
          layers={[
            { image: bg1, speed: -20, expanded: false },
          ]}
          className="aspect"
        />   
      </div>  */}
      <div className={classes.lineupImg}>
        <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
          <ParallaxBannerLayer image={bg1} speed={-20} expanded={false} />
        </ParallaxBanner> 
      </div>         
    </section>      
  );
}

MusicLineUp.propTypes = {
  data: PropTypes.object.isRequired,
}