import { Checkbox, Input, Tab, Tabs } from '@nextui-org/react';
import { TbChartLine, TbCirclePlus, TbTimeline } from 'react-icons/tb';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const StandardStackedBarConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

  const handleChange = (item) => {
    const newData = [...element.config.data];
    newData[item.index] = item;
    onChange({ ...element, config: { ...element.config, data: newData } });
  };

  useEffect(() => {}, [element]);
  return (
    <>
      {/* <Tabs
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
            {element.config.data.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-2">
                <Input
                  value={item.month}
                  placeholder="Month name"
                  required
                  variant="bordered"
                  classNames={{ input: 'text-lg capitalize font-bold rounded-md  text-primary' }}
                  onChange={(e) => {
                    handleChange({ ...item, month: e.target.value, index });
                  }}
                />
                {element.type === 'chart-s-line-multiple' ? (
                  <>
                    {element.config.keys.y.slice(0, element.config.noOfLines).map((key, i) => (
                      <Input
                        key={i}
                        value={item[key]}
                        placeholder={key}
                        required
                        variant="bordered"
                        classNames={{ input: 'text-base capitalize' }}
                        onChange={(e) => {
                          handleChange({ ...item, [key]: e.target.value, index });
                        }}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    {element.config.keys.y.map((key, i) => (
                      <Input
                        key={i}
                        value={item[key]}
                        placeholder={key}
                        required
                        variant="bordered"
                        classNames={{ input: 'text-base capitalize' }}
                        onChange={(e) => {
                          handleChange({ ...item, [key]: e.target.value, index });
                        }}
                      />
                    ))}
                  </>
                )}
              </div>
            ))}
            <TbCirclePlus
              size={30}
              onClick={() => {
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    data: [
                      ...element.config.data,
                      { month: 'January', ...element.config.keys.y.reduce((acc, key) => ({ ...acc, [key]: 10 }), {}) },
                    ],
                    colors: [...element.config.colors, '#E66B5B'],
                    bars: element.config.bars + 1,
                  },
                });
              }}
            />
          </div>
        </Tab> */}
      {/* <Tab key="settings" title="Settings" className="text-base"> */}
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
        {element.type === 'chart-s-line-multiple' && (
          <>
            <div className="flex items-center space-x-4">
              {[
                { name: 'Natural', icon: <TbChartLine size={25} /> },
                { name: 'Linear', icon: <TbTimeline size={25} /> },
              ].map((position, i) => (
                <Checkbox
                  key={i}
                  isSelected={element.config.type === position.name}
                  onValueChange={(v) =>
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
          </>
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
            max={element.config.data.length}
            ariaLabel="No of Bars to Show"
          />
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-base opacity-75 whitespace-nowrap">No. of Lines:</p>
          <AutoCompleteNumberInput
            onChange={(v) =>
              onChange({
                ...element,
                config: { ...element.config, noOfLines: Number(v) },
              })
            }
            value={element.config.noOfLines}
            min={1}
            max={5}
            ariaLabel="No of Bars to Show"
          />
        </div>
      </div>
      {/* </Tab> */}
      {/* </Tabs> */}
    </>
  );
};

StandardStackedBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardStackedBarConfig;

