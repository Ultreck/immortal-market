import { Button, Input, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup, Textarea } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus, TbSettings2 } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';

const PollTools = ({ element, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'poll'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'poll' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Bullet text config" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200 w-[280px]">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          <div>
            <p className="text-base">Question</p>
            <Textarea
              type="text"
              value={element.question}
              onChange={(e) => {
                onChange({ ...element, question: e.target.value });
              }}
            />
          </div>

          <p className="text-sm">Poll Options</p>
          {element.options.map((val, i) => (
            <div key={i} className="flex gap-2">
              <Input
                key={i}
                type="text"
                value={val.text}
                onChange={(e) => {
                  const options = [...element.options];
                  options[i]['text'] = e.target.value;
                  onChange({ ...element, options });
                }}
              />
              {element.options.length > 1 && (
                <Button
                  isIconOnly
                  variant="flat"
                  className="text-base"
                  onPress={() => {
                    const options = [...element.options];
                    options.splice(i, 1);
                    onChange({ ...element, options });
                  }}
                >
                  <TbMinus size="20" />
                </Button>
              )}
            </div>
          ))}
          <div className="gap-2 w-full flex items-center">
            <Button
              isIconOnly
              variant="flat"
              className="text-base"
              onPress={() => {
                const options = [...element.options, { value: '', text: 'option', id: crypto.randomUUID() }];
                onChange({ ...element, options });
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

PollTools.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      type: PropTypes.string.isRequired,
      texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default PollTools;
