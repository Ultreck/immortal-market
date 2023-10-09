import { formatCurrency } from "@/lib/utils";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const BorrowingHighlights = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {};

  return (
    <Card>
      <h3 className="font-medium px-6 py-6">Borrowing Highlights</h3>
      <div className="divide-y divide-gray-300">
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Key</div>
          <div>Amount</div>
          <div>Date/Period</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Avg. repayment(3 months)</div>
          <div>
            { formatCurrency(highlight.total_loans_repaid / 3) }
          </div>
          <div>
            --
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Total loan disbursed</div>
          <div>
            { formatCurrency(highlight.total_loans_disbursed) }
          </div>
          <div>
            { highlight.total_loans_disbursed > 0 ? `Last ${ highlight.no_month } month(s)` : '' }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Total loan repaid</div>
          <div>
            { formatCurrency(highlight.total_loans_repaid) }
          </div>
          <div>
            { highlight.total_loans_repaid > 0 ? `Last ${ highlight.no_month } month(s)` : '' }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Maximum OD collection</div>
          <div>
            { highlight.highest_overdraft > 0 ? formatCurrency(highlight.highest_overdraft) : 'None' }
          </div>
          <div>
            { highlight.days_overdraft }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Total overdraft</div>
          <div>
            { formatCurrency(highlight.total_overdraft) }
          </div>
          <div>
            { `Last ${ highlight.no_month } month(s)` }
          </div>
        </div>
      </div>
    </Card>
  );
};

BorrowingHighlights.propTypes = {
  data: PropTypes.object.isRequired
};

export default BorrowingHighlights;
