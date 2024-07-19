import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { Image } from '@nextui-org/react';
import { elementPropTypes } from '@/lib/elements.js';

const CanvasImage = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        onChange({ ...element, width: size.width, height: size.height });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e', 's', 'se']}
      lockAspectRatio
    >
      <div className="h-full w-full">
        <Image
          src={element.src}
          alt={element.text}
          className="w-full h-full object-cover pointer-events-none rounded-none z-[0]"
          removeWrapper
          style={element.style}
        />
      </div>
    </ElementWrapper>
  );
};

CanvasImage.propTypes = elementPropTypes;

export default CanvasImage;
