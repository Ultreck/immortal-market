import Sidebar from '@/components/core/shared/Sidebar.jsx';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-[auto_1fr] gap-0 bg-[#f2f5f7] dark:bg-gray-800/50">
      <Sidebar />
      <div className="h-screen">
        <div className="h-full flex flex-col overflow-y-auto bg-white dark:bg-black/80 pt-2" id="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
