import PropTypes from 'prop-types';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { TbChevronRight, TbGridDots } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';
import { RiBarChartLine, RiEarthLine, RiNewsLine } from 'react-icons/ri';

const SNAPSHOTS_URL = import.meta.env.VITE_SNAPSHOTS_URL;
const MARKET_URL = import.meta.env.VITE_MARKET_URL;
const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL;

const ProductsDropdown = ({ mini = false }) => {
  return (
    <>
      <Popover placement="right">
        <PopoverTrigger>
          <div
            className={cn(
              'flex items-center hover:bg-default-100 cursor-pointer py-2',
              mini ? 'w-12 h-12 p-0 justify-center rounded-full' : 'pl-6 rounded-3xl pr-4'
            )}
          >
            <TbGridDots size="20" />
            {!mini && <p className="px-5 flex-1">Apps</p>}
            <div>{!mini && <TbChevronRight size="18" />}</div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 shadow border border-default-200">
          <h6 className="w-full border-b border-default-200 px-8 py-3 font-semibold dark:border-default-100">
            Products
          </h6>
          <div className="px-4 py-4">
            <div className="grid grid-cols-3 gap-2 text-base">
              <a
                href={MARKET_URL}
                target="_blank"
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl px-4 py-3 text-center hover:bg-default-100"
                rel="noreferrer"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-500 text-white">
                  <RiBarChartLine size="20" />
                </div>
                <p className="mt-2">Market</p>
              </a>
              <a
                href={SNAPSHOTS_URL}
                target="_blank"
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl px-4 py-3 text-center hover:bg-default-100"
                rel="noreferrer"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-red-500 text-white">
                  <RiNewsLine size="20" />
                </div>
                <p className="mt-2">Snapshots</p>
              </a>
              <a
                href={WEBSITE_URL}
                target="_blank"
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl px-4 py-3 text-center hover:bg-default-100"
                rel="noreferrer"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-500 text-white">
                  <RiEarthLine size="20" />
                </div>
                <p className="mt-2">Website</p>
              </a>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

ProductsDropdown.propTypes = {
  mini: PropTypes.bool,
};

export default ProductsDropdown;
