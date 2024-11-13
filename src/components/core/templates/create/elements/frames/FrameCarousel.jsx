import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '@/lib/utils.js';
import { Navigation, Pagination } from 'swiper/modules';

const FrameCarousel = ({ element, active, onChange }) => {
  const slides = Array(element.config.slides).fill(null);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      speed={element.config.speed || 500}
      slidesPerView={element.config.slidesPerView || 1}
      spaceBetween={element.config.spaceBetween || 1}
      loop={!!element.config.loop}
      pagination={{ clickable: true }}
      autoplay={
        element.config.autoplay?.enabled
          ? {
              delay: element.config.autoplay.delay || 0,
              disableOnInteraction: false,
            }
          : false
      }
      className={cn('h-full', { 'pointer-events-none': !active })}
      allowTouchMove={false}
    >
      {slides.map((_, i) => (
        <SwiperSlide key={i}>
          <FrameContents
            key={i}
            id={`frame/${i}/${element.id}`}
            element={element}
            onChange={onChange}
            active={active}
            overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" />}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

FrameCarousel.propTypes = ElementPropTypes;

export default FrameCarousel;
