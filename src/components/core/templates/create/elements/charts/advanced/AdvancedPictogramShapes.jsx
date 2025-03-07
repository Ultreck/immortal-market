import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import icons from '@/lib/design/icons';
import { formatChartValue } from '@/lib/utils.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvancedPictogramShapes = ({ element }) => {
  return <AdvancedPictogramShapesContent element={element} />;
};

AdvancedPictogramShapes.propTypes = ElementPropTypes;

const classes = {
  grid: {
    10: 'grid-cols-5',
    20: 'grid-cols-10',
    30: 'grid-cols-10',
    40: 'grid-cols-10',
    50: 'grid-cols-10',
    60: 'grid-cols-10',
    70: 'grid-cols-10',
    80: 'grid-cols-10',
    90: 'grid-cols-10',
    100: 'grid-cols-10',
    default: 'grid-cols-5',
  },
  size: {
    10: 'w-12 h-12',
    20: 'w-8 h-8',
    30: 'w-8 h-8',
    40: 'w-8 h-6',
    50: 'w-6 h-6',
    60: 'w-6 h-6',
    70: 'w-6 h-6',
    80: 'w-6 h-6',
    90: 'w-4 h-4',
    100: 'w-4 h-4',
    default: 'w-12 h-12',
  },
};

export const AdvancedPictogramShapesContent = ({ element, isChartWrapperDisabled = false }) => {
  const {
    icon1,
    icon2,
    icon3,
    color1,
    color2,
    color3,
    icon1count,
    icon2count,
    icon3count,
    showIcon1,
    showIcon2,
    showIcon3,
    showLabel,
  } = element.config;

  const Icon1 = icons.find((icon) => icon.name === icon1).filledIcon;
  const Icon2 = icons.find((icon) => icon.name === icon2).filledIcon;
  const Icon3 = icons.find((icon) => icon.name === icon3).filledIcon;
  const numberOfIcons = icon1count + icon2count + icon3count;

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        style={{
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
          width: element.size.width,
          height: element.size.height,
        }}
        className="space-y-6 w-full"
      >
        {showLabel && (
          <div
            style={{
              fontSize: element.config.labelFontSize,
              fontWeight: element.config.styles.lFontWeight,
              fontStyle: element.config.styles.lFontStyle,
              color: element.config.labelFontColor,
            }}
            className="flex space-x-3 capitalize"
          >
            <>
              {showIcon1 && (
                <p>
                  {icon1} - {formatChartValue(icon1count, element)}
                </p>
              )}
              {showIcon2 && (
                <p>
                  {icon2} - {formatChartValue(icon2count, element)}
                </p>
              )}
              {showIcon3 && (
                <p>
                  {icon3} - {formatChartValue(icon3count, element)}
                </p>
              )}
            </>
          </div>
        )}
        <div className={`grid ${classes.grid[numberOfIcons] || classes.grid.default} gap-3`}>
          {showIcon1 &&
            Array.from({ length: icon1count }, () => <Icon1 key={crypto.randomUUID()} size={48} color={color1} />)}
          {showIcon2 &&
            Array.from({ length: icon2count }, () => <Icon2 key={crypto.randomUUID()} size={48} color={color2} />)}
          {showIcon3 &&
            Array.from({ length: icon3count }, () => <Icon3 key={crypto.randomUUID()} size={48} color={color3} />)}
        </div>
      </div>
    </ElementChartWrapper>
  );
};

AdvancedPictogramShapesContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvancedPictogramShapes;
