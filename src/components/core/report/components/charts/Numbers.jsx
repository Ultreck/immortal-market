import CountUp from 'react-countup';
import PropTypes from 'prop-types';
import Card from '@/components/ui/Card.jsx';
import { getPercentages } from '@/lib/utils.js';

const Numbers = ({ title, caption, data }) => {
  const percentages = getPercentages(data.map((i) => +i.value));

  return (
    <Card className="w-full">
      <h3 className="text-2xl font-semibold mb-12 w-10/12">{title}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-start">
              <CountUp className="text-8xl font-bold leading-none" start={0} duration={5} end={percentages[index]} />
              <div className="text-5xl leading-none mt-3">%</div>
            </div>
            <div className="leading-none mt-2">{item.label}</div>
          </div>
        ))}
      </div>
      <p className="text-md opacity-75 mt-12">{caption}</p>
    </Card>
  );
};

Numbers.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })).isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Numbers;
