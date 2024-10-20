import { useEffect} from 'react';
import { Checkbox} from '@nextui-org/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import PropTypes from 'prop-types';

const StandardBubbleChartConfig = ({ element, onChange }) => {


  useEffect(() => {}, [element]);
  return (
    <>
      <div className="flex flex-col space-y-6">
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
            isSelected={element.config.showGridline}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, showGridline: v },
              })
            }
          >
            Show Grid Line
          </Checkbox>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75 whitespace-nowrap">No. of bubbles:</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, bubbles: Number(v) },
              })
            }
            value={element.config.bubbles}
            min={1}
            max={element.config.data.length}
            ariaLabel="No of bubbles to Show"
          />
        </div>
      </div>
    </>
  );
};

StandardBubbleChartConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardBubbleChartConfig;
