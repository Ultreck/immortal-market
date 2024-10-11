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

  const getConfig = () => {
    const { y } = element.config.keys;
    if (typeof y === 'string' || element.type === 'chart-s-pie') {
      return (
        <>
          <div className="flex flex-col space-y-3">
            {element.config.data.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-2">
                <Input
                  value={item.browser || item.name}
                  placeholder="Browser name"
                  required
                  variant="bordered"
                  classNames={{ input: 'text-base capitalize' }}
                  onChange={(e) => {
                    handleChange({ ...item, browser: e.target.value, index });
                  }}
                />
                <Input
                  value={item.visitors || item.value}
                  placeholder="Number of visitors"
                  required
                  type="number"
                  variant="bordered"
                  onChange={(e) => {
                    handleChange({ ...item, visitors: e.target.value, index });
                  }}
                />
              </div>
            ))}
            <TbCirclePlus
              size={30}
              onClick={() => {
                onChange({
                  ...element,
                  config: {
                    ...element.config,
                    data: [...element.config.data, { browser: 'Immortal', visitors: 10 }],
                    colors: [...element.config.colors, '#E66B5B'],
                    bars: element.config.bars + 1,
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
                    colors: [...element.config.colors, '#E66B5B'],
                    bars: element.config.bars + 1,
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
