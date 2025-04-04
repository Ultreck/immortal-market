import { Checkbox } from '@heroui/react';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useDesignStore from '@/store/design.js';

const MapSettings = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4 w-full">
        <div className="text flex justify-between items-center w-full">
          <div className="text">
            <h6 className="text leading-tight">Global Map Color</h6>
            <span className="opacity-70 leading-tight text-md">Local colors will override this setting</span>
          </div>
          <ColorPicker
            color={element.config.fill}
            onChange={(c) => updateElement(element.id, { config: { ...element.config, fill: c } }, true)}
          />
        </div>
      </div>
      <div className="flex items-center space-x-4 w-full">
        <div className="text flex justify-between items-center w-full">
          <div className="text">
            <h6 className="text leading-tight">Stroke Color</h6>
          </div>
          <ColorPicker
            color={element.config.stroke}
            onChange={(c) => updateElement(element.id, { config: { ...element.config, stroke: c } }, true)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4 w-full">
        <p>No. of labels to show</p>
        <NumberInput
          variant="bordered"
          value={element.config.labelsCount}
          onChange={(v) => updateElement(element.id, { config: { ...element.config, labelsCount: v } }, true)}
          aria-label="No. of labels to show"
          min={1}
          max={element.config.data.length}
          step={1}
        />
      </div>
      <div>
        <Checkbox
          isSelected={element.config.showLabels}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => updateElement(element.id, { config: { ...element.config, showLabels: v } }, true)}
        >
          Map labels
        </Checkbox>
      </div>
      <div>
        <Checkbox
          isSelected={element.config.showValues}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => updateElement(element.id, { config: { ...element.config, showValues: v } }, true)}
        >
          Map values
        </Checkbox>
      </div>
    </div>
  );
};

MapSettings.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapSettings;
