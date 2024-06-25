import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';
import { RiEmotionSadFill } from 'react-icons/ri';

const NoData = ({ icon = <RiEmotionSadFill size="24" />, text, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center space-y-3 rounded-2xl border-2 border-dashed border-default-300 px-8 py-16 text-center text-zinc-500',
        className
      )}
    >
      <span>{!!icon && icon}</span>
      <p className="max-w-sm">{text || 'No data'}</p>
    </div>
  );
};

NoData.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default NoData;
