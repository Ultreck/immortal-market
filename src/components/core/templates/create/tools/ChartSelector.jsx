import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { BiLineChart } from 'react-icons/bi';
import { AnimatePresence, motion } from 'framer-motion';
import { IoStatsChart, IoPieChartSharp } from 'react-icons/io5';
import { HiCheck } from 'react-icons/hi2';
import { FaChartLine } from 'react-icons/fa6';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextArea from '@/components/ui/TextArea.jsx';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Select from '@/components/ui/Select.jsx';
import { getKeysFromJson } from '../../../../../lib/utils';
import { IoIosArrowRoundBack } from 'react-icons/io';

const chartTypes = [
  {
    name: 'bar',
    icon: IoStatsChart,
  },
  {
    name: 'line',
    icon: FaChartLine,
  },
  {
    name: 'pie',
    icon: IoPieChartSharp,
  },
];

const schema = yup.object({
  chartJson: yup
    .string()
    .test('is-json-array', 'The input is not a valid JSON array', (value) => {
      try {
        const parsedValue = JSON.parse(value);
        return Array.isArray(parsedValue);
      } catch (e) {
        return false;
      }
    })
    .required('JSON string is required'),
});

const ChartSelector = ({ element, onChange }) => {
  const [view, setView] = useState('first');
  const [axisOptions, setAxisOptions] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    onChange({
      ...element,
      chartSettings: {
        ...element.chartSettings,
        data: JSON.parse(values.chartJson),
        xAxis: values.xAxis,
        yAxis: values.yAxis,
      },
    });
  };
  const handleChartJsonChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value, { shouldValidate: true });
    setAxisOptions(getKeysFromJson(value));
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <BiLineChart size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-4 py-6 w-64">
          {view === 'first' && (
            <>
              <div className="grid grid-cols-2  gap-y-3 gap-x-3">
                {chartTypes.map((chart, index) => (
                  <div
                    key={index}
                    className="py-7 bg-gray-700 rounded-sm flex items-center justify-center hover:scale-105 transition-transform cursor-pointer relative"
                    onClick={() =>
                      onChange({ ...element, chartSettings: { ...element.chartSettings, chartType: chart.name } })
                    }
                  >
                    <chart.icon size={20} />
                    <AnimatePresence mode="wait">
                      {element.chartSettings.chartType === chart.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 bg-white/50 dark:bg-black/50 flex items-center justify-center"
                        >
                          <HiCheck size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <Button variant="solid" onClick={() => setView('second')} className="w-full mt-4">
                Next
              </Button>
            </>
          )}
          {view === 'second' && (
            <>
              <IoIosArrowRoundBack size={30} className="mb-3 cursor-pointer" onClick={() => setView('first')} />
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <TextArea
                  className="h-52"
                  label="Chart Json Array"
                  bordered
                  {...register('chartJson', { required: 'This field is required' })}
                  error={errors?.chartJson?.message}
                  onChange={handleChartJsonChange}
                />
                <Select
                  label="X axis"
                  bordered
                  placeholder="Select x-axis"
                  {...register('xAxis', { required: 'Please select x-Axis' })}
                  error={errors?.xAxis?.message}
                  options={axisOptions.map((p) => ({
                    text: p,
                    value: p,
                  }))}
                  disabled={!axisOptions.length}
                />
                <Select
                  label="Y axis"
                  bordered
                  placeholder="Select y-axis"
                  {...register('yAxis', { required: 'Please select y-Axis' })}
                  error={errors?.yAxis?.message}
                  options={axisOptions.map((p) => ({
                    text: p,
                    value: p,
                  }))}
                  disabled={!axisOptions.length}
                />
                <Button type="submit" variant="solid" className="w-full">
                  Upload
                </Button>
              </form>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

ChartSelector.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
    chartSettings: PropTypes.object.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
};

export default ChartSelector;

