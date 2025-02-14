import { useState } from 'react';
import {
  Card,
  Skeleton,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from '@heroui/react';
import { useGetStockFinancials } from '@/api/market';
import { format } from 'date-fns';
import numeral from 'numeral';
import { camelCaseToWords } from '@/lib/utils';
import PropTypes from 'prop-types';

const StockFinancials = ({ stock }) => {
  const [tab, setTab] = useState('quarterly');
  const { data: { financials = [] } = {}, isLoading: isFinancialsLoading } = useGetStockFinancials({
    stock: stock._id,
  });

  const items = financials.filter((f) => f.period === tab);

  const incomeStatement = items.reduce(
    (acc, i) => {
      acc.netIncome[format(new Date(i.date), 'MMM dd yyyy')] = i.netIncome;
      acc.totalRevenue[format(new Date(i.date), 'MMM dd yyyy')] = i.totalRevenue;
      return acc;
    },
    { netIncome: {}, totalRevenue: {} }
  );

  const balanceSheet = items.reduce(
    (acc, i) => {
      acc.totalAssets[format(new Date(i.date), 'MMM dd yyyy')] = i.totalAssets;
      acc.totalLiabilities[format(new Date(i.date), 'MMM dd yyyy')] = i.totalLiabilities;
      acc.totalEquity[format(new Date(i.date), 'MMM dd yyyy')] = i.totalEquity;
      return acc;
    },
    { totalAssets: {}, totalLiabilities: {}, totalEquity: {} }
  );

  const cashFlow = items.reduce(
    (acc, i) => {
      acc.financingCashFlow[format(new Date(i.date), 'MMM dd yyyy')] = i.financingCashFlow;
      acc.investingCashFlow[format(new Date(i.date), 'MMM dd yyyy')] = i.investingCashFlow;
      acc.operatingCashFlow[format(new Date(i.date), 'MMM dd yyyy')] = i.operatingCashFlow;
      acc.netChangeInCash[format(new Date(i.date), 'MMM dd yyyy')] = i.netChangeInCash;
      return acc;
    },
    { financingCashFlow: {}, investingCashFlow: {}, operatingCashFlow: {}, netChangeInCash: {} }
  );

  return (
    <div>
      {isFinancialsLoading ? (
        <Skeleton className="h-[200px] rounded-2xl" />
      ) : (
        <Card className="bg-default-100 px-8 py-6 shadow-none">
          <Tabs
            aria-label="Options"
            radius="full"
            classNames={{ tabList: 'mb-0' }}
            variant="bordered"
            selectedKey={tab}
            onSelectionChange={setTab}
          >
            <Tab
              key="quarterly"
              title={
                <div className="flex items-center space-x-2 text-base">
                  <span>Quarterly</span>
                </div>
              }
            />
            <Tab
              key="annually"
              title={
                <div className="flex items-center space-x-2 text-base">
                  <span>Annually</span>
                </div>
              }
            />
          </Tabs>
          <div className="divide-y divide-default-200">
            <div className="py-6">
              <h6 className="mb-4 px-1 text-md font-semibold">Income statement</h6>
              <Table
                aria-label="Income statement table"
                removeWrapper
                classNames={{
                  th: 'text-md bg-default-200',
                  td: 'text-md group-data-[odd=true]:before:bg-default-200',
                }}
              >
                <TableHeader>
                  <TableColumn>Period</TableColumn>
                  {Object.keys(incomeStatement[Object.keys(incomeStatement)[0]]).map((k) => (
                    <TableColumn key={k}>{k}</TableColumn>
                  ))}
                </TableHeader>
                <TableBody>
                  {Object.keys(incomeStatement).map((k) => (
                    <TableRow key={k}>
                      <TableCell className="capitalize-first">{camelCaseToWords(k)}</TableCell>
                      {Object.values(incomeStatement[k]).map((v) => (
                        <TableCell key={`${k}-${v}`}>{numeral(v).format('0.0a')}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="py-6">
              <h6 className="mb-4 px-1 text-md font-semibold">Balance sheet</h6>
              <Table
                aria-label="Income statement table"
                removeWrapper
                classNames={{
                  th: 'text-md bg-default-200',
                  td: 'text-md group-data-[odd=true]:before:bg-default-200',
                }}
              >
                <TableHeader>
                  <TableColumn>Period</TableColumn>
                  {Object.keys(balanceSheet[Object.keys(balanceSheet)[0]]).map((k) => (
                    <TableColumn key={k}>{k}</TableColumn>
                  ))}
                </TableHeader>
                <TableBody>
                  {Object.keys(balanceSheet).map((k) => (
                    <TableRow key={k}>
                      <TableCell className="capitalize-first">{camelCaseToWords(k)}</TableCell>
                      {Object.values(balanceSheet[k]).map((v) => (
                        <TableCell key={`${k}-${v}`}>{numeral(v).format('0.0a')}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="py-6">
              <h6 className="mb-4 px-1 text-md font-semibold">Cashflow statement</h6>
              <Table
                aria-label="Income statement table"
                removeWrapper
                classNames={{
                  th: 'text-md bg-default-200',
                  td: 'text-md group-data-[odd=true]:before:bg-default-200',
                }}
              >
                <TableHeader>
                  <TableColumn>Period</TableColumn>
                  {Object.keys(cashFlow[Object.keys(cashFlow)[0]]).map((k) => (
                    <TableColumn key={k}>{k}</TableColumn>
                  ))}
                </TableHeader>
                <TableBody>
                  {Object.keys(cashFlow).map((k) => (
                    <TableRow key={k}>
                      <TableCell className="capitalize-first">{camelCaseToWords(k)}</TableCell>
                      {Object.values(cashFlow[k]).map((v) => (
                        <TableCell key={`${k}-${v}`}>{numeral(v).format('0.0a')}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

StockFinancials.propTypes = {
  stock: PropTypes.object.isRequired,
};

export default StockFinancials;
