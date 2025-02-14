import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import FinancialCard from '@/pages/market/components/gaming/FinancialCard.jsx';
// import imgAc from '@/assets/images/accessbank.png';
// import imgGt from '@/assets/images/gtbank.png';
// import imgFr from '@/assets/images/firstbank.png';

const names = [
  { name: 'Accessbank', url: '' },
  { name: 'Gtbank', url: '' },
  { name: 'Firstbank', url: '' },
];

const FinancialCarousel = () => {
  return (
    <div className="relative mx-auto p-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop
        navigation
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {names.map((item) => (
          <SwiperSlide key={item.name} className="md:basis-1/2">
            <FinancialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FinancialCarousel;
