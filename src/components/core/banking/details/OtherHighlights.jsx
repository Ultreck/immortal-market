import { formatCurrency } from '@/lib/utils';
import Card from '@/components/ui/Card';
import PropTypes from 'prop-types';

const OtherHighlights = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {};

  return (
    <Card>
      <h3 className="font-medium px-6 py-6">Other Highlights</h3>
      <div className="divide-y divide-gray-300">
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Key</div>
          <div>Total</div>
          <div>Average</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Transfer</div>
          <div>{formatCurrency(highlight.total_amount_recipient)}</div>
          <div>{formatCurrency(highlight.total_amount_recipient / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>ATM</div>
          <div>{formatCurrency(highlight.total_atm_amount)}</div>
          <div>{formatCurrency(highlight.total_atm_amount / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>POS</div>
          <div>{formatCurrency(highlight.total_pos_amount)}</div>
          <div>{formatCurrency(highlight.total_pos_amount / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Total utilities</div>
          <div>{formatCurrency(highlight.total_utility)}</div>
          <div>{formatCurrency(highlight.total_utility / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Bank charges</div>
          <div>{formatCurrency(highlight.bank_charges)}</div>
          <div>{formatCurrency(highlight.bank_charges / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Total gambling</div>
          <div>{formatCurrency(highlight.total_gamble)}</div>
          <div>{formatCurrency(highlight.total_gamble / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Total religion giving</div>
          <div>{formatCurrency(highlight.religion_total)}</div>
          <div>{formatCurrency(highlight.religion_total / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Entertainments</div>
          <div>{formatCurrency(highlight.total_entertainment)}</div>
          <div>{formatCurrency(highlight.total_entertainment / highlight.no_month)}</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Investment earning</div>
          <div>{formatCurrency(highlight.total_investment)}</div>
          <div>{formatCurrency(highlight.total_investment / highlight.no_month)}</div>
        </div>
      </div>
    </Card>
  );
};

OtherHighlights.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OtherHighlights;
