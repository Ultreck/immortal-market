import { cn, getPercentagesMax } from '@/lib/utils';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceNestedCircles = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      <AdvanceNestedCirclesContent element={element} />
    </ElementWrapper>
  );
};

AdvanceNestedCircles.propTypes = ElementPropTypes;

export const AdvanceNestedCirclesContent = ({ element }) => {
  const sortElement = element.config.data.slice(0, element.config.bars).sort((a, b) => b.value - a.value);
  const percentage = getPercentagesMax(sortElement.map((i) => +i.value));

  return (
    <div
    style={{
      paddingTop: element.config.styles.yPadding,
      paddingLeft: element.config.styles.xPadding,
      paddingBottom: element.config.styles.yPadding,
      paddingRight: element.config.styles.xPadding,
    }}
    className="relative w-full">
      {sortElement.map((item, index) => (
        <div
          key={index}
          className={cn(
            `rounded-full aspect-square`,
            index > 0 && 'absolute bottom-0 left-1/2 transform -translate-x-1/2'
          )}
          style={{ width: `${percentage[index]}%`, backgroundColor: element.config.colors[index] }}
        >
          <div
          style={{
            fontSize: element.config.styles.labelSize,
            fontWeight: element.config.styles.lFontWeight,
            fontStyle: element.config.styles.lFontStyle,
            color: element.config.styles.valueAndLableColor,
          }}
           className="text-center text-white pt-2">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

AdvanceNestedCirclesContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceNestedCircles;
