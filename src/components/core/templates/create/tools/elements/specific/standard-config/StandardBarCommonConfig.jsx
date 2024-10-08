import { useEffect } from 'react';
import { Checkbox, Input } from '@nextui-org/react';
import { TbChartLine, TbTimeline } from 'react-icons/tb';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import PropTypes from 'prop-types';

const StandardBarCommonConfig = ({ element, onChange }) => {
  useEffect(() => {}, [element]);
  return (
    <div>
      <div className="space-y-6">
        <div>
          <Checkbox
            isSelected={element.config.showXaxis}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXaxis: v } })}
          >
            Show X Axis
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showYaxis}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showYaxis: v } })}
          >
            Show Y Axis
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showLegend}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
          >
            Show Legend
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showXGridline}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, showXGridline: v },
              })
            }
          >
            Show X Grid Line
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.showYGridline}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, showYGridline: v },
              })
            }
          >
            Show Y Grid Line
          </Checkbox>
        </div>
        {element.type === 'chart-s-line' && element.type === 'chart-s-area' (
          <div className="flex items-center space-x-4">
            {[
              { name: 'Natural', icon: <TbChartLine size={25} /> },
              { name: 'Linear', icon: <TbTimeline size={25} /> },
            ].map((position, i) => (
              <Checkbox
                key={i}
                isSelected={element.config.type === position.name}
                onValueChange={() =>
                  onChange({
                    ...element,
                    config: { ...element.config, type: position.name },
                  })
                }
              >
                {position.icon}
              </Checkbox>
            ))}
          </div>
        )}
        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75 whitespace-nowrap">No. of points:</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, bars: Number(v) },
              })
            }
            value={element.config.bars}
            min={1}
            max={20}
            ariaLabel="No of Bars to Show"
          />
        </div>
      </div>
    </div>
  );
};

StandardBarCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardBarCommonConfig;

