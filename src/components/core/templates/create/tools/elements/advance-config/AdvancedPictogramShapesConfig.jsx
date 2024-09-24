import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import icons from '@/lib/design/icons';
import { HexColorPicker } from 'react-colorful';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';

const IconWithConfig = ({ iconKey, colorKey, currentIcon, currentColor, onIconChange, onColorChange }) => {
  const CurrentIcon = icons.find((icon) => icon.name === currentIcon).icon;

  return (
    <div className="">
      <Popover
        placement="top"
        showArrow
        offset={10}
        classNames={{ content: 'w-[200px] !max-h-[500px] overflow-y-auto block' }}
      >
        <PopoverTrigger className="flex items-center justify-center">
          <div>
            <CurrentIcon size={48} color={currentColor} />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="grid grid-cols-5 gap-2 p-2">
            {icons.map((icon) => (
              <button
                key={icon.name}
                onClick={() => onIconChange(iconKey, icon.name)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <icon.icon size={24} />
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Popover
        placement="top"
        showArrow
        offset={10}
        classNames={{ content: 'w-[200px] !max-h-[500px] overflow-y-auto block' }}
      >
        <PopoverTrigger>
          <div className="w-full h-6 mt-5">
            <div style={{ backgroundColor: currentColor }} className="w-full h-full shadow border"></div>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <HexColorPicker color={currentColor} onChange={(c) => onColorChange(colorKey, c)} className="!w-full mt-4" />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const AdvancedPictogramShapesConfig = ({ element, onChange }) => {
  const handleIconChange = (iconKey, newIcon) => {
    onChange({
      ...element,
      config: { ...element.config, [iconKey]: newIcon },
    });
  };

  const handleColorChange = (colorKey, newColor) => {
    onChange({
      ...element,
      config: { ...element.config, [colorKey]: newColor },
    });
  };

  const handleCheckboxChange = (key, value) => {
    onChange({ ...element, config: { ...element.config, [key]: value } });
  };

  const renderIconConfig = (iconKey, colorKey) => (
    <IconWithConfig
      iconKey={iconKey}
      colorKey={colorKey}
      currentIcon={element.config[iconKey]}
      currentColor={element.config[colorKey]}
      onIconChange={handleIconChange}
      onColorChange={handleColorChange}
    />
  );

  const renderIconSection = (showKey, iconKey, colorKey) => (
    <div className="flex">
      <Checkbox
        isSelected={element.config[showKey]}
        onValueChange={(v) => handleCheckboxChange(showKey, v)}
        className="my-auto"
      />
      <div className="border border-default-400 rounded w-[80px] flex flex-col pt-4">
        {renderIconConfig(iconKey, colorKey)}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-xl">Change Icon Settings</p>
      <div className="flex space-x-5">
        {renderIconSection('showIcon1', 'icon1', 'color1')}
        {renderIconSection('showIcon2', 'icon2', 'color2')}
        {renderIconSection('showIcon3', 'icon3', 'color3')}
      </div>
      <Checkbox
        isSelected={element.config.showLabel}
        onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
        classNames={{ base: 'py-0' }}
      >
        Show Label
      </Checkbox>
      {['icon1', 'icon2', 'icon3'].map((icon, index) => (
        <div className="flex items-center space-x-4" key={icon}>
          <p className="text-base opacity-75 whitespace-nowrap">{`Icon ${index + 1} Count:`}</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, [`${icon}count`]: Number(v) },
              })
            }
            value={element.config[`${icon}count`]}
            min={1}
            max={50}
            ariaLabel={`Icons ${index + 1} Counts`}
          />
        </div>
      ))}
    </div>
  );
};

AdvancedPictogramShapesConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

IconWithConfig.propTypes = {
  iconKey: PropTypes.string.isRequired,
  colorKey: PropTypes.string.isRequired,
  currentIcon: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  onIconChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
};

export default AdvancedPictogramShapesConfig;

