import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@splidejs/react-splide/css';

export function Slider({ data, theme }) {  
  const themeClass = theme === 'pink' ? 'pink' : 'white'; 
  return (
    <div className={classes.slider + ' ' + themeClass}>
      <Splide
        aria-label="Slider"
        options={{
          type: 'loop',
          perPage: 3,
          gap: '20px',
          arrows: false,
          pagination: true,
          fixedHeight: '380px',
          breakpoints: {
            1243: {
              perPage: 2,
            },
            860: {
              perPage: 1,
            },
          }
        }}
      >
        {data.length > 0 && data.map(item => {
          return (
            <SplideSlide key={item + '1'}>
              <img src={item} alt="Image 1"/>
            </SplideSlide>
          )
        })}
      </Splide>

      {/* <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true, }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        loop={true}
        breakpoints={{
          680: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          
        }}
      >
        {data.length > 0 && data.map(item => {          
          return (
            <SwiperSlide key={item}>
              <img src={item} alt=""/>
            </SwiperSlide>
          )
        })}
      </Swiper> */}
    </div>      
  );
}

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  theme: PropTypes.string,
}