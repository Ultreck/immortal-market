import { useEffect } from 'react';
import { Checkbox } from '@nextui-org/react';
import PropTypes from 'prop-types';

const StandardAltBarConfig = ({ element, onChange }) => {
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
            isSelected={element.config.showLabel}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
          >
            Show Label
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
