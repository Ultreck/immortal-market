import { Switch } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design';

const XAxisConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-base">X axis</p>
        <Switch
          isSelected={!!element.config.xAxis?.enabled}
          size="sm"
          onValueChange={(v) => {
            updateElement(
              element.id,
              { config: { ...element.config, xAxis: { ...element.config.xAxis, enabled: v } } },
              true
            );
          }}
        />
      </div>
      {element.config.xAxis?.enabled && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-base">Font size</p>
            <AutoCompleteNumberInput
              variant="bordered"
              value={element.config.xAxis.fontSize}
              onChange={(v) =>
                updateElement(
                  element.id,
                  { config: { ...element.config, xAxis: { ...element.config.xAxis, fontSize: Number(v) } } },
                  true
                )
              }
              min={1}
              max={30}
              aria-label="Font size"
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-base">Color</p>
            <ColorPicker
              size="sm"
              color={element.config.xAxis.color}
              onChange={(color) =>
                updateElement(
                  element.id,
                  { config: { ...element.config, xAxis: { ...element.config.xAxis, color: color } } },
                  true
                )
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base">Grid line</p>
            <Switch
              size="sm"
              color="default"
              isSelected={!!element.config.xAxis?.grid}
              onValueChange={(v) => {
                updateElement(
                  element.id,
                  { config: { ...element.config, xAxis: { ...element.config.xAxis, grid: v } } },
                  true
                );
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

XAxisConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default XAxisConfig;
