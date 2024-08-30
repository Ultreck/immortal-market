import { cn, getPercentages } from '@/lib/utils.js';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';

const AdvanceCircleIcons = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      resizeHandles={['e']}
      editable
      fit
    >
      <AdvanceCircleIconsContent element={element} />
    </ElementWrapper>
  );
};

AdvanceCircleIcons.propTypes = ElementPropTypes;

export const AdvanceCircleIconsContent = ({ element }) => {
  const percentages = getPercentages(element.config.data.map((item) => +item.value));

  return (
    <div className="flex items-center py-24 w-full px-4">
      {element.config.data
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
                className="w-full aspect-square flex justify-center items-center rounded-full"
                style={{ backgroundColor: color }}
              >
                <i
                  className={`scale-50 md:scale-100 text-red-500 mix-blend-difference ${circle.icon}`}
                  style={{ fontSize: `${Math.max(16, 7 * (7 - index * 1.4))}px`, color: 'white' }}
                />
              </div>
              {index % 2 === 0 ? (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-black">
                  <div className="mb-2">
                    <div className="font-bold leading-none">{percentages[index]}%</div>
                    <p className="text-sm leading-none mt-1">{circle.label}</p>
                  </div>
                  <div className="flex flex-col w-[1px] h-[20px] bg-red-900"></div>
                </div>
              ) : (
                <div className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center text-center text-black">
                  <div className="flex flex-col w-[1px] h-[20px] bg-red-900"></div>
                  <div className="mt-2">
                    <div className="font-bold leading-none">{percentages[index]}%</div>
                    <p className="text-sm leading-none mt-1">{circle.label}</p>
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
