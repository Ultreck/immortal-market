import { Card, CardBody, Chip, Tab, Tabs } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import VirtualNavbar from './components/VirtualNavbar';
import PlaceOrder from './modals/PlaceOrder';
import useInterval from '@/hooks/use-interval';
import MarketVirtualCurrentOrder from './MarketVirtualCurrentOrder';
import { useGetAllOrders } from '@/api/ai-chat';
import MarketVirtualCompletedOrder from './MarketVirtualCompletedOrder';

const MarketVirtulaOrderPage = () => {
  const [tab, seTtab] = useState('current-orders');
  const [winning, setWinning] = useState(0);
  const { startIn, setstartIn, shouldStart, setshouldStart, endTime, setendTime, startTime, setstartTime } =
    useInterval();
const [activeOrders, setActiveOrders] = useState([]);
const [completedOrders, setCompletedOrders] = useState([]);
  const { mutateAsync: myCompletedOrders } = useGetAllOrders();
  const { mutateAsync: myActiveOrders } = useGetAllOrders();

  useEffect(() => {
    handleMyOrders();
  }, []);
  
  const handleMyOrders = async () => {
    const DonePayload = {
      page: 1,
      status: [true],
      sessionId: '',
    };
    const activePayload = {
      page: 1,
      status: [false],
      sessionId: '',
    };
    const doneRes = await myCompletedOrders(DonePayload);
    setCompletedOrders(doneRes?.data?.order)
    const activeRes = await myActiveOrders(activePayload);
    setActiveOrders(activeRes?.data?.order);
  };
  

  return (
    <>
      <VirtualNavbar />
      <div className="container">
        <Tabs
          aria-label="Options"
          selectedKey={tab}
          onSelectionChange={(e) => seTtab(e)}
          classNames={{
            tabList: 'gap-6 w-full relative rounded-none p-0',
            cursor: 'w-full bg-[#22d3ee]',
            tab: 'max-xl px-10 h-12',
            tabContent: 'group-data-[selected=true]:text-[#06b6d4]',
          }}
          color="primary"
          variant="underlined"
        >
          <Tab
            key="current-orders"
            title={
              <div className="flex items-center space-x-2">
                <span>Current Orders</span>
                <Chip size="sm" variant="faded">
                  {activeOrders?.length}
                </Chip>
              </div>
            }
          >
            <MarketVirtualCurrentOrder data={activeOrders} setWinning={setWinning} shouldStart={shouldStart} />
          </Tab>
          <Tab
            key="completed-orders"
            title={
              <div className="flex items-center space-x-2">
                <span>Completed Orders</span>
                <Chip size="sm" variant="faded">
                  {completedOrders?.length}
                </Chip>
              </div>
            }
          >
            <MarketVirtualCompletedOrder data={completedOrders} setWinning={setWinning} shouldStart={shouldStart} />
          </Tab>
          <Tab
            key="pending-orders"
            title={
              <div className="flex items-center space-x-2">
                <span>Pending Orders</span>
                <Chip size="sm" variant="faded">
                  1
                </Chip>
              </div>
            }
          >
            <div className="mt-4 flex justify-between">
              <div className="flex space-x-4">
                <img src="/images/accessbank.png" alt="" className="w-[30px]" />
                <div>
                  <p className="text-2xl font-bold">Access Bank</p>
                  <p className="text-sm">ACB</p>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold">N34.22</p>
                <p className="text-sm">22,000 Units</p>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default MarketVirtulaOrderPage;
