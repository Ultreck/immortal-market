import { Checkbox, Select, SelectItem } from '@nextui-org/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { capitalize, fontFamily } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const StandardPieCommonConfig = ({ element, onChange }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 space-y-6">
        <Checkbox
          isSelected={element.config.showLabel}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
          classNames={{ base: 'py-0' }}
        >
          Show Label
        </Checkbox>
        {element.config.showLabel && (
          <div className="border border-gray-700 p-4 rounded-2xl space-y-6">
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">Label Font Size:</p>
              <AutoCompleteNumberInput
                onChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, labelFontSize: Number(v) },
                  })
                }
                value={element.config.labelFontSize}
                min={1}
                max={30}
                ariaLabel="labelFontSize"
              />
            </div>
            <div>
              <Select
                variant="bordered"
                size="lg"
                name="labelPosition"
                label="Label Position"
                labelPlacement="outside-left"
                classNames={{ value: 'px-2' }}
                placeholder="Select one"
                value={element.config.labelPosition}
                onChange={(e) =>
                  onChange({
                    ...element,
                    config: { ...element.config, labelPosition: e.target.value },
                  })
                }
                disableEmptySelection={true}
              >
                {[
                  { key: 'inside', name: 'Inside' },
                  { key: 'outside', name: 'Outside' },
                ].map((type) => (
                  <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Select
                variant="bordered"
                size="lg"
                name="fontFamily"
                label="Font Family"
                labelPlacement="outside-left"
                classNames={{ value: 'px-2' }}
                placeholder="Select one"
                onChange={(e) =>
                  onChange({
                    ...element,
                    config: {
                      ...element.config,
                      styles: { ...element.config.styles, labelFontFamily: e.target.value },
                    },
                  })
                }
                defaultSelectedKeys={[element.config.styles.labelFontFamily] || 'Roboto'}
                value={element.config.styles.labelFontFamily || 'Roboto'}
              >
                {fontFamily.map((font) => (
                  <SelectItem key={font.key}>{font.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <Select
                variant="bordered"
                size="lg"
                name="labelFormat"
                label="Label Format"
                labelPlacement="outside-left"
                classNames={{ value: 'px-2' }}
                placeholder="Select format"
                value={element.config.styles.labelFormat}
                onChange={(e) =>
                  onChange({
                    ...element,
                    config: {
                      ...element.config,
                      styles: { ...element.config.styles, labelFormat: e.target.value },
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
            {element.config.styles.labelFormat === 'currency' && (
              <div>
                <Select
                  variant="bordered"
                  size="lg"
                  name="currency"
                  label="Select Currency"
                  labelPlacement="outside-left"
                  classNames={{ value: 'px-2' }}
                  placeholder="Choose currency"
                  value={element.config.styles.selectedCurrency}
                  onChange={(e) =>
                    onChange({
                      ...element,
                      config: {
                        ...element.config,
                        styles: { ...element.config.styles, selectedCurrency: e.target.value },
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
          </div>
        )}
        <Checkbox
          isSelected={element.config.showLegend}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLegend: v } })}
        >
          Show Legend
        </Checkbox>
        <Checkbox
          isSelected={element.config.showToolTip}
          classNames={{ base: 'py-0' }}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, showToolTip: v } })}
        >
          Show Tooltip
        </Checkbox>

        {element.type === 'chart-s-pie' && (
          <div className="flex items-center space-x-4">
            {['top', 'bottom'].map((position) => (
              <Checkbox
                key={position}
                isSelected={element.config.legendPosition === position}
                onValueChange={() =>
                  onChange({
                    ...element,
                    config: { ...element.config, legendPosition: position },
                  })
                }
              >
                {capitalize(position)}
              </Checkbox>
            ))}
          </div>
        )}

        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75 whitespace-nowrap">No. of Pie:</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, pies: Number(v) },
              })
            }
            value={element.config.pies}
            min={1}
            max={element.config.data.length}
            ariaLabel="No of pies to Show"
          />
        </div>
        {/*<div>*/}
        {/*  <div>*/}
        {/*    <Slider*/}
        {/*      label="Inner Radius"*/}
        {/*      step={10}*/}
        {/*      maxValue={100}*/}
        {/*      minValue={10}*/}
        {/*      marks={[*/}
        {/*        { value: 10, label: '10' },*/}
        {/*        { value: 20, label: '20' },*/}
        {/*        { value: 30, label: '30' },*/}
        {/*        { value: 40, label: '40' },*/}
        {/*        { value: 50, label: '50' },*/}
        {/*        { value: 60, label: '60' },*/}
        {/*        { value: 70, label: '70' },*/}
        {/*        { value: 80, label: '80' },*/}
        {/*        { value: 90, label: '90' },*/}
        {/*        { value: 100, label: '100' },*/}
        {/*      ]}*/}
        {/*      className="max-w-md"*/}
        {/*      onChange={(e) => onChange({ ...element, config: { ...element.config, innerRadius: e } })}*/}
        {/*      value={element.config.innerRadius}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

StandardPieCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardPieCommonConfig;
