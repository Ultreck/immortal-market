import { ElementPropTypes } from '@/lib/prop-types';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { formatChartValue } from '@/lib/utils';

const AdvancePercentageCard = ({ element }) => {
  return <AdvancePercentageCardContent element={element} />;
};

AdvancePercentageCard.propTypes = ElementPropTypes;

const AdvancePercentageCardContent = ({ element }) => {
  const data = element.config.data.slice(0, element.config.bars);
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
      {data
        .sort((a, b) => a.percentage - b.percentage)
        .map((item, index) => {
          const cardHeight = (item.percentage / 100) * element.height - 50;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`w-full text-white text-center flex flex-col items-center justify-center`}
              style={{
                height: `${cardHeight}px`,
                backgroundColor: element.config.colors[index],
                color: element.config.labelFontColor,
              }}
            >
              <p className="p-2">{item.age}</p>
              <p style={{ fontSize: element.config.labelFontSize, lineHeight: '1' }} className="text-sm">
                {formatChartValue(item.percentage, element)}
              </p>
            </motion.div>
          );
        })}
    </div>
  );
};

AdvancePercentageCardContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancePercentageCard;
