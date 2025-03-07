import { cn, formatChartValue, getPercentagesMax } from '@/lib/utils';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvanceNestedCircles = ({ element }) => {
  return <AdvanceNestedCirclesContent element={element} />;
};

AdvanceNestedCircles.propTypes = ElementPropTypes;

export const AdvanceNestedCirclesContent = ({ element, isChartWrapperDisabled = false }) => {
  const sortElement = element.config.data.slice(0, element.config.bars).sort((a, b) => b.value - a.value);
  const percentage = getPercentagesMax(sortElement.map((i) => +i.value));

  return (
    <ElementChartWrapper element={element} className="h-full w-full" isDisabled={isChartWrapperDisabled}>
      <div
        style={{
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
          width: element.size.width,
        }}
        className="relative w-full h-full"
      >
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
                fontSize: element.config.labelFontSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                color: element.config.labelFontColor,
              }}
              className="text-center pt-2"
            >
              {element.config.showLabel && formatChartValue(item.value, element)}
            </div>
          </div>
        ))}
      </div>
    </ElementChartWrapper>
  );
};

AdvanceNestedCirclesContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceNestedCircles;
