import { Swiper, SwiperSlide } from 'swiper/react';
import { getImageLink } from '@/lib/utils.js';
import { Navigation, Pagination } from 'swiper/modules';
import { Image } from '@heroui/react';
import PropTypes from 'prop-types';

const ThumbnailsCarousel = ({ thumbnails }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="w-full"
    >
      {thumbnails.map((thumbnail, i) => (
        <SwiperSlide key={i} className="w-full">
          <div className="flex items-center justify-center p-10 bg-black/5 dark:bg-white/5 rounded-2xl aspect-square">
            <Image src={getImageLink(thumbnail)} removeWrapper className="object-contain rounded-lg h-full" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ThumbnailsCarousel.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThumbnailsCarousel;
