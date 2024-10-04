import Sidebar from '@/components/core/shared/Sidebar.jsx';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-[auto_1fr] gap-0 bg-[#eff6fd] dark:bg-gray-800/50">
      <Sidebar />
      <div className="pt-6 pr-6 h-screen">
        <div
          className="rounded-2xl h-full flex flex-col overflow-y-auto bg-white dark:bg-black/80 pt-2 shadow border border-default-200 dark:border-default-50"
          id="main"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
