import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const CountUpNumber = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
      fit
    >
      <CountUpNumberContent element={element} />
    </ElementWrapper>
  );
};

export const CountUpNumberPresent = ({ element }) => {
  return <CountUpNumberContent element={element} />;
};

export const CountUpNumberContent = ({ element }) => {
  return (
    <div style={element.style}>
      <CountUp start={element.config.start} end={element.config.end} duration={element.config.duration} />
    </div>
  );
};

CountUpNumber.propTypes = ElementPropTypes;
CountUpNumberPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
CountUpNumberContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default CountUpNumber;
