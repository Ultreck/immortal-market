import { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const StationaryClickDetector = ({ onStationaryClick, children, threshold = 5 }) => {
  const ref = useRef(null);
  const [mouseDownPosition, setMouseDownPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setCurrentPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseDown = useCallback((e) => {
    setMouseDownPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleClick = useCallback(
    (e) => {
      const dx = currentPosition.x - mouseDownPosition.x;
      const dy = currentPosition.y - mouseDownPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance <= threshold) onStationaryClick(e);
    },
    [currentPosition, mouseDownPosition, onStationaryClick, threshold]
  );

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onClick={handleClick}>
      {children}
    </div>
  );
};

StationaryClickDetector.propTypes = {
  onStationaryClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  threshold: PropTypes.number,
};

export default StationaryClickDetector;
