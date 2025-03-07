import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';

export const Button = ({ element }) => {
  return <ButtonContent element={element} className="cursor-auto" />;
};

export const ButtonPresent = ({ element }) => {
  return <ButtonContent element={element} className="cursor-pointer hover:brightness-125" />;
};

export const ButtonPreview = ({ element }) => {
  return <ButtonContent element={element} />;
};

const ButtonContent = ({ element, className = '' }) => {
  return (
    <button
      style={{
        ...element.style,
        width: element.size.width,
        height: element.size.height,
        filter: element.style.shadow ? `drop-shadow(${element.style.shadow})` : '',
      }}
      className={cn('transition-all duration-300', className)}
    >
      {element.config.text}
    </button>
  );
};

Button.propTypes = {
  element: PropTypes.object.isRequired,
};
ButtonPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
ButtonPreview.propTypes = {
  element: PropTypes.object.isRequired,
};
ButtonContent.propTypes = {
  element: PropTypes.object.isRequired,
  className: PropTypes.string,
};
