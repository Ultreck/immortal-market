import { useState } from 'react';
import { IconExclamationCircle } from '@tabler/icons-react';
import Card from '@/components/ui/Card.jsx';
import classNames from 'classnames';
import { formatCurrency } from '@/lib/utils.js';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useGetStatements } from '@/api/statement.js';
import NewStatement from '@/components/core/banking/statement/NewStatement.jsx';
import useBusiness from '@/hooks/use-business.js';

const StatementHistory = () => {
  const navigate = useNavigate();
  const [isAnalyzeOpen, setIsAnalyzeOpen] = useState(false);
  const { business } = useBusiness();
  const { data: { statements = [] } = {}, isLoading: isStatementsLoading } = useGetStatements(business._id);

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-8 mt-8">
          <h2 className="text-lg font-semibold">Analysis history</h2>
        </div>
        <div>
          {isStatementsLoading ? (
            <div className="h-[200px] bg-slate-200 rounded-2xl"></div>
          ) : (
            <>
              {statements.length > 0 ? (
                <Card className="relative overflow-x-auto">
                  <table className="w-full text-[.95rem] text-left">
                    <thead className="text-gray-500 border-b border-slate-200">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Bank
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Total credit
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Total debit
                        </th>
                        <th scope="col" className="px-6 py-4">
                          From
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Date analyzed
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {statements.map((statement, i) => (
                        <tr
                          key={statement._id}
                          onClick={() => navigate(`/banking/statement/${statement._id}`)}
                          className={classNames('hover:bg-gray-50 cursor-pointer select-none', {
                            'border-b': i < statements.length - 1,
                          })}
                        >
                          <td scope="row" className="px-6 py-4 whitespace-nowrap">
                            {statement.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">{statement.bank || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {statement.totalCredit ? formatCurrency(statement.totalCredit) : 'N/A'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {statement.totalDebit ? formatCurrency(statement.totalDebit) : 'N/A'}
                          </td>
                          <td className="px-6 py-4">
                            <div
                              className={classNames(
                                'px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600',
                                { '!border-red-500 !text-red-500': statement.from === 'pdf' },
                                { '!border-blue-500 !text-blue-500': statement.from === 'mono' },
                                { '!border-teal-500 !text-teal-500': statement.from === 'mbs' }
                              )}
                            >
                              {statement.from}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {format(new Date(statement.createdAt), 'do MMM, yyyy')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
              ) : (
                <>
                  <div className="col-span-2 border-2 border-dashed border-gray-300 rounded-2xl relative p-5 flex justify-center items-center py-20 text-gray-600">
                    <IconExclamationCircle size="20" className="mr-4" />
                    <p>No statement analyzed yet</p>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>

      <NewStatement isOpen={isAnalyzeOpen} onClose={() => setIsAnalyzeOpen(false)} />
    </>
  );
};

export default StatementHistory;
