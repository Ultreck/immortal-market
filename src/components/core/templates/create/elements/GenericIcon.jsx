import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import { iconTypes } from '@/lib/icon-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import { createElement, useRef } from 'react';
import { useMount } from 'react-use';

const GenericIcon = ({ element, active, highlighted, width, onClick, onChange }) => {
  const icon = iconTypes.find((icon) => icon.name === element.type.replace('icon-', ''));
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
      onChange={(values) => {
        el.current.style.width = `${values.width}px`;
        el.current.style.height = `${el.current.scrollHeight}px`;
        return onChange({ ...element, ...values, height: el.current.scrollHeight });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <div ref={el} className="!h-max" style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }}>
        {createElement(icon.icon, { size: element.width, color: element.style.color })}
      </div>
    </ElementWrapper>
  );
};

GenericIcon.propTypes = ElementPropTypes;

export default GenericIcon;

