import { Button, Input, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus, TbSettings2 } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';

const BulletTextConfig = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'list'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'list' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Bullet text config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <p>Bullet Type</p>
          <RadioGroup
            orientation="horizontal"
            value={element.config.type}
            onValueChange={(v) => onChange({ ...element, config: { ...element.config, type: v } })}
          >
            <Radio value="number">Number</Radio>
            <Radio value="bullet">Text</Radio>
          </RadioGroup>
          {element.config.texts.map((text, i) => (
            <div key={i} className="flex gap-2">
              <Input
                key={i}
                type="text"
                value={text}
                onChange={(e) => {
                  const texts = [...element.config.texts];
                  texts[i] = e.target.value;
                  onChange({ ...element, config: { ...element.config, texts } });
                }}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const texts = [...element.config.texts];
                  texts.splice(i, 1);
                  onChange({ ...element, config: { ...element.config, texts } });
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
              onClick={() => {
                const texts = [...element.config.texts, ''];
                onChange({ ...element, config: { ...element.config, texts } });
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

BulletTextConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      type: PropTypes.string.isRequired,
      texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default BulletTextConfig;
