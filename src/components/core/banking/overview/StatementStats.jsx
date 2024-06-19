import { useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { useGetUserBusiness } from '@/api/business.js';
import Card from '@/components/ui/Card.jsx';
import { useGetStatementOverview } from '@/api/statement.js';
import NewStatement from '@/components/core/banking/statement/NewStatement.jsx';

const StatementStats = () => {
  const [isAnalyzeOpen, setIsAnalyzeOpen] = useState(false);
  const { data: business, isLoading: isBusinessLoading } = useGetUserBusiness();
  const { data = {}, isLoading: isOverviewLoading } = useGetStatementOverview(business._id);

  return (
    <>
      {isBusinessLoading || isOverviewLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
          <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
          <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
          <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Card className="px-6 py-4">
            <div className="text-xl md:text-3xl font-semibold text-gray-800">{data.totalStatements}</div>
            <div className="flex items-center mt-1">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Analyzed</p>
            </div>
          </Card>
          <Card
            onClick={() => setIsAnalyzeOpen(true)}
            className="px-6 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
          >
            <div className="text-xl md:text-3xl font-semibold text-gray-800">
              <IconPlus />
            </div>
            <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">New analysis</p>
          </Card>
        </div>
      )}

      <NewStatement isOpen={isAnalyzeOpen} onClose={() => setIsAnalyzeOpen(false)} />
    </>
  );
};

export default StatementStats;
