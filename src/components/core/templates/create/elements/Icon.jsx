import ElementWrapper from '../ElementWrapper';
import { TbIcons } from 'react-icons/tb';
import { createElement, useRef } from 'react';
import { useMount } from 'react-use';
import { ElementPropTypes } from '@/lib/prop-types.js';
import icons from '@/lib/design/icons.js';
import PropTypes from 'prop-types';

const Icon = ({ element, active, highlighted, width, onClick, onChange }) => {
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
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      fit
    >
      <IconContent element={element} />
    </ElementWrapper>
  );
};

export const IconContent = ({ element }) => {
  return (
    <>
      {element.config?.name ? (
        <div className="!h-max" style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }}>
          {createElement(icons.find((icon) => icon.name === element.config.name)?.icon, { size: element.width })}
        </div>
      ) : (
        <div className="h-full w-full flex flex-col text-center items-center justify-center px-4">
          <TbIcons size={20} className="opacity-60" />
        </div>
      )}
    </>
  );
};

export const IconPresent = ({ element }) => {
  return <IconContent element={element} />;
};

Icon.propTypes = ElementPropTypes;

IconContent.propTypes = {
  element: PropTypes.object.isRequired,
};

IconPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Icon;
