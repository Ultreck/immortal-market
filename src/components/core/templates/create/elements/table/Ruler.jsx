import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

const Ruler = ({ type, sizes, onResize }) => {
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

      console.log(e.clientX);

      const currentPos = e.clientX;
      const diff = currentPos - dragging.startPos;
      // const max = 100 - sizes.filter((size, i) => i !== dragging.index).reduce((acc, cur) => acc + cur, 0);
      const newSize = Math.min(Math.max(10, dragging.startSize + diff), 90 - 10 * (sizes.length - 1));

      // console.log({ max });

      onResize(dragging.index, newSize);
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
        'bg-gray-100 absolute bottom-[calc(100%+10px)] left-0 space-x-2 flex items-center light',
        type === 'horizontal' ? 'h-6 flex w-full' : 'w-6 flex-col h-full'
      )}
    >
      {sizes.map((size, index) => (
        <div
          key={index}
          className={cn(
            'relative flex items-center justify-center text-xs text-gray-500 bg-gray-200',
            type === 'horizontal' ? 'h-full' : 'w-full'
          )}
          style={{
            [type === 'horizontal' ? 'width' : 'height']: `${size}%`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">{index + 1}</div>
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
};

export default Ruler;
