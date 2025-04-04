import { Avatar, AvatarGroup, Card, CardBody, CardHeader } from '@heroui/react';
import { useGetMarkets } from '@/store/bot.js';
import { useEffect, useState } from 'react';
import { useCreateVirtualStockDetails } from '@/api/ai-chat';
const VirtualSideNavbar = () => {
  const { setHomeMarket, homeMarket } = useGetMarkets();
  const { mutateAsync: getStockDetails } = useCreateVirtualStockDetails();
  const [timeFrame, setTimeFrame] = useState(() => {
    const storedTimeFrame = window.localStorage.getItem('time-function');
    return storedTimeFrame ? JSON.parse(storedTimeFrame) : '1-hour';
  });
  useEffect(() => {
    handleGetStockDetails();
  }, []);

  const handleGetStockDetails = async () => {
    let data = {
      stockId: '6658678cc6a35aab6119fbd2',
      country: 'nigeria',
      sessionType: '5-minutes',
    };
    const res = await getStockDetails(data);
    setChartDatas(res.data.data);
  };

  return (
    <Card className="card-shadow rounded-2xl h-[450px] sticky top-0">
      <CardHeader className="sticky top-0 px-7 pb-3 pt-6">Markets</CardHeader>
      <CardBody className="px-5 pb-5 pt-0">
        {['1min', '3mins', '10mins', '30mins', 'No time']?.map((v, i) => (
          <Card
            className={`flex hover:bg-default-100 cursor-pointer border-2 my-1 rounded-none px-3 py-2 ${v === homeMarket ? 'border-green-600 dark:border-green-700 ' : 'border-default-200 dark:border-default-100 '}`}
            shadow="none"
            key={i}
          >
            <div
              className="w-full h-full"
              onClick={() => {
                console.log("Yo I'm clicked! Has onPress deprecated?");
                setHomeMarket(v);
              }}
            >
              <CardBody className="px-5 pb-5 pt-0">
                <div className="text flex justify-between">
                  <div className="text">
                    <div className="text-lg">{v}</div>
                    <div className={` ${v === '10mins' || v === '3mins' ? 'text-red-600' : 'text-green-600'}`}>
                      {v === '10mins' || v === '3mins' ? '2% Loss' : '7% gained'}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <AvatarGroup isBordered max={3} size="sm">
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                  </div>
                </div>
              </CardBody>
            </div>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};

export default VirtualSideNavbar;
