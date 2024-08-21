import { ChartContainer } from '@/components/ui/chart';
import { Button, Card } from '@nextui-org/react';
import { Bar, BarChart, Legend, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2673D9',
  },
  mobile: {
    label: 'Mobile',
    color: '#ff0000',
  },
};

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Card className="px-8 py-6 w-56 text-sm">
        <p className="text-lg font-bold">DATA</p>
        <div className="space-y-3">
          <p>{`${payload[0].name} : ${payload[0].value}`}</p>
          <p>{`${payload[1].name} : ${payload[1].value}`}</p>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum</p>
        </div>
        <div>
          <Button className="mt-10 bg-white text-black" size="sm">
            View more
          </Button>
        </div>
      </Card>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

const AdvancedStackedBar = ({ element }) => {
  return (
    <ChartContainer config={chartConfig} style={{ height: element.height, width: element.width, opacity: '1' }}>
      <BarChart data={element.config.data} className="space" defaultShowTooltip>
        <Legend />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="pv" stackId="a" fill="#2673D9" radius={[0, 0, 4, 4]} />
        <Bar dataKey="uv" stackId="a" fill="#ff0000" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
};

AdvancedStackedBar.propTypes = {
  element: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
    config: PropTypes.object,
  }),
};

export default AdvancedStackedBar;
