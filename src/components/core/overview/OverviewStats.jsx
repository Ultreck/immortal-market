import { useGetStatementOverview } from '@/api/statement.js';
import { formatCurrency } from '@/lib/utils.js';
import { Card, Skeleton } from '@nextui-org/react';
import useBusiness from '@/hooks/use-business.js';

const OverviewStats = () => {
  const { business } = useBusiness();
  const { data = {}, isLoading: isOverviewLoading } = useGetStatementOverview(business._id);

  return (
    <>
      {isOverviewLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Skeleton className="rounded-2xl min-h-[100px]"></Skeleton>
          <Skeleton className="rounded-2xl min-h-[100px]"></Skeleton>
          <Skeleton className="rounded-2xl min-h-[100px]"></Skeleton>
          <Skeleton className="rounded-2xl min-h-[100px]"></Skeleton>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <Card className="card-shadow px-6 py-4">
            <div className="text-xl md:text-3xl font-semibold">{data.totalStatements}</div>
            <div className="flex items-center mt-1">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Statements analyzed</p>
            </div>
          </Card>
          <Card className="card-shadow px-6 py-4">
            <div className="text-xl md:text-3xl font-semibold">Basic</div>
            <div className="flex items-center mb-1">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Subscription</p>
            </div>
          </Card>
          <Card className="card-shadow px-6 py-4">
            <div className="text-xl md:text-3xl font-semibold">{formatCurrency(0)}</div>
            <div className="flex items-center mb-1">
              <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Wallet balance</p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default OverviewStats;
