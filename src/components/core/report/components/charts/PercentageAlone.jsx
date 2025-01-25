import { Card } from '@heroui/react';
import PropTypes from 'prop-types';

const PercentageAlone = ({ percentage = 25 }) => {
  return (
    <Card className="space-y-6 w-full bg-default-50 px-8 py-6">
      <p className="text-6xl font-bold">{percentage}%</p>
      <p>Alot of business can not do the needful so we must find a good way to do it.</p>
    </Card>
  );
};

PercentageAlone.propTypes = {
  percentage: PropTypes.number,
};

export default PercentageAlone;
