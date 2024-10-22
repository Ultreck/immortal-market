import Sidebar from '@/components/core/shared/Sidebar.jsx';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-[auto_1fr] gap-0 bg-[#eff6fd] dark:bg-gray-800/50">
      <Sidebar />
      <div className="h-screen">
        <div
          id="main"
          className="h-full flex flex-col overflow-y-auto bg-white dark:bg-black/80 pt-2 border-l border-default-200/70 dark:border-default-50"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
