import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import FinancialCard from '@/pages/market/components/gaming/FinancialCard.jsx';


const names = [
  { name: 'Accessbank', url: '/images/accessbank.png' },
  { name: 'Gtbank', url: '/images/Gtb.png' },
  { name: 'Firstbank', url: '/images/Firstb.png' },
];

const FinancialCarousel = () => {
  return (
    <div className="relative mx-auto p-5">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop
        navigation
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {names.map((item) => (
          <SwiperSlide key={item.name} className="">
            <FinancialCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FinancialCarousel;
