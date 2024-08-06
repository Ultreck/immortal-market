import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { Image } from '@nextui-org/react';
import { ElementPropTypes } from '@/lib/prop-types.js';

const CanvasImage = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      lockAspectRatio
    >
      <div className="h-full w-full">
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

export default CanvasImage;
