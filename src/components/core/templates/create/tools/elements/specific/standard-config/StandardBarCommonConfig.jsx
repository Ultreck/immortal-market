import { useEffect, useState } from 'react';
import { Checkbox, Select, SelectItem, Tab, Tabs } from '@nextui-org/react';
import { TbChartLine, TbTimeline } from 'react-icons/tb';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import PropTypes from 'prop-types';
import DndFileInput from '@/components/ui/DndFileInput';
import { HexAlphaColorPicker } from 'react-colorful';

const StandardBarCommonConfig = ({ element, onChange }) => {
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

  useEffect(() => {}, [element]);
  return (
    <div>
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
            {element.type === 'chart-s-line' && element.type === 'chart-s-area' && (
              <div className="flex items-center space-x-4">
                {[
                  { name: 'Natural', icon: <TbChartLine size={25} /> },
                  { name: 'Linear', icon: <TbTimeline size={25} /> },
                ].map((position, i) => (
                  <Checkbox
                    key={i}
                    isSelected={element.config.type === position.name}
                    onValueChange={() =>
                      onChange({
                        ...element,
                        config: { ...element.config, type: position.name },
                      })
                    }
                  >
                    {position.icon}
                  </Checkbox>
                ))}
              </div>
            )}
            <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">No. of points:</p>
              <AutoCompleteNumberInput
                onChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, bars: Number(v) },
                  })
                }
                value={element.config.bars}
                min={1}
                max={10}
                ariaLabel="No of Bars to Show"
              />
            </div>
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
          </div>
        </Tab>
        <Tab key="style" title="Chart Style" className="text-base">
          <div className="space-y-2 flex flex-col">
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
                    {[
                      { key: 'top', name: 'Top' },
                      { key: 'bottom', name: 'Bottom' },
                      { key: 'insideTop', name: 'inside Top' },
                      { key: 'insideBottom', name: 'inside Bottom' },
                      { key: 'center', name: 'Center' },
                    ].map((type) => (
                      <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            )}
            {element.config.useBackgroundImage && (
              <DndFileInput
                label="Drop images or click to select"
                onChange={handleImageChange}
                className="mb-8"
                maxSize={10000000}
              />
            )}
            {element.config.useBackgroundColor && (
              <HexAlphaColorPicker
                className="!w-full"
                color={element.config.backgroundColor}
                onChange={(color) => onChange({ ...element, config: { ...element.config, backgroundColor: color } })}
              />
            )}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

StandardBarCommonConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardBarCommonConfig;
