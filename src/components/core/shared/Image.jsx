import PropTypes from 'prop-types';

const Image = ({ src, alt, ...props }) => {
  return <img src={`https://statisense.s3.amazonaws.com/${src}`} alt={alt} {...props} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
