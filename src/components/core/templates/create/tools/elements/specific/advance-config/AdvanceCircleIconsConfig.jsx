import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { Checkbox, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { createElement, useState } from 'react';
import icons from '@/lib/design/icons.js';
import { TbUser } from 'react-icons/tb';
import ColorPicker from '@/components/ui/ColorPicker.jsx';

const AdvanceCircleIconsConfig = ({ element, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleIconChange = (index, newIcon) => {
    const updatedData = [...element.config.data];
    updatedData[index] = {
      ...updatedData[index], // Preserve other properties
      icon: newIcon.icon,
    };

    onChange({
      ...element,
      config: {
        ...element.config,
        data: updatedData,
      },
    });
    setSelectedIndex(null);
  };

  const handleLabelChange = (index, newLabel) => {
    const updatedData = [...element.config.data];
    updatedData[index] = {
      ...updatedData[index],
      label: newLabel,
    };

    onChange({
      ...element,
      config: {
        ...element.config,
        data: updatedData,
      },
    });

    setSelectedIndex(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <p className="my-auto">Number of Circles: </p>
        <AutoCompleteNumberInput
          onChange={(v) =>
            onChange({
              ...element,
              config: { ...element.config, circles: Number(v) },
            })
          }
          value={element.config.circles}
          min={1}
          max={element.config.data.length}
          aria-label="No of Circles to Show"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Checkbox
          isSelected={element.config.showLabel}
          className={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
        >
          Show Label
        </Checkbox>
        <Checkbox
          isSelected={element.config.showValue}
          className={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showValue: v } })}
        >
          Show Value
        </Checkbox>
      </div>
      {element.config.showValue && (
        <div className="border border-gray-700 p-4 rounded-2xl space-y-6">
          <div>
            <Select
              variant="bordered"
              size="lg"
              name="labelFormat"
              label="Label Format"
              labelPlacement="outside-left"
              classNames={{ value: 'px-2' }}
              placeholder="Select format"
              value={element.config.labelFormat || 'value'}
              onChange={(e) =>
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    labelFormat: e.target.value,
                  },
                })
              }
            >
              {[
                { key: 'value', name: 'Value' },
                { key: 'percentage', name: 'Percentage (%)' },
                { key: 'both', name: 'Both (Value, %)' },
                { key: 'currency', name: 'Currency' },
                { key: 'wholeNumber', name: 'Whole Number' },
                { key: 'decimal', name: 'Decimal' },
              ].map((type) => (
                <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                  {type.name}
                </SelectItem>
              ))}
            </Select>
          </div>
          {element.config.labelFormat === 'currency' && (
            <div>
              <Select
                variant="bordered"
                size="lg"
                name="currency"
                label="Select Currency"
                labelPlacement="outside-left"
                classNames={{ value: 'px-2' }}
                placeholder="Choose currency"
                value={element.config.selectedCurrency}
                onChange={(e) =>
                  onChange({
                    ...element,
                    config: {
                      ...element.config,
                      selectedCurrency: e.target.value,
                    },
                  })
                }
              >
                {['N', '$', '€', '¥', '£'].map((currency) => (
                  <SelectItem key={currency}>{currency}</SelectItem>
                ))}
              </Select>
            </div>
          )}
          <div className="flex justify-between items-center">
            <p>Label Font Color</p>
            <ColorPicker
              color={element.config.labelFontColor}
              onChange={(color) => onChange({ ...element, config: { ...element.config, labelFontColor: color } })}
              trigger={
                <div tabIndex="0" className="w-8 h-8 p-[3px] rounded-full border border-transparent border-default-600">
                  <div
                    style={{ backgroundColor: element.config.labelFontColor }}
                    className="w-full h-full hover:brightness-125 rounded-full"
                  />
                </div>
              }
            />
          </div>
          <div className={'flex justify-between space-x-5'}>
            <p className="my-auto">Label Font Size:</p>
            <AutoCompleteNumberInput
              onChange={(v) => onChange({ ...element, config: { ...element.config, labelFontSize: Number(v) } })}
              value={element.config.labelFontSize}
              min={1}
              max={1000}
              aria-label="fontSize"
            />
          </div>
        </div>
      )}
      <div>
        <Select
          variant="bordered"
          name="shape"
          label="Choose Shape"
          labelPlacement="outside-left"
          placeholder="Select one"
          value={element.config.shape}
          defaultSelectedKeys={[element.config.shape]}
          onChange={(e) =>
            onChange({
              ...element,
              config: { ...element.config, shape: e.target.value },
            })
          }
          disableEmptySelection={true}
        >
          <SelectItem key="circle" classNames={{ title: 'px-2 text-base' }}>
            Circle
          </SelectItem>
          <SelectItem key="square" classNames={{ title: 'px-2 text-base' }}>
            Square
          </SelectItem>
        </Select>
      </div>
      <div className="space-y-4">
        {element.config.data.slice(0, element.config.circles).map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <Input
              value={item.label}
              placeholder="Name"
              required
              variant="bordered"
              size="md"
              classNames={{ input: 'text-base capitalize' }}
              onChange={(e) => handleLabelChange(index, e.target.value)}
            />
            <Popover>
              <PopoverTrigger>
                <button className="p-2 border rounded" onClick={() => setSelectedIndex(index)}>
                  {createElement(item.icon || TbUser)}
                </button>
              </PopoverTrigger>
              {selectedIndex === index && (
                <PopoverContent className="grid grid-cols-4 gap-2 p-4">
                  {icons.map((icon, i) => (
                    <button
                      key={i}
                      className="p-2 border rounded hover:bg-gray-100"
                      onClick={() => handleIconChange(index, icon)}
                    >
                      <icon.icon size={24} />
                    </button>
                  ))}
                </PopoverContent>
              )}
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};

AdvanceCircleIconsConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceCircleIconsConfig;
