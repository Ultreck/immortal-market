import { Checkbox } from '@heroui/react';
import PropTypes from 'prop-types';

const AdvancedScatterLifeExpentancyConfig = ({ element, onChange }) => {
  return (
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
      <Checkbox
        isSelected={element.config.showGridline}
        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showGridline: v } })}
        classNames={{ base: 'py-0' }}
      >
        Show Gridline
      </Checkbox>
    </div>
  );
};

AdvancedScatterLifeExpentancyConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedScatterLifeExpentancyConfig;
