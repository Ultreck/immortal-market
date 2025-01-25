import { Button, Popover, PopoverContent, PopoverTrigger, Switch } from '@heroui/react';
import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import { HiOutlineTag, HiTag } from 'react-icons/hi2';

const ElementTag = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[350px] !max-h-[550px] overflow-y-auto block' }}
      isOpen={openTool === 'element-tag'}
      onOpenChange={(isOpen) => {
        updateTemplate({ openTool: isOpen ? 'element-tag' : null });
      }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size">
          {element.tag?.enabled ? <HiTag size="20" className="text-green-500" /> : <HiOutlineTag size="20" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-base">Convert to tag</p>
            <Switch
              isSelected={!!element.tag?.enabled}
              onValueChange={(v) => {
                onChange({ ...element, tag: { ...element.tooltip, enabled: v } });
              }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

ElementTag.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ElementTag;
