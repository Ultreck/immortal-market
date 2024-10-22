import PropTypes from 'prop-types';
import ElementTooltip from '@/components/core/templates/create/ElementTooltip.jsx';

const ElementWrapperPresent = ({ element, children }) => {
  return (
    <div className="absolute" style={{ width: element.width, height: element.height, top: element.y, left: element.x }}>
      <ElementTooltip element={element}>{children}</ElementTooltip>
    </div>
  );
};

ElementWrapperPresent.propTypes = {
  element: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export default ElementWrapperPresent;

