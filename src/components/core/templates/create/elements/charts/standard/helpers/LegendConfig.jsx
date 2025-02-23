import { Switch } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import PropTypes from 'prop-types';

const LegendConfig = ({ element, onChange }) => {
  return (
    <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-base">Show legend</p>
        <Switch
          isSelected={!!element.config.legend?.enabled}
          size="sm"
          onValueChange={(v) => {
            onChange({
              ...element,
              config: { ...element.config, legend: { ...element.config.legend, enabled: v } },
            });
          }}
        />
      </div>
      {element.config.legend?.enabled && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-base">Font size</p>
            <AutoCompleteNumberInput
              variant="bordered"
              value={element.config.legend.fontSize}
              onChange={(v) =>
                onChange({
                  ...element,
                  config: { ...element.config, legend: { ...element.config.legend, fontSize: Number(v) } },
                })
              }
              min={1}
              max={30}
              ariaLabel="labelFontSize"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base">Color</p>
            <ColorPicker
              size="sm"
              color={element.config.legend.color}
              onChange={(color) =>
                onChange({
                  ...element,
                  config: { ...element.config, legend: { ...element.config.legend, color: color } },
                })
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

LegendConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LegendConfig;
