import { Button, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import { TbDimensions, TbMinus, TbPlus } from 'react-icons/tb';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PageDimensions = ({ page, onChange }) => {
  const [width, setWidth] = useState(page.width);
  const [height, setHeight] = useState(page.height);

  const options = [
    { text: 'Default', value: 'default', width: 1920, height: 1920 },
    { text: 'Presentation 16:9', value: 'presentation-16:9', width: 1920, height: 1080 },
    { text: 'Presentation 4:3', value: 'presentation-4:3', width: 1024, height: 768 },
    { text: 'Letter', value: 'letter', width: 794, height: 1123 },
    { text: 'Twitter', value: 'twitter', width: 1600, height: 900 },
    { text: 'LinkedIn', value: 'linkedin', width: 1200, height: 1200 },
    { text: 'Instagram', value: 'instagram', width: 1080, height: 1080 },
  ];

  const value = options.find((option) => option.width === page.width && option.height === page.height)?.value;

  const handleSelectionChange = (e) => {
    const option = options.find((option) => option.value === e.target.value);
    onChange({ width: option.width, height: option.height });
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbDimensions size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-64 space-y-4">
          <Select
            label="Presets"
            labelPlacement="outside"
            placeholder="Choose a preset"
            selectedKeys={[value]}
            className="w-full"
            onChange={handleSelectionChange}
            classNames={{ label: 'text-base', value: 'text-base px-2' }}
          >
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value} classNames={{ title: 'text-base px-2' }}>
                {option.text}
              </SelectItem>
            ))}
          </Select>
          <div>
            <p className="text-base mb-2">Width</p>
            <div className="gap-2 w-full justify-between flex items-center">
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const value = page.width - 10;
                  setWidth(value);
                  onChange({ width: value });
                }}
              >
                <TbMinus size="20" />
              </Button>
              <Input
                type="number"
                className="w-full"
                classNames={{ input: 'appearance-auto' }}
                value={width}
                onChange={(e) => setWidth(+e.target.value)}
                onBlur={() => onChange({ width })}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const value = page.width + 10;
                  setWidth(value);
                  onChange({ width: value });
                }}
              >
                <TbPlus size="20" />
              </Button>
            </div>
          </div>
          <div>
            <p className="text-base mb-2">Height</p>
            <div className="gap-2 w-full justify-between flex items-center">
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const value = page.height - 10;
                  setHeight(value);
                  onChange({ height: value });
                }}
              >
                <TbMinus size="20" />
              </Button>
              <Input
                type="number"
                className="w-full"
                classNames={{ input: 'appearance-auto' }}
                value={height}
                onChange={(e) => setHeight(+e.target.value)}
                onBlur={() => onChange({ height })}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const value = page.height + 10;
                  setHeight(value);
                  onChange({ height: value });
                }}
              >
                <TbPlus size="20" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

PageDimensions.propTypes = {
  page: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PageDimensions;
