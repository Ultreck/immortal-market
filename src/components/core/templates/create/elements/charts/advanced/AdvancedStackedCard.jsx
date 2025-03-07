import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ElementPropTypes } from '@/lib/prop-types';
import PropTypes from 'prop-types';
import { formatChartValue } from '@/lib/utils.js';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvancedStackedCard = ({ element }) => {
  return <AdvancedStackedCardContent element={element} />;
};

AdvancedStackedCard.propTypes = ElementPropTypes;

export const AdvancedStackedCardContent = ({ element, isChartWrapperDisabled = false }) => {
  const { data, colors, bars, alignment } = element.config;

  const justifyContentMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  useEffect(() => {}, [element]);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: justifyContentMap[alignment],
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
          width: element.size.width,
          opacity: element.style.opacity,
        }}
      >
        {data
          .slice(0, bars)
          .sort((a, b) => a.value - b.value)
          .map((item, index) => (
            <motion.div
              key={item.range}
              className="rounded-lg p-4 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                width: `${85 + index * 5}%`,
                height: `${(item.value / 100) * 400}px`,
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
                    color: element.config.labelFontColor,
                  }}
                  className="text-sm mb-1 text-black"
                >
                  {element.config.showLabel && item.range}
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
                    fontSize: element.config.labelFontSize || '18px',
                    color: element.config.labelFontColor,
                  }}
                >
                  {element.config.showLabel && formatChartValue(item.value, element)}
                </motion.div>
              </>
            </motion.div>
          ))}
      </div>
    </ElementChartWrapper>
  );
};

AdvancedStackedCardContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvancedStackedCard;
