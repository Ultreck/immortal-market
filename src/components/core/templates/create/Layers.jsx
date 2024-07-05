import PropTypes from 'prop-types';
import { RiCloseFill } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import NoData from '@/components/ui/NoData.jsx';
import { createElement } from 'react';
import _elements from '@/lib/elements.js';
import { Button } from '@nextui-org/react';

const Layers = ({ elements, current, onSelect, onDelete }) => {
  return (
    <>
      {elements.length > 0 ? (
        <div className="space-y-1">
          {elements.map((element) => {
            const active = element.id === current;
            const icon = _elements.find((e) => e.type === element.type).icon;

            return (
              <div
                key={element.id}
                className={cn('transition-all duration-200 border-2 border-transparent rounded-2xl p-1 select-none', {
                  'border-primary-500 dark:border-primary-400': active,
                })}
              >
                <div
                  className={cn(
                    'relative rounded-xl px-4 py-1 flex items-center space-x-2 cursor-pointer justify-between',
                    'bg-default-200/60 hover:bg-default-200 dark:bg-default-50/80 dark:hover:bg-default-100'
                  )}
                  onClick={() => onSelect(element.id)}
                >
                  <div className="flex items-center space-x-2">
                    <span className="opacity-60">{createElement(icon, { size: 20 })}</span>
                    <span className="truncate">{element.text}</span>
                  </div>
                  <Button isIconOnly variant="light">
                    <RiCloseFill size={20} className="block" onClick={() => onDelete(element.id)} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <NoData text="No elements. Add some elements to the canvas" />
      )}
    </>
  );
};

Layers.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  onSelect: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  current: PropTypes.string,
};

export default Layers;
