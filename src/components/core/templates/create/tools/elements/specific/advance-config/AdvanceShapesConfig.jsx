import PropTypes from 'prop-types';
import { Checkbox, Select, SelectItem, Slider, Tab, Tabs } from '@nextui-org/react';
import { IconWithConfig } from './AdvancedPictogramShapesConfig';
import { useState } from 'react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';

const AdvanceShapesConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');
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
  return (
    <Tabs
      variant="bordered"
      aria-label="Options"
      color="primary"
      radius="full"
      classNames={{
        base: 'mb-2',
        tab: 'text-base px-4',
      }}
      selectedKey={tab}
      onSelectionChange={setTab}
    >
      <Tab key="data" title="Data" className="text-base">
        <div className="flex flex-col space-y-6">
          <div>
            <Slider
              label="Percentage"
              step={10}
              maxValue={100}
              minValue={10}
              marks={[
                { value: 10, label: '10' },
                { value: 20, label: '20' },
                { value: 30, label: '30' },
                { value: 40, label: '40' },
                { value: 50, label: '50' },
                { value: 60, label: '60' },
                { value: 70, label: '70' },
                { value: 80, label: '80' },
                { value: 90, label: '90' },
                { value: 100, label: '100' },
              ]}
              className="max-w-md"
              onChange={(e) => onChange({ ...element, config: { ...element.config, percentage: e } })}
              value={element.config.percentage}
            />
          </div>
          <div>
            <Slider
              label="No. of shapes"
              step={10}
              maxValue={100}
              minValue={10}
              marks={[
                { value: 10, label: '10' },
                { value: 20, label: '20' },
                { value: 50, label: '50' },
                { value: 100, label: '100' },
              ]}
              className="max-w-md"
              onChange={(e) => onChange({ ...element, config: { ...element.config, noOfShapes: e } })}
              value={element.config.noOfShapes}
            />
          </div>
          <div>
            <Slider
              label="Gap between shapes"
              step={1}
              maxValue={10}
              minValue={1}
              marks={[
                { value: 1, label: 1 },
                { value: 2, label: 2 },
                { value: 3, label: 3 },
                { value: 4, label: 4 },
                { value: 5, label: 5 },
                { value: 6, label: 6 },
                { value: 7, label: 7 },
                { value: 8, label: 8 },
                { value: 9, label: 9 },
                { value: 10, label: 10 },
              ]}
              className="max-w-md"
              onChange={(e) => onChange({ ...element, config: { ...element.config, gap: e } })}
              value={element.config.gap}
            />
          </div>

          <p>Change Icon</p>
          <div className="border border-default-400 rounded w-[80px] flex flex-col pt-5">
            <IconWithConfig
              iconKey="icon1"
              colorKey="color1"
              currentIcon={element.config.icon1}
              onIconChange={handleIconChange}
              onColorChange={handleColorChange}
              element={element}
              currentColor={element.config.color1}
            />
          </div>
        </div>
      </Tab>
      <Tab key="style" title="Chart Style" className="text-base">
        <div className="space-y-10">
          <div>
            <Checkbox
              isSelected={element.config.isCountVisible}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, isCountVisible: v } })}
            >
              Show Label
            </Checkbox>
          </div>
          <div>
            <Select
              name="countFormat"
              label="Count format"
              variant="bordered"
              labelPlacement="outside"
              placeholder="Select one"
              size="lg"
              selectedKeys={element.config.countFormat ? [element.config.countFormat] : []}
              onChange={(e) => onChange({ ...element, config: { ...element.config, countFormat: e.target.value } })}
              disableEmptySelection={true}
            >
              <SelectItem key="fraction" classNames={{ title: 'text-base px-2' }}>
                Fraction (n/10)
              </SelectItem>
              <SelectItem key="percentage" classNames={{ title: 'text-base px-2' }}>
                Percentage (n%)
              </SelectItem>
            </Select>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-base opacity-75 whitespace-nowrap">Size of Shapes:</p>
            <AutoCompleteNumberInput
              className="max-w-md"
              onChange={(v) =>
                onChange({
                  ...element,
                  config: { ...element.config, size: Number(v) },
                })
              }
              value={element.config.size}
              min={1}
              max={100}
              ariaLabel="size"
            />
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};

AdvanceShapesConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceShapesConfig;
