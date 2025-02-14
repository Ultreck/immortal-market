'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import useCarousel from '@/hooks/useCarousel';
import React from 'react';
import FinancialCard from '../market/FinancialCard';
import imgAc from "@/assets/images/accessbank.png"
import imgGt from "@/assets/images/gtbank.png"
import imgFr from "@/assets/images/firstbank.png"
const names = [{ name: 'Accessbank', url: imgAc }, { name: 'Gtbank', url: imgGt }, { name: 'Firstbank', url: imgFr }];
const FinancialCarousel = () => {
  const { setApi, plugin } = useCarousel();
  
  return (
    <div className="relative mx-auto p-5">
      <Carousel plugins={[plugin.current]} setApi={setApi}>
        <CarouselContent className="">
          {names.map((item) => (
            <CarouselItem key={item.name} className="md:basis-1/2">
              <FinancialCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default FinancialCarousel;
