import PropTypes from 'prop-types';
import { TbCircleCheckFilled } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import plans from '@/lib/plans.js';

let _plans = plans.filter((p) => p.featured);
_plans = _plans.sort((a) => {
  return !!a.free && !!a.standard && !!a.premium ? -1 : 1;
});

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
        {_plans.slice(0, 6).map((item) => (
          <li key={item.name} className={`flex ${item[type] ? 'items-center' : 'line-through decoration-gray-500'} `}>
            <TbCircleCheckFilled
              size="18"
              className={`flex-shrink-0 ${item[type] ? 'text-blue-700 dark:text-blue-500' : 'text-gray-400 dark:text-gray-500'}`}
            />
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              {item.feature} {typeof item[type] === 'string' ? item[type] : ''}
            </span>
          </li>
        ))}
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
