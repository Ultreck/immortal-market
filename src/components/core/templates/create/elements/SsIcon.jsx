import ElementWrapper from '../ElementWrapper';
import { TbIcons } from 'react-icons/tb';
import { iconTypes } from '@/lib/icon-types';
import { createElement, useRef } from 'react';
import { useMount } from 'react-use';
import { ElementPropTypes } from '@/lib/prop-types.js';

const SsIcon = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      {element.config?.name ? (
        <div ref={el} className="!h-max" style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }}>
          {createElement(iconTypes.find((icon) => icon.name === element.config.name)?.icon, { size: element.width })}
        </div>
      ) : (
        <div className="h-full w-full flex flex-col text-center items-center justify-center px-4">
          <TbIcons size={20} className="opacity-60" />
        </div>
      )}
    </ElementWrapper>
  );
};

SsIcon.propTypes = ElementPropTypes;

export default SsIcon;
