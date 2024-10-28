import { ElementPropTypes } from '@/lib/prop-types';
import { motion } from 'framer-motion';
import { Button, Tooltip } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

const AdvancePercentageCard = ({ element }) => {
  return <AdvancePercentageCardContent element={element} />;
};

AdvancePercentageCard.propTypes = ElementPropTypes;

const AdvancePercentageCardContent = ({ element }) => {
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
      {element.config.data.slice(0, element.config.bars).map((item, index) => (
        <Tooltip
          key={index}
          size="lg"
          content={
            <div className="px-2 py-4 w-[150px]">
              <div className="font-bold text-5xl">{item.percentage}</div>
              <div className="mt-5">
                <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.</p>
                <p className="text-xs mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, autem.
                </p>
              </div>

              <Button size="sm" className="mt-10 bg-white text-black">
                View
              </Button>
            </div>
          }
          placement="top-end"
        >
          <motion.div
            key={item.age}
            className={cn(
              `flex justify-between items-center p-4`,
              index === 0 ? 'rounded-tr-xl rounded-tl-xl' : '',
              index === element.config.data.length - 1 ? 'rounded-br-xl rounded-bl-xl' : ''
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ backgroundColor: element.config.colors[index] }}
          >
            <span
              style={{
                fontSize: `${element.config.styles.labelSize}px`,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                color: element.config.styles.valueAndLableColor,
              }}
              className="text-gray-800 font-medium"
            >
              {item.age}
            </span>
            <motion.span
              className="text-gray-800 font-bold"
              style={{
                fontSize: `${Math.max(item.percentage + element.config.styles.valueSize)}px`,
                fontWeight: element.config.styles.lFontWeight,
                fontStyle: element.config.styles.lFontStyle,
                color: element.config.styles.valueAndLableColor,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {item.percentage}%
            </motion.span>
          </motion.div>
        </Tooltip>
      ))}
    </div>
  );
};

AdvancePercentageCardContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvancePercentageCard;
