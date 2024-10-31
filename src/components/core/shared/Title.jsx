import { Button, cn } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { HiChevronLeft } from 'react-icons/hi';

const Title = ({ title, sub, className, onBack }) => {
  return (
    <div className={cn('flex items-center space-x-4', className)}>
      {!!onBack && (
        <Button onClick={onBack} variant="bordered" radius="full" isIconOnly size="sm">
          <HiChevronLeft size="20" />
        </Button>
      )}
      <div>
        <h2 className={cn('text-2xl font-medium leading-none')}>{title}</h2>
        <p className="opacity-75 leading-none mt-1.5">{sub}</p>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  sub: PropTypes.string,
  className: PropTypes.string,
  onBack: PropTypes.func,
};

export default Title;
