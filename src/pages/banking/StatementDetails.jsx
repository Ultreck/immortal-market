import { useState } from 'react';
import { format } from 'date-fns';
import OtherHighlights from '@/components/core/banking/details/OtherHighlights.jsx';
import { Link, useParams } from 'react-router-dom';
import IconButton from '@/components/ui/IconButton.jsx';
import {
  IconChevronLeft,
  IconDotsVertical,
  IconFileText,
  IconListDetails,
  IconSparkles,
  IconTrash,
} from '@tabler/icons-react';
import Button from '@/components/ui/Button.jsx';
import SimpleDropdown from '@/components/ui/SimpleDropdown.jsx';
import Card from '@/components/ui/Card.jsx';
import AccountActivityChart from '@/components/core/banking/details/AccountActivityChart.jsx';
import AnalyticsScoreChart from '@/components/core/banking/details/AnalyticsScoreChart.jsx';
import CashFlowHighlights from '@/components/core/banking/details/CashFlowHighlights.jsx';
import NetMonthlyEarnings from '@/components/core/banking/details/NetMonthlyEarnings.jsx';
import SalaryHighlights from '@/components/core/banking/details/SalaryHighlights.jsx';
import StatementOwnership from '@/components/core/banking/details/StatementOwnership.jsx';
import TransactionPatterns from '@/components/core/banking/details/TransactionPatterns.jsx';
import DerivedData from '@/components/core/banking/details/DerivedData.jsx';
import SweepingDetails from '@/components/core/banking/details/SweepingDetails.jsx';
import SweepingSummary from '@/components/core/banking/details/SweepingSummary.jsx';
import BorrowingHighlights from '@/components/core/banking/details/BorrowingHighlights.jsx';
import MonthlySummary from '@/components/core/banking/details/MonthlySummary.jsx';
import BehaviorAnalysis from '@/components/core/banking/details/BehaviorAnalysis.jsx';
import SixMonthsLoanHistory from '@/components/core/banking/details/SixMonthsLoanHistory.jsx';
import SalaryDistribution from '@/components/core/banking/details/SalaryDistribution.jsx';
import InvestmentDistribution from '@/components/core/banking/details/InvestmentDistribution.jsx';
import AccountOwnership from '@/components/core/banking/details/AccountOwnership.jsx';
import MonthlyDepositWithdrawal from '@/components/core/banking/details/MonthlyDepositWithdrawal.jsx';
import CashFlowDistribution from '@/components/core/banking/details/CashFlowDistribution.jsx';
import WeeklyTransactions from '@/components/core/banking/details/WeeklyTransactions.jsx';
import StatementDetailsChat from '@/components/core/banking/details/StatementDetailsChat.jsx';
import { useGetStatement, useGetTransactionDetails } from '@/api/statement.js';
import useBusiness from '@/hooks/use-business.js';

const StatementDetails = () => {
  const { id } = useParams();
  const { business } = useBusiness();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { data: { statement } = {}, isLoading: isStatementLoading } = useGetStatement(business._id, id);
  const { data, isLoading: isTransactionsLoading } = useGetTransactionDetails(statement?.transactionId);

  const { highlight } = data?.analytics_data ?? {};

  return (
    <>
      {isTransactionsLoading || isStatementLoading ? (
        <>
          <div className="flex justify-between items-center">
            <div className="bg-slate-200 animate-pulse rounded-3xl w-[180px] py-4" />
            <div className="bg-slate-200 animate-pulse rounded-3xl w-[150px] py-4" />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
            <div className="col-span-3 min-h-[200px] w-full flex-1 bg-slate-200 animate-pulse rounded-3xl" />
            <div className="col-span-2 bg-slate-200 animate-pulse rounded-full w-[200px] h-[200px]" />
            <div className="col-span-2 bg-slate-200 animate-pulse rounded-full w-[200px] h-[200px]" />
          </div>
          <div className="grid md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-8 min-h-[200px] bg-slate-200 animate-pulse rounded-3xl" />
            <div className="md:col-span-4 min-h-[200px] bg-slate-200 animate-pulse rounded-3xl" />
          </div>
        </>
      ) : (
        <>
          {!!data && (
            <>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-3">
                  <Link to={'/banking/statement'}>
                    <IconButton variant="subtle" color="black" size="sm" rounded icon={<IconChevronLeft size="20" />} />
                  </Link>
                  <h3 className="text-xl font-medium">Analysis details</h3>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                  <Button onPress={() => setIsChatOpen(true)} color="primary" leftIcon={<IconSparkles size="20" />}>
                    Chat
                  </Button>
                  <SimpleDropdown
                    trigger={
                      <IconButton
                        variant="text"
                        size="sm"
                        icon={<IconDotsVertical size="20" />}
                        color="black"
                        rounded
                      />
                    }
                    items={[
                      {
                        text: 'View transactions',
                        icon: <IconFileText size="18" />,
                        onClick: () => window.open(highlight.transactions_link),
                      },
                      {
                        text: 'View result',
                        icon: <IconListDetails size="18" />,
                        onClick: () => window.open(highlight.link),
                      },
                      {
                        text: <div className="text-red-600">Delete statement</div>,
                        icon: <IconTrash size="20" className="text-red-600" />,
                        onClick: () => null,
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="grid md:grid-cols-9 gap-4 md:gap-10 items-center">
                  <div className="md:col-span-5 mt-4 md:mt-0 order-last md:order-first space-y-6">
                    <Card>
                      <h3 className="font-medium px-6 py-6">Details</h3>
                      <div className="divide-y divide-gray-300">
                        <div className="px-6 py-2 flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex-1">Account name:&nbsp;&nbsp;{highlight.name_check.account_name}</div>
                          <div className="flex-1">Bank:&nbsp;&nbsp;{statement.bank || 'N/A'}</div>
                        </div>
                        <div className="px-6 py-2 flex flex-col md:flex-row md:items-center text-left">
                          <div className="flex-1">From&nbsp;&nbsp;{highlight.from_statement}</div>
                          <div className="flex-1">To&nbsp;&nbsp;{highlight.to_statement}</div>
                        </div>
                        <div className="px-6 py-2 flex items-center">
                          <div>Date analyzed:&nbsp;&nbsp;{format(new Date(statement.createdAt), 'do MMM, yyyy')}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="md:col-span-2">
                    <AccountActivityChart data={data} />
                  </div>
                  <div className="md:col-span-2">
                    <AnalyticsScoreChart data={data} />
                  </div>
                </div>
                <div className="grid md:grid-cols-10 gap-6">
                  <div className="md:col-span-7">
                    <CashFlowHighlights data={data} />
                  </div>
                  <div className="md:col-span-3">
                    <NetMonthlyEarnings data={data} />
                  </div>
                </div>
                <div className="grid md:grid-cols-10 gap-6">
                  <div className="md:col-span-7">
                    <SalaryHighlights data={data} />
                  </div>
                  <div className="md:col-span-3">
                    <StatementOwnership data={data} />
                  </div>
                </div>
                <div className="grid md:grid-cols-9 gap-6">
                  <div className="md:col-span-6">
                    <TransactionPatterns data={data} />
                  </div>
                  <div className="md:col-span-3 space-y-6">
                    <DerivedData data={data} />
                    <SweepingDetails data={data} />
                  </div>
                </div>
                <SweepingSummary data={data} />
                <BorrowingHighlights data={data} />
                <OtherHighlights data={data} />
                <MonthlySummary data={data} />
                <BehaviorAnalysis data={data} />
                <SixMonthsLoanHistory data={data} />
                <SalaryDistribution data={data} />
                <InvestmentDistribution data={data} />
                <AccountOwnership data={data} />
                <MonthlyDepositWithdrawal data={data} />
                <CashFlowDistribution data={data} />
                <WeeklyTransactions data={data} />
              </div>
            </>
          )}
        </>
      )}

      {!!statement && !!data?.analytics_data && (
        <StatementDetailsChat
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          result={data?.analytics_data}
          statement={statement}
        />
      )}
    </>
  );
};

export default StatementDetails;
