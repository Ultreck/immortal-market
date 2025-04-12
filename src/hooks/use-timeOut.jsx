import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function TimeoutComponent({ endTime, startIn, setstartIn, shouldStart, setshouldStart }) {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (shouldStart) {
      intervalRef.current = setInterval(() => {
        const now = new Date();
        const end = new Date(endTime);
        const diffInSeconds = Math.floor((now.getTime() - end.getTime()) / 1000);
        const countdown = 30 - diffInSeconds;
        setstartIn(countdown);
        if (countdown <= 0 || countdown > 30) {
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
  }, [shouldStart, endTime]);

  return (
    <div className="flex gap-2">
      {startIn > 0 && (
        <div className="flex flex-col items-center">
          <div className="text-2xl text-center font-mono text-[#4691c5] flex mt-1">
            <div className="">
              <div className="">{'00'}:</div>
            </div>
            <div className="">
              <div className="">{String(startIn).padStart(2, '0')}</div>
            </div>
          </div>
          <p className="text-base text-gray-400 font-normal">Time remaining</p>
        </div>
      )}
    </div>
  );
}
TimeoutComponent.propTypes = {
  endTime: PropTypes.string.isRequired,
  startIn: PropTypes.number.isRequired,
  setstartIn: PropTypes.func.isRequired,
  shouldStart: PropTypes.bool.isRequired,
  setshouldStart: PropTypes.func.isRequired,
};

export default TimeoutComponent;
