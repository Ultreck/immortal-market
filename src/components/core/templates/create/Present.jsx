import CanvasPresent from '@/components/core/templates/create/CanvasPresent.jsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Slider } from '@nextui-org/react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const Present = ({ pages = [] }) => {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);

  const page = pages[index];

  return (
    <div className="relative inset-0 w-full h-screen overflow-hidden z-[1] text-black">
      <div className="bg-gray-950 w-full h-screen flex flex-col">
        <CanvasPresent key={page} page={page} />
      </div>
      {!!pages.length && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full px-8 py-3 bg-default-100 dark text-white flex items-center justify-between space-x-4 max-w-[600px] w-full">
          <h1 className="text-base">{page.title}</h1>
          <div className="flex items-center space-x-2">
            <Button
              isIconOnly
              radius="full"
              variant="flat"
              onClick={() => setIndex((v) => Math.max(v - 1, 0))}
              isDisabled={index === 0}
            >
              <TbChevronLeft size="20" />
            </Button>
            <p className="px-3">
              {index + 1} / {pages.length}
            </p>
            <Button
              isIconOnly
              radius="full"
              variant="flat"
              onClick={() => setIndex((v) => Math.min(v + 1, pages.length - 1))}
              isDisabled={index === pages.length - 1}
            >
              <TbChevronRight size="20" />
            </Button>
          </div>
          <div className="flex items-center space-x-3">
            <Slider
              aria-label="zoom"
              color="foreground"
              className="w-40"
              value={scale * 100}
              onChange={(v) => setScale(v / 100)}
              maxValue={150}
              minValue={100}
              showOutline
              isDisabled
              classNames={{
                thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
                track: 'border-s-default-300',
                filler: 'bg-gradient-to-r from-default-300 to-default-400',
              }}
              size="sm"
            />
            <p>{Math.ceil(scale * 100)}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

Present.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default Present;
