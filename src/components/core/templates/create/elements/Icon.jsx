import { TbIcons } from 'react-icons/tb';
import { createElement } from 'react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import icons from '@/lib/design/icons.js';
import PropTypes from 'prop-types';

const Icon = ({ element }) => {
  return <IconContent element={element} />;
};

export const IconPresent = ({ element }) => {
  return <IconContent element={element} />;
};

export const IconContent = ({ element }) => {
  return (
    <>
      {element.config?.name ? (
        <div className="!h-max" style={{ ...element.style, filter: `drop-shadow(${element.style.shadow})` }}>
          {createElement(icons.find((icon) => icon.name === element.config.name)?.icon, { size: element.size.width })}
        </div>
      ) : (
        <div className="h-full w-full flex flex-col text-center items-center justify-center px-4">
          <TbIcons size={20} className="opacity-60" />
        </div>
      )}
    </>
  );
};

Icon.propTypes = ElementPropTypes;

IconContent.propTypes = {
  element: PropTypes.object.isRequired,
};

IconPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Icon;
