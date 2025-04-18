import { useEffect, useRef, useState } from 'react';
import { addHours, differenceInSeconds } from 'date-fns';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

function TimeoutComponent({className, text, endTime, startTime, startIn, setstartIn, shouldStart, setshouldStart }) {
  const intervalRef = useRef(null);
  const [remainingTime, setRemainingSeconds] = useState(0);
  const sessionType = JSON.parse(localStorage.getItem('time-function'))?.split('-')[0];
  
console.log(shouldStart, endTime, startTime);

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
    } else {
      const updateRemaining = () => {
        const nowUTC = new Date();
        const start = new Date(startTime);
        const end = new Date(endTime);
        if (nowUTC < start) {
          setRemainingSeconds(differenceInSeconds(end, start));
        } else if (nowUTC >= start && nowUTC <= end) {
          setRemainingSeconds(differenceInSeconds(end, nowUTC));
        } else {
          setRemainingSeconds(0);
        }
      };

      updateRemaining(); // Initial call
      const interval = setInterval(updateRemaining, 1000);

      return () => clearInterval(interval); // Cleanup
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [shouldStart, endTime, startTime]);

  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;    
    return `${hours > 0 ? `${String(hours).padStart(2, '0')}:` : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex gap-2 pb-5 w-64 justify-end mt-3">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-gray-400">{`${sessionType} ${sessionType > 1 ? 'minutes' : 'minute'} ${text}`}</p>
        <div className={cn("text-3xl text-center font-mono text-[#4691c5] flex mt-1", className)}>
          <div className="">
            <div className="">{'00'}:</div>
          </div>
          {startIn > 0 ? (
            <div className="">
              <div className="">{formatTime(startIn)}</div>
            </div>
          ) : (
            <div className="">
              <div className="">{formatTime(remainingTime)}</div>
            </div>
          )}
        </div>
      </div>
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
