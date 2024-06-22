import React from 'react';
import ProjectHeader from '../components/core/report/components/ProjectHeader';
import ReportBody from '../components/core/report/components/ReportBody';

const ReportPage = () => {
  return (
    <div className="container !max-w-[1100px] py-10">
      <ProjectHeader />
      <ReportBody />
    </div>
  );
};

export default ReportPage;
