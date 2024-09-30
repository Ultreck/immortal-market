import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbMinus, TbPlus, TbSettings2 } from 'react-icons/tb';

const MarqueeTextConfig = ({ element, onChange }) => {
  // const handleChange = (v) => {
  //   if (!v) return;
  //   onChange({ ...element, config: { ...element.config, slides: v } });
  // };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full gap-y-4 flex flex-col">
          {element.config.texts.map((text, i) => (
            <div key={i} className='flex gap-2'>
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

MarqueeTextConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      slides: PropTypes.number.isRequired,
      texts: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }),
  onChange: PropTypes.func.isRequired,
};

export default MarqueeTextConfig;

