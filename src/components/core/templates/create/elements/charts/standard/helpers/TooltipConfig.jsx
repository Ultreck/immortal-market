import { Switch } from '@heroui/react';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design';

const TooltipConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-base">Show tooltip</p>
        <Switch
          isSelected={!!element.config.tooltip?.enabled}
          size="sm"
          onValueChange={(v) => {
            updateElement(
              element.id,
              { config: { ...element.config, tooltip: { ...element.config.tooltip, enabled: v } } },
              true
            );
          }}
        />
      </div>
    </div>
  );
};

TooltipConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TooltipConfig;
