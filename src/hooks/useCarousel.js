'use client'
import Autoplay from 'embla-carousel-autoplay';
import React, { useEffect, useState } from 'react';
const useCarousel = () => {
    const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 5000, loop: true, stopOnInteraction: false })
  );

  useEffect(() => {
    if(!api) return
  setCount(api.scrollSnapList().length);
  setCurrent(api.selectedScrollSnap() + 1);
  api.on('select', () => {
    setCurrent(api.selectedScrollSnap() + 1);
  })  
  }, [api]);
  return {
    setApi,
    plugin,
    current,
    count,
  }
}

export default useCarousel