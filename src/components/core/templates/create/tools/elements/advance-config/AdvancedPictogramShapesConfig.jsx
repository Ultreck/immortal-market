import React from 'react';
import PropTypes from 'prop-types';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import icons from '@/lib/design/icons';
import { HexColorPicker } from 'react-colorful';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';

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

  console.log(element.config.color1);

  return (
    <div className="flex flex-col space-y-4">
      <p className="text-xl">Change Icon Settings</p>
      <div className="flex space-x-10">
        <div className="border border-default-400 rounded w-[80px] flex flex-col pt-4">
          <IconConfig
            iconKey="icon1"
            colorKey="color1"
            currentIcon={element.config.icon1}
            onIconChange={handleIconChange}
            onColorChange={handleColorChange}
            element={element}
          />

          <Popover
            placement="top"
            showArrow
            offset={10}
            classNames={{ content: 'w-[200px] !max-h-[500px] overflow-y-auto block' }}
          >
            <PopoverTrigger>
              <div className="w-full h-6 mt-5">
                <div
                  style={{ backgroundColor: element.config.color1 }}
                  className="w-full h-full rounded-none shadow border"
                ></div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-0 shadow border border-default-200">
              <HexColorPicker
                color={element.config.color1}
                onChange={(c) => onChange({ ...element, config: { ...element.config, color1: c } })}
                className="!w-full mt-4"
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="border border-default-400 rounded w-[80px] flex flex-col pt-4">
          <IconConfig
            iconKey="icon2"
            colorKey="color2"
            currentIcon={element.config.icon2}
            onIconChange={handleIconChange}
            onColorChange={handleColorChange}
            element={element}
          />
          <Popover
            placement="top"
            showArrow
            offset={10}
            classNames={{ content: 'w-[200px] !max-h-[500px] overflow-y-auto block' }}
          >
            <PopoverTrigger>
              <div className="w-full h-6 mt-5">
                <div
                  style={{ backgroundColor: element.config.color2 }}
                  className="w-full h-full rounded-none shadow border"
                ></div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="p-0 shadow border border-default-200">
              <HexColorPicker
                color={element.config.color2}
                onChange={(c) => onChange({ ...element, config: { ...element.config, color2: c } })}
                className="!w-full mt-4"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-base opacity-75 whitespace-nowrap">First Icon Count:</p>
        <AutoCompleteNumberInput
          onChange={(v) =>
            onChange({
              ...element,
              config: { ...element.config, icon1count: Number(v) },
            })
          }
          value={element.config.icon1count}
          min={1}
          max={50}
          ariaLabel="Icons Counts"
        />
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-base opacity-75 whitespace-nowrap">Second Icon Count:</p>
        <AutoCompleteNumberInput
          onChange={(v) =>
            onChange({
              ...element,
              config: { ...element.config, icon2count: Number(v) },
            })
          }
          value={element.config.icon2count}
          min={1}
          max={50}
          ariaLabel="Icons Counts"
        />
      </div>
    </div>
  );
};

const IconConfig = ({ iconKey, colorKey, currentIcon, currentColor, onIconChange, onColorChange, element }) => {
  const CurrentIcon = icons.find((icon) => icon.name === currentIcon).icon;

  return (
    <div className="flex items-center mx-auto">
      <Popover
        placement="top"
        showArrow
        offset={10}
        classNames={{ content: 'w-[200px] !max-h-[500px] overflow-y-auto block' }}
      >
        <PopoverTrigger>
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
    </div>
  );
};

AdvancedPictogramShapesConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedPictogramShapesConfig;
