import PropTypes from 'prop-types';

const ElementWrapperPresent = ({ element, children }) => {
  return (
    <div className="absolute" style={{ width: element.width, height: element.height, top: element.y, left: element.x }}>
      {children}
    </div>
  );
};

ElementWrapperPresent.propTypes = {
  element: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export default ElementWrapperPresent;
