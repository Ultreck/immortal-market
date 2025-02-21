import Sidebar from '@/components/core/shared/Sidebar.jsx';
import MarketNavbar from '@/pages/market/components/MarketNavbar.jsx';
import BetSlip from './components/gaming/BetSlip';
import GamingDetailsComponent from './components/gaming/GamingDetailsComponent';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/react';
import { useNavigate } from 'react-router-dom';

const MarketGamingDetailsPage = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen overflow-hidden flex">
      <Sidebar source="market" />
      <div className="h-screen flex-1 overflow-y-auto bg-white dark:bg-black/80 border-l border-default-200/50 dark:border-default-50 ">
        <div className="h-[100vh] w-full flex flex-col">
          <MarketNavbar />
          <div className="container grid gap-5 grid-cols-12 mx-auto">
            <div className="text col-span-8 overflow-y-auto ">
            <div className="text w-full left-40 my-5">
              <Breadcrumbs>
                <BreadcrumbItem onPress={() => navigate(`/markets/gaming`)}>Prediction Home</BreadcrumbItem>
                <BreadcrumbItem>Details Page</BreadcrumbItem>
              </Breadcrumbs>
            </div>
              <GamingDetailsComponent />
            </div>
            <div className="text mt-14 col-span-4 sticky top-0">
              <BetSlip />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketGamingDetailsPage;
