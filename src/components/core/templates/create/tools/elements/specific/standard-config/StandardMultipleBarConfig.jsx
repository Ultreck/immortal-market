import { Checkbox, Input, Tab, Tabs } from '@nextui-org/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
              <p className="text-base opacity-75 whitespace-nowrap">No. of bars:</p>
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
            {element.type === 'chart-s-bar-multiple' && (
              <div className="flex items-center space-x-4">
                <p className="text-base opacity-75 whitespace-nowrap">No. of bars per group:</p>
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
            {element.type === 'chart-s-bar-multiple-vertical' && (
              <div className="flex items-center space-x-4">
                <p className="text-base opacity-75 whitespace-nowrap">No. of bars per group:</p>
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
          <div className="space-y-4">
          <div className="flex items-center space-x-4">
              <p className="text-base opacity-75 whitespace-nowrap">Label Font Size:</p>
              <AutoCompleteNumberInput
                onChange={(v) =>
                  onChange({
                    ...element,
                    config: { ...element.config, fontSize: Number(v) },
                  })
                }
                value={element.config.fontSize}
                min={1}
                max={30}
                ariaLabel="FontSize"
              />
            </div>
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
    </>
  );
};

StandardMultipleBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardMultipleBarConfig;

