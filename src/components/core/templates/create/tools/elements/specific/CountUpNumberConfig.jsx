import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbSettings2 } from 'react-icons/tb';
import NumberInput from '@/components/ui/NumberInput.jsx';
import useTemplateStore from '@/store/template.js';

const CountUpNumberConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'count-up-number'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'count-up-number' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <div className="flex items-center justify-between space-x-4">
            <p className="text-base opacity-75">Start:</p>
            <NumberInput
              variant="bordered"
              value={element.config.start}
              onChange={(v) => {
                onChange({ ...element, config: { ...element.config, start: v } });
              }}
              ariaLabel="Start number"
              min={0}
              max={Infinity}
              step={1}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className="text-base opacity-75">End:</p>
            <NumberInput
              variant="bordered"
              value={element.config.end}
              onChange={(v) => {
                onChange({ ...element, config: { ...element.config, end: v } });
              }}
              ariaLabel="End number"
              min={0}
              max={Infinity}
              step={1}
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <p className="text-base opacity-75 leading-none">
              Duration <br /> (in seconds):
            </p>
            <NumberInput
              variant="bordered"
              value={element.config.duration}
              onChange={(v) => {
                onChange({ ...element, config: { ...element.config, duration: v } });
              }}
              ariaLabel="Duration"
              min={1}
              max={20}
              step={1}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

CountUpNumberConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default CountUpNumberConfig;
