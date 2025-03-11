import React from 'react';

const generateRandomCircles = (count) => {
  const circles = [];
  const sizes = {
    0: 16,
    1: 20,
    2: 30,
  };

  for (let i = 0; i < count; i++) {
    const size = Math.floor(Math.random() * 3);
    const sizeInPx = sizes[size];

    const maxLeft = 100 - sizeInPx / 5.76;
    const maxTop = 100 - sizeInPx / 2.56;

    circles.push({
      id: i,
      size: size,
      left: Math.floor(Math.random() * maxLeft),
      top: Math.floor(Math.random() * maxTop),
    });
  }

  return circles;
};

const circles = generateRandomCircles(20);

const MapLoadingSkeleton = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="relative w-full max-w-xl h-96 rounded-lg animate-pulse overflow-hidden">
        {circles.map((circle) => {
          let sizeClass = '';
          if (circle.size === 0) {
            sizeClass = 'w-6 h-6';
          } else if (circle.size === 1) {
            sizeClass = 'w-10 h-10';
          } else {
            sizeClass = 'w-16 h-16';
          }

          return (
            <div
              key={circle.id}
              className={`absolute rounded-full bg-gray-300 ${sizeClass}`}
              style={{
                left: `${circle.left}%`,
                top: `${circle.top}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MapLoadingSkeleton;
