import { Button, Input } from '@nextui-org/react';
import { TbCirclePlus } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { RiArrowLeftSLine } from 'react-icons/ri';

const ModifyData = ({ element, onChange, onBack }) => {
  const handleChange = (updatedItem) => {
    const updatedData = element.config.data.map((item, idx) =>
      idx === updatedItem.index ? { ...item, ...updatedItem } : item
    );
    onChange({ ...element, config: { ...element.config, data: updatedData } });
  };

  const handleDataChange = (index, subIndex, newValue) => {
    const updatedData = [...element.config.data];
    updatedData[index][subIndex] = newValue;
    onChange({
      ...element,
      config: {
        ...element.config,
        data: updatedData,
      },
    });
  };

  const getConfig = () => {
    const { y } = element.config.keys;
    if (typeof y === 'string' || element.config.name === 'pie') {
      return (
        <>
          <div className="flex flex-col space-y-3">
            {element.config.data.map((item, index) =>
              Array.isArray(item) && element.config.name === 'bubble' ? (
                <div key={index} className="grid grid-cols-2 gap-2">
                  <Input
                    value={item[0]}
                    placeholder="Number of visitors"
                    required
                    type="number"
                    variant="bordered"
                    onChange={(e) => handleDataChange(index, 0, parseFloat(e.target.value))}
                  />
                  <Input
                    value={item[1]}
                    placeholder="Number of visitors"
                    required
                    type="number"
                    variant="bordered"
                    onChange={(e) => handleDataChange(index, 1, parseFloat(e.target.value))}
                  />
                </div>
              ) : element.config.name !== 'scatter' ? (
                <div key={index} className="grid grid-cols-2 gap-2">
                  <Input
                    value={item[element.config.keys.x]}
                    placeholder="Browser name"
                    required
                    variant="bordered"
                    classNames={{ input: 'text-base capitalize' }}
                    onChange={(e) => {
                      handleChange({ ...item, [element.config.keys.x]: e.target.value, index });
                    }}
                  />
                  <Input
                    value={item[element.config.keys.y]}
                    placeholder="Number of visitors"
                    required
                    type="number"
                    variant="bordered"
                    onChange={(e) => {
                      handleChange({ ...item, [element.config.keys.y]: Number(e.target.value), index });
                    }}
                  />
                </div>
              ) : (
                <div key={index} className="grid grid-cols-2 gap-2">
                  <Input
                    value={item[3]}
                    placeholder="name"
                    required
                    variant="bordered"
                    classNames={{ input: 'text-base capitalize' }}
                    onChange={(e) => handleDataChange(index, 3, e.target.value)}
                  />
                  <Input
                    value={item[2]}
                    placeholder="Number of visitors"
                    required
                    type="number"
                    variant="bordered"
                    onChange={(e) => handleDataChange(index, 2, Number(e.target.value))}
                  />
                </div>
              )
            )}
            <TbCirclePlus
              size={30}
              onClick={() => {
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    data: [...element.config.data, { name: 'Immortal', value: 500 }],
                    colors: [...element.config.colors, '#000000'],
                    bars: element.config.bars + 1,
                    pies: element.config.pies + 1,
                  },
                });
              }}
            />
          </div>
        </>
      );
    } else if (Array.isArray(y)) {
      return (
        <>
          <div className="flex flex-col space-y-3">
            {element.config.data.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-2">
                <Input
                  value={item.month || item.name}
                  placeholder="Month name"
                  required
                  variant="bordered"
                  classNames={{ input: 'capitalize' }}
                  onChange={(e) => {
                    handleChange({ ...item, month: e.target.value, index });
                  }}
                />
                <>
                  {element.config.keys.y
                    .slice(
                      0,
                      element.config.noOfLines || element.config.noOfBarsPerGroup || element.config.keys.y.length
                    )
                    .map((key, i) => (
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
                      { month: 'January', ...element.config.keys.y.reduce((acc, key) => ({ ...acc, [key]: 50 }), {}) },
                    ],
                    colors: [...element.config.colors, '#000000'],
                    bars: element.config.bars + 1,
                    pies: element.config.pies + 1,
                  },
                });
              }}
            />
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-1 mb-6">
        <Button onClick={onBack} variant="bordered" className="mr-2" radius="full" isIconOnly size="sm">
          <RiArrowLeftSLine size="20" />
        </Button>
        <h2 className="text-lg">Chart Data</h2>
      </div>
      {getConfig()}
    </div>
  );
};

ModifyData.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ModifyData;
