import { useEffect, useRef, useState } from 'react';

function TimeoutComponent({ endTime, startIn, setstartIn, shouldStart, setshouldStart }) {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (shouldStart) {
      intervalRef.current = setInterval(() => {
        const now = new Date();
        const end = new Date(endTime);
        const diffInSeconds = Math.floor((now.getTime() - end.getTime()) / 1000);
        const countdown = 60 - diffInSeconds;
        console.log(countdown);
        setstartIn(countdown);
        if (countdown <= 0 || countdown > 60) {
          clearInterval(intervalRef.current);
          setshouldStart(false);
          setstartIn(0);
          console.log('Interval stopped');
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [shouldStart]);

  return (
    <>
      Starting in: {startIn}
    </>
  );
}

export default TimeoutComponent;
