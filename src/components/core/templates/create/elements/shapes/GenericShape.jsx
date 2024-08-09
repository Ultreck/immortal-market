import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import shapes from '@/lib/templates/shapes.js';

const GenericShape = ({ element, active, highlighted, width, onClick, onChange }) => {
  const shape = shapes[element.type.replace('shape-', '')];

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
        <div className="w-full h-full" style={{ ...element.style, ...shape }} />
      </div>
    </ElementWrapper>
  );
};

GenericShape.propTypes = ElementPropTypes;

export default GenericShape;
