import Card from '@/components/global/Card';
import PropTypes from 'prop-types';

const SweepingDetails = ({ data }) => {
  const { highlight } = data?.analytics_data ?? {};

  return (
    <Card>
      <div className="px-7 py-6">
        <h3 className="font-medium">Sweeping details</h3>
        <p className="text-sm opacity-75">Based on deposit range</p>
      </div>
      <div className="divide-y divide-gray-300">
        <div className="flex items-center justify-between py-1.5 px-7">
          <div className="text-sm font-medium opacity-75 mb-1">Deposit range</div>
          <div className="text-sm font-medium opacity-75 mb-1">Average sweep days</div>
        </div>
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Less than 10k</div>
          <div>{Math.ceil(highlight.average_ltenk_sweep)}</div>
        </div>
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Less than 100k</div>
          <div>{Math.ceil(highlight.average_lhundredk_sweep)}</div>
        </div>
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Less than 1m</div>
          <div>{Math.ceil(highlight.average_lonem_sweep)}</div>
        </div>
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Less than 10m</div>
          <div>{Math.ceil(highlight.average_ltenm_sweep)}</div>
        </div>
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Less than 100m</div>
          <div>{Math.ceil(highlight.average_lhundredm_sweep)}</div>
        </div>
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Over 100m</div>
          <div>{Math.ceil(highlight.average_ohundredm_sweep)}</div>
        </div>
      </div>
    </Card>
  );
};

SweepingDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SweepingDetails;
