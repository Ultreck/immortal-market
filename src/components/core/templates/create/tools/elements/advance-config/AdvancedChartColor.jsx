import { cn } from '@/lib/utils';
import { Button, Checkbox, Popover, PopoverContent, PopoverTrigger, Switch } from '@nextui-org/react';
import React from 'react';
import { FaFillDrip } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const AdvancedChartColor = ({ element, onChange }) => {
  const [colors, setColors] = useState({});
  const [selected, setSelected] = useState(Object.keys(colors)[0]);

  const handleChange = useCallback(
    (_colors) => {
      setColors((v) => ({ ...v, ..._colors }));
      onChange({
        ...element,
        config: { ...element.config, colors: _colors },
      });
    },
    [element, onChange]
  );

  useEffect(() => {
    if (element.config.colors) setColors({ ...element.config.colors });
    if (!selected) setSelected(Object.keys(colors)[0]);
  }, [element.config.colors, handleChange, selected]);

  const onColorChange = (newColor) => {
    if (element.config.colors) {
      handleChange({ ...element.config.colors, [selected]: newColor });
    } else {
      handleChange({ [selected]: newColor });
    }
  };


  const handleGradientColorChange = (gradientColor) => {
    onChange({
      ...element,
      config: { ...element.config, gradientColor },
    });
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <FaFillDrip size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 gap-y-4 flex flex-col overflow-hidden w-[300px]">
          {Object.keys(colors).length > 0 ? (
            <div className="flex items-center flex-wrap gap-1">
              {Object.entries(colors).map(([originalColor, currentColor]) => (
                <div
                  key={originalColor}
                  onClick={() => setSelected(originalColor)}
                  className={cn('w-8 h-8 p-[3px] rounded-full border border-transparent', {
                    'border-default-600': selected === originalColor,
                  })}
                >
                  <button
                    key={originalColor}
                    style={{ backgroundColor: currentColor }}
                    className="w-full h-full frounded-full hover:brightness-125 rounded-full"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="border-2 border-default-300 border-dashed rounded-xl p-6">
              <span className="opacity-70">No colors found</span>
            </div>
          )}
          {!!selected && (
            <HexColorPicker color={colors[selected]} onChange={(c) => onColorChange(c)} className="!w-full" />
          )}

          <div className="mt-10">
            <Checkbox
              isSelected={element.config.useGradient}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, useGradient: v } })}
            >
              Use Gradient
            </Checkbox>
            {element.config.useGradient && (
              <HexColorPicker
                color={element.config.gradientColor}
                onChange={handleGradientColorChange}
                className="!w-full"
              />
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AdvancedChartColor;

