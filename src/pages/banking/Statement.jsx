import StatementStats from "@/components/core/banking/overview/StatementStats.jsx";
import StatementHistory from "@/components/core/banking/statement/StatementHistory.jsx";

const Statement = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-10">
        Statement Insights
      </h1>
      <StatementStats/>
      <StatementHistory/>
    </div>
  );
};

export default Statement;
