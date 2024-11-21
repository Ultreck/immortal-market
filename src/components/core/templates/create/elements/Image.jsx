import { Image as NextImage } from '@nextui-org/react';
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
    img: 'origin-[0_0] transition-transform duration-[250ms] group-hover:scale-[2]',
  },
  'img-hover-zoom--point-zoom': {
    img: 'origin-[65%_75%] transition-transform duration-[1000ms] ease-out group-hover:scale-[5]',
  },
  'img-hover-zoom--zoom-n-rotate': {
    img: 'transition-transform duration-[500ms] ease-in-out group-hover:scale-[2] group-hover:rotate-[25deg]',
  },
  'img-hover-zoom--slowmo': {
    img: 'origin-[50%_65%] transition-transform duration-[5000ms] filter brightness-[1.5] transition-filter duration-[3000ms] ease-in-out group-hover:scale-[3] group-hover:brightness-[1]',
  },
  'img-hover-zoom--brightness': {
    img: 'origin-center transition-transform duration-[2000ms] filter brightness-[0.5] transition-filter duration-[1500ms] ease-in-out group-hover:scale-[1.3] group-hover:brightness-[1]',
  },
  'img-hover-zoom--zoom-n-pan-h': {
    img: 'origin-[100%_0] scale-[1.4] transition-transform duration-[500ms] ease-in-out group-hover:scale-[1.5] group-hover:translate-x-[30%]',
  },
  'img-hover-zoom--zoom-n-pan-v': {
    img: 'origin-[0_0] scale-[1.4] transition-transform duration-[500ms] ease-in-out group-hover:scale-[1.25] group-hover:translate-y-[-30%]',
  },
  'img-hover-zoom--blur': {
    img: 'scale-[1.2] transition-transform duration-[1000ms] filter blur-[2px] transition-filter duration-[2000ms] ease-in-out group-hover:scale-[1] group-hover:blur-[0]',
  },
  'img-hover-zoom--colorize': {
    img: 'filter grayscale transition-transform duration-[500ms] transition-filter duration-[1500ms] ease-in-out group-hover:scale-[1.1] group-hover:grayscale-0',
  },
};

const ImageContent = ({ element }) => {
  return (
    <div
      className={cn('h-full w-full relative overflow-hidden group')}
      style={{ filter: `drop-shadow(${element.style.shadow})` }}
    >
      <NextImage
        src={element.config.src}
        alt={element.text}
        className={cn(
          'w-full h-full object-cover rounded-none z-[0]',
          element.config?.hover ? classes[element.config.hover]?.img || '' : ''
        )}
        removeWrapper
        style={{ ...element.style, transform: undefined }}
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
