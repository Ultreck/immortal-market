import { Button, Input, Select, SelectItem } from '@heroui/react';
import PropTypes from 'prop-types';
import { RiArrowLeftSLine, RiAddLine, RiDeleteBinLine } from 'react-icons/ri';
import useDesignStore from '@/store/design.js';
import { capitalize } from '@/lib/utils';
import { cn } from '@/lib/utils';

const keys = {
  'chart-s': {
    bar: {
      label: 'x',
      value: ['y'],
    },
    pie: {
      label: 'name',
      value: ['value'],
    },
    'pie-2': {
      label: 'name',
      value: ['value'],
    },
    'semi-pie': {
      label: 'name',
      value: ['value'],
    },
    'semi-pie-2': {
      label: 'name',
      value: ['value'],
    },
    'bar-stacked': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    'bar-multiple': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    'alt-bar': {
      label: 'x',
      value: ['y'],
    },
    line: {
      label: 'x',
      value: ['y'],
    },
    'line-multiple': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    area: {
      label: 'x',
      value: ['y'],
    },
    'area-multiple': {
      label: 'x',
      value: ['y'],
      multiple: true,
    },
    scatter: {
      label: 'x',
      value: ['y'],
    },
    bubble: {
      label: 'x',
      value: ['y'],
    },
    'line-area': {
      label: 'x',
      value: ['yLine', 'yArea'],
    },
    'line-bar': {
      label: 'x',
      value: ['yLine', 'yBar'],
    },
  },
  'chart-a': {
    funnel: {
      label: 'name',
      value: ['value'],
    },
  },
};

const ConfigureData = ({ element, onBack }) => {
  const updateElement = useDesignStore((state) => state.updateElement);
  const labels = Object.keys(element.config.data[0]);

  const handleDataChange = (rowIndex, key, value) => {
    const newData = [...element.config.data];
    const parsedValue = !isNaN(parseFloat(value)) && isFinite(value) ? parseFloat(value) : value;
    newData[rowIndex] = {
      ...newData[rowIndex],
      [key]: parsedValue,
    };
    updateElement(element.id, { config: { ...element.config, data: newData } });
  };

  const handleLabelChange = (oldKey, newKey) => {
    const newData = element.config.data.map((row) => {
      const newRow = { ...row };
      newRow[newKey] = newRow[oldKey];
      delete newRow[oldKey];
      return newRow;
    });
    updateElement(element.id, { config: { ...element.config, data: newData } });
  };

  const handleAddColumn = () => {
    const newColumnName = `Column ${labels.length + 1}`;
    const newData = element.config.data.map((row) => ({
      ...row,
      [newColumnName]: '',
    }));
    updateElement(element.id, { config: { ...element.config, data: newData } });
  };

  const handleAddRow = () => {
    const newRow = labels.reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    const newData = [...element.config.data, newRow];
    updateElement(element.id, { config: { ...element.config, data: newData } });
  };

  const handleDeleteColumn = (columnKey) => {
    const newData = element.config.data.map((row) => {
      const newRow = { ...row };
      delete newRow[columnKey];
      return newRow;
    });
    updateElement(element.id, { config: { ...element.config, data: newData } });
  };

  const handleDeleteRow = (rowIndex) => {
    const newData = element.config.data.filter((_, index) => index !== rowIndex);
    updateElement(element.id, { config: { ...element.config, data: newData } });
  };

  return (
    <div>
      <div className="flex items-center space-x-1 mb-6">
        <Button onPress={onBack} variant="flat" className="mr-2" radius="full" isIconOnly size="sm">
          <RiArrowLeftSLine size="20" />
        </Button>
        <h2 className="text-lg">Chart Data</h2>
      </div>
      <div className="relative">
        <div className="border border-default-200 rounded-xl max-h-[360px] overflow-y-auto overflow-x-auto divide-y divide-default-200">
          <div
            className="grid divide-x divide-default-200"
            style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}
          >
            {labels.map((key, index) => (
              <div key={index} className="relative group">
                <div className="flex items-center relative">
                  <Input
                    variant="flat"
                    value={key}
                    radius="none"
                    classNames={{ input: 'text-base' }}
                    onChange={(e) => handleLabelChange(key, e.target.value)}
                  />
                  <Button
                    onPress={() => handleDeleteColumn(key)}
                    variant="solid"
                    radius="2xl"
                    isIconOnly
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity size-min py-1.5 px-1.5 min-w-max"
                  >
                    <RiDeleteBinLine size="14" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {element.config.data.map((item, rowIndex) => (
            <div
              key={rowIndex}
              className="grid divide-x divide-default-200 group"
              style={{ gridTemplateColumns: `repeat(${labels.length}, 1fr)` }}
            >
              {labels.map((key, colIndex) => (
                <div key={colIndex} className="relative">
                  <Input
                    variant="flat"
                    value={item[key]}
                    radius="none"
                    classNames={{ input: 'text-base' }}
                    onChange={(e) => handleDataChange(rowIndex, key, e.target.value)}
                  />
                  {colIndex === 0 && (
                    <Button
                      onPress={() => handleDeleteRow(rowIndex)}
                      variant="solid"
                      radius="2xl"
                      isIconOnly
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity size-min py-1.5 px-1.5 min-w-max"
                    >
                      <RiDeleteBinLine size="14" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          ))}
          <div
            className="grid divide-x divide-default-200"
            style={{ gridTemplateColumns: `repeat(${labels.length + 1}, 1fr)` }}
          >
            {labels.map((_, index) => (
              <div key={index} className="border-l border-default-200" />
            ))}
          </div>
        </div>
        <button
          onClick={handleAddRow}
          className="absolute top-[calc(100%-6px)] left-1/2 -translate-x-1/2 flex items-center justify-center bg-default-100 border border-default-200 rounded-lg py-0.5 px-6 w-max hover:bg-default-100 transition-colors"
        >
          <RiAddLine size="16" />
        </button>
        <button
          onClick={handleAddColumn}
          className="absolute left-[calc(100%-6px)] top-1/2 -translate-y-1/2 flex items-center justify-center bg-default-100 border border-default-200 rounded-lg px-0.5 py-6 h-max hover:bg-default-100 transition-colors"
        >
          <RiAddLine size="16" />
        </button>
      </div>
      <ChartKeys element={element} className="mt-6" />
    </div>
  );
};

const ChartKeys = ({ element, className }) => {
  const updateElement = useDesignStore((state) => state.updateElement);
  const labels = Object.keys(element.config.data[0]);

  console.log(element.type, element.config.name, element.config);

  return (
    <form className={cn('flex flex-col gap-4', className)}>
      {[keys[element.type][element.config.name].label].map((key) => {
        const value = element.config.keys[key];
        const isMultiple = keys[element.type][element.config.name].multiple;
        const options = labels.filter((c) => isNaN(element.config.data[0][c]));
        return (
          <div className="flex-1" key={key}>
            <Select
              label={capitalize(key)}
              labelPlacement="outside"
              placeholder={isMultiple ? 'Select one or more' : 'Select one'}
              selectionMode={isMultiple ? 'multiple' : 'single'}
              selectedKeys={labels.find((c) => c === value) ? [value] : []}
              onSelectionChange={(e) => {
                updateElement(element.id, {
                  config: {
                    ...element.config,
                    keys: { ...element.config.keys, [key]: isMultiple ? Array.from(e) : Array.from(e)[0] },
                  },
                });
              }}
              classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
              disableEmptySelection={true}
            >
              {options.map((l) => (
                <SelectItem key={l} classNames={{ title: 'text-base px-2' }}>
                  {l}
                </SelectItem>
              ))}
            </Select>
          </div>
        );
      })}
      {keys[element.type][element.config.name].value.map((key) => {
        const value = element.config.keys[key];
        const isMultiple = keys[element.type][element.config.name].multiple;
        let selectedKeys = labels.find((c) => c === value) ? [value] : [];
        if (isMultiple) {
          selectedKeys = Array.isArray(value) ? value.filter((k) => labels.includes(k)) : [value];
        }
        const options = labels.filter((c) => !isNaN(element.config.data[0][c]));
        return (
          <div className="flex-1" key={key}>
            <Select
              label={capitalize(key)}
              labelPlacement="outside"
              placeholder={isMultiple ? 'Select one or more' : 'Select one'}
              selectionMode={isMultiple ? 'multiple' : 'single'}
              selectedKeys={selectedKeys}
              onSelectionChange={(e) => {
                updateElement(element.id, {
                  config: {
                    ...element.config,
                    keys: { ...element.config.keys, [key]: isMultiple ? Array.from(e) : Array.from(e)[0] },
                  },
                });
              }}
              classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
              disableEmptySelection={true}
            >
              {options.map((l) => (
                <SelectItem key={l} classNames={{ title: 'text-base px-2' }}>
                  {l}
                </SelectItem>
              ))}
            </Select>
          </div>
        );
      })}
    </form>
  );
};

ConfigureData.propTypes = {
  element: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

ChartKeys.propTypes = {
  element: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default ConfigureData;
