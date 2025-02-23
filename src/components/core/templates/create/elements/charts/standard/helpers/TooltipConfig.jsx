import { Switch } from '@heroui/react';
import PropTypes from 'prop-types';

const TooltipConfig = ({ element, onChange }) => {
  return (
    <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-base">Show tooltip</p>
        <Switch
          isSelected={!!element.config.tooltip?.enabled}
          size="sm"
          onValueChange={(v) => {
            onChange({
              ...element,
              config: { ...element.config, tooltip: { ...element.config.tooltip, enabled: v } },
            });
          }}
        />
      </div>
    </div>
  );
};

TooltipConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TooltipConfig;
