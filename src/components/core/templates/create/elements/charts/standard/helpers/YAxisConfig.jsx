import { Switch } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import PropTypes from 'prop-types';
import useDesignStore from '@/store/design';

const YAxisConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-base">Y axis</p>
        <Switch
          isSelected={!!element.config.yAxis?.enabled}
          size="sm"
          onValueChange={(v) => {
            updateElement(
              element.id,
              { config: { ...element.config, yAxis: { ...element.config.yAxis, enabled: v } } },
              true
            );
          }}
        />
      </div>
      {element.config.yAxis?.enabled && (
        <>
          <div className="flex items-center justify-between">
            <p className="text-base">Font size</p>
            <AutoCompleteNumberInput
              variant="bordered"
              value={element.config.yAxis.fontSize}
              onChange={(v) =>
                updateElement(
                  element.id,
                  { config: { ...element.config, yAxis: { ...element.config.yAxis, fontSize: Number(v) } } },
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
              color={element.config.yAxis.color}
              onChange={(color) =>
                updateElement(
                  element.id,
                  { config: { ...element.config, yAxis: { ...element.config.yAxis, color: color } } },
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
              isSelected={!!element.config.yAxis?.grid}
              onValueChange={(v) => {
                updateElement(
                  element.id,
                  { config: { ...element.config, yAxis: { ...element.config.yAxis, grid: v } } },
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

YAxisConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default YAxisConfig;
