import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ElementPropTypes } from '@/lib/prop-types';
import PropTypes from 'prop-types';

const AdvancedStackedCard = ({ element }) => {
  return <AdvancedStackedCardContent element={element} />;
};

AdvancedStackedCard.propTypes = ElementPropTypes;

export const AdvancedStackedCardContent = ({ element }) => {
  const { data, colors, bars } = element.config;

  useEffect(() => {}, [element]);
  return (
    <div
      style={{
        paddingTop: element.config.styles.yPadding,
        paddingLeft: element.config.styles.xPadding,
        paddingBottom: element.config.styles.yPadding,
        paddingRight: element.config.styles.xPadding,
        width: element.width,
        height: element.height,
        opacity: element.style.opacity,
      }}
    >
      {data.slice(0, bars).map((item, index) => (
        <motion.div
          key={item.range}
          className={`rounded-lg p-4 text-center`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          style={{
            width: `${85 + index * 5}%`,
            marginLeft: `${7.5 - index * 2.5}%`,
            backgroundColor: colors[index],
            fontFamily: 'Arial, sans-serif',
          }}
          whileHover={{ scale: 1.1 }}
        >
          <>
            <div
              style={{
                fontFamily: 'Arial, sans-serif',
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                fontSize: element.config.styles.labelSize || '18px',
                color: element.config.styles.valueAndLableColor,
              }}
              className="text-sm mb-1 text-black"
            >
              {item.range}
            </div>
            <motion.div
              className="font-bold text-black"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              style={{
                fontFamily: 'Verdana, sans-serif',
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                fontSize: element.config.styles.valueSize || '18px',
                color: element.config.styles.valueAndLableColor,
              }}
            >
              {item.percentage}%
            </motion.div>
          </>
        </motion.div>
      ))}
    </div>
  );
};

AdvancedStackedCardContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancedStackedCard;
