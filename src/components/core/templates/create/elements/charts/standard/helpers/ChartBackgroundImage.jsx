import { ElementPropTypes } from '@/lib/prop-types.js';

const ChartBackgroundImage = ({ element }) => {
  return (
    <div
      style={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${element.config.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: element.config.styles.opacity,
        zIndex: 0,
      }}
    />
  );
};

ChartBackgroundImage.propTypes = ElementPropTypes;

export default ChartBackgroundImage;
