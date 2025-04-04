import { Switch } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design';

const LegendConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-base">Show legend</p>
        <Switch
          isSelected={!!element.config.legend?.enabled}
          size="sm"
          onValueChange={(v) => {
            updateElement(
              element.id,
              { config: { ...element.config, legend: { ...element.config.legend, enabled: v } } },
              true
            );
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
                updateElement(
                  element.id,
                  { config: { ...element.config, legend: { ...element.config.legend, fontSize: Number(v) } } },
                  true
                )
              }
              min={1}
              max={30}
              aria-label="Legend font size"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base">Color</p>
            <ColorPicker
              size="sm"
              color={element.config.legend.color}
              onChange={(color) =>
                updateElement(
                  element.id,
                  { config: { ...element.config, legend: { ...element.config.legend, color: color } } },
                  true
                )
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
};

export default LegendConfig;
