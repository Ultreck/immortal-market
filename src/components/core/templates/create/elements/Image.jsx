import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

export const Image = ({ element }) => {
  return <ImageContent element={element} />;
};

export const ImagePresent = ({ element }) => {
  return <ImageContent element={element} />;
};

const classes = {
  'img-hover-zoom--quick-zoom': {
    img: 'origin-top-left transition-[transform_0.25s,visibility_0.25s] duration-300 group-hover:[transform:scale(2)]',
  },
  'img-hover-zoom--point-zoom': {
    img: '[transform-origin:65%_75%] transition-[transform,filter] duration-1000 ease-out group-hover:[transform:scale(5)]',
  },
  'img-hover-zoom--zoom-n-rotate': {
    img: 'transition-transform duration-500 ease-in-out group-hover:[transform:scale(2)_rotate(25deg)]',
  },
  'img-hover-zoom--slowmo': {
    img: '[transform-origin:50%_65%] transition-[transform,filter] duration-1000 ease-in-out [filter:brightness(150%)] group-hover:[transform:scale(3)] group-hover:[filter:brightness(100%)]',
  },
  'img-hover-zoom--brightness': {
    img: 'transition-[transform,filter] duration-1000 ease-in-out [transform-origin:center] [filter:brightness(50%)] group-hover:[filter:brightness(100%)] group-hover:[transform:scale(1.3)]',
  },
  'img-hover-zoom--zoom-n-pan-h': {
    img: 'transition-transform duration-500 ease-in-out [transform:scale(1.4)] origin-right group-hover:[transform:scale(1.5)_translateX(30%)]',
  },
  'img-hover-zoom--zoom-n-pan-v': {
    img: 'transition-transform duration-500 ease-in-out [transform:scale(1.4)] origin-top group-hover:[transform:scale(1.25)_translateY(-30%)]',
  },
  'img-hover-zoom--blur': {
    img: 'transition-[transform,filter] duration-1000 ease-in-out [filter:blur(2px)] [transform:scale(1.2)] group-hover:[filter:blur(0)] group-hover:[transform:scale(1)]',
  },
  'img-hover-zoom--colorize': {
    img: 'transition-[transform,filter] duration-500 ease-in-out [filter:grayscale(100%)] group-hover:[filter:grayscale(0)] group-hover:[transform:scale(1.1)]',
  },
};

const ImageContent = ({ element }) => {
  return (
    <div
      className={cn('h-full w-full relative overflow-hidden group')}
      style={{
        ...element.style,
        filter: `drop-shadow(${element.style.shadow})`,
      }}
    >
      <img
        src={element.config.src}
        alt={element.text}
        className={cn(
          'w-full h-full object-cover rounded-none z-[0]',
          element.config?.hover ? classes[element.config.hover]?.img || '' : ''
        )}
        style={{ transform: undefined }}
      />
    </div>
  );
};

Image.propTypes = ElementPropTypes;
ImageContent.propTypes = {
  element: PropTypes.object.isRequired,
};
ImagePresent.propTypes = {
  element: PropTypes.object.isRequired,
};
