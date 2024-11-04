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
      slidesPerView={1}
      spaceBetween={0}
      pagination={{ clickable: true }}
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
