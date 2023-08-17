import { IconCircleFilled, IconFolderExclamation } from "@tabler/icons-react";
import { formatCurrency } from "@/lib/utils";
import classNames from "classnames";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const SixMonthsLoanHistory = ({ data }) => {
  const { loan_dmweek, highlight } = data?.analytics_data ?? {}

  const hasRecord = ((Math.max(...loan_dmweek.map(i => i.amount || 0)) > 0) || (Math.max(...loan_dmweek.map(i => i.credit || 0)) > 0));

  const items = loan_dmweek.reduce((acc, current) => {
    if (!current.month) return acc;
    if (Object.hasOwn(acc, current.month)) acc[current.month].push(current);
    else acc[current.month] = [current];
    return acc;
  }, {});

  return (
    <>
      <Card className="relative overflow-x-auto">
        <div className="flex items-center px-6 py-6">
          <h3 className="font-medium">6 Months Loan History</h3>
          {
            hasRecord && (
              <div className="flex items-center ml-auto space-x-6">
                <div className="flex items-center space-x-2">
                  <IconCircleFilled size="14" className="text-green-500"/>
                  <p>Maximum</p>
                </div>
                <div className="flex items-center space-x-2">
                  <IconCircleFilled size="14" className="text-red-500"/>
                  <p>Minimum</p>
                </div>
              </div>
            )
          }
        </div>
        {
          hasRecord ? (
            <table className="w-full text-sm text-left">
              <thead className="border-b border-gray-300">
              <tr>
                <th scope="col" className="font-medium border pl-6 pr-2 py-3"></th>
                <th scope="col" colSpan="2" className="font-medium border px-2 py-3">Week 1</th>
                <th scope="col" colSpan="2" className="font-medium border px-2 py-3">Week 2</th>
                <th scope="col" colSpan="2" className="font-medium border px-2 py-3">Week 3</th>
                <th scope="col" colSpan="2" className="font-medium border pl-2 pr-6 py-3">Week 4/5</th>
              </tr>
              <tr>
                <th scope="col" className="font-medium border pl-6 pr-2 py-3"></th>
                <th scope="col" className="font-medium border px-2 py-3">Disbursed</th>
                <th scope="col" className="font-medium border px-2 py-3">Repaid</th>
                <th scope="col" className="font-medium border px-2 py-3">Disbursed</th>
                <th scope="col" className="font-medium border px-2 py-3">Repaid</th>
                <th scope="col" className="font-medium border px-2 py-3">Disbursed</th>
                <th scope="col" className="font-medium border px-2 py-3">Repaid</th>
                <th scope="col" className="font-medium border px-2 py-3">Disbursed</th>
                <th scope="col" className="font-medium border pl-2 pr-6 py-3">Repaid</th>
              </tr>
              </thead>
              <tbody>
              {
                Object.keys(items).filter(key => {
                  return Math.max(...items[key].map(j => j.credit || 0)) > 0 || Math.max(...items[key].map(j => j.amount || 0)) > 0;
                }).map((key) => {
                  const maxDisbursed = Math.max(...items[key].map(i => i.amount || 0))
                  const minDisbursed = Math.min(...items[key].map(i => i.amount || 0))
                  const maxRepaid = Math.max(...items[key].map(i => i.credit || 0))
                  const minRepaid = Math.min(...items[key].map(i => i.credit || 0))

                  return (
                    <tr className="bg-white border-b border-gray-300 hover:bg-gray-50" key={ key }>
                      <td className="pl-6 pr-2 py-3 border border-l-0">{ key }</td>
                      {
                        [1, 2, 3, 4].map(n => {
                          const item = items[key].find(i => i.week === n);
                          return ([
                            <td
                              key={ `loan-history-${ n }1` }
                              className={ classNames('px-2 py-3 border',
                                {
                                  '!bg-green-100': item?.amount && (maxDisbursed === item?.amount),
                                  'bg-red-100': item?.amount && (minDisbursed === item?.amount)
                                })
                              }>
                              { formatCurrency(item?.amount || 0) }
                            </td>,
                            <td
                              key={ `loan-history-${ n }2` }
                              className={ classNames('px-2 py-3 border',
                                {
                                  '!bg-green-100': item?.credit && (maxRepaid === item?.credit),
                                  'bg-red-100': item?.credit && (minRepaid === item?.credit)
                                })
                              }>
                              { formatCurrency(item?.credit || 0) }
                            </td>
                          ])
                        })
                      }
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
          ) : (
            <p className="px-6 pb-6 flex items-center">
              <IconFolderExclamation size="20" className="mr-2"/> No loan record
            </p>
          )
        }
      </Card>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <h3 className="font-medium px-8 py-6">Lenders found</h3>
          {
            highlight.lender_list?.length ? (
              <div className="divide-y divide-gray-300">
                {
                  highlight.lender_list.map((lender, i) => (
                    <div className="grid grid-cols-2 gap-4 px-8 py-2 mb-2" key={ i }>
                      <p>{ lender.name }</p>
                      <p>{ formatCurrency(lender.amount) }</p>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p className="flex items-center px-8 mb-6">
                <IconFolderExclamation size="20" className="mr-2"/> No lender found
              </p>
            )
          }
        </Card>
        <Card>
          <h3 className="font-medium px-8 py-6">Suspected repayments</h3>
          {
            highlight.suspected_loan?.length ? (
              <div className="divide-y divide-gray-300">
                {
                  highlight.suspected_loan.map((loan, i) => (
                    <div className="grid grid-cols-2 gap-4 px-8 py-2 mb-2" key={ i }>
                      <p>{ formatCurrency(loan.amount) }</p>
                      <p>{ loan.date }</p>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p className="flex items-center px-8 mb-6">
                <IconFolderExclamation size="20" className="mr-2"/> No suspected repayment
              </p>
            )
          }
        </Card>
      </div>
    </>
  );
};

SixMonthsLoanHistory.propTypes = {
  data: PropTypes.object.isRequired
};

export default SixMonthsLoanHistory;
