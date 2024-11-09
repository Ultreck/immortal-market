import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbSettings2 } from 'react-icons/tb';
import NumberInput from '@/components/ui/NumberInput.jsx';
import useTemplateStore from '@/store/template.js';

const options = [
  // Common Currency Symbols
  { value: '$', text: 'Dollar currency symbol', type: 'prefix' },
  { value: '€', text: 'Euro currency symbol', type: 'prefix' },
  { value: '£', text: 'Pound Sterling currency symbol', type: 'prefix' },
  { value: '₹', text: 'Indian Rupee currency symbol', type: 'prefix' },
  { value: '¥', text: 'Yen currency symbol', type: 'prefix' },
  { value: '₣', text: 'Franc currency symbol', type: 'prefix' },
  { value: '₽', text: 'Ruble currency symbol', type: 'prefix' },
  { value: '₩', text: 'Won currency symbol', type: 'prefix' },
  { value: '₦', text: 'Naira currency symbol', type: 'prefix' },
  { value: '₿', text: 'Bitcoin currency symbol', type: 'prefix' },

  // ISO Currency Codes
  { value: 'USD', text: 'United States Dollar (USD)', type: 'suffix' },
  { value: 'EUR', text: 'Euro (EUR)', type: 'suffix' },
  { value: 'GBP', text: 'British Pound Sterling (GBP)', type: 'suffix' },
  { value: 'INR', text: 'Indian Rupee (INR)', type: 'suffix' },
  { value: 'JPY', text: 'Japanese Yen (JPY)', type: 'suffix' },
  { value: 'CHF', text: 'Swiss Franc (CHF)', type: 'suffix' },
  { value: 'CAD', text: 'Canadian Dollar (CAD)', type: 'suffix' },
  { value: 'AUD', text: 'Australian Dollar (AUD)', type: 'suffix' },
  { value: 'CNY', text: 'Chinese Yuan (CNY)', type: 'suffix' },
  { value: 'NZD', text: 'New Zealand Dollar (NZD)', type: 'suffix' },
  { value: 'NGN', text: 'Nigerian Naira (NGN)', type: 'suffix' },
  { value: 'BTC', text: 'Bitcoin (BTC)', type: 'suffix' },

  // Percentage and Ratios
  { value: '%', text: 'Percentage', type: 'suffix' },
  { value: '‰', text: 'Per Mille (‰)', type: 'suffix' },
  { value: '‱', text: 'Per Ten Thousand (‱)', type: 'suffix' },

  // Units of Length
  { value: 'km', text: 'Kilometers', type: 'suffix' },
  { value: 'm', text: 'Meters', type: 'suffix' },
  { value: 'cm', text: 'Centimeters', type: 'suffix' },
  { value: 'mm', text: 'Millimeters', type: 'suffix' },
  { value: 'mi', text: 'Miles', type: 'suffix' },
  { value: 'yd', text: 'Yards', type: 'suffix' },
  { value: 'ft', text: 'Feet', type: 'suffix' },
  { value: 'in', text: 'Inches', type: 'suffix' },

  // Units of Mass
  { value: 'kg', text: 'Kilograms', type: 'suffix' },
  { value: 'g', text: 'Grams', type: 'suffix' },
  { value: 'mg', text: 'Milligrams', type: 'suffix' },
  { value: 'lb', text: 'Pounds', type: 'suffix' },
  { value: 'oz', text: 'Ounces', type: 'suffix' },
  { value: 't', text: 'Tonnes', type: 'suffix' },

  // Time Units
  { value: 's', text: 'Seconds', type: 'suffix' },
  { value: 'min', text: 'Minutes', type: 'suffix' },
  { value: 'hr', text: 'Hours', type: 'suffix' },
  { value: 'd', text: 'Days', type: 'suffix' },
  { value: 'wk', text: 'Weeks', type: 'suffix' },
  { value: 'mo', text: 'Months', type: 'suffix' },
  { value: 'yr', text: 'Years', type: 'suffix' },

  // Digital Storage Units
  { value: 'B', text: 'Bytes', type: 'suffix' },
  { value: 'KB', text: 'Kilobytes', type: 'suffix' },
  { value: 'MB', text: 'Megabytes', type: 'suffix' },
  { value: 'GB', text: 'Gigabytes', type: 'suffix' },
  { value: 'TB', text: 'Terabytes', type: 'suffix' },

  { value: 'π', text: 'Pi', type: 'suffix' },
  { value: '°', text: 'Degrees', type: 'suffix' },
  { value: '√', text: 'Square Root', type: 'prefix' },
  { value: 'Δ', text: 'Delta (Change)', type: 'prefix' },
  { value: '∑', text: 'Summation', type: 'prefix' },
];

const CountUpNumberConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'count-up-number'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'count-up-number' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <div className="flex items-center justify-between space-x-4">
            <p className="text-base opacity-75">Start:</p>
            <NumberInput
              variant="bordered"
              value={element.config.start}
              onChange={(v) => {
                onChange({ ...element, config: { ...element.config, start: v } });
              }}
              ariaLabel="Start number"
              min={0}
              max={Infinity}
              step={1}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className="text-base opacity-75">End:</p>
            <NumberInput
              variant="bordered"
              value={element.config.end}
              onChange={(v) => {
                onChange({ ...element, config: { ...element.config, end: v } });
              }}
              ariaLabel="End number"
              min={0}
              max={Infinity}
              step={1}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className="text-base opacity-75 leading-none">
              Duration <br /> (in seconds):
            </p>
            <NumberInput
              variant="bordered"
              value={element.config.duration}
              onChange={(v) => {
                onChange({ ...element, config: { ...element.config, duration: v } });
              }}
              ariaLabel="Duration"
              min={1}
              max={20}
              step={1}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className="text-base opacity-75 leading-none">Unit</p>
            <Select
              variant="bordered"
              aria-label="Select unit"
              placeholder="Select unit"
              classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
              onChange={(event) => {
                const value = options.find((_) => _.text === event.target.value);
                const suffixAndPrefix = {
                  suffix: value.type === 'suffix' ? value.value : undefined,
                  prefix: value.type === 'prefix' ? value.value : undefined,
                };
                onChange({ ...element, config: { ...element.config, ...suffixAndPrefix } });
              }}
            >
              {options.map((_) => (
                <SelectItem key={_.text}>{_.text}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

CountUpNumberConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default CountUpNumberConfig;
