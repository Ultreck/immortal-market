import { formatCurrency } from '@/lib/utils';
import Card from '@/components/global/Card';
import PropTypes from 'prop-types';

const CashFlowHighlights = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {};

  return (
    <Card>
      <h3 className="font-medium px-6 py-6">CashFlow Highlights</h3>
      <div className="divide-y divide-gray-300">
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Key</div>
          <div>Deposit</div>
          <div>Withdrawal</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Transaction total</div>
          <div>{formatCurrency(highlight.total_deposit)}</div>
          <div>{formatCurrency(highlight.total_withdrawal)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Monthly average</div>
          <div>{formatCurrency(highlight.average_monthly_deposit)}</div>
          <div>{formatCurrency(highlight.average_monthly_withdraw)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Weekly average</div>
          <div>{formatCurrency(highlight.average_weekly_deposit)}</div>
          <div>{formatCurrency(highlight.average_weekly_withdraw)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Daily average</div>
          <div>{formatCurrency(highlight.average_daily_deposit)}</div>
          <div>{formatCurrency(highlight.average_daily_withdrawal)}</div>
        </div>
      </div>
    </Card>
  );
};

CashFlowHighlights.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CashFlowHighlights;
