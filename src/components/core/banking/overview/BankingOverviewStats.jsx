import { useGetUserBusiness } from "@/api/business.js";
import Card from "@/components/global/Card.jsx";
import { useGetStatementOverview } from "@/api/statement.js";
import { formatCurrency } from "@/lib/utils.js";

const StatementStats = () => {
  const { data: business } = useGetUserBusiness();
  const { data = {}, isLoading: isOverviewLoading } = useGetStatementOverview(business._id)

  return (
    <>
      {
        (isOverviewLoading) ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
            <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
            <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
            <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card className="px-6 py-4">
              <div className="text-xl md:text-3xl font-semibold text-gray-800">
                { data.totalStatements }
              </div>
              <div className="flex items-center mt-1">
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed</p>
              </div>
            </Card>
            <Card className="px-6 py-4">
              <div className="text-xl md:text-3xl font-semibold text-gray-800">
                Basic
              </div>
              <div className="flex items-center mb-1">
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Subscription</p>
              </div>
            </Card>
            <Card className="px-6 py-4">
              <div className="text-xl md:text-3xl font-semibold text-gray-800">
                { formatCurrency(0) }
              </div>
              <div className="flex items-center mb-1">
                <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Wallet balance</p>
              </div>
            </Card>
          </div>
        )
      }
    </>
  );
};

export default StatementStats;
