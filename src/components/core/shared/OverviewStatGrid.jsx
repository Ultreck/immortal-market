import { Card } from '@heroui/react';
import { ClockIcon } from '../../icons/clock';
import { ArrowUpIcon } from '../../icons/arrowUp';
import { DollarIcon } from '../../icons/dollar';

const OverviewStatGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card className="card-shadow py-6 flex flex-col gap-4 items-center">
        <ClockIcon />
        <div className="flex gap-4 items-center">
          <h4 className="text-4xl font-bold tracking-wider text-gray-700 dark:text-gray-300 ">3.6k</h4>
          <div>
            <strong className=" text-semibold text-gray-700 dark:text-gray-300">Visits</strong>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-sm">31.5%</p>
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </Card>
      <Card className="card-shadow py-6 flex flex-col gap-4 items-center">
        <DollarIcon />
        <div className="flex gap-4 items-center">
          <h4 className="text-4xl font-bold tracking-wider text-gray-700 dark:text-gray-300 ">$12.3k</h4>
          <div>
            <strong className=" text-semibold text-gray-700 dark:text-gray-300">Sales</strong>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-sm">51.5%</p>
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OverviewStatGrid;
