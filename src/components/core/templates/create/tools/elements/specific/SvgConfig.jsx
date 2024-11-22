import { useGetSvgCodeFromUrl } from '@/api/misc.js';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { TbSettings2 } from 'react-icons/tb';
import { HexColorPicker } from 'react-colorful';
import { cn } from '@/lib/utils.js';
import useTemplateStore from '@/store/template.js';

const extractColors = (svg) => {
  const fillRegex = /(#[A-Fa-f0-9]{6})/g;
  const uniqueColors = {};
  let match;
  while ((match = fillRegex.exec(svg)) !== null) {
    uniqueColors[match[1]] = match[1];
  }
  return uniqueColors;
};

const SvgConfig = ({ element, onChange }) => {
  const [colors, setColors] = useState({});
  const { data } = useGetSvgCodeFromUrl(element.config.src);
  const [selected, setSelected] = useState(Object.keys(colors)[0]);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

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
    if (data) {
      const extracted = extractColors(data);
      if (element.config.colors) setColors({ ...extracted, ...element.config.colors });
      else setColors(extracted);
      if (!selected) setSelected(Object.keys(extracted)[0]);
    }
  }, [data, element.config.colors, handleChange, selected]);

  const onColorChange = (newColor) => {
    if (element.config.colors) {
      handleChange({ ...element.config.colors, [selected]: newColor });
    } else {
      handleChange({ [selected]: newColor });
    }
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'infographic'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'infographic' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Svg config" className="text-base">
          <TbSettings2 size="20" />
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
                    className="w-full h-full hover:brightness-125 rounded-full"
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
        </div>
      </PopoverContent>
    </Popover>
  );
};

SvgConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default SvgConfig;
