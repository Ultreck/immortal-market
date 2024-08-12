import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { Image } from '@nextui-org/react';

const Infographic = ({ element, active, highlighted, onClick, onChange }) => {
  return (
    <ElementWrapper element={element} onClick={onClick} onChange={onChange} active={active} highlighted={highlighted}>
      <div className="h-full w-full" style={element.style}>
        <Image
          src={element.config.src}
          alt={element.text}
          className="w-full h-full object-contain pointer-events-none rounded-none z-[0]"
          removeWrapper
          style={element.style}
        />
      </div>
    </ElementWrapper>
  );
};

Infographic.propTypes = ElementPropTypes;

export default Infographic;
