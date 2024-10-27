import PropTypes from 'prop-types';
import { TbCircleCheckFilled } from 'react-icons/tb';
import { Button } from '@nextui-org/react';

const PlanCard = ({ type, amount }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-default-100 rounded-2xl sm:p-8 dark:bg-default-50 dark:border-default-100">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{type}</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{amount}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <TbCircleCheckFilled size="18" className="flex-shrink-0 text-blue-700 dark:text-blue-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            2 team members
          </span>
        </li>
        <li className="flex">
          <TbCircleCheckFilled size="18" className="flex-shrink-0 text-blue-700 dark:text-blue-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            20GB Cloud storage
          </span>
        </li>
        <li className="flex">
          <TbCircleCheckFilled size="18" className="flex-shrink-0 text-blue-700 dark:text-blue-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
            Integration help
          </span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <TbCircleCheckFilled size="18" className="flex-shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <TbCircleCheckFilled size="18" className="flex-shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">API Access</span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <TbCircleCheckFilled size="18" className="flex-shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>
        </li>
        <li className="flex line-through decoration-gray-500">
          <TbCircleCheckFilled size="18" className="flex-shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>
        </li>
      </ul>
      <Button variant="bordered" color="primary" className="text-base px-5 py-2.5 w-full">
        Choose plan
      </Button>
    </div>
  );
};

PlanCard.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
};
export default PlanCard;
