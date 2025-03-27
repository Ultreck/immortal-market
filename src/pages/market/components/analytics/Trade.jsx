import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import { BreadcrumbItem, Breadcrumbs, Button, useDisclosure } from '@heroui/react';
import { RiHome2Line } from 'react-icons/ri';
import NewTrade from '@/pages/market/components/analytics/NewTrade.jsx';
import { useTradeStore } from '@/store/trade.js';
import { useEffect } from 'react';
import TradeLogin from '@/pages/market/components/analytics/TradeLogin.jsx';
import { Link } from 'react-router-dom';
import CardinalDashboard from '@/pages/market/components/analytics/CardinalDashboard.jsx';
import { useGetCardinalPortfolio } from '@/api/trade.js';
import MeritradeDashboard from '@/pages/market/components/analytics/MeritradeDashboard.jsx';

const Trade = () => {
  const { user, platform } = useTradeStore();
  const { data: portfolio, isLoading: isPortfolioLoading } = useGetCardinalPortfolio();

  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onClose: onDetailsClose } = useDisclosure();

  useEffect(() => {
    if (!user) {
      onLoginOpen();
    }
  }, [user]);

  return (
    <>
      <MarketNavbar />
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <Breadcrumbs size="lg">
            <BreadcrumbItem startContent={<RiHome2Line size="20" />}>Home</BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/markets/analytics">Analytics</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>Trade</BreadcrumbItem>
          </Breadcrumbs>
          <div>
            You're logged in as <span className="font-bold uppercase">{platform}</span>
          </div>
          <Button color="primary" radius="full" className="text-base px-4" onPress={onDetailsOpen}>
            Trade Now
          </Button>
        </div>
        {platform === 'cardinal' && <CardinalDashboard />}
        {platform === 'meritrade' && <MeritradeDashboard />}
      </div>

      <TradeLogin isOpen={isLoginOpen} onClose={onLoginClose} />
      <NewTrade isOpen={isDetailsOpen} onClose={onDetailsClose} portfolio={portfolio?.data?.positionInstruments} />
    </>
  );
};

export default Trade;
