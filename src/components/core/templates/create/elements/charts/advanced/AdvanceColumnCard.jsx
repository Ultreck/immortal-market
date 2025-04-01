import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Button, Tooltip } from '@heroui/react';
import { ElementPropTypes } from '@/lib/prop-types';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

const AdvanceColumnCard = ({ element }) => {
  return <AdvanceColumnCardElementContent element={element} />;
};

AdvanceColumnCard.propTypes = ElementPropTypes;

export const AdvanceColumnCardElementContent = ({ element, isChartWrapperDisabled = false }) => {
  const { data, bars, colors, showLabel } = element.config;

  useEffect(() => {}, [element]);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        className="flex flex-col"
        style={{
          width: element.size.width,
          height: element.size.height,
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
        }}
      >
        {data.slice(0, bars).map((item, index) => (
          <Tooltip
            key={index}
            size="lg"
            content={
              <div className="px-2 py-4 w-[150px]">
                <div className="font-bold text-4xl">{item.setting}</div>
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
            placement="top"
          >
            <div
              key={index}
              className="flex items-center space-x-4"
              style={{ width: element.size.width, height: element.size.height }}
            >
              {showLabel && (
                <div
                  style={{
                    fontSize: element.config.labelFontSize,
                    fontWeight: element.config.styles.lFontWeight,
                    fontStyle: element.config.styles.lFontStyle,
                    color: element.config.labelFontColor,
                  }}
                  className="w-32 text-black"
                >
                  {item.setting}
                </div>
              )}
              <div className="grid grid-30 gap-2 mb-6">
                {Array.from({ length: 108 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-4 h-4 ${i < item.n ? 'bg-blue-500' : 'bg-gray-200'}`}
                    style={{ backgroundColor: i < item.n ? colors[index] : '#ddd' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.01 }}
                  />
                ))}
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </ElementChartWrapper>
  );
};

AdvanceColumnCardElementContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvanceColumnCard;
