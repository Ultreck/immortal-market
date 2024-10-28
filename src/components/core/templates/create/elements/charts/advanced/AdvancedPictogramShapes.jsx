import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import icons from '@/lib/design/icons';

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

export const AdvancedPictogramShapesContent = ({ element }) => {
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
  const Icon3 = icons.find((icon) => icon.name === icon3 || 'triangle').filledIcon;
  const numberOfIcons = icon1count + icon2count + icon3count;

  return (
    <div
      style={{
        paddingTop: element.config.styles.yPadding,
        paddingLeft: element.config.styles.xPadding,
        paddingBottom: element.config.styles.yPadding,
        paddingRight: element.config.styles.xPadding,
      }}
      className="space-y-6 w-full"
    >
      {showLabel && (
        <div
          style={{
            fontSize: element.config.styles.labelSize,
            fontWeight: element.config.styles.lFontWeight,
            fontStyle: element.config.styles.lFontStyle,
            color: element.config.styles.valueAndLableColor,
          }}
          className="flex space-x-3 capitalize"
        >
          <>
            {showIcon1 && (
              <p>
                {icon1} - {icon1count}
              </p>
            )}
            {showIcon2 && (
              <p>
                {icon2} - {icon2count}
              </p>
            )}
            {showIcon3 && (
              <p>
                {icon3} - {icon3count}
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
  );
};

AdvancedPictogramShapesContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancedPictogramShapes;
