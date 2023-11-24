import PropTypes from 'prop-types';

const bucket = import.meta.env.VITE_S3_BUCKET_NAME;

const Image = ({ src, alt, ...props }) => {
  return (
    <img
      src={src.startsWith('https://') ? src : `https://${bucket}.s3.amazonaws.com/${src}?timestamp=${Date.now()}`}
      alt={alt}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
