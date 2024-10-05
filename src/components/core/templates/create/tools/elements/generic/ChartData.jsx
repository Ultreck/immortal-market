import { Button, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { RiFontFamily } from 'react-icons/ri';
import { TbArrowsExchange, TbChartPie, TbChevronRight, TbEye, TbReplace, TbSquareRoundedPlus } from 'react-icons/tb';
import ChartDataDrawer from './ChartDataDrawer';
import PropTypes from 'prop-types';

const ChartData = ({ element, onChange }) => {
  const items = [
    {
      title: 'Change Source',
      icon: <TbArrowsExchange size="20" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'New Connection',
      icon: <TbSquareRoundedPlus size="20" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'View Data',
      icon: <TbEye size="20" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Drilldown',
      icon: <RiFontFamily size="20" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Change Chart',
      icon: <TbReplace size="20" />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Popover
        placement="left"
        showArrow
        offset={10}
        classNames={{ content: 'w-[350px] !max-h-[550px] overflow-y-auto block' }}
      >
        <PopoverTrigger>
          <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
            <TbChartPie size="20" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 shadow border border-default-200">
          <div className="px-8 py-6 w-full space-y-4">
            {items.map((item, i) => (
              <div
                className="flex space-x-5 border border-default-300 rounded-2xl p-4 items-center cursor-pointer"
                key={i}
                onClick={() => {
                  setSelectedItem(item);
                  onOpen();
                }}
              >
                <div>{item.icon}</div>
                <div>
                  <div className="text-lg">{item.title}</div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <TbChevronRight size="20" />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      {isOpen && selectedItem && (
        <ChartDataDrawer
          isOpen={isOpen}
          onClose={onOpenChange}
          item={selectedItem}
          element={element}
          onChange={onChange}
        />
      )}
    </>
  );
};

ChartData.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChartData;
