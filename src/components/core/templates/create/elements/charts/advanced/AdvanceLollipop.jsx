import { motion } from 'framer-motion';
import { formatChartValue, getPercentagesMax } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';

const AdvanceLollipop = ({ element }) => {
  return <AdvanceLollipopContent element={element} />;
};

AdvanceLollipop.propTypes = ElementPropTypes;

export const AdvanceLollipopContent = ({ element }) => {
  const percentages = getPercentagesMax(element.config.data.slice(0, element.config.bars).map((item) => item.value));

  return (
    <div
      style={{
        paddingTop: element.config.styles.yPadding,
        paddingLeft: element.config.styles.xPadding,
        paddingBottom: element.config.styles.yPadding,
        paddingRight: element.config.styles.xPadding,
      }}
      className="flex flex-col space-y-2 items-start"
    >
      {element.config.data.slice(0, element.config.bars).map((item, index) => {
        const color = element.config.colors[index % element.config.colors.length];

        return (
          <div className="relative w-full" key={index}>
            <div
              style={{
                fontSize: element.config.styles.labelSize,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                color: element.config.styles.valueAndLableColor,
              }}
              className="font-medium text-base text-black absolute left-0 top-0 z-[-1]"
            >
              {item.label}
            </div>
            <div className="flex items-center justify-start w-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentages[index]}%` }}
                transition={{ duration: 0.5 }}
                className={`h-2 rounded-l-full`}
                style={{ backgroundColor: color }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className={`font-bold w-max px-4 aspect-[16/12] flex items-center justify-center rounded-full`}
                style={{
                  backgroundColor: color,
                  fontSize: element.config.labelFontSize,
                  fontWeight: element.config.styles.lFontWeight,
                  fontStyle: element.config.styles.lFontStyle,
                  color: element.config.labelFontColor,
                }}
              >
                <span>{formatChartValue(item.value, element)}</span>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

AdvanceLollipopContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceLollipop;
