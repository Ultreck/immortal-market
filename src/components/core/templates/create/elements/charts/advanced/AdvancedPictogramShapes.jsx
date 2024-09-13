import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import icons from '@/lib/design/icons';

const AdvancedPictogramShapes = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e']}
      editable
      fit
    >
      <AdvancedPictogramShapesContent element={element} />
    </ElementWrapper>
  );
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
  const { icon1, icon2, color1, color2, icon1count, icon2count } = element.config;
  const Icon1 = icons.find((icon) => icon.name === icon1).icon;
  const Icon2 = icons.find((icon) => icon.name === icon2).icon;
  const numberOfIcons = icon1count + icon2count;

  return (
    <div className="space-y-6 w-full">
      <div className={`grid ${classes.grid[numberOfIcons] || classes.grid.default} gap-3`}>
        {Array.from({ length: icon1count }, (_) => (
          <Icon1 size={48} color={color1} />
        ))}
        {Array.from({ length: icon2count }, (_) => (
          <Icon2 size={48} color={color2} />
        ))}
      </div>
    </div>
  );
};

AdvancedPictogramShapesContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancedPictogramShapes;
