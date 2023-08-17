import { formatCurrency, getModeArray } from "@/lib/utils";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const SalaryHighlights = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {};

  return (
    <Card>
      <h3 className="font-medium px-6 py-6">Salary Highlights</h3>
      <div className="divide-y divide-gray-300">
        <div className="px-6 py-2 grid grid-cols-3 gap-6">
          <div>Key</div>
          <div>Amount</div>
          <div>Date/Period</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Constant salary</div>
          <div>
            { (highlight['no_month'] - highlight['most_frequent_salary_amount'].length) > 3 ? 'No' : 'Yes' }
          </div>
          <div>
            { (highlight['no_month'] - highlight['most_frequent_salary_amount'].length) > 3 ? 'No' : 'Yes' }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Most frequent salary</div>
          <div>
            { getModeArray(highlight.most_frequent_salary_amount)?.map?.(a => formatCurrency(a)).join(', ') }
          </div>
          <div>
            --
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Average salary</div>
          <div>
            { formatCurrency(highlight.average_salary) }
          </div>
          <div>Last { highlight.no_month } month(s)</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Suspected salary</div>
          <div>
            { (highlight.suspected_salary.slice(0, 2)).map(a => formatCurrency(a.amount)).join(', ') }
          </div>
          <div>
            { (highlight.suspected_salary.slice(0, 2)).map(a => a.date).join(', ') }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Average suspected salary</div>
          <div>
            { formatCurrency(highlight.average_suspected_salary) }
          </div>
          <div>Last { highlight.no_month } month(s)</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-3 gap-6 items-center">
          <div>Got Bonus/Allowance?</div>
          <div>
            { highlight.benefit_m ? 'Yes' : 'No benefit' }
          </div>
          <div>
            { highlight.benefit_m ? '--' : 'No benefit' }
          </div>
        </div>
      </div>
    </Card>
  );
};

SalaryHighlights.propTypes = {
  data: PropTypes.object.isRequired
};

export default SalaryHighlights;
