import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import NumberInput from '@/components/ui/NumberInput.jsx';
import useTemplateStore from '@/store/template.js';
import { TbLine } from 'react-icons/tb';

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
      <PopoverContent className="px-6 py-4 shadow border border-default-200 w-[200px] gap-y-3">
        <StrokeWidth elements={elements} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};

const StrokeWidth = ({ elements, onChange }) => {
  const values = elements.map((e) => e.config.strokeWidth);
  const same = values.every((v) => v === values[0]);
  const value = same ? `${values[0]}` : '';

  const handleChange = (v) => {
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, strokeWidth: v } })));
  };

  return <NumberInput title="Stroke Width" value={value} onChange={handleChange} ariaLabel="Stoke width" />;
};

LineConfig.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};
StrokeWidth.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};

export default LineConfig;
