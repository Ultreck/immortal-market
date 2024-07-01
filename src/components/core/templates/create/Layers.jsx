import PropTypes from 'prop-types';
import { RiCircleLine, RiFontFamily, RiHeading2, RiPieChart2Line } from 'react-icons/ri';
import { cn } from '@/lib/utils.js';
import NoData from '@/components/ui/NoData.jsx';

const icons = {
  heading: <RiHeading2 size="20" />,
  text: <RiFontFamily size="20" />,
  chart: <RiPieChart2Line size="20" />,
  logo: <RiCircleLine size="20" />,
};

const Layers = ({ elements, current, onSelect }) => {
  return (
    <>
      {elements.length > 0 ? (
        <div className="space-y-1">
          {elements.map((element) => {
            const active = element.id === current;
            return (
              <div
                key={element.id}
                className={cn('transition-all duration-200 border-2 border-transparent rounded-2xl p-1 select-none', {
                  'border-primary-500 dark:border-primary-400': active,
                })}
              >
                <div
                  className={cn(
                    'relative rounded-xl px-4 py-4 flex items-center space-x-2 cursor-pointer',
                    'bg-default-200/60 hover:bg-default-200 dark:bg-default-50/80 dark:hover:bg-default-100'
                  )}
                  onClick={() => onSelect(element.id)}
                >
                  <span className="opacity-60">{icons[element.type]}</span>
                  <span className="truncate">{element.text}</span>
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
  current: PropTypes.string,
};

export default Layers;
