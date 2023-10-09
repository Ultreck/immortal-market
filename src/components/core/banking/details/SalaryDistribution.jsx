import { IconCircleFilled, IconFolderExclamation } from "@tabler/icons-react";
import classNames from "classnames";
import { formatCurrency } from "@/lib/utils";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const SalaryDistribution = ({ data }) => {
  const { salary_mweek, highlight } = data?.analytics_data ?? {}

  const hasRecord = ((Math.max(...salary_mweek.map(i => i.amount || 0)) > 0) || (Math.max(...salary_mweek.map(i => i.benefit || 0)) > 0));

  const items = salary_mweek.reduce((acc, current) => {
    if (!current.month) return acc;
    if (Object.hasOwn(acc, current.month)) acc[current.month].push(current);
    else acc[current.month] = [current];
    return acc;
  }, {});

  return (
    <>
      <Card className="relative overflow-x-auto">
        <div className="flex items-center px-6 py-6">
          <h3 className="font-medium">Salary Distribution</h3>
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
                <th scope="col" className="font-medium border px-2 py-3">Salary</th>
                <th scope="col" className="font-medium border px-2 py-3">Benefit</th>
                <th scope="col" className="font-medium border px-2 py-3">Salary</th>
                <th scope="col" className="font-medium border px-2 py-3">Benefit</th>
                <th scope="col" className="font-medium border px-2 py-3">Salary</th>
                <th scope="col" className="font-medium border px-2 py-3">Benefit</th>
                <th scope="col" className="font-medium border px-2 py-3">Salary</th>
                <th scope="col" className="font-medium border pl-2 pr-6 py-3">Benefit</th>
              </tr>
              </thead>
              <tbody>
              {
                Object.keys(items).filter(key => {
                  return Math.max(...items[key].map(j => j.benefit || 0)) > 0 || Math.max(...items[key].map(j => j.amount || 0)) > 0;
                }).map((key) => {
                  const maxSalary = Math.max(...items[key].map(i => i.amount || 0))
                  const minSalary = Math.min(...items[key].map(i => i.amount || 0))
                  const maxBenefit = Math.max(...items[key].map(i => i.benefit || 0))
                  const minBenefit = Math.min(...items[key].map(i => i.benefit || 0))

                  return (
                    <tr className="bg-white border-b border-gray-300 hover:bg-gray-50" key={ key }>
                      <td className="pl-6 pr-2 py-3 border border-l-0">{ key }</td>
                      {
                        [1, 2, 3, 4].map(n => {
                          const item = items[key].find(i => i.week === n);
                          return ([
                            <td
                              key={ `salary-distribution-${ n }1` }
                              className={ classNames('px-2 py-3 border',
                                {
                                  '!bg-green-100': item?.amount && (maxSalary === item?.amount),
                                  'bg-red-100': item?.amount && (minSalary === item?.amount)
                                })
                              }>
                              { formatCurrency(item?.amount || 0) }
                            </td>,
                            <td
                              key={ `salary-distribution-${ n }2` }
                              className={ classNames('px-2 py-3 border',
                                {
                                  '!bg-green-100': item?.benefit && (maxBenefit === item?.benefit),
                                  'bg-red-100': item?.benefit && (minBenefit === item?.benefit)
                                })
                              }>
                              { formatCurrency(item?.benefit || 0) }
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
              <IconFolderExclamation size="20" className="mr-2"/> No salary record
            </p>
          )
        }
      </Card>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <h3 className="font-medium px-8 py-6">Salary summary</h3>
          <div className="divide-y divide-gray-300">
            <div className="grid grid-cols-2 gap-4 px-8 py-2">
              <p>Total salary</p>
              <p>{ formatCurrency(highlight.total_salary) }</p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-8 py-2">
              <p>Average salary</p>
              <p>{ formatCurrency(highlight.average_salary) }</p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-8 py-2">
              <p>Total suspected</p>
              <p>{ formatCurrency(highlight.total_suspected_salary) }</p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-8 py-2">
              <p>Average suspected</p>
              <p>{ formatCurrency(highlight.average_suspected_salary) }</p>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="font-medium px-8 py-6">Suspected salary</h3>
          {
            highlight.suspected_salary?.length ? (
              <div className="divide-y divide-gray-300">
                {
                  [...highlight.suspected_salary].reverse().map((loan, i) => (
                    <div className="grid grid-cols-2 gap-4 px-8 py-2" key={ i }>
                      <p>{ formatCurrency(loan.amount) }</p>
                      <p>{ loan.date }</p>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p className="flex items-center px-8 mb-6">
                <IconFolderExclamation size="20" className="mr-2"/> No suspected salary
              </p>
            )
          }
        </Card>
      </div>
    </>
  );
};

SalaryDistribution.propTypes = {
  data: PropTypes.object.isRequired
};

export default SalaryDistribution;
