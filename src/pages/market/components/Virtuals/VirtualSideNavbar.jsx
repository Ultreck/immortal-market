import { Avatar, AvatarGroup, Card, CardBody, Tab, Tabs } from '@heroui/react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountryList from '../../shared/CountryList';
const VirtualSideNavbar = ({ country, setHomeMarket, homeMarket, setDashboardTimeFrame, virtualSession }) => {
  const [tab, seTtab] = useState('time-frame');

  const handleChange = (data) => {
    window.localStorage.setItem('time-function', JSON.stringify(data.sessionType));
    setHomeMarket(data.sessionType);
    setDashboardTimeFrame(data.sessionType);
  };

  return (
    <Card className="card-shadow rounded-2xl h-[450px] sticky top-8">
      <Tabs
        aria-label="Options"
        selectedKey={tab}
        onSelectionChange={(e) => seTtab(e)}
        classNames={{
          tabList: 'gap-1 px-4 w-full relative rounded-none',
          cursor: 'w-full bg-[#22d3ee]',
          tab: 'max-xl  h-10',
          tabContent: 'group-data-[selected=true]:text-[#06b6d4]',
        }}
        color="primary"
        variant="underlined"
      >
        <Tab
          key="time-frame"
          title={
            <div className="flex items-center space-x-2">
              <span>Time frame</span>
            </div>
          }
        >
          <CardBody className=" pt-0">
            {virtualSession?.data?.length &&
              virtualSession?.data?.map((v, i) => {
                return (
                  <Card
                    className={`flex hover:bg-default-100 cursor-pointer border-2 my-1 rounded-none px-3 py-2 ${v.sessionType === homeMarket ? 'border-green-600 dark:border-green-700 ' : 'border-default-200 dark:border-default-100 '}`}
                    shadow="none"
                    key={i}
                  >
                    <div
                      className="w-full h-full"
                      onClick={() => {
                        handleChange(v);
                      }}
                    >
                      <CardBody className="px-5 pb-1 pt-0">
                        <div className="text flex justify-between">
                          <div className="text">
                            <div className="text-lg">{v.sessionType}</div>
                            <div className={`text-green-600`}>{v.percentGain + '% gain'}</div>
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
                );
              })}
          </CardBody>
        </Tab>
        <Tab
          key="countries"
          title={
            <div className="flex items-center space-x-2">
              <span>Countries</span>
            </div>
          }
        >
          <CountryList />
        </Tab>
      </Tabs>
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
