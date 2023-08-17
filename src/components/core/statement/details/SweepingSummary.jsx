import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const SweepingSummary = ({ data }) => {
  const { highlight, salary_sweep_week, highest_deposit_sweep } = data?.analytics_data ?? {};

  return (
    <Card>
      <h3 className="font-medium px-6 py-6">Sweeping Summary</h3>
      <div className="divide-y divide-gray-300">
        <div className="px-6 py-2 grid grid-cols-2 gap-6">
          <div>Key</div>
          <div>Highlight</div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Sweeps salary within</div>
          <div>
            {
              highlight.most_frequent_salary_amount.length === 0 ? 'No salary' : (
                `${ Math.min(...salary_sweep_week) } and ${ Math.max(...salary_sweep_week) } days`
              )
            }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Usually sweeps highest deposit within</div>
          <div>
            {
              highest_deposit_sweep?.length ? `${ Math.min(...(highest_deposit_sweep)) } and ${ Math.max(...(highest_deposit_sweep)) } days` : 'N/A'
            }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Usually sweeps any deposit within</div>
          <div>
            {
              highlight.each_deposit_sweep?.location ? `${ Math.min(...(highlight.each_deposit_sweep || [0])) } and ${ Math.max(...(highlight.each_deposit_sweep || [0])) } days` : 'N/A'
            }
          </div>
        </div>
        <div className="px-6 py-2 grid grid-cols-2 gap-6 items-center">
          <div>Cheque cleared/bounced</div>
          <div>
            {
              `${ highlight.clear_cheque } cleared / ${ highlight.bounced_cheque } bounced`
            }
          </div>
        </div>
      </div>
    </Card>
  );
};

SweepingSummary.propTypes = {
  data: PropTypes.object.isRequired
};

export default SweepingSummary;
