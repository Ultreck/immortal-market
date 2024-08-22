import { cn, getPercentagesMax } from '@/lib/utils';
import PropTypes from 'prop-types';

const AdvanceNestedCircles = ({ element }) => {
  const sortElement = element.config.data.sort((a, b) => b.size - a.size);
  const percentage = getPercentagesMax(sortElement.map((i) => +i.size));

  return (
    <div className="relative w-full">
      {sortElement.map((item, index) => (
        <div
          key={index}
          className={cn(
            `rounded-full aspect-square`,
            index > 0 && 'absolute bottom-0 left-1/2 transform -translate-x-1/2'
          )}
          style={{ width: `${percentage[index]}%`, backgroundColor: element.config.colors?.[index] }}
        >
          <div className="text-center text-white">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

AdvanceNestedCircles.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.shape({
      data: PropTypes.array,
      colors: PropTypes.array,
    }),
  }).isRequired,
};

export default AdvanceNestedCircles;
