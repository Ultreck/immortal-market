import { differenceInDays } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import Card from '@/components/global/Card';
import PropTypes from 'prop-types';

const TransactionPatterns = ({ data }) => {
  const { highlight, weekly_analytics } = data?.analytics_data ?? {};

  const highestBalanceWeek = weekly_analytics?.reduce((acc, i) => {
    if (!acc || i.balance > acc.balance) acc = i;
    return acc;
  }, 0)?.week;

  const lowestBalanceWeek = weekly_analytics?.reduce((acc, i) => {
    if (!acc || (i.balance < acc.balance && i.balance !== 0)) acc = i;
    return acc;
  }, 0)?.week;

  const zeroBalanceWeeks = weekly_analytics?.reduce((acc, i) => {
    if (acc.balance === 0) acc.push(i.week);
    return acc;
  }, []);

  const remainingAverageDeposit = (highlight.total_deposit - highlight.spike_deposit) / (highlight.no_month - 1);
  const spikeDeposit = (highlight.spike_deposit / remainingAverageDeposit) * 100 >= 150;

  return (
    <Card>
      <h3 className="font-medium px-6 py-6">Transaction Patterns</h3>
      <div className="divide-y divide-gray-300">
        <div className="px-6 py-2 grid grid-cols-2 gap-6">
          <div>Key</div>
          <div>Highlight</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Last deposit date</div>
          <div>
            {highlight.last_deposit_date} ({differenceInDays(new Date(), new Date(highlight.last_deposit_date))} day(s)
            ago)
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Last withdrawal date</div>
          <div>
            {highlight.last_withdrawal_date} ({differenceInDays(new Date(), new Date(highlight.last_withdrawal_date))}{' '}
            day(s) ago)
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Highest deposit week</div>
          <div>Week {highlight.highest_deposit_week}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Highest balance week</div>
          <div>Week {highestBalanceWeek}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Average daily balance</div>
          <div>{formatCurrency(highlight.average_daily_balance)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Week with lowest balance</div>
          <div>Week {lowestBalanceWeek}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Week with zero balance usually</div>
          <div>{zeroBalanceWeeks.length ? zeroBalanceWeeks.map((n) => `Week ${n}`).join(', ') : 'None'}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Highest band</div>
          <div>{highlight.highest_band || 'N/A'}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>30 days spike</div>
          <div>{spikeDeposit ? 'Abnormal' : 'Normal'}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>% of days with low balance</div>
          <div>{highlight.low_balance_percent_days}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Most frequent balance range</div>
          <div>{highlight.balance_highest_band}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Total turnover</div>
          <div>{formatCurrency(highlight.credit_turnover)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Negative balance days</div>
          <div>{highlight.days_overdraft}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Transaction days</div>
          <div>
            {highlight.transaction_days}/{highlight.no_of_days} days
          </div>
        </div>
      </div>
    </Card>
  );
};

TransactionPatterns.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TransactionPatterns;
