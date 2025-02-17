import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import PredictionHomeCards from '@/pages/market/components/gaming/PredictionHomeCards.jsx';
import { Card } from '@heroui/react';

const slides = ['Accessbank', 'Gtbank', 'Firstbank'];

const PredictionCarousel = () => {
  return (
   <div className="relative mx-auto border border-default-200 rounded-lg">
    <div className=" px-5 absolute -top-5 z-10 m-8 py-4 text-2xl font-semibold">
        <h1 className="text-sky-500">Prediction Home</h1>
      </div>
         <Swiper
           slidesPerView={1}
           loop
           navigation
           modules={[Autoplay, Navigation]}
           autoplay={{ delay: 5000, disableOnInteraction: false }}
         >
           {slides.map((name) => (
             <SwiperSlide key={name} className="">
               <PredictionHomeCards name={name} />
             </SwiperSlide>
           ))}
         </Swiper>
       </div>
  );
};

export default PredictionCarousel;
