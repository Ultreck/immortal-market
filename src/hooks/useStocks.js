import { useEffect, useState } from 'react';
import { useCreateVirtualStockDetails, useCreateVirtualStockOrders, useCreateVirtualSummary } from '@/api/ai-chat';

const useStocks = ({id}) => {
  const [timeFrame, setTimeFrame] = useState(() => {
    const storedTimeFrame = window.localStorage.getItem('time-function');
    return storedTimeFrame ? JSON.parse(storedTimeFrame) : '1-hour';
  });
  const { mutateAsync: getStockDetails } = useCreateVirtualStockDetails();
  const { mutateAsync: getStockOrders } = useCreateVirtualStockOrders();
  const { mutateAsync: getStockSummary } = useCreateVirtualSummary();
  const [chartDatas, setChartDatas] = useState([]);
  const [stockOrders, setStockOrders] = useState([]);
  const [stockSummary, setstockSummary] = useState({});

  const handleGetStockDetails = async () => {
    let data = {
      stockId: id,
      country: "Nigeria",
      sessionType: timeFrame,
    };
    const res = await getStockDetails(data);
    setChartDatas(res.data.data);
  };

  useEffect(() => {
    handleGetStockDetails();
    handleGetStockOrders();
    handleGetStockSummary();
    setTimeFrame(JSON.parse(window.localStorage.getItem('time-function')));
  }, [timeFrame, id]);

  const handleGetStockOrders = async () => {
    try {
      let stockOrders = {
        stockId: id,
        // country: country,
        sessionType: timeFrame,
        page: 1,
      };
      const res = await getStockOrders(stockOrders);
      setStockOrders(res.data.data);
    } catch (error) {
      console.log(error);
      
    }
  };
  const handleGetStockSummary = async () => {
    try {
      let stockSummary = {
        stock: chartDatas?.stock?._id, 
        session: chartDatas?._id
      };
      const res = await getStockSummary(stockSummary);
      setstockSummary(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };  
  return {
    getStockSummary,
    getStockDetails,
    getStockOrders,
    chartDatas,
    timeFrame,
    setTimeFrame,
    handleGetStockDetails,
    handleGetStockOrders,
    handleGetStockSummary,
    stockOrders,
    stockSummary,
  };
};

export default useStocks;
