import { Button, Input } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { TbCirclePlus } from 'react-icons/tb';

const ModifyAdvancedChart = ({ element, onChange, onBack }) => {
  const handleChange = (updatedItem) => {
    const updatedData = element.config.data.map((item, idx) =>
      idx === updatedItem.index ? { ...item, ...updatedItem } : item
    );
    onChange({ ...element, config: { ...element.config, data: updatedData } });
  };

  const handleDynamicSortingChanges = (newValue, index) => {
    const updatedData = [...element.config.data];

    updatedData[index] = newValue;

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

  const handleChildChange = (parentIndex, childIndex, key, newValue) => {
    // Clone the entire config
    const updatedConfig = { ...element.config };

    // Update the specific child element inside the parent at `parentIndex`
    updatedConfig.data[parentIndex].children[childIndex] = {
      ...updatedConfig.data[parentIndex].children[childIndex],
      [key]: newValue,
    };

    // Update the state with the modified data
    onChange({
      ...element,
      config: updatedConfig,
    });
  };

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-1 mb-6">
        <Button onClick={onBack} variant="bordered" className="mr-2" radius="full" isIconOnly size="sm">
          <RiArrowLeftSLine size="20" />
        </Button>
        <h2 className="text-lg">Chart Data</h2>
      </div>
      {element.config.name != 'tree-map' && (
        <>
          {Array.isArray(element.config.data) ? (
            element.config.data.slice(0, element.config.bars || element.config.data.length).map((item, index) =>
              Array.isArray(item) ? (
                <div key={index} className="grid grid-cols-4 gap-2">
                  <Input
                    value={item[3]}
                    placeholder="name"
                    required
                    variant="bordered"
                    classNames={{ input: 'text-base capitalize' }}
                    onChange={(e) => handleDataChange(index, 3, e.target.value)}
                  />
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
                  <Input
                    value={item[2]}
                    placeholder="Number of visitors"
                    required
                    type="number"
                    variant="bordered"
                    onChange={(e) => handleDataChange(index, 2, parseFloat(e.target.value))}
                  />
                </div>
              ) : element.config.name === 'dynamic-sorting' ? (
                <div key={index} className="grid grid-cols-1 gap-2">
                  <Input
                    value={item}
                    placeholder="name"
                    required
                    variant="bordered"
                    classNames={{ input: 'text-base capitalize' }}
                    onChange={(e) => {
                      handleDynamicSortingChanges(e.target.value, index);
                    }}
                  />
                </div>
              ) : (
                <div key={index} className="flex gap-2">
                  <Input
                    value={item[element.config.keys.name] || item}
                    placeholder="name"
                    required
                    variant="bordered"
                    classNames={{ input: 'text-base capitalize' }}
                    onChange={(e) => {
                      handleChange({ ...item, [element.config.keys.name]: e.target.value, index });
                    }}
                  />
                  <Input
                    value={item[element.config.keys.data] || 'No value'}
                    placeholder="Number of visitors"
                    required
                    type="number"
                    variant="bordered"
                    onChange={(e) => {
                      handleChange({ ...item, [element.config.keys.data]: e.target.value, index });
                    }}
                  />
                </div>
              )
            )
          ) : (
            <div className="text">{"There's no data for this chart"}</div>
          )}
        </>
      )}
      {element.config.data && (
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
      )}

      {element.config.name === 'tree-map' && (
        <div className="grid grid-cols-4 gap-2">
          {element.config.data.map((parent, parentIndex) => (
            <div key={parentIndex}>
              <Input
                value={parent.name}
                placeholder="name"
                required
                variant="bordered"
                classNames={{ input: 'text-base capitalize' }}
                onChange={(e) => handleChildChange(parentIndex, parentIndex, 'name', e.target.value)}
              />
              {parent.children.map((child, childIndex) => (
                <div key={childIndex} className="child-item">
                  <Input
                    value={child.size}
                    placeholder="Size"
                    type="number"
                    required
                    variant="bordered"
                    classNames={{ input: 'text-base capitalize' }}
                    onChange={(e) => handleChildChange(parentIndex, childIndex, 'size', parseInt(e.target.value))}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ModifyAdvancedChart.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
export default ModifyAdvancedChart;
