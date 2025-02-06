import React from 'react';
import { Fragment, useEffect } from 'react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import ElementChartWrapper from '@/components/core/templates/create/elements/charts/advanced/helpers/ElementChartWrapper.jsx';

const AdvancePercentageCardTwo = ({ element }) => {
  return <AdvancePercentageCardTwoElementContent element={element} />;
};

AdvancePercentageCardTwo.propTypes = ElementPropTypes;

// eslint-disable-next-line react/prop-types
const Dot = ({ active, color }) => (
  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: active ? color : '#ddd' }} />
);

export const AdvancePercentageCardTwoElementContent = ({ element, isChartWrapperDisabled = false }) => {
  const { data, seasons, colors, bars } = element.config;
  useEffect(() => {}, [element]);
  return (
    <ElementChartWrapper element={element} isDisabled={isChartWrapperDisabled}>
      <div
        style={{
          paddingTop: element.config.styles.yPadding,
          paddingLeft: element.config.styles.xPadding,
          paddingBottom: element.config.styles.yPadding,
          paddingRight: element.config.styles.xPadding,
          width: element.width,
          height: element.height,
        }}
        className="grid grid-cols-4 gap-4"
      >
        {seasons.map((season) => (
          <React.Fragment key={season}>
            {element.config.showLabel && (
              <div
                style={{
                  fontSize: element.config.labelFontSize,
                  fontWeight: element.config.styles.lFontWeight,
                  fontStyle: element.config.styles.lFontStyle,
                  color: element.config.labelFontColor,
                }}
                key={season}
                className="text-center font-bold text-black"
              >
                {season}
              </div>
            )}
          </React.Fragment>
        ))}
        {data.slice(0, bars).map((row, rowIndex) => (
          <Fragment key={row.age}>
            {seasons.map((season, index) => (
              <motion.div
                key={`${row.age}-${season}`}
                className="flex flex-col items-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: rowIndex * 0.2 }}
              >
                <div className="grid grid-cols-10 gap-2 mb-2">
                  {[...Array(100)].map((_, i) => (
                    <Dot
                      key={i}
                      active={i < row[season.toLowerCase()]}
                      style={{ backgroundColor: colors[rowIndex] }}
                      color={element.config.colors[index]}
                    />
                  ))}
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center text-5xl font-bold ${colors[index].replace('bg-', 'text-')}`}
                >
                  {element.config.showValue && (
                    <div
                      style={{
                        fontSize: element.config.styles.valueSize,
                        fontWeight: element.config.styles.lFontWeight,
                        fontStyle: element.config.styles.lFontStyle,
                        color: element.config.styles.valueAndLableColor,
                      }}
                    >
                      {row[season.toLowerCase()]}%
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </Fragment>
        ))}
      </div>
    </ElementChartWrapper>
  );
};

AdvancePercentageCardTwoElementContent.propTypes = {
  element: PropTypes.object.isRequired,
  isChartWrapperDisabled: PropTypes.bool,
};

export default AdvancePercentageCardTwo;
