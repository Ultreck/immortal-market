import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import { createElement, useState } from 'react';
import icons from '@/lib/design/icons.js';

const AdvanceCircleIconsConfig = ({ element, onChange }) => {
  const [selectedIndex, setSelectedIndex] = useState(null); // Track the selected circle for icon update
  // const CurrentIcon = icons.find((icon) => icon.name === (currentIcon || 'circle')).icon;

  const handleIconChange = (index, newIcon) => {
    const updatedData = [...element.config.data];
    updatedData[index].icon = newIcon;
    onChange({
      ...element,
      config: { ...element.config, data: updatedData },
    });
    setSelectedIndex(null); // Close popover
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <p className="my-auto">Number of Circles: </p>
        <AutoCompleteNumberInput
          onChange={(v) =>
            onChange({
              ...element,
              config: { ...element.config, circles: Number(v) },
            })
          }
          value={element.config.circles}
          min={1}
          max={element.config.data.length}
          ariaLabel="No of Circles to Show"
        />
      </div>
      <div>
        <Select
          variant="bordered"
          name="shape"
          label="Shape"
          labelPlacement="outside-left"
          placeholder="Select one"
          value={element.config.shape}
          defaultSelectedKeys={[element.config.shape]}
          onChange={(e) =>
            onChange({
              ...element,
              config: { ...element.config, shape: e.target.value },
            })
          }
          disableEmptySelection={true}
        >
          <SelectItem key="circle" classNames={{ title: 'px-2 text-base' }}>
            Circle
          </SelectItem>
          <SelectItem key="square" classNames={{ title: 'px-2 text-base' }}>
            Square
          </SelectItem>
        </Select>
      </div>
      <div className="space-y-4">
        {element.config.data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <p className="text-base">{item.label}</p>
            <Popover>
              <PopoverTrigger>
                <button className="p-2 border rounded" onClick={() => setSelectedIndex(index)}>
                  {createElement(item.icon)}
                  {/*<i className={item.icon}></i>*/}
                </button>
              </PopoverTrigger>
              {selectedIndex === index && (
                <PopoverContent className="grid grid-cols-4 gap-2 p-4">
                  {icons.map((icon, i) => (
                    <button
                      key={i}
                      className="p-2 border rounded hover:bg-gray-100"
                      onClick={() => handleIconChange(index, icon)}
                    >
                      <icon.icon size={24} />
                      {/*<i className={icon}></i>*/}
                    </button>
                  ))}
                </PopoverContent>
              )}
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
};

AdvanceCircleIconsConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceCircleIconsConfig;
