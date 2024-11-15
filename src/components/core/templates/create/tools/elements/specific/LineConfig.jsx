import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';
import useTemplateStore from '@/store/template.js';
import { TbBan, TbLine } from 'react-icons/tb';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import { HiArrowRight } from 'react-icons/hi2';
import { useState } from 'react';

const LineConfig = ({ elements, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'line'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'line' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbLine size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-6 py-5 shadow border border-default-200 gap-y-4 flex flex-col items-stretch">
        <StrokeWidth elements={elements} onChange={onChange} />
        <StrokeLinecap elements={elements} onChange={onChange} />
        <StrokeMarkers elements={elements} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};

const StrokeWidth = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config.strokeWidth || ''));

  const handleChange = (v) => {
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, strokeWidth: v } })));
  };

  return (
    <div className="flex items-center space-between space-x-8">
      <p className="text-base">Stroke width</p>
      <NumberInput title="Stroke Width" value={value} onChange={handleChange} ariaLabel="Stoke width" />
    </div>
  );
};

const StrokeLinecap = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config?.strokeLinecap || ''));

  const handleChange = (v) => {
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, strokeLinecap: v } })));
  };

  const options = [
    { value: 'square', text: 'Square' },
    { value: 'round', text: 'Round' },
    { value: 'butt', text: 'Butt' },
  ];

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75 leading-none whitespace-nowrap">Stroke linecap</p>
      <Select
        variant="bordered"
        aria-label="Select unit"
        placeholder="Select unit"
        classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
        selectedKeys={value ? [value] : []}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option) => (
          <SelectItem key={option.value}>{option.text}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

const markers = [
  { value: '', icon: <TbBan size="20" /> },
  {
    value: 'arrow',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m16.257 6.697 4.773 4.773a.75.75 0 0 1 0 1.06l-4.773 4.773a.75.75 0 0 1-1.06-1.06l3.492-3.493H3.5a.75.75 0 0 1 0-1.5h15.19l-3.493-3.493a.75.75 0 1 1 1.06-1.06z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    value: 'outline-circle',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.75 12a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.5 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zM17 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    value: 'outline-square',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.75 12a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.5 9.5v5h5v-5h-5zm-1-1.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    value: 'outline-diamond',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.75 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 8.931 12.931 12 16 15.069 19.069 12 16 8.931zm.324-1.797a.459.459 0 0 0-.648 0l-4.542 4.542a.458.458 0 0 0 0 .648l4.542 4.542c.179.179.47.179.648 0l4.542-4.542a.458.458 0 0 0 0-.648l-4.542-4.542z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    value: 'bar',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.75 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.25 8a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    value: 'triangle',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.75 12a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          d="M21.376 11.584a.5.5 0 0 1 0 .832l-7.599 5.066a.5.5 0 0 1-.777-.416V6.934a.5.5 0 0 1 .777-.416l7.599 5.066z"
        ></path>
      </svg>
    ),
  },
  {
    value: 'circle',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.75 12a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path fill="currentColor" d="M13 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"></path>
      </svg>
    ),
  },
  {
    value: 'square',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M2.75 12a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          d="M13 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7z"
        ></path>
      </svg>
    ),
  },
  {
    value: 'diamond',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.75 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="currentColor"
          d="M15.676 7.134a.458.458 0 0 1 .648 0l4.542 4.542a.458.458 0 0 1 0 .648l-4.542 4.542a.458.458 0 0 1-.648 0l-4.542-4.542a.459.459 0 0 1 0-.648l4.542-4.542z"
        ></path>
      </svg>
    ),
  },
];

const StrokeMarkers = ({ elements, onChange }) => {
  const [active, setActive] = useState('');
  const markerStart = useResolveValue(elements.map((e) => e.config.markerStart));
  const markerEnd = useResolveValue(elements.map((e) => e.config.markerEnd));

  const handelChange = (field, value) => {
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, [field]: value } })));
  };

  return (
    <div className="border border-default-200 rounded-2xl px-4 py-2">
      <div className="flex items-center justify-between space-x-4">
        <p className="text-base">Markers</p>
        <div className="flex items-center space-x-2">
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button
                isIconOnly
                variant={markerStart ? 'solid' : 'bordered'}
                color={markerStart ? 'primary' : 'default'}
                onClick={() => setActive('markerStart')}
              >
                <span className="rotate-180">
                  {markers.find((m) => !!m.value && m.value === markerStart)?.icon || <HiArrowRight size="20" />}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 shadow border border-default-200">
              <div className="px-8 py-6 w-full space-y-3">
                <div className="grid grid-cols-5 gap-2">
                  {markers.map((item) => (
                    <Button
                      key={item.value}
                      isIconOnly
                      variant={markerStart === item.value ? 'solid' : 'bordered'}
                      color={markerStart === item.value ? 'primary' : 'default'}
                      onClick={() => handelChange(active, item.value)}
                    >
                      <span className="rotate-180">{item.icon}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom">
            <PopoverTrigger>
              <Button
                isIconOnly
                variant={markerEnd ? 'solid' : 'bordered'}
                color={markerEnd ? 'primary' : 'default'}
                onClick={() => setActive('markerEnd')}
              >
                {markers.find((m) => !!m.value && m.value === markerEnd)?.icon || <HiArrowRight size="20" />}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 shadow border border-default-200">
              <div className="px-8 py-6 w-full space-y-3">
                <div className="grid grid-cols-5 gap-2">
                  {markers.map((item) => (
                    <Button
                      key={item.value}
                      isIconOnly
                      variant={markerEnd === item.value ? 'solid' : 'bordered'}
                      color={markerEnd === item.value ? 'primary' : 'default'}
                      onClick={() => handelChange(active, item.value)}
                    >
                      {item.icon}
                    </Button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

LineConfig.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};
StrokeWidth.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};
StrokeLinecap.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};
StrokeMarkers.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};

export default LineConfig;
