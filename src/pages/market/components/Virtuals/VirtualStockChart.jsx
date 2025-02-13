import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTernaryDarkMode } from 'usehooks-ts';

const data = [
  {
    name: '0',
    uv: 1900,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '10',
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '20',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '30',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '40',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '50',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '60',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const VirtualStockChart = () => {
  const { isDarkMode } = useTernaryDarkMode();

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4691c5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#4691c5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickSize={3}
            strokeOpacity={0.5}
            axisLine={{ opacity: isDarkMode && 'dark' ? 0.1 : 0.5 }}
            interval="preserveEnd"
          />
          <YAxis tickSize={3} strokeOpacity={0.5} axisLine={false} orientation="left" />
          <CartesianGrid strokeOpacity={isDarkMode && 'dark' ? 0.1 : 0.5} vertical={false} />
          <Tooltip cursor={{ strokeDasharray: '5 5', opacity: isDarkMode && 'dark' ? 0.3 : 0.5 }} />
          <Area type="monotone" dataKey="uv" stroke="#4691c5" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VirtualStockChart;
