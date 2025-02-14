'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import useCarousel from '@/hooks/useCarousel';
import React from 'react';
import PredictionHomeCards from '../market/PredictionHomeCards';
import { useTheme } from 'next-themes';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselDotButton, { DotButton } from './CarouselDotButton';

const PredictionCarousel = (props) => {
  const { setApi, plugin, current, count } = useCarousel();
  const { resolvedTheme: theme } = useTheme();
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = CarouselDotButton(emblaApi);
  return (
    <div className={`relative mx-auto  border-2 ${theme === 'dark' ? 'border-gray-500' : ''} my-8 border`}>
      <div className=" px-5 m-8 py-4 text-2xl font-semibold">
        <h1 className="text-sky-500">Prediction Home</h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        ref={emblaRef}
        className={`w-full `}
      >
        <CarouselContent>
          {slides.map((name, index) => (
            <CarouselItem key={index}>
              <PredictionHomeCards name={name} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="text">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${index === selectedIndex? 'bg-white' : 'bg-gray-800'}`}
            />
          ))}
        </div>
      </Carousel>
      <div className="py-2 absolute bottom-5 right-10 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default PredictionCarousel;
