import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

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
      <DataContent element={element} />
    </ElementWrapper>
  );
};

export const DataPresent = ({ element }) => {
  return <DataContent element={element} />;
};

const DataContent = ({ element }) => <div style={{ ...element.style }}>{element.config.content}</div>;

Data.propTypes = ElementPropTypes;
DataPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
DataContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Data;
