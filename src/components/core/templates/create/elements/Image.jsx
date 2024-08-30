import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { Image } from '@nextui-org/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const CanvasImage = ({ element, active, highlighted, onClick, onChange }) => {
  return (
    <ElementWrapper element={element} onClick={onClick} onChange={onChange} active={active} highlighted={highlighted}>
      <div className="h-full w-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
        <Image
          src={element.config.src}
          alt={element.text}
          className="w-full h-full object-cover pointer-events-none rounded-none z-[0]"
          removeWrapper
          style={element.style}
        />
      </div>
    </ElementWrapper>
  );
};

CanvasImage.propTypes = ElementPropTypes;

export const CanvasImageContent = ({ element }) => {
  return (
    <div className="h-full w-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <Image
        src={element.config.src}
        alt={element.text}
        className="w-full h-full object-cover pointer-events-none rounded-none z-[0]"
        removeWrapper
        style={element.style}
      />
    </div>
  );
};

CanvasImageContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default CanvasImage;
