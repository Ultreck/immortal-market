import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus, TbSettings2 } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';

const FrameCarouselConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const handleChange = (v) => {
    if (!v) return;
    onChange({ ...element, config: { ...element.config, slides: v } });
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'carousel'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'carousel' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onClick={() => {
                handleChange(Math.max(2, +element.config.slides - 1));
              }}
            >
              <TbMinus size="20" />
            </Button>
            <Input isReadOnly type="number" classNames={{ base: 'w-[80px] text-base' }} value={element.config.slides} />
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onClick={() => {
                handleChange(Math.max(2, +element.config.slides + 1));
              }}
            >
              <TbPlus size="20" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

FrameCarouselConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      slides: PropTypes.number.isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default FrameCarouselConfig;
