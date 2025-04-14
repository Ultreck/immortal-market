import { Avatar, AvatarGroup, Card, CardBody, CardHeader } from '@heroui/react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const VirtualSideNavbar = ({setHomeMarket, homeMarket, setDashboardTimeFrame, virtualSession}) => {
  const handleChange = (data) => {
    window.localStorage.setItem('time-function', JSON.stringify(data.sessionType));
    setHomeMarket(data.sessionType);    
    setDashboardTimeFrame(data.sessionType)
  };

  return (
    <Card className="card-shadow rounded-2xl h-[450px] sticky top-0">
      <CardHeader className="sticky top-0 px-7 pb-3 pt-6">Markets</CardHeader>
      <CardBody className="px-5 pb-5 pt-0">
        {virtualSession?.length && virtualSession?.data?.map((v, i) => (
          <Card
            className={`flex hover:bg-default-100 cursor-pointer border-2 my-1 rounded-none px-3 py-2 ${v.sessionType === homeMarket ? 'border-green-600 dark:border-green-700 ' : 'border-default-200 dark:border-default-100 '}`}
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
                    <div className="text-lg">{v.sessionType}</div>
                    <div className={`text-green-600`}>
                      {v.percentGain + '% gain'}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <AvatarGroup isBordered max={3} size="sm">
                      {v?.users?.map((user) => (
                        <Avatar key={user} src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                      ))}
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
VirtualSideNavbar.propTypes = {
  country: PropTypes.string.isRequired,
  setHomeMarket: PropTypes.func.isRequired,
  homeMarket: PropTypes.string.isRequired,
  setDashboardTimeFrame: PropTypes.func.isRequired,
  virtualSession: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
      })
    ),
  }),
};

export default VirtualSideNavbar;
