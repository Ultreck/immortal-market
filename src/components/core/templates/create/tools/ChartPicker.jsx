import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem, Textarea } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { createElement, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { capitalize, cn, getKeysFromJson, isValidJsonArray } from '@/lib/utils.js';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { TbChartBar, TbChartLine, TbChartPie } from 'react-icons/tb';

const types = [
  { name: 'bar', icon: TbChartBar, keys: ['x', 'y'] },
  { name: 'line', icon: TbChartLine, keys: ['x', 'y'] },
  { name: 'pie', icon: TbChartPie, keys: ['name', 'data'] },
];

const ChartType = ({ element, onChange, onNext }) => {
  const handleSelectChart = (chart) => {
    onChange({
      ...element,
      chart: {
        ...element.chart,
        type: chart.name,
        data: element.chart?.data || null,
        keys: {},
      },
    });
  };

  const handleNext = () => {
    if (element.chart?.type) onNext();
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-6">Select chart type</h2>
      <div className="grid grid-cols-3 gap-y-3 gap-x-3">
        {types.map((chart, index) => (
          <div
            key={index}
            className={cn('py-6 bg-default-100 flex flex-col items-center justify-center rounded-xl cursor-pointer', {
              'bg-primary-500 text-white': element.chart?.type === chart.name,
              'hover:bg-default-200': element.chart?.type !== chart.name,
            })}
            onClick={() => handleSelectChart(chart)}
          >
            {createElement(chart.icon, { size: 24 })}
            <span className="mt-1 capitalize text-base">{chart.name}</span>
          </div>
        ))}
      </div>
      <Button
        variant="bordered"
        onClick={handleNext}
        className="mt-6 text-base"
        radius="full"
        isDisabled={!element.chart?.type}
      >
        Next
      </Button>
    </>
  );
};

const ChartData = ({ element, onChange, onBack }) => {
  const { handleSubmit, watch, control } = useForm({
    defaultValues: { json: element?.chart?.data ? JSON.stringify(element.chart.data, null, 2) : '' },
  });
  const chart = types.find((type) => type.name === element.chart.type);
  const keys = getKeysFromJson(watch().json);

  const onSubmit = async (values) => {
    const { json, ...rest } = values;
    const data = JSON.parse(json);
    onChange({ ...element, chart: { ...element.chart, keys: rest, data } });
  };

  return (
    <>
      <IoIosArrowRoundBack size={30} className="mb-3 cursor-pointer" onClick={onBack} />
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
          <div className="grid grid-cols-2 gap-2">
            {chart.keys.map((name) => {
              return (
                <Controller
                  key={name}
                  name={name}
                  control={control}
                  rules={{ required: `${name} is required` }}
                  render={({ field, fieldState: { error } }) => (
                    <Select
                      name={field.name}
                      label={capitalize(name)}
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={field.value ? [field.value] : []}
                      onChange={(e) => field.onChange(e)}
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                    >
                      {keys.map((key) => (
                        <SelectItem key={key} classNames={{ title: 'text-base px-2' }}>
                          {key}
                        </SelectItem>
                      ))}
                    </Select>
                  )}
                />
              );
            })}
          </div>
        </div>
        <Button type="submit" variant="solid" radius="full" className="text-base px-4 mt-6">
          Apply
        </Button>
      </form>
    </>
  );
};

const ChartPicker = ({ element, onChange }) => {
  const [view, setView] = useState('type');

  return (
    <Popover placement="left" showArrow offset={10} classNames={{ content: 'w-[400px]' }}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbChartPie size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-6 py-6 w-full">
          {view === 'type' && <ChartType element={element} onChange={onChange} onNext={() => setView('data')} />}
          {view === 'data' && <ChartData element={element} onChange={onChange} onBack={() => setView('type')} />}
        </div>
      </PopoverContent>
    </Popover>
  );
};

const propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    chart: PropTypes.object.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

ChartPicker.propTypes = propTypes;
ChartType.propTypes = { ...propTypes, onNext: PropTypes.func };
ChartData.propTypes = { ...propTypes, onBack: PropTypes.func };

export default ChartPicker;
