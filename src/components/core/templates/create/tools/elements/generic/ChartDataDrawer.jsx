import Drawer from '@/components/ui/Drawer';
import { chartElements } from '@/lib/standard-charts';
import { Input } from '@nextui-org/react';
import React from 'react';
import { TbCirclePlus } from 'react-icons/tb';
import DraggableElementWrapper from '../../../sidebar/DraggableElementWrapper';
import NewConnection from '../chart-submenu/NewConnection';

const ChartDataDrawer = ({ item, isOpen, onClose, element, onChange }) => {
  const handleChange = (updatedItem) => {
    const updatedData = element.config.data.map((item, idx) =>
      idx === updatedItem.index ? { ...item, ...updatedItem } : item
    );
    onChange({ ...element, config: { ...element.config, data: updatedData } });
  };

  function getConfig() {
    const { y } = element.config.keys;
    if (typeof y === 'string' || element.type === 'chart-s-pie') {
      return (
        <>
          <div className="flex flex-col space-y-6">
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
          <div className="flex flex-col space-y-6">
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
  }

  const getChartsByKeysStructure = () => {
    const areKeysEqual = (keys1, keys2) => {
      console.log(keys1, keys2)
      
      if (!keys1 || !keys2) return false;

      const xEqual = keys1.x === keys2.x;
      const bothArrays = Array.isArray(keys1.y) && Array.isArray(keys2.y);
      const yEqual = bothArrays
        ? keys1.y.length === keys2.y.length && keys1.y.every((val, index) => val === keys2.y[index])
        : keys1.y === keys2.y;

      return xEqual && yEqual;
    };

    return chartElements.filter((chart) => {
      const chartKeys = chart.data.config.keys;
      return areKeysEqual(chartKeys, element.config.keys);
    });
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title={item?.title} width={700}>
      {item?.title === 'View Data' && getConfig()}
      {item?.title === 'Change Chart' && (
        <div>
          <div className="grid grid-cols-6 gap-4">
            {getChartsByKeysStructure().map((element) => (
              <DraggableElementWrapper key={element.id} element={element} />
            ))}
          </div>
        </div>
      )}
      {item?.title === 'New Connection' && <NewConnection />}
    </Drawer>
  );
};

export default ChartDataDrawer;

