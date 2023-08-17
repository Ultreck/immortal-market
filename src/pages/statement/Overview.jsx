import StatementChart from "@/components/core/statement/overview/StatementChart.jsx";
import RecentAnalysis from "@/components/core/statement/overview/RecentAnalysis.jsx";
import StatementStats from "@/components/core/statement/overview/StatementStats.jsx";

const StatementOverview = () => {
  return (
    <>
      <h2 className="hidden md:block mb-10 font-semibold text-xl">Overview</h2>
      <div className="space-y-6">
        <StatementStats/>
        <div className="md:grid space-y-6 md:space-y-0 md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <RecentAnalysis/>
          </div>
          <div className="md:col-span-7 flex flex-col h-[340px]">
            <StatementChart/>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatementOverview;
