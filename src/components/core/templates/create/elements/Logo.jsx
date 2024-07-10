import Logo from '@/components/core/shared/Logo.jsx';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useMount } from 'react-use';

const SsLogo = ({ element, active, width, onClick, onChange }) => {
  const el = useRef(null);

  useMount(() => {
    if (element.height <= 0) {
      onChange({ ...element, height: el.current.scrollHeight });
    }
  });

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      onResize={(size) => {
        el.current.style.width = `${size.width}px`;
        el.current.style.height = `${el.current.scrollHeight}px`;
        onChange({ ...element, width: size.width, height: el.current.scrollHeight });
      }}
      maxWidth={width}
      active={active}
      resizeHandles={['e']}
      lockAspectRatio
      constrained
    >
      <div ref={el} className="!h-max">
        <Logo width={element.width} />
      </div>
    </ElementWrapper>
  );
};

SsLogo.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.number,
};

export default SsLogo;
