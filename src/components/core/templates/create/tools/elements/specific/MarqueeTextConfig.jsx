import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus, TbSettings2 } from 'react-icons/tb';
import useDesignStore from '@/store/design.js';

const MarqueeTextConfig = ({ element }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={tool === 'marquee-text'}
      onOpenChange={(v) => (v ? openTool('marquee-text') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Marquee text config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          {element.config.texts.map((text, i) => (
            <div key={i} className="flex gap-2">
              <Input
                key={i}
                type="text"
                value={text}
                onChange={(e) => {
                  const texts = [...element.config.texts];
                  texts[i] = e.target.value;
                  updateElement(element.id, { config: { ...element.config, texts } });
                }}
                onBlur={() => {
                  updateElement(element.id, { config: { ...element.config } }, true);
                }}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onPress={() => {
                  const texts = [...element.config.texts];
                  texts.splice(i, 1);
                  updateElement(element.id, { config: { ...element.config, texts } }, true);
                }}
              >
                <TbMinus size="20" />
              </Button>
            </div>
          ))}
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onPress={() => {
                const texts = [...element.config.texts, ''];
                updateElement(element.id, { config: { ...element.config, texts } }, true);
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

MarqueeTextConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MarqueeTextConfig;
