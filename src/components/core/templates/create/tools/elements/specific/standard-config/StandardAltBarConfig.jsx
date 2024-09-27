import { useEffect, useState } from 'react';
import { Checkbox, Input, Tab, Tabs } from '@nextui-org/react';
import { TbCirclePlus } from 'react-icons/tb';
import PropTypes from 'prop-types';

const StandardAltBarConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');

  const handleChange = (rowIndex, colIndex, value) => {
    const updatedData = [...element.config.data];
    updatedData[colIndex][rowIndex] = value;

    onChange({ ...element, config: { ...element.config, data: updatedData } });
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
          <div className="flex flex-col space-y-6">
            {element.config.data[0].map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-2">
                <Input
                  value={element.config.data[0][index]}
                  placeholder="Browser name"
                  required
                  variant="bordered"
                  classNames={{ input: 'text-base capitalize' }}
                  onChange={(e) => {
                    handleChange(index, 0, e.target.value);
                  }}
                />
                <Input
                  value={element.config.data[1][index]}
                  placeholder="Number of visitors"
                  required
                  type="number"
                  variant="bordered"
                  onChange={(e) => {
                    handleChange(index, 1, e.target.value);
                  }}
                />
                <Input
                  value={element.config.data[2][index]}
                  placeholder="Number of visitors"
                  required
                  type="number"
                  variant="bordered"
                  onChange={(e) => {
                    handleChange(index, 2, e.target.value);
                  }}
                />
              </div>
            ))}
            <TbCirclePlus
              size={30}
              on
              Click={() => {
                onChange({});
              }}
            />
          </div>
        </Tab>
        <Tab key="settings" title="Settings" className="text-base">
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
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

StandardAltBarConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StandardAltBarConfig;
