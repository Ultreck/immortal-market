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
  'shape-four-pointed-star': 'polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)',
  'shape-five-pointed-star': 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
  'shape-six-pointed-star': 'polygon(0 22%, 35% 24%, 50% 0, 65% 24%, 100% 22%, 75% 50%, 100% 78%, 65% 76%, 50% 100%, 35% 76%, 0 78%, 25% 50%)',
  'shape-eight-pointed-star': 'polygon(50% 0%, 60% 25%, 90% 25%, 75% 45%, 85% 75%, 50% 60%, 15% 75%, 25% 45%, 10% 25%, 40% 25%)',
  'shape-parallelogram': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
  'shape-trapeziod': 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
  'shape-pentagon': 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
  'shape-hexagon': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  'shape-heptagon': 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
  'shape-octagon': 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  'shape-chevron-left': 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
  'shape-chevron-right': 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
  'shape-close': 'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
  'shape-message': 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
  'shape-cross': 'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)',
  'shape-book-mark': 'polygon(0 100%, 50% 80%, 100% 100%, 100% 0, 48% 0, 0 0)',
  'shape-arrow-concave': 'polygon(0 0, 100% 0, 86% 50%, 100% 100%, 0 100%, 16% 50%)',
  'shape-rabbet': 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
};

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
      <div className="w-full h-full" style={{ filter: `drop-shadow(${element.style.shadow})` }}>
        <div
          className="h-full"
          style={{
            ...element.style,
            clipPath: paths[element.type],
          }}
        />
      </div>
    </ElementWrapper>
  );
};

GenericShape.propTypes = ElementPropTypes;

export default GenericShape;
