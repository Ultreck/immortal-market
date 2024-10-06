import { useEffect, useState } from 'react';
import { Checkbox, Input, Tab, Tabs } from '@nextui-org/react';
import { TbChartLine, TbCirclePlus, TbTimeline } from 'react-icons/tb';
import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';

const StandardAltBarConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

  const handleChange = (rowIndex, colIndex, value) => {
    const updatedData = [...element.config.data];
    updatedData[colIndex][rowIndex] = value;

    onChange({ ...element, config: { ...element.config, data: updatedData } });
  };

  useEffect(() => {}, [element]);
  return (
    <div>
      <div className="flex flex-col space-y-6">
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
            Show Grid Lines
          </Checkbox>
        </div>
        <div>
          <Checkbox
            isSelected={element.config.labelPosition}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, labelPosition: v },
              })
            }
          >
            Show Values outside
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

StandardAltBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardAltBarConfig;

