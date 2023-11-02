import classNames from 'classnames';
import { IconCircleFilled } from '@tabler/icons-react';
import { formatCurrency } from '@/lib/utils';
import Card from '@/components/global/Card';
import PropTypes from 'prop-types';

const MonthlySummary = ({ data }) => {
  const { monthly_analytics } = data?.analytics_data ?? {};

  const maxDeposit = Math.max(...monthly_analytics.map((i) => i.amount).filter((i) => i > 0));
  const minDeposit = Math.min(...monthly_analytics.map((i) => i.amount).filter((i) => i > 0));
  const maxWithdrawal = Math.max(...monthly_analytics.map((i) => i.withdraw).filter((i) => i > 0));
  const minWithdrawal = Math.min(...monthly_analytics.map((i) => i.withdraw).filter((i) => i > 0));
  const maxSalary = Math.max(...monthly_analytics.map((i) => i.salary).filter((i) => i > 0));
  const minSalary = Math.min(...monthly_analytics.map((i) => i.salary).filter((i) => i > 0));
  const maxGambling = Math.max(...monthly_analytics.map((i) => i.gamble).filter((i) => i > 0));
  const minGambling = Math.min(...monthly_analytics.map((i) => i.gamble).filter((i) => i > 0));
  const maxLoan = Math.max(...monthly_analytics.map((i) => i.loan).filter((i) => i > 0));
  const minLoan = Math.min(...monthly_analytics.map((i) => i.loan).filter((i) => i > 0));
  const maxUtility = Math.max(...monthly_analytics.map((i) => i.utility).filter((i) => i > 0));
  const minUtility = Math.min(...monthly_analytics.map((i) => i.utility).filter((i) => i > 0));
  const maxPayday = Math.max(...monthly_analytics.map((i) => +i.payday).filter((i) => i > 0));
  const minPayday = Math.min(...monthly_analytics.map((i) => +i.payday).filter((i) => i > 0));
  const maxBenefit = Math.max(...monthly_analytics.map((i) => i.benefit).filter((i) => i > 0));
  const minBenefit = Math.min(...monthly_analytics.map((i) => i.benefit).filter((i) => i > 0));

  return (
    <Card className="relative overflow-x-auto">
      <div className="flex items-center px-6 py-6">
        <h3 className="font-medium">Monthly Summary</h3>
        <div className="flex items-center ml-auto space-x-6">
          <div className="flex items-center space-x-2">
            <IconCircleFilled size="14" className="text-green-500" />
            <p>Maximum</p>
          </div>
          <div className="flex items-center space-x-2">
            <IconCircleFilled size="14" className="text-red-500" />
            <p>Minimum</p>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="border-b border-gray-300">
          <tr>
            <th scope="col" className="font-medium border pl-6 pr-2 py-3">
              Month
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Days
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Deposit
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Withdrawal
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Salary
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Benefits
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Loan
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Betting
            </th>
            <th scope="col" className="font-medium border px-2 py-3">
              Utility
            </th>
            <th scope="col" className="font-medium border pl-2 pr-6 py-3">
              Payday
            </th>
          </tr>
        </thead>
        <tbody>
          {[...monthly_analytics].reverse().map((item, i) => (
            <tr className="bg-white border-b border-gray-300 hover:bg-gray-50" key={i}>
              <td className="pl-6 pr-2 py-3 border">{item.new_month}</td>
              <td className="px-2 py-3 border">{item.day}</td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': item.amount === maxDeposit,
                  'bg-red-100': item.amount === minDeposit,
                })}
              >
                {formatCurrency(item.amount || 0)}
              </td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': item.withdraw === maxWithdrawal,
                  'bg-red-100': item.withdraw === minWithdrawal,
                })}
              >
                {formatCurrency(item.withdraw || 0)}
              </td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': item.salary === maxSalary,
                  'bg-red-100': item.salary === minSalary,
                })}
              >
                {formatCurrency(item.salary || 0)}
              </td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': item.benefit === maxBenefit,
                  'bg-red-100': item.benefit === minBenefit,
                })}
              >
                {formatCurrency(item.benefit || 0)}
              </td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': item.loan === maxLoan,
                  'bg-red-100': item.loan === minLoan,
                })}
              >
                {formatCurrency(item.loan || 0)}
              </td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': item.gamble === maxGambling,
                  'bg-red-100': item.gamble === minGambling,
                })}
              >
                {formatCurrency(item.gamble || 0)}
              </td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': item.utility === maxUtility,
                  'bg-red-100': item.utility === minUtility,
                })}
              >
                {formatCurrency(item.utility || 0)}
              </td>
              <td
                className={classNames('px-2 py-3 border', {
                  '!bg-green-100': +item.payday === maxPayday,
                  'bg-red-100': +item.payday === minPayday,
                })}
              >
                {item.payday || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

MonthlySummary.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MonthlySummary;
