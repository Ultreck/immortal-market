import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const Ruler = ({ type, width, sizes, onResize }) => {
  const [dragging, setDragging] = useState(null);
  const rulerRef = useRef(null);

  const handleMouseDown = (index, e) => {
    setDragging({
      index,
      startPos: e.clientX,
      startSize: sizes[index],
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;
      const currentPos = e.clientX;
      const diff = currentPos - dragging.startPos;
      const startSize = dragging.startSize;
      const max = width - sizes.filter((s, i) => i !== dragging.index).reduce((acc, s) => acc + s, 0);
      const newSize = Math.min(Math.max(10, startSize + diff), max);
      onResize(dragging.index, newSize, startSize);
    };

    const handleMouseUp = () => {
      setDragging(null);
    };

    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, onResize, type, sizes]);

  return (
    <div
      ref={rulerRef}
      className={cn(
        'absolute bottom-[calc(100%+10px)] left-0 space-x-2 flex items-center light',
        type === 'horizontal' ? 'h-2 flex w-full' : 'w-6 flex-col h-full'
      )}
    >
      {sizes.map((size, index) => (
        <div
          key={index}
          className={cn(
            'relative flex items-center justify-center text-xs text-gray-500 bg-gray-200 rounded',
            type === 'horizontal' ? 'h-full' : 'w-full'
          )}
          style={{
            [type === 'horizontal' ? 'width' : 'height']: `${size}px`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center"></div>
          <div
            className={cn(
              'absolute cursor-pointer bg-blue-400 opacity-0 hover:opacity-50',
              type === 'horizontal' ? 'right-0 w-1 h-full cursor-col-resize' : 'bottom-0 h-1 w-full cursor-row-resize'
            )}
            onMouseDown={(e) => handleMouseDown(index, e)}
          />
        </div>
      ))}
    </div>
  );
};

Ruler.propTypes = {
  type: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onResize: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default Ruler;
