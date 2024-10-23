import { Button, Checkbox, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import { TbBoxMultiple, TbChartBar, TbChartPie } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { getChartsDefaultStyle, getElementDefaultStyle } from '@/lib/elements.js';

const elements = [
  {
    id: 'chart-s-bar',
    category: 'bar',
    data: {
      type: 'chart-s',
      useBackgroundImage: false,
      backgroundImage: null,
      backgroundColor: '#000',
      useBackgroundColor: false,
      text: 'Bar Chart',
      width: 400,
      height: 300,
      style: getElementDefaultStyle({ type: 'chart-s', name: 'bar' }),
      config: {
        name: 'bar',
        styles: getChartsDefaultStyle({ type: 'chart-s', name: 'bar' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
          { name: 'Page E', value: 4000 },
          { name: 'Page F', value: 3000 },
          { name: 'Page G', value: 2000 },
          { name: 'Page H', value: 2780 },
          { name: 'Page I', value: 1890 },
        ],
        keys: { x: 'name', y: 'value' },
        showXaxis: false,
        showYaxis: false,
        showLegend: false,
        colors: [
          '#E66B5B',
          '#1D9085',
          '#264A5A',
          '#E8C22C',
          '#F6881F',
          '#E66B5B',
          '#1D9085',
          '#264A5A',
          '#E8C22C',
          '#F6881F',
        ],
        useGradient: false,
        gradientColor: '#2673D9',
        showXGridline: false,
        showYGridline: false,
        bars: 5,
        fontSize: 12,
      },
      tooltip: {
        enabled: false,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartBar className="w-full h-full" />
      </div>
    ),
  },
  {
    id: 'chart-s-pie',
    category: 'pie',
    data: {
      type: 'chart-s',
      text: 'Pie Chart',
      width: 500,
      height: 400,
      style: getElementDefaultStyle({ type: 'chart-s', name: 'pie' }),
      config: {
        name: 'pie',
        styles: getChartsDefaultStyle({ type: 'chart-s', name: 'bar' }),
        data: [
          { name: 'Page A', value: 4000 },
          { name: 'Page B', value: 3000 },
          { name: 'Page C', value: 2000 },
          { name: 'Page D', value: 2780 },
          { name: 'Page E', value: 1890 },
        ],
        keys: { name: 'name', y: 'value' },
        colors: ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F'],
        useGradient: false,
        gradientColor: '#2673D9',
        showLabel: true,
        pies: 5,
        showLegend: false,
        showToolTip: true,
        legendPosition: 'top',
        fontSize: 12,
      },
    },
    preview: (
      <div className="text-black/40 dark:text-white/70 hover:text-black/50 dark:hover:text-white/60">
        <TbChartPie className="w-full h-full" />
      </div>
    ),
  },
];

const ElementTooltip = ({ element, onChange }) => {
  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[350px] !max-h-[550px] overflow-y-auto block' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbBoxMultiple size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full space-y-5">
          <div>
            <Checkbox
              isSelected={element?.tooltip?.enabled}
              classNames={{ base: 'py-0' }}
              onValueChange={(v) => onChange({ ...element, tooltip: { enabled: v } })}
            >
              Enable Tooltip
            </Checkbox>
          </div>
          <Checkbox
            isSelected={element.modal.enabled}
            classNames={{ base: 'py-0' }}
            onValueChange={(v) => onChange({ ...element, modal: { enabled: v } })}
          >
            Enable Modal
          </Checkbox>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 justify-between">
              <p className=" text-gray-500">Data Type</p>
              <Select
                variant="bordered"
                classNames={{ value: 'px-2 text-base', base: 'w-[170px]' }}
                label="Select Data Type"
                // selectedKeys={[element?.tooltip?.dataType || 'number']}
                // onChange={(e) => onChange({ ...element, tooltip: { dataType: e.target.value } })}
              >
                {[
                  { key: 'number', name: 'Number' },
                  { key: 'date', name: 'Date' },
                  { key: 'text', name: 'Text' },
                ].map((type) => (
                  <SelectItem key={type.key} classNames={{ title: 'px-2 text-base text-base' }}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 justify-between">
              <p className=" text-gray-500">Data Type</p>
              <Select
                variant="bordered"
                label="Select Data Type"
                classNames={{ value: 'px-2 text-base', base: 'w-[170px]' }}
                // selectedKeys={[element?.tooltip?.dataType || 'number']}
                // onChange={(e) => onChange({ ...element, tooltip: { dataType: e.target.value } })}
              >
                {['Disbursement by Date', 'Disb by range', '...'].map((type) => (
                  <SelectItem key={type} classNames={{ title: 'px-2 text-base text-base' }}>
                    {type}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {elements.map((e) => (
              <div
                className="cursor-pointer rounded-2xl"
                key={e.id}
                onClick={() => {
                  onChange({ ...element, config: { ...element.config, name: e.data.config.name } });
                }}
              >
                {e.preview}
                <p className="text-center">{e.data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

ElementTooltip.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ElementTooltip;