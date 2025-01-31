import PropTypes from 'prop-types';

export const Button = ({ element }) => {
  return <ButtonContent element={element} />;
};

export const ButtonPresent = ({ element }) => {
  return <ButtonContent element={element} />;
};

export const ButtonPreview = ({ element }) => {
  return <ButtonContent element={element} />;
};

const ButtonContent = ({ element }) => {
  return (
    <button
      style={{
        ...element.style,
        width: element.width,
        height: element.height,
        filter: element.style.shadow ? `drop-shadow(${element.style.shadow})` : 'none',
      }}
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
};
