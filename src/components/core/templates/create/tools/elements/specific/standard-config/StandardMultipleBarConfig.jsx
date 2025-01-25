import { Checkbox, Select, SelectItem, Slider, Tab, Tabs } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DndFileInput from '@/components/ui/DndFileInput.jsx';
import { HexAlphaColorPicker } from 'react-colorful';
import { fontFamily } from '@/lib/utils.js';
import ColorPicker from '@/components/ui/ColorPicker.jsx';

const StandardMultipleBarConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

  const handleImageChange = (e) => {
    const file = e[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({
          ...element,
          config: {
            ...element.config,
            backgroundImage: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const dgetData = () => {
    if (element.config.name.includes('vertical')) {
      return [
        { key: 'top', name: 'Outside End' },
        { key: 'insideTop', name: 'Inside Base' },
        { key: 'insideBottom', name: 'Inside End' },
        { key: 'center', name: 'Inside Center' },
      ];
    } else {
      return [
        { key: 'top', name: 'Top' },
        { key: 'insideTop', name: 'inside Top' },
        { key: 'insideBottom', name: 'inside Bottom' },
        { key: 'center', name: 'Center' },
      ];
    }
  };

  useEffect(() => {}, [element]);
  return (
    <>
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
            <div>
              <Checkbox
                isSelected={element.config.showXGridline}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, showXGridline: v },
                  })
                }
              >
                Show X Grid Line
              </Checkbox>
            </div>
            <div>
              <Checkbox
                isSelected={element.config.showYGridline}
                classNames={{ base: 'py-0' }}
                onValueChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, showYGridline: v },
                  })
                }
              >
                Show Y Grid Line
              </Checkbox>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">Number of bars:</p>
              <AutoCompleteNumberInput
                onChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, bars: Number(v) },
                  })
                }
                value={element.config.bars}
                min={1}
                max={element.config.data.length}
                ariaLabel="No of Bars to Show"
              />
            </div>
            {element.config.name === 'bar-multiple' && (
              <div className="flex items-center space-x-4">
                <p className="text-base opacity-75 whitespace-nowrap">No. of bars/group:</p>
                <AutoCompleteNumberInput
                  onChange={(v) =>
                    onChange({
                      ...element,
                      config: { ...element.config, noOfBarsPerGroup: Number(v) },
                    })
                  }
                  value={element.config.noOfBarsPerGroup}
                  min={1}
                  max={5}
                  ariaLabel="No of noOfBarsPerGroup to Show"
                />
              </div>
            )}
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">Border radius:</p>
              <AutoCompleteNumberInput
                onChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, styles: { ...element.config.styles, borderRadius: Number(v) } },
                  })
                }
                value={element.config.styles.borderRadius}
                min={1}
                max={30}
                ariaLabel="borderRadius"
              />
            </div>
            {element.config.name === 'bar-multiple-vertical' && (
              <div className="flex items-center space-x-4">
                <p className="text-base opacity-75 whitespace-nowrap">No. of bars/group:</p>
                <AutoCompleteNumberInput
                  onChange={(v) =>
                    onChange({
                      ...element,
                      config: { ...element.config, noOfBarsPerGroup: Number(v) },
                    })
                  }
                  value={element.config.noOfBarsPerGroup}
                  min={1}
                  max={5}
                  ariaLabel="No of noOfBarsPerGroup to Show"
                />
              </div>
            )}
          </div>
        </Tab>
        <Tab key="style" title="Chart Style" className="text-base">
          <div className="space-y-4 flex flex-col">
            <Checkbox
              isSelected={element.config.showLabel}
              className={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, showLabel: v } })}
            >
              Show Label
            </Checkbox>
            <Checkbox
              isSelected={element.config.useBackgroundImage}
              className={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, useBackgroundImage: v } })}
            >
              Use Background Image
            </Checkbox>
            <Checkbox
              isSelected={element.config.useBackgroundColor}
              className={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, config: { ...element.config, useBackgroundColor: v } })}
            >
              Use Background Color
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
                    {dgetData().map((type) => (
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
              </div>
            )}
            {element.config.useBackgroundImage && (
              <div className="border border-default-200 rounded-2xl px-8 py-6 space-y-6">
                <Slider
                  value={(element.config.styles.opacity || 100) * 100}
                  onChange={(opacity) =>
                    onChange({
                      ...element,
                      config: { ...element.config, styles: { ...element.config.styles, opacity: opacity / 100 } },
                    })
                  }
                  label="Transparency"
                  maxValue={100}
                  minValue={0}
                  classNames={{
                    thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
                    track: 'border-s-default-300',
                    filler: 'bg-gradient-to-r from-default-300 to-default-400',
                    label: 'text-base',
                    value: 'text-base opacity-60',
                  }}
                  size="sm"
                  showOutline
                />
                <DndFileInput
                  label="Drop images or click to select"
                  onChange={handleImageChange}
                  className="mb-8"
                  maxSize={10000000}
                />
              </div>
            )}
            {element.config.useBackgroundColor && (
              <HexAlphaColorPicker
                className="!w-full"
                color={element.config.backgroundColor}
                onChange={(color) =>
                  onChange({
                    ...element,
                    config: { ...element.config, backgroundColor: color },
                  })
                }
              />
            )}
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

StandardMultipleBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardMultipleBarConfig;
