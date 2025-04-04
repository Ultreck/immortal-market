import { Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import icons from '@/lib/design/icons.js';
import PropTypes from 'prop-types';
import { createElement, useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { cn } from '@/lib/utils';

const IconPicker = ({ value, onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const icon = icons.find((icon) => icon.name === value);
  const filteredIcons = icons.filter((icon) => icon.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Popover
      placement="top"
      showArrow
      offset={10}
      classNames={{
        content:
          'shadow-md w-[320px] !max-h-[350px] overflow-x-hidden overflow-y-auto block p-3 border border-default-100 dark:border-default-200',
      }}
    >
      <PopoverTrigger className="w-max flex items-center justify-center p-2 rounded-2xl border border-default-100 dark:border-default-300 hover:bg-default-100 dark:hover:bg-default-200 cursor-pointer transition-colors">
        <div>{createElement(icon.icon, { size: 32 })}</div>
      </PopoverTrigger>
      <PopoverContent className="px-6 py-6">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <LuSearch size={20} className="text-default-400" />
            </span>
            <input
              type="text"
              placeholder="Search icons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-3 py-2 rounded-full bg-default-100 dark:bg-default-200 focus:outline-none text-base"
            />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {filteredIcons.map((iconItem) => (
              <div key={iconItem.name} className="relative group flex items-center justify-center">
                <button
                  onClick={() => onChange(iconItem.name)}
                  className={cn(
                    'p-2 rounded-lg w-full aspect-square flex items-center justify-center transition-all duration-150 ease-in-out transform group-hover:scale-105',
                    value === iconItem.name
                      ? 'bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 ring-2 ring-blue-500 dark:ring-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  )}
                >
                  <iconItem.icon size={20} />
                </button>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none z-10">
                  {iconItem.name}
                </div>
              </div>
            ))}
          </div>

          {filteredIcons.length === 0 && (
            <div className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
              No icons found for &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

IconPicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IconPicker;

