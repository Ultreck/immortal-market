import { cn, formatChartValue } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import { TbUser } from 'react-icons/tb';

const AdvanceCircleIcons = ({ element }) => {
  return <AdvanceCircleIconsContent element={element} />;
};

AdvanceCircleIcons.propTypes = ElementPropTypes;

export const AdvanceCircleIconsContent = ({ element }) => {
  return (
    <div
      style={{
        padding: `${element.config.styles.yPadding || '96'}px ${element.config.styles.xPadding || '16'}px`,
      }}
      className="flex items-center py-24 w-full px-4"
    >
      {element.config.data
        .slice(0, element.config.circles)
        .sort((a, b) => +b.value - +a.value)
        .map((circle, index) => {
          const color = element.config.colors[index % element.config.colors.length];
          return (
            <div
              key={`${circle.label}-${index}`}
              className={cn('flex flex-col items-center relative', { '-ml-4': index > 0 })}
              style={{ flex: 10 - index }}
            >
              <div
                className={cn(
                  'w-full aspect-square flex justify-center items-center',
                  element.config.shape === 'circle' ? 'rounded-full' : ''
                )}
                style={{ backgroundColor: color }}
              >
                {createElement(circle.icon || TbUser, {
                  className: `scale-50 md:scale-100 text-red-500 mix-blend-difference`,
                  style: { fontSize: `${Math.max(16, 7 * (7 - index * 1.4))}px`, color: 'white' },
                })}
              </div>
              {index % 2 === 0 ? (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-black">
                  <div className="mb-2">
                    <div
                      style={{
                        fontSize: `${element.config.labelFontSize}px`,
                        fontWeight: element.config.styles.lFontWeight,
                        fontStyle: element.config.styles.lFontStyle,
                        color: element.config.labelFontColor,
                      }}
                      className={`font-bold leading-none`}
                    >
                      {element.config.showValue && formatChartValue(circle.value, element)}
                    </div>
                    <p
                      style={{
                        fontSize: `${element.config.labelFontSize}px`,
                        fontWeight: element.config.styles.lFontWeight,
                        fontStyle: element.config.styles.lFontStyle,
                        color: element.config.labelFontColor,
                      }}
                      className={`text-sm  leading-none mt-1`}
                    >
                      {element.config.showLabel && circle.label}
                    </p>
                  </div>
                  <div className="flex flex-col w-[1px] h-[20px] bg-red-900"></div>
                </div>
              ) : (
                <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-black">
                  <div className="flex flex-col w-[1px] h-[20px] bg-red-900"></div>
                  <div className="mt-2">
                    <div
                      style={{
                        fontSize: `${element.config.labelFontSize}px`,
                        fontWeight: element.config.styles.lFontWeight,
                        fontStyle: element.config.styles.lFontStyle,
                        color: element.config.labelFontColor,
                      }}
                      className={`font-bold leading-none`}
                    >
                      {element.config.showValue && formatChartValue(circle.value, element)}
                    </div>
                    <p
                      style={{
                        fontSize: `${element.config.labelFontSize}px`,
                        fontWeight: element.config.styles.lFontWeight,
                        fontStyle: element.config.styles.lFontStyle,
                        color: element.config.labelFontColor,
                      }}
                      className={`text-sm leading-none mt-1`}
                    >
                      {element.config.showLabel && circle.label}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

AdvanceCircleIconsContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceCircleIcons;
