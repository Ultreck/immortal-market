import { IconReportAnalytics } from '@tabler/icons-react';
import RecentProjects from '@/components/core/project/RecentProjects.jsx';

const RecentReport = () => {
  return (
    <div>
      <div className="flex space-x-2 items-center mb-6">
        <IconReportAnalytics />
        <span className="font-semibold text-xl">Recent Reports</span>
      </div>

      <RecentProjects />
    </div>
  );
};

export default RecentReport;
