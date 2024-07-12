import { Button, Input, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { TbDimensions, TbMinus, TbPlus } from 'react-icons/tb';
import { useState } from 'react';
import PropTypes from 'prop-types';

const CanvasDimensions = ({ page, onChange }) => {
  const [width, setWidth] = useState(page.width);
  const [height, setHeight] = useState(page.height);

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
                  const value = page.width - 10;
                  setWidth(value);
                  onChange({ width: value });
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
                onBlur={() => onChange({ width })}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const value = page.width + 10;
                  setWidth(value);
                  onChange({ width: value });
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
                  const value = page.height - 10;
                  setHeight(value);
                  onChange({ height: value });
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
                onBlur={() => onChange({ height })}
              />
              <Button
                isIconOnly
                variant="flat"
                className="text-base"
                onClick={() => {
                  const value = page.height + 10;
                  setHeight(value);
                  onChange({ height: value });
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

CanvasDimensions.propTypes = {
  page: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CanvasDimensions;
