import ChartRadian from './ChartRadian';
import PredictionButton from './PredictionButton';
import PropTypes from 'prop-types';

const PredictionHomeCards = ({ name }) => {
  return (
    <div className="text w-full">
      <div className={`grid p-5 grid-cols-2`}>
        <div className="">
          <div className="text-xl text mt-16">Will {name} surpass N20b rev in 2025 Q2 alone</div>
          <div className="text mt-10">
            <div className="text space-y-5">
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N20b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text="Yes" />
                  <PredictionButton type="no" text="No" />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N35b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text="Yes" />
                  <PredictionButton type="no" text="No" />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="text-lg">Above N50b</div>
                <div className="text space-x-0.5 flex">
                  <PredictionButton type="yes" text="Yes" />
                  <PredictionButton type="no" text="No" />
                </div>
              </div>
            </div>
            <div className="text space-y-2"></div>
          </div>
        </div>
        <ChartRadian />
      </div>
    </div>
  );
};

PredictionHomeCards.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PredictionHomeCards;
