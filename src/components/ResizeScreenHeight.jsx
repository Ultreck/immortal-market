import { useCallback, useLayoutEffect } from 'react';

const ResizeScreenHeight = () => {
  const handleResize = useCallback(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return <></>;
};

export default ResizeScreenHeight;
