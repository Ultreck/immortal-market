import { cn, getPercentagesMax } from '@/lib/utils';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const AdvanceNestedCircles = ({ element, active, highlighted, width, onClick, onChange }) => {
  const sortElement = element.config.data.sort((a, b) => b.value - a.value);
  const percentage = getPercentagesMax(sortElement.map((i) => +i.value));

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <div className="relative w-full">
        {sortElement.map((item, index) => (
          <div
            key={index}
            className={cn(
              `rounded-full aspect-square`,
              index > 0 && 'absolute bottom-0 left-1/2 transform -translate-x-1/2'
            )}
            style={{ width: `${percentage[index]}%`, backgroundColor: element.config.colors[index] }}
          >
            <div className="text-center text-white pt-2">{item.name}</div>
          </div>
        ))}
      </div>
    </ElementWrapper>
  );
};

AdvanceNestedCircles.propTypes = ElementPropTypes;

export default AdvanceNestedCircles;
