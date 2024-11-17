import PropTypes from 'prop-types';
import { Button, Popover, PopoverContent, PopoverTrigger, Tab, Tabs, Textarea } from '@nextui-org/react';
import { TbSettings2 } from 'react-icons/tb';
import { Controller, useForm } from 'react-hook-form';
import { isValidJsonArray } from '@/lib/utils.js';
import { useState } from 'react';
import useTemplateStore from '@/store/template.js';

const TableConfig = ({ element, onChange }) => {
  const [tab, setTab] = useState('data');
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      json: JSON.stringify(element.config.data, null, 2),
    },
  });

  console.log(element.config);

  const onSubmit = async (values) => {
    const { json } = values;
    const data = JSON.parse(json);
    onChange({ ...element, config: { ...(element?.config || {}), data } });
    updateTemplate({ openTool: null });
  };

  const handleCalculation = (type) => {
    console.log('handleCalculation');
    const rows = element.config.data;

    // Assuming element.config.selection holds the selected cell position as { rowIndex, colIndex }
    const { rowIndex, colIndex } = element.config.selection;

    if (rowIndex == null || colIndex == null) {
      console.warn('No cell selected for calculation');
      return;
    }

    // Calculate the result for the selected cell
    let result = 0;
    const values = rows
      .map((row, index) => {
        // Only include cells up to and including the selected rowIndex
        if (index <= rowIndex) {
          const numValue = parseFloat(row.cells[colIndex]?.value);
          return !isNaN(numValue) ? numValue : null;
        }
        return null;
      })
      .filter((value) => value !== null);

    // Perform the specified calculation
    switch (type) {
      case 'sum':
        result = values.reduce((acc, curr) => acc + curr, 0);
        break;
      case 'average':
        result = values.length > 0 ? values.reduce((acc, curr) => acc + curr, 0) / values.length : 0;
        break;
      case 'total':
        result = values.length;
        break;
    }

    // Update only the selected cell with the result
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return {
          ...row,
          cells: row.cells.map((cell, i) => {
            if (i === colIndex) {
              return { ...cell, value: result.toFixed(2) };
            }
            return cell;
          }),
        };
      }
      return row;
    });

    onChange({
      ...element,
      config: {
        ...element.config,
        data: updatedRows,
      },
    });
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
      isOpen={openTool === 'table'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'table' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  <Controller
                    name="json"
                    control={control}
                    rules={{
                      required: 'A valid JSON array is required',
                      validate: (value) => isValidJsonArray(value),
                    }}
                    render={({ field, fieldState: { error } }) => {
                      const message = error?.type === 'validate' ? 'Invalid JSON array' : error?.message;
                      return (
                        <Textarea
                          classNames={{ inputWrapper: 'px-5 py-5' }}
                          minRows="10"
                          label="Paste JSON Array Here.."
                          bordered
                          {...field}
                          errorMessage={message}
                          isInvalid={!!message}
                        />
                      );
                    }}
                  />
                </div>
                <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
                  Apply
                </Button>
              </form>
            </Tab>
            <Tab title="Advanced" key="advanced" className="text-base flex justify-between">
              <Button
                variant="bordered"
                radius="full"
                className="text-base px-4 mt-6"
                onClick={() => handleCalculation('total')}
                // disabled={!element.config.selection}
              >
                Total
              </Button>
              <Button
                variant="bordered"
                radius="full"
                className="text-base px-4 mt-6"
                onClick={() => handleCalculation('average')}
                // disabled={!element.config.selection}
              >
                Average
              </Button>
              <Button
                variant="bordered"
                radius="full"
                className="text-base px-4 mt-6"
                onClick={() => handleCalculation('sum')}
                // disabled={!element.config.selection}
              >
                Sum
              </Button>
            </Tab>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
};

TableConfig.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    config: PropTypes.object,
    theme: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
};

export default TableConfig;
