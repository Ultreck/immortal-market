import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

// prettier-ignore
const paths = {
  'shape-rectangle': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  'shape-circle': 'ellipse(50% 50% at 50% 50%)',
  'shape-triangle': 'polygon(50% 0%, 0% 100%, 100% 100%)',
  'shape-rhombus': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  'shape-arrow-left': 'polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)',
  'shape-arrow-right': 'polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)',
  'shape-arrow-up': 'polygon(20% 100%, 20% 40%, 0% 40%, 50% 0%, 100% 40%, 80% 40%, 80% 100%)',
  'shape-arrow-down': 'polygon(20% 0%, 20% 60%, 0% 60%, 50% 100%, 100% 60%, 80% 60%, 80% 0%)',
  'shape-arrow-up-down': 'polygon(50% 0%, 100% 40%, 75% 40%, 75% 60%, 100% 60%, 50% 100%, 0% 60%, 25% 60%, 25% 40%, 0% 40%)',
};

const GenericShape = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      resizeHandles={['se', 'e', 's']}
    >
      <div className="h-full" style={{ ...element.style, clipPath: paths[element.type] }} />
    </ElementWrapper>
  );
};

GenericShape.propTypes = ElementPropTypes;

export default GenericShape;
