import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

export const CountUpNumber = ({ element }) => {
  return <CountUpNumberContent element={element} />;
};

export const CountUpNumberPresent = ({ element }) => {
  return <CountUpNumberContent element={element} />;
};

export const CountUpNumberPreview = () => {
  return <CountUpNumberContent element={{ config: { start: 0, end: 100, duration: 10 } }} />;
};

export const CountUpNumberContent = ({ element }) => {
  return (
    <div style={{ ...element.style, filter: `drop-shadow(${element.style?.shadow})` }}>
      <CountUp
        start={element.config.start}
        end={element.config.end}
        duration={element.config.duration}
        enableScrollSpy
        prefix={element?.config?.prefix || undefined}
        suffix={element?.config?.suffix || undefined}
      >
        {({ countUpRef }) => <span ref={countUpRef} />}
      </CountUp>
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
