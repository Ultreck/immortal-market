import { Avatar, AvatarGroup, Card, CardBody, CardHeader } from '@heroui/react';
import { useEffect, useState } from 'react';
// import { useCreateVirtualStockDetails } from '@/api/ai-chat';
const VirtualSideNavbar = ({country, setHomeMarket, homeMarket, setDashboardTimeFrame}) => {
  // const { mutateAsync: getStockDetails } = useCreateVirtualStockDetails();
  const [timeFrame, setTimeFrame] = useState(() => {
    const storedTimeFrame = window.localStorage.getItem('dash-time-function');
    return storedTimeFrame ? JSON.parse(storedTimeFrame) : '1-minute';
  });
  useEffect(() => {
    handleGetStockDetails();
  }, []);

  const handleGetStockDetails = async () => {
    let data = {
      "country": country,
      "sessionType": timeFrame,
  }
    // const res = await getStockDetails(data);
    // setChartDatas(res.data.data);
  };

  const handleChange = (data) => {
    window.localStorage.setItem('dash-time-function', JSON.stringify(data.value));
    setHomeMarket(data.name);    
    setDashboardTimeFrame(data.value)
  };

  return (
    <Card className="card-shadow rounded-2xl h-[450px] sticky top-0">
      <CardHeader className="sticky top-0 px-7 pb-3 pt-6">Markets</CardHeader>
      <CardBody className="px-5 pb-5 pt-0">
        {[
          { name: '1min', value: '1-minute' },
          { name: '3mins', value: '3-minutes' },
          { name: '10mins', value: '10-minutes' },
          { name: '30mins', value: '30-minutes' },
          { name: 'No time', value: 'no-time' },
        ]?.map((v, i) => (
          <Card
            className={`flex hover:bg-default-100 cursor-pointer border-2 my-1 rounded-none px-3 py-2 ${v.name === homeMarket ? 'border-green-600 dark:border-green-700 ' : 'border-default-200 dark:border-default-100 '}`}
            shadow="none"
            key={i}
          >
            <div
              className="w-full h-full"
              onClick={() => {handleChange(v)}}
            >
              <CardBody className="px-5 pb-5 pt-0">
                <div className="text flex justify-between">
                  <div className="text">
                    <div className="text-lg">{v.name}</div>
                    <div className={` ${v.name === '10mins' || v.name === '3mins' ? 'text-red-600' : 'text-green-600'}`}>
                      {v.name === '10mins' || v.name === '3mins' ? '2% Loss' : '7% gain'}
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
