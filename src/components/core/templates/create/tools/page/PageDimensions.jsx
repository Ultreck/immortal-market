import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { TbDimensions } from 'react-icons/tb';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';

const PageDimensions = ({ page, onChange }) => {
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
            variant="bordered"
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
            <NumberInput
              onChange={(v) => {
                onChange({ width: v });
              }}
              value={page.width}
              min={200}
              step={10}
              ariaLabel="Page width"
              fullWidth
            />
          </div>
          <div>
            <p className="text-base mb-2">Height</p>
            <NumberInput
              onChange={(v) => {
                onChange({ height: v });
              }}
              value={page.height}
              min={200}
              step={10}
              ariaLabel="Page height"
              fullWidth
            />
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
