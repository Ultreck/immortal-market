import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { TbDimensions, TbMinus, TbPlus } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';
import { useState } from 'react';

const CanvasDimensions = () => {
  const style = useTemplateStore((state) => state.template.style);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const [width, setWidth] = useState(style.width);
  const [height, setHeight] = useState(style.height);

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbDimensions size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-4 w-full space-y-4">
          <div>
            <p className="text-base mb-2">Width</p>
            <div className="gap-2 w-full flex items-center">
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const value = width - 10;
                  setWidth(value);
                  updateTemplate({ style: { ...style, width: value } });
                }}
              >
                <TbMinus size="20" />
              </Button>
              <Input
                type="number"
                className="w-[60px]"
                classNames={{ input: 'appearance-auto' }}
                value={width}
                onChange={(e) => setWidth(+e.target.value)}
                onBlur={() => updateTemplate({ style: { ...style, width } })}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  updateTemplate({ style: { ...style, width: style.width + 10 } });
                }}
              >
                <TbPlus size="20" />
              </Button>
            </div>
          </div>
          <div>
            <p className="text-base mb-2">Height</p>
            <div className="gap-2 w-full flex items-center">
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  updateTemplate({ style: { ...style, height: style.height - 1 } });
                }}
              >
                <TbMinus size="20" />
              </Button>
              <Input
                type="number"
                className="w-[60px]"
                classNames={{ input: 'appearance-auto' }}
                value={height}
                onChange={(e) => setHeight(+e.target.value)}
                onBlur={() => updateTemplate({ style: { ...style, height } })}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  updateTemplate({ style: { ...style, height: style.height + 1 } });
                }}
              >
                <TbPlus size="20" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CanvasDimensions;
