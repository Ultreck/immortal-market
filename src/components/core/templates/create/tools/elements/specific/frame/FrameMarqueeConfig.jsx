import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus, TbSettings2 } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';

const FrameMarqueeConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  const handleChange = (v) => {
    if (!v) return;
    onChange({ ...element, config: { ...element.config, slides: v } });
  };
  const handleSlidesPerViewChange = (v) => {
    if (!v) return;
    onChange({ ...element, config: { ...element.config, slidesPerView: v } });
  };
  const handleSlideSpeedChange = (v) => {
    if (!v) return;
    onChange({ ...element, config: { ...element.config, speed: v } });
  };

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'marquee'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'marquee' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Frame marquee config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <p>Slides</p>
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onPress={() => {
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
              onPress={() => {
                handleChange(Math.max(2, +element.config.slides + 1));
              }}
            >
              <TbPlus size="20" />
            </Button>
          </div>
          <p>Slides Per View</p>
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onPress={() => {
                handleSlidesPerViewChange(Math.max(2, +element.config.slidesPerView - 1));
              }}
            >
              <TbMinus size="20" />
            </Button>
            <Input
              isReadOnly
              type="number"
              classNames={{ base: 'w-[80px] text-base' }}
              value={element.config.slidesPerView}
            />
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onPress={() => {
                handleSlidesPerViewChange(Math.max(2, +element.config.slidesPerView + 1));
              }}
            >
              <TbPlus size="20" />
            </Button>
          </div>
          <p>Slide speed</p>
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onPress={() => {
                handleSlideSpeedChange(Math.max(2, +element.config.speed - 1));
              }}
            >
              <TbMinus size="20" />
            </Button>
            <Input isReadOnly type="number" classNames={{ base: 'w-[80px] text-base' }} value={element.config.speed} />
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onPress={() => {
                handleSlideSpeedChange(Math.max(2, +element.config.speed + 1));
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

FrameMarqueeConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      slides: PropTypes.number.isRequired,
      slidesPerView: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default FrameMarqueeConfig;
