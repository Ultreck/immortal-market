import { Checkbox, Select, SelectItem, Tab, Tabs, Textarea } from '@heroui/react';
import PropTypes from 'prop-types';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { useState } from 'react';

const AdvanceDynamicSortingChartConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

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
        <div className="space-y-6">
          <div>
            <Checkbox
              isSelected={element.config.showXaxis}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showXaxis: v } })}
            >
              Show X Axis
            </Checkbox>
          </div>
          <div>
            <Checkbox
              isSelected={element.config.showYaxis}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showYaxis: v } })}
            >
              Show Y Axis
            </Checkbox>
          </div>
          <div>
            <Checkbox
              isSelected={element.config.showLegend}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
            >
              Show Legend
            </Checkbox>
          </div>
        </div>
      </Tab>
      <Tab key="style" title="Chart Style" className="text-base">
        <div className="space-y-4">
          <div>
            <Checkbox
              isSelected={element.config.showLabel}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
              classNames={{ base: 'py-0' }}
            >
              Show Label
            </Checkbox>
          </div>
          <div className={'flex justify-between items-center space-x-5'}>
            <p>No of Bars:</p>
            <AutoCompleteNumberInput
              onChange={(v) => onChange({ ...element, config: { ...element.config, noOfBars: Number(v) } })}
              value={element.config.noOfBars}
              min={1}
              max={element.config.data.length}
              ariaLabel="fontSize"
            />
          </div>
          {element.config.showLabel && (
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
                    <div
                      tabIndex="0"
                      className="w-8 h-8 p-[3px] rounded-full border border-transparent border-default-600"
                    >
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
                  ariaLabel="fontSize"
                />
              </div>
            </div>
          )}
          <Checkbox
            isSelected={element.config.showTitle}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, showTitle: v } })}
            classNames={{ base: 'py-0' }}
          >
            Show Title
          </Checkbox>
          {element.config.showTitle && (
            <Textarea
              variant="outlined"
              value={element.config.title}
              onChange={(e) => onChange({ ...element, config: { ...element.config, title: e.target.value } })}
            />
          )}
        </div>
      </Tab>
    </Tabs>
  );
};

AdvanceDynamicSortingChartConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceDynamicSortingChartConfig;
