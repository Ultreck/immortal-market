import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const Data = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      fit
    >
      <div style={{ ...element.style }}>100%</div>
    </ElementWrapper>
  );
};

Data.propTypes = ElementPropTypes;

export default Data;
