import { Image as NextImage } from '@nextui-org/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

export const Image = ({ element }) => {
  return <ImageContent element={element} />;
};

export const ImagePresent = ({ element }) => {
  return <ImageContent element={element} />;
};

const ImageContent = ({ element }) => {
  return (
    <div className="h-full w-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <NextImage
        src={element.config.src}
        alt={element.text}
        className="w-full h-full object-cover pointer-events-none rounded-none z-[0]"
        removeWrapper
        style={element.style}
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
