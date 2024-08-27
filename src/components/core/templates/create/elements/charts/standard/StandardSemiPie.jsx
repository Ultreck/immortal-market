import { ChartContainer } from '@/components/ui/chart';
import { capitalize } from '@/lib/utils';
import React, { useEffect } from 'react';
import { Pie, PieChart } from 'recharts';

const StandardSemiPie = ({ element }) => {
  const data = element.config.data.map((item, i) => ({
    ...item,
    fill: element.config.colors[i],
  }));

  const config = element.config.data.reduce((acc, item, i) => {
    acc[item[element.config.keys.name]] = {
      label: capitalize(item[element.config.keys.name]),
      color: element.config.colors[i],
    };
    return acc;
  }, {});

  useEffect(() => {}, [element]);
  return (
    <div>
      <ChartContainer
        config={config}
        style={{ height: element.height, width: element.width, opacity: element.style.opacity }}
      >
        <PieChart width={element.width} height={element.height}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default StandardSemiPie;