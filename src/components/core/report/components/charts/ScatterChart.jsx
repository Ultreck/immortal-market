import { Card } from '@nextui-org/react';
import React, { useMemo } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { x: 10, y: 200, z: 200 },
  { x: 20, y: 100, z: 260 },
  { x: 70, y: 300, z: 400 },
  { x: 40, y: 250, z: 280 },
  { x: 50, y: 400, z: 500 },
  { x: 10, y: 280, z: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const ScatterCharts = () => {
  const renderScatter = useMemo(() => {
    return (
      <Scatter name="A school" data={data} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
    );
  }, []);

  return (
    <Card>
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
        }}
        >
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        {renderScatter}
      </ScatterChart>
    </ResponsiveContainer>
          </Card>
  );
};

export default ScatterCharts;