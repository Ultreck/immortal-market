import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import shapes from '@/lib/design/shapes.js';
import PropTypes from 'prop-types';

const GenericShape = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <GenericShapeContent element={element} />
    </ElementWrapper>
  );
};

GenericShape.propTypes = ElementPropTypes;

export const GenericShapeContent = ({ element }) => {
  const shape = shapes[element.type.replace('shape-', '')];

  return (
    <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
      <div className="w-full h-full" style={{ ...element.style, ...shape }} />
    </div>
  );
};

GenericShapeContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default GenericShape;
