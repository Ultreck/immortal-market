import Sidebar from '@/components/core/shared/Sidebar.jsx';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-[auto_1fr] gap-0">
      <Sidebar />
      <div className="h-full flex flex-col overflow-y-auto bg-default-100/30 dark:bg-default-50/20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
