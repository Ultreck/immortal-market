import { useMemo, useState } from 'react';
import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, Skeleton, Tab, Tabs } from '@nextui-org/react';
import { format, isSameMonth } from 'date-fns';
import { useTheme } from 'next-themes';
import { formatCurrency } from '@/lib/utils';
import { useGetStockPrices } from '@/api/market';
import NoData from '@/components/ui/NoData';
import { useShallow } from 'zustand/react/shallow';
import usePreferencesStore from '@/store/preferences.js';
import PropTypes from 'prop-types';

const filters = ['5D', '1MO', '3MO', '6MO', 'YTD', '1Y', '2Y', '5Y', 'MAX'];

const StocksChart = ({ stock }) => {
  const { resolvedTheme: theme } = useTheme();
  const [period, setPeriod] = useState('1MO');
  const { data: { prices = [] } = {}, isLoading } = useGetStockPrices({ stock: stock._id, period });
  const chart = usePreferencesStore(useShallow((state) => state.data.chart));

  const filtered = useMemo(() => {
    if (prices.length <= 200) {
      return prices.map((p) => {
        const diff = p.close - p.open;
        return { ...p, diff: +`${diff + 5}`.replace('-', '') };
      });
    }
    return prices.reduce((acc, item) => {
      if (acc.find((i) => isSameMonth(new Date(i.date), new Date(item.date)))) return acc;
      const diff = item.close - item.open;
      return [...acc, { ...item, diff: +`${diff + 5}`.replace('-', '') }];
    }, []);
  }, [prices]);

  const positive = !!filtered.length && filtered[0].close < filtered[filtered.length - 1].close;
  const color = positive ? '#4691c5' : '#ea4335';

  let max = prices?.length ? `${Math.round(Math.max(...prices.map((d) => d.close)))}` : '';
  if (max.length === 1) max = `${(+max).toFixed(1)}`;

  return (
    <>
      <div className="flex">
        <Tabs
          aria-label="Filter"
          className="mb-6"
          radius="full"
          selectedKey={period}
          onSelectionChange={setPeriod}
          size="sm"
          variant="bordered"
          fullWidth
          classNames={{ tab: 'text-md' }}
        >
          {filters.map((i) => (
            <Tab key={i} title={i} />
          ))}
        </Tabs>
      </div>

      {isLoading ? (
        <Skeleton className="h-[280px] rounded-2xl" />
      ) : (
        <>
          {filtered.length ? (
            <ResponsiveContainer width="100%" height={300} className="-mb-4">
              <ComposedChart width={500} height={400} data={filtered}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeOpacity={theme === 'dark' ? 0.1 : 0.5} vertical={false} />
                <XAxis
                  dataKey="date"
                  tickSize={3}
                  strokeOpacity={0.5}
                  axisLine={{ opacity: theme === 'dark' ? 0.1 : 0.5 }}
                  minTickGap={15}
                  tickCount={5}
                  tickFormatter={(v) => {
                    if (period.match(/^1D$|^5D$|^1MO$|^3MO$|^6MO|^YTD$/)) return format(new Date(v), 'MMM d');
                    else if (period.match(/^1Y$|^2Y$|^5Y$|^MAX$/)) return format(new Date(v), 'MMM yyyy');
                    return format(new Date(v), 'dd-MM-yyyy');
                  }}
                  interval="preserveEnd"
                />
                <YAxis
                  orientation="left"
                  tickSize={3}
                  tickLine={false}
                  width={max.length * 11}
                  strokeOpacity={0.5}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '5 5', opacity: theme === 'dark' ? 0.3 : 0.5 }}
                  content={(args) => {
                    const payload = args.payload[0]?.payload;
                    if (!args.active || !payload) return null;
                    return (
                      <Card
                        shadow="none"
                        className="card-shadow !rounded-xl bg-default-50 px-4 py-3 text-md dark:bg-default-200"
                      >
                        <p>{format(new Date(payload.date), 'do, MMM yyyy')}</p>
                        <p className="flex items-center">
                          <span className="mr-2 opacity-60">Open</span> {formatCurrency(payload.open)}
                        </p>
                        <p className="flex items-center">
                          <span className="mr-2 opacity-60">High</span> {formatCurrency(payload.high)}
                        </p>
                        <p className="flex items-center">
                          <span className="mr-2 opacity-60">Low</span> {formatCurrency(payload.low)}
                        </p>
                        <p className="flex items-center">
                          <span className="mr-2 opacity-60">Close</span> {formatCurrency(payload.close)}
                        </p>
                        <p className="flex items-center">
                          <span className="mr-2 opacity-60">Volume</span> {formatCurrency(payload.volume)}
                        </p>
                      </Card>
                    );
                  }}
                />
                {chart === 'area' ? (
                  <Area
                    type="linear"
                    dataKey="close"
                    dot={false}
                    activeDot={{ r: 2 }}
                    stroke={color}
                    fillOpacity={1}
                    fill="url(#color)"
                    isAnimationActive={false}
                  />
                ) : (
                  <Line
                    dataKey="close"
                    dot={false}
                    activeDot={{ r: 2 }}
                    stroke={color}
                    fillOpacity={1}
                    fill="url(#color)"
                    isAnimationActive={false}
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          ) : (
            <NoData text="No records for this period" />
          )}
        </>
      )}
    </>
  );
};

StocksChart.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default StocksChart;
