import { cn, getPercentagesMax } from '@/lib/utils';
import { motion } from 'motion/react';
import { Fragment, useMemo } from 'react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import ElementChartWrapper from '@/components/core/templates/create/ElementChartWrapper.jsx';

export const AdvanceBar = ({ element }) => {
  return <AdvancedBarContent element={element} />;
};

export const AdvanceBarPresent = ({ element }) => {
  return <AdvancedBarContent element={element} isChartWrapperDisabled={true} />;
};

const AdvancedBarContent = ({ element, isChartWrapperDisabled = false }) => {
  const { label, colors, keys } = element.config;
  const percentages = getPercentagesMax(element.config.data.map((i) => +i[keys.value]));

  const data = useMemo(() => {
    if (element.config.data.length === element.config.bars) {
      return element.config.data.map((item) => ({
        label: item[keys.label],
        value: item[keys.value],
      }));
    }
    const visible = element.config.data.slice(0, element.config.bars - 1).map((item) => ({
      label: item[keys.label],
      value: item[keys.value],
    }));
    const others = Math.round(
      element.config.data.slice(element.config.bars - 1).reduce((sum, item) => sum + Number(item[keys.value]), 0)
    );
    return [...visible, { label: 'Others', value: others }];
  }, [element.config.data, element.config.bars, keys]);

  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      {element.config.orientation === 'vertical' && (
        <div style={{ width: element.size.width, height: element.size.height }} className="w-full h-full">
          <div
            className="grid gap-3 items-end h-full w-full"
            style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
          >
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-full h-full overflow-hidden">
                <div className="w-full h-full rounded relative flex flex-col items-center justify-end">
                  {label.enabled && label.position === 'start' && (
                    <p
                      style={{
                        fontSize: label.fontSize,
                        fontWeight: label.fontWeight,
                        fontStyle: label.fontStyle,
                        color: label.color,
                        left: `calc(${percentages[index]}% + 6px)`,
                      }}
                      key={index}
                      className="text-sm text-center leading-none font-medium mb-2"
                    >
                      {item.label}
                    </p>
                  )}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{
                      height: `${percentages[index]}%`,
                      backgroundColor: colors[index % colors.length],
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className="w-full rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-md font-medium mix-blend-difference flex flex-col items-center space-y-1">
                      <p className="text-white">{percentages[index]}%</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          {label.enabled && label.position === 'end' && (
            <div className="grid gap-3 w-full mt-2" style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}>
              {data.map((item, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: label.fontSize,
                    fontWeight: label.fontWeight,
                    fontStyle: label.fontStyle,
                    color: label.color,
                  }}
                  className="text-center leading-none border border-transparent overflow-hidden"
                >
                  {item.label}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
      {element.config.orientation === 'horizontal' && (
        <div
          style={{ width: element.size.width, height: element.size.height }}
          className="flex flex-col items-start h-full space-y-2"
        >
          {data.map((item, index) => (
            <Fragment key={index}>
              <div className="grid grid-cols-12 gap-2 items-center w-full h-full">
                {label.enabled && label.position === 'start' && (
                  <p
                    style={{
                      fontSize: label.fontSize,
                      fontWeight: label.fontWeight,
                      fontStyle: label.fontStyle,
                      color: label.color,
                    }}
                    className="col-span-2 leading-none"
                  >
                    {item.label}
                  </p>
                )}
                <div
                  className={cn('h-full flex flex-row justify-start items-center rounded w-full relative col-span-12', {
                    'col-span-10': label.enabled && label.position === 'start',
                  })}
                >
                  <motion.div
                    initial={{ width: 0, translateY: 20 }}
                    animate={{
                      width: `${percentages[index]}%`,
                      height: '100%',
                      backgroundColor: colors[index % colors.length],
                      translateY: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      duration: 1,
                      delay: index * 0.1,
                    }}
                    className="w-1 h-full relative rounded-2xl overflow-hidden"
                  >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-md font-medium flex items-center space-x-2 mix-blend-difference">
                      <p className="text-white">{percentages[index]}%</p>
                    </div>
                  </motion.div>
                  {label.enabled && label.position === 'end' && (
                    <p
                      style={{
                        fontSize: label.fontSize,
                        fontWeight: label.fontWeight,
                        fontStyle: label.fontStyle,
                        color: label.color,
                        left: `calc(${percentages[index]}% + 6px)`,
                      }}
                      key={index}
                      className={cn('text-sm leading-none font-medium absolute top-1/2 -translate-y-1/2')}
                    >
                      {item.label}
                    </p>
                  )}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </ElementChartWrapper>
  );
};

AdvanceBar.propTypes = ElementPropTypes;
AdvanceBarPresent.propTypes = ElementPropTypes;
AdvancedBarContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};
