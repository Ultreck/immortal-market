import { IconCircleFilled, IconFolderExclamation } from '@tabler/icons-react';
import { formatCurrency } from '@/lib/utils';
import classNames from 'classnames';
import Card from '@/components/ui/Card';
import PropTypes from 'prop-types';

const WeeklyTransactions = ({ data }) => {
  const { credit_mweek } = data?.analytics_data ?? {};

  const hasRecord =
    Math.max(...credit_mweek.map((i) => i.amount || 0)) > 0 ||
    Math.max(...credit_mweek.map((i) => i.withdraw || 0)) > 0;

  const items = credit_mweek.reduce((acc, current) => {
    if (!current.month) return acc;
    if (Object.hasOwn(acc, current.month)) acc[current.month].push(current);
    else acc[current.month] = [current];
    return acc;
  }, {});

  return (
    <Card className="relative overflow-x-auto">
      <div className="flex items-center px-6 py-6">
        <h3 className="font-medium">Weekly Transactions</h3>
        {hasRecord && (
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
        )}
      </div>
      {hasRecord ? (
        <table className="w-full text-sm text-left">
          <thead className="border-b border-gray-300">
            <tr>
              <th scope="col" className="font-medium border pl-6 pr-2 py-3"></th>
              <th scope="col" colSpan="2" className="font-medium border px-2 py-3">
                Week 1
              </th>
              <th scope="col" colSpan="2" className="font-medium border px-2 py-3">
                Week 2
              </th>
              <th scope="col" colSpan="2" className="font-medium border px-2 py-3">
                Week 3
              </th>
              <th scope="col" colSpan="2" className="font-medium border pl-2 pr-6 py-3">
                Week 4/5
              </th>
            </tr>
            <tr>
              <th scope="col" className="font-medium border pl-6 pr-2 py-3"></th>
              <th scope="col" className="font-medium border px-2 py-3">
                Deposit
              </th>
              <th scope="col" className="font-medium border px-2 py-3">
                Withdrawal
              </th>
              <th scope="col" className="font-medium border px-2 py-3">
                Deposit
              </th>
              <th scope="col" className="font-medium border px-2 py-3">
                Withdrawal
              </th>
              <th scope="col" className="font-medium border px-2 py-3">
                Deposit
              </th>
              <th scope="col" className="font-medium border px-2 py-3">
                Withdrawal
              </th>
              <th scope="col" className="font-medium border px-2 py-3">
                Deposit
              </th>
              <th scope="col" className="font-medium border pl-2 pr-6 py-3">
                Withdrawal
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(items)
              .filter((key) => {
                return (
                  Math.max(...items[key].map((j) => j.withdraw || 0)) > 0 ||
                  Math.max(...items[key].map((j) => j.amount || 0)) > 0
                );
              })
              .map((key) => {
                const maxDeposit = Math.max(...items[key].map((i) => i.amount || 0));
                const minDeposit = Math.min(...items[key].map((i) => i.amount || 0));
                const maxWithdrawal = Math.max(...items[key].map((i) => i.withdraw || 0));
                const minWithdrawal = Math.min(...items[key].map((i) => i.withdraw || 0));

                return (
                  <tr className="bg-white border-b border-gray-300 hover:bg-gray-50" key={key}>
                    <td className="pl-6 pr-2 py-3 border border-l-0">{key}</td>
                    {[1, 2, 3, 4].map((n) => {
                      const item = items[key].find((i) => i.week === n);
                      return [
                        <td
                          key={`salary-distribution-${n}1`}
                          className={classNames('px-2 py-3 border', {
                            '!bg-green-100': item?.amount && maxDeposit === item?.amount,
                            'bg-red-100': item?.amount && minDeposit === item?.amount,
                          })}
                        >
                          {formatCurrency(item?.amount || 0)}
                        </td>,
                        <td
                          key={`salary-distribution-${n}2`}
                          className={classNames('px-2 py-3 border', {
                            '!bg-green-100': item?.withdraw && maxWithdrawal === item?.withdraw,
                            'bg-red-100': item?.withdraw && minWithdrawal === item?.withdraw,
                          })}
                        >
                          {formatCurrency(item?.withdraw || 0)}
                        </td>,
                      ];
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <p className="px-6 pb-6 flex items-center">
          <IconFolderExclamation size="20" className="mr-2" /> No salary record
        </p>
      )}
    </Card>
  );
};

WeeklyTransactions.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WeeklyTransactions;
