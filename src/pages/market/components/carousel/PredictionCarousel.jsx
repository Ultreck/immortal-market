import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import PredictionHomeCards from '@/pages/market/components/gaming/PredictionHomeCards.jsx';

const slides = ['Accessbank', 'Gtbank', 'Firstbank'];

const PredictionCarousel = () => {
  return (
    <div className="relative mx-auto border-2 dark:border-gray-500 my-8 border">
      <div className=" px-5 m-8 py-4 text-2xl font-semibold">
        <h1 className="text-sky-500">Prediction Home</h1>
      </div>
      <Swiper
        slidesPerView={1}
        navigation
        pagination
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {slides.map((name, index) => (
          <SwiperSlide key={index}>
            <PredictionHomeCards name={name} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/*<div className="py-2 absolute bottom-5 right-10 text-center text-sm text-muted-foreground">*/}
      {/*  Slide {current} of {count}*/}
      {/*</div>*/}
    </div>
  );
};

export default PredictionCarousel;
