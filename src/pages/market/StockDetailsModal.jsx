import { useState } from 'react';
import { useGetStock } from '@/api/market';
import { Button, Skeleton, Tab, Tabs } from '@heroui/react';
import { HiOutlineX } from 'react-icons/hi';
import Drawer from '@/components/ui/Drawer.jsx';
import WatchlistButton from '@/pages/market/WatchlistButton.jsx';
import StockCompanyProfile from '@/pages/market/StockCompanyProfile.jsx';
import StockFinancials from '@/pages/market/StockFinancials.jsx';
import NoData from '@/components/ui/NoData.jsx';
import StockOverview from '@/pages/market/StockOverview.jsx';
import PropTypes from 'prop-types';

const StockDetailsModal = ({ isOpen, onClose, id }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      {!!id && <StockDetails id={id} onClose={onClose} />}
    </Drawer>
  );
};

const StockDetails = ({ id, onClose }) => {
  const { data: { stock } = {}, isLoading } = useGetStock({ id });
  const [tab, setTab] = useState('overview');

  return (
    <div>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-[200px] rounded-2xl" />
          <Skeleton className="h-[200px] rounded-2xl" />
        </div>
      ) : (
        <div className="grid grid-cols-[350px_1fr] h-screen max-w-[auto] p-0">
          <div className="border-r border-default-200 dark:border-default-100 h-full bg-[#f4f5f6] dark:bg-[#0b161f] py-8 px-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend
          </div>
          <div className="py-9 px-10">
            {!!stock && (
              <>
                <div className="relative mb-8 flex items-center justify-between">
                  <h1 className="text-lg font-semibold">
                    {stock.name} ({stock.symbol})
                  </h1>
                  <Button onPress={onClose} isIconOnly color="danger" radius="full" size="sm">
                    <HiOutlineX size="20" />
                  </Button>
                </div>
                <div className="mb-4 flex items-center justify-between">
                  <Tabs selectedKey={tab} onSelectionChange={setTab} aria-label="Options" radius="full" color="primary">
                    <Tab
                      key="overview"
                      title={
                        <div className="flex items-center space-x-2 text-base">
                          <span>Overview</span>
                        </div>
                      }
                    />
                    {/*<Tab*/}
                    {/*  key="profile"*/}
                    {/*  title={*/}
                    {/*    <div className="flex items-center space-x-2 text-base">*/}
                    {/*      <span>Profile</span>*/}
                    {/*    </div>*/}
                    {/*  }*/}
                    {/*/>*/}
                    <Tab
                      key="financials"
                      title={
                        <div className="flex items-center space-x-2 text-base">
                          <span>Financials</span>
                        </div>
                      }
                    />
                    <Tab
                      key="dividends"
                      title={
                        <div className="flex items-center space-x-2 text-base">
                          <span>Dividends</span>
                        </div>
                      }
                    />
                  </Tabs>
                  <div className="space-x-4 flex items-center ">
                    <WatchlistButton stock={stock} />
                    <Button color="primary" radius="full" className="text-base">
                      Trade
                    </Button>
                  </div>
                </div>
                {tab === 'overview' && <StockOverview stock={stock} />}
                {tab === 'profile' && <StockCompanyProfile stock={stock} />}
                {tab === 'financials' && <StockFinancials stock={stock} />}
                {tab === 'dividends' && <NoData text="No data available at this time" />}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

StockDetails.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

StockDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default StockDetailsModal;
