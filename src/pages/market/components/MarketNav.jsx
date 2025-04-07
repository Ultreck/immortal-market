import StockQueryItem from '@/pages/market/components/Items.jsx';
import { Link } from 'react-router-dom';
import { RiLineChartLine } from 'react-icons/ri';
import { cn, useDisclosure } from '@heroui/react';
import StockScreeners from '@/pages/market/modals/StockScreeners.jsx';

const MarketNav = () => {
  const { isOpen: isScreenersOpen, onOpen: onScreenersOpen, onClose: onScreenersClose } = useDisclosure();

  return (
    <div className={cn('flex items-stretch space-x-4')}>
      {[
        { key: 'research', name: 'Research', icon: <RiLineChartLine size="20" /> },
        { key: 'trade', name: 'Trade', icon: <RiLineChartLine size="20" />, href: '/markets/analytics/trade' },
        { key: 'orders', name: 'My Orders', icon: <RiLineChartLine size="20" /> },
        { key: 'lorem', name: 'Lorem Ipsum', icon: <RiLineChartLine size="20" /> },
        { key: 'lorem', name: 'Lorem Ipsum', icon: <RiLineChartLine size="20" /> },
      ].map((c, i) => {
        return (
          <>
            <Link key={i} to={c.href}>
              <StockQueryItem active={c.key === 'research'} before={c.icon} name={c.name} />
            </Link>
          </>
        );
      })}
      <StockQueryItem name="Stock Screener" onClick={onScreenersOpen} />
      <StockScreeners isOpen={isScreenersOpen} onClose={onScreenersClose} />
    </div>
  );
};

export default MarketNav;
