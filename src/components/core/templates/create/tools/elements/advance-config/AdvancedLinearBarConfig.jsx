import { Slider } from '@nextui-org/react';
import React from 'react';
import { HexAlphaColorPicker } from 'react-colorful';

const AdvancedLinearBarConfig = ({ element, onChange }) => {
  return (
    <div className="mt-6 space-y-6">
      <Slider
        defaultValue={element.config.progress}
        min={0}
        max={100}
        className="max-w-md"
        step={1}
        value={element.config.progress}
        label="progress"
        onChange={(e) => onChange({ ...element, config: { ...element.config, progress: e } })}
      />
      <Slider
        defaultValue={element.config.height}
        min={0}
        max={100}
        className="max-w-md"
        step={1}
        label="Height"
        value={element.config.height}
        onChange={(e) => onChange({ ...element, config: { ...element.config, height: e } })}
      />
      <div className="mt-8">
        <p>      </p>
        <HexAlphaColorPicker
          color={element.config.outerColor}
          onChange={(color) =>
            onChange({
              ...element,
              config: { ...element.config, outerColor: color },
            })
          }
        />
      </div>
      <div className="mt-8">
        <HexAlphaColorPicker
          color={element.config.innerColor}
          onChange={(color) =>
            onChange({
              ...element,
              config: { ...element.config, innerColor: color },
            })
          }
        />
      </div>
    </div>
  );
};

export default AdvancedLinearBarConfig;

