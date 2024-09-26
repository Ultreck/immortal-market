import { useRef } from 'react';
import SvgText from '@/components/ui/SvgText.jsx';
import { Tooltip } from '@nextui-org/react';
import { cn } from '@/lib/utils.js';

const useMapElement = (element) => {
  const el = useRef(null);
  const paths = Array.from(el.current?.getElementsByTagName('path') ?? []).filter((path) => !!path.dataset.name);
  const items = paths.map((path) => ({
    name: path.dataset.name,
    x: path.dataset.x,
    y: path.dataset.y,
  }));

  const data = element.config.data.filter((i) => !!i.value);

  const assignColor = (label) => {
    const item = data.find((i) => i.label.toLowerCase() === label.toLowerCase());
    return item?.color ?? element.config.fill;
  };

  const renderLabels = () => {
    return (
      <>
        {(element.config.showLabels || element.config.showValues) && (
          <>
            {data.slice(0, element.config.labelsCount).map((item) => {
              const state = items.find((x) => x.name.toLowerCase() === item.label.toLowerCase());
              if (!state) return null;

              return (
                <SvgText key={item.label} x={state.x} y={state.y} width="100%" height="80px">
                  <div className="p-1 text-gray-700 cursor-pointer">
                    <div className="relative">
                      <div className="absolute w-3 h-3 border-2 border-black rounded-sm -top-1 -left-1"></div>
                      <Tooltip content={item.label} offset={-7}>
                        <div
                          className={cn('shadow border border-black rounded-xl px-4 py-3 w-max relative text-white', {
                            'max-w-[310px]': +state.x > 900,
                          })}
                          style={{ background: item.color || element.config.fill }}
                        >
                          <p className="leading-none text-[12px] grid truncate">
                            {element.config.showLabels && (
                              <span className="font-medium text-white capitalize mix-blend-difference">
                                {item.label}
                              </span>
                            )}
                            {element.config.showValues && (
                              <span className="mt-1 font-medium text-center text-white mix-blend-difference">
                                {item.value}
                              </span>
                            )}
                          </p>
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </SvgText>
              );
            })}
          </>
        )}
      </>
    );
  };

  return {
    el,
    data,
    items,
    assignColor,
    renderLabels,
  };
};

export default useMapElement;
