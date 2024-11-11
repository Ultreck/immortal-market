import { ElementPropTypes } from '@/lib/prop-types.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getImageLink } from '@/lib/utils.js';
import { Navigation, Pagination } from 'swiper/modules';
import { Image } from '@nextui-org/react';

const ThumbnailsCarousel = ({ thumbnails }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      slidesPerView={1}
      spaceBetween={0}
      pagination={{ clickable: true }}
      allowTouchMove={false}
      className="w-full"
    >
      {thumbnails.map((thumbnail, i) => (
        <SwiperSlide key={i}>
          <div className="flex items-center justify-center p-10 bg-black/5 dark:bg-white/5 rounded-2xl aspect-square">
            <Image src={getImageLink(thumbnail)} removeWrapper className="object-contain rounded-lg" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ThumbnailsCarousel.propTypes = ElementPropTypes;

export default ThumbnailsCarousel;
