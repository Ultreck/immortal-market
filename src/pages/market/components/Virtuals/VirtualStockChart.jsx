import { useEffect, useRef } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTernaryDarkMode } from 'usehooks-ts';
import { useGetCurrentPrice } from '@/store/bot';
import useSocket from '@/hooks/use-socket';
// import { useCreateVirtualStockDetails } from '@/api/ai-chat';

const dateFormatter = (date) => {
  date = new Date(date);
  const day = String(date.getDay()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// custome decimal limit function
function limitDecimals(num, decimals) {
  if (num === undefined || num === null) return '0';
  const strNum = num.toString();
  const dotIndex = strNum.indexOf('.');
  if (dotIndex === -1) return strNum;
  return strNum.substring(0, dotIndex + decimals + 1);
}

// time formatter function
const timeFormatter = (date, is24Hour = false) => {
  const validDate = date instanceof Date ? date : new Date(date);
  if (isNaN(validDate)) {
    return 'Invalid Date';
  }
  let hours = validDate.getHours();
  let minutes = validDate.getMinutes();
  let seconds = validDate.getSeconds();
  if (!is24Hour) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;
  } else {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
};

const VirtualStockChart = ({
  chartDatas,
  setshouldStart,
  shouldStart,
  setendTime,
  setIsRunning,
  setStockPercentage,
  dashboardTimeFrame,
  data,
  setData,
  id
}) => {
  const socket = useSocket();
  const { setCurrentPrice, currentPrice } = useGetCurrentPrice();
  const { isDarkMode } = useTernaryDarkMode();

  const currentSessionId = data[0]?._id;

  useEffect(() => {
    if (!socket) return;
    const getSessionFunct = () => {
      console.log("getSession");
      socket.emit('getSession', { stock: chartDatas?.stock?._id, session: chartDatas?._id });
    };
    const handleNewSession = (msg) => {
      if (!msg.isRunning && !shouldStart) {
        setendTime(msg.endTime);
        setshouldStart(true);
      } else if (msg.isRunning && shouldStart) {
        setendTime(msg.endTime);
        setshouldStart(false);
      }
      const newPrice = limitDecimals(msg?.price, 4);
      const lastPrice = currentPrice?.price;
      setIsRunning(msg?.isRunning);
      // console.log(msg);
      // console.log(chartDatas);

      if (msg?.isRunning && msg?._id === chartDatas?._id) {
        setData((prev) => {
          const newData = Array.isArray(prev) ? prev : [];
          if (newPrice === lastPrice || !msg.isRunning || !msg.price) {
            return newData;
          }
          const newDSocketData = {
            ...msg,
            price: limitDecimals(msg?.price, 4),
            sprice: limitDecimals(msg?.price, 4) / 5,
            date: dateFormatter(msg?.updatedAt),
            name: newData?.length + 1,
            time: timeFormatter(msg?.updatedAt),
          };

          setCurrentPrice(newDSocketData);
          return [...newData, newDSocketData];
        });
      } else {
        setData([]);
      }
    };
    socket.on('priceUpdate', getSessionFunct);
    socket.on('newSession', handleNewSession);

    return () => {
      socket.off('priceUpdate', getSessionFunct);
      socket.off('newSession', handleNewSession);
    };
  }, [socket, chartDatas, id]);

  useEffect(() => {
    if (shouldStart) {
      setData([]);
    }
  }, [dashboardTimeFrame, shouldStart, currentPrice, id]);

  const initialPrice = currentPrice?.close;
  const nowPrice = currentPrice?.price;
  if (initialPrice && nowPrice) {
    const diffPrice = nowPrice - initialPrice;
    const percent = (diffPrice / initialPrice) * 100;
    setStockPercentage(percent);
  }

  const maxDataLength = chartDatas?.noOfRunning;
  const currentLength = data.length;

  const newDSocketData = {
    price: limitDecimals(currentPrice?.close, 4),
    sprice: limitDecimals(currentPrice?.close, 4) / 5,
    name: currentPrice?.noOfRuned,
  };

  let paddedData;
  if (data) {
    if (data?.length > 0) {
      const lengthDiff = Math.max(0, maxDataLength - (currentLength + chartDatas?.noOfRuned));
      paddedData = [...Array(chartDatas?.noOfRuned).fill(newDSocketData), ...data, ...Array(lengthDiff).fill(null)];
    }
  }
  const constructedData = paddedData?.map((con, ind) => {
    return { ...con, x_base: con?.price ? ind + 1 : null };
  });

  // This part is to calculate the min and max values for the Y-axis
  const allValues = data?.flatMap((d) => [d.price, d.sprice]);
  const min = Math.max(...allValues);
  const max = Math.max(...allValues);
  const range = max - min || 1;
  const buffer = range * 0.1;
  const domainMax = Math.floor(max + buffer);

  // Auto scroll to the right when data changes
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [data]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="rounded-lg border border-gray-300 bg-white p-3 shadow-md">
          <p className="text-sm text-gray-500 text-brown-700">
            Current Price: <span className="text-gray-800">{payload[0].payload.price}</span>
          </p>
          <p className="text-sm text-gray-500">
            Time: <span className="text-gray-800">{payload[0].payload.time}</span>
          </p>
          <p className="text-sm text-gray-500">
            Close Price: <span className="text-gray-800">{payload[0].payload.close}</span>
          </p>
          <p className="text-sm text-gray-500">
            Date: <span className="text-gray-800">{payload[0].payload.date}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div ref={scrollContainerRef} className="overflow-x-auto w-full">
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer width={'100%'} height={300}>
          <ComposedChart data={constructedData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4691c5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4691c5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="x_base"
              domain={[0, maxDataLength - 1]}
              tickSize={5}
              strokeOpacity={0.5}
              interval="preserveEnd"
            />
            <YAxis
              domain={[0, domainMax]}
              tickFormatter={(value) => Math.round(value)}
              tickSize={3}
              strokeOpacity={0.5}
              orientation="right"
            />
            <CartesianGrid strokeOpacity={isDarkMode && 'dark' ? 0.1 : 0.5} vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              dataKey="price"
              // dot={(props) => <customDot {...props} data={paddedData} />}
              // dot={{
              //   r: 4,
              //   fill: "#4691c5",
              //   stroke: "#fff",
              //   strokeWidth: 2,
              //   display: (props) => {
              //     return props.index === props.data?.length - 1 ? 'block' : 'none';
              //   }
              // }}
              type="monotone"
              isAnimationActive={false}
              stroke="#4691c5"
              fill="url(#priceGradient)"
            />
            <Bar dataKey="sprice" barSize={10} fill="orange" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VirtualStockChart;

