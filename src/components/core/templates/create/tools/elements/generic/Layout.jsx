import NumberInput from '@/components/ui/NumberInput';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { RxDimensions } from 'react-icons/rx';
import useTemplateStore from '@/store/template.js';

const Layout = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[350px] !max-h-[550px] overflow-y-auto block' }}
      isOpen={openTool === 'layout'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'layout' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <RxDimensions size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full space-y-4">
          <div className="flex items-center justify-between">
            <p>Width:</p>
            <NumberInput
              value={element.width}
              onChange={(e) => onChange({ ...element, width: Number(e) })}
              min={1}
              ariaLabel="Width"
            />
          </div>
          <div className="flex items-center justify-between">
            <p>Height:</p>
            <NumberInput
              value={element.height}
              onChange={(e) => onChange({ ...element, height: Number(e) })}
              min={1}
              ariaLabel="Height"
            />
          </div>
          <div className="flex items-center justify-between">
            <p>X:</p>
            <NumberInput value={element.x} onChange={(e) => onChange({ ...element, x: Number(e) })} ariaLabel="X" />
          </div>
          <div className="flex items-center justify-between">
            <p>Y:</p>
            <NumberInput value={element.y} onChange={(e) => onChange({ ...element, y: Number(e) })} ariaLabel="Y" />
          </div>
          <div className="flex items-center justify-between">
            <p>Rotate:</p>
            <NumberInput
              value={element.rotate}
              onChange={(e) => onChange({ ...element, rotate: Number(e) })}
              ariaLabel="Rotate"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

Layout.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Layout;
