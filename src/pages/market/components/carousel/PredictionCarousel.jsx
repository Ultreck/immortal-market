import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import PredictionHomeCards from '@/pages/market/components/gaming/PredictionHomeCards.jsx';
import { Card } from '@heroui/react';

const slides = ['Accessbank', 'Gtbank', 'Firstbank'];

const PredictionCarousel = () => {
  return (
    <Card className="mb-6 w-full overflow-visible rounded-2xl border px-6 py-6 pb-8 shadow dark:border-0 dark:shadow-none md:px-8">
      <div className="text-2xl font-bold">Prediction Home</div>
      <Swiper
        slidesPerView={1}
        // navigation
        // pagination
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {slides.map((name, index) => (
          <SwiperSlide key={index}>
            <PredictionHomeCards name={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default PredictionCarousel;
