import Logo from '@/components/core/shared/Logo.jsx';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { useRef } from 'react';
import { useMount } from 'react-use';
import { elementPropTypes } from '@/lib/elements.js';

const SsLogo = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      highlighted={highlighted}
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

SsLogo.propTypes = elementPropTypes;

export default SsLogo;
