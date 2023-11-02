import { IconCheck, IconX } from '@tabler/icons-react';
import Progress from '@/components/global/Progress';
import Card from '@/components/global/Card';
import PropTypes from 'prop-types';

const BehaviorAnalysis = ({ data }) => {
  const { highlight, eligibility, ...analytics_data } = data?.analytics_data ?? {};

  const withdrawalDepositRatio = Math.round((highlight.total_withdrawal / highlight.total_deposit) * 100);
  const cashFlowDepositRatio = highlight.total_cashflow
    ? Math.round((highlight.total_cashflow / highlight.total_deposit) * 100)
    : 0;
  const lodgementDepositRatio = highlight.total_lodgement_amount
    ? Math.round((highlight.total_lodgement_amount / highlight.total_deposit) * 100)
    : 0;

  const remainingAverageDeposit = (highlight.total_deposit - highlight.spike_deposit) / (highlight.no_month - 1);
  const spikeDeposit = (highlight.spike_deposit / remainingAverageDeposit) * 100 >= 150;

  const remainingAverageSpike =
    (highlight.total_lodgement_amount - highlight.spike_lodgement) / (highlight.no_month - 1);
  const spikeLodgement = (highlight.spike_deposit / remainingAverageSpike) * 100 >= 150;

  const remainingAverageSpikeCashFlow = (highlight.total_cashflow - highlight.spike_float) / (highlight.no_month - 1);
  const spikeCashFlow = (highlight.spike_float / remainingAverageSpikeCashFlow) * 100 >= 150;

  const isSweeper = analytics_data.highest_deposit_sweep?.length
    ? Math.min(...analytics_data.highest_deposit_sweep) < 5 && Math.max(...analytics_data.highest_deposit_sweep) < 7
    : true;

  const debtDisbursedDepositRatio = highlight.total_loans_disbursed
    ? Math.round((highlight.total_loans_disbursed / highlight.total_deposit) * 100)
    : 0;
  const debtRepaidDepositRatio = highlight.total_loans_repaid
    ? Math.round((highlight.total_loans_repaid / highlight.total_deposit) * 100)
    : 0;
  const debtRepaidSalaryRatio =
    highlight.total_loans_repaid && highlight.total_salary
      ? Math.round((highlight.total_loans_repaid / highlight.total_salary) * 100)
      : 0;

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="py-6 px-7">
          <h3 className="font-medium mb-6">General spending</h3>
          <div className="space-y-4">
            <div>
              <div>Withdrawal to deposit ({withdrawalDepositRatio}%)</div>
              <Progress width={withdrawalDepositRatio} className="mt-3" />
            </div>
            <div>
              <div>Floating cash to deposit ({cashFlowDepositRatio}%)</div>
              <Progress width={cashFlowDepositRatio} className="mt-3" />
            </div>
            <div>
              <div>Lodgement to deposit ({lodgementDepositRatio}%)</div>
              <Progress width={lodgementDepositRatio} className="mt-3" />
            </div>
          </div>
        </Card>
        <Card className="py-6 px-7">
          <h3 className="font-medium mb-6">Activity rates</h3>
          <div className="space-y-4">
            <div>
              <div>Daily deposit rate ({highlight.monthly_percent_deposit}%)</div>
              <Progress width={highlight.monthly_percent_deposit} className="mt-3" />
            </div>
            <div>
              <div>Weekly deposit rate ({highlight.weekly_percent_deposit}%)</div>
              <Progress width={highlight.weekly_percent_deposit} className="mt-3" />
            </div>
            <div>
              <div>Daily withdrawal rate ({highlight.monthly_percent_withdraw}%)</div>
              <Progress width={highlight.monthly_percent_withdraw} className="mt-3" />
            </div>
            <div>
              <div>Weekly withdrawal rate ({highlight.weekly_percent_withdraw}%)</div>
              <Progress width={highlight.weekly_percent_withdraw} className="mt-3" />
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="font-medium px-7 py-6">30 day pattern</h3>
          <div className="divide-y divide-gray-300">
            <div className="flex items-center justify-between py-3 px-7">
              <div>Deposit amount spike</div>
              {spikeDeposit ? (
                <div>
                  <IconCheck size="20" className="text-green-500" />
                </div>
              ) : (
                <div>
                  <IconX size="20" className="text-red-500" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between py-3 px-7">
              <div>Lodgement spike</div>
              {spikeLodgement ? (
                <div>
                  <IconCheck size="20" className="text-green-500" />
                </div>
              ) : (
                <div>
                  <IconX size="20" className="text-red-500" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-between py-3 px-7">
              <div>Float funding spike</div>
              {spikeCashFlow ? (
                <div>
                  <IconCheck size="20" className="text-green-500" />
                </div>
              ) : (
                <div>
                  <IconX size="20" className="text-red-500" />
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <Card>
            <div className="divide-y divide-gray-300">
              <div className="flex items-center justify-between py-3 px-7">
                <div>ATM person</div>
                {analytics_data.isAtm_person ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between py-3 px-7">
                <div>Transfer person</div>
                {analytics_data.is_transfer ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between py-3 px-7">
                <div>Cheque person</div>
                {analytics_data.is_cheque ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between py-3 px-7">
                <div>Religion giver</div>
                {analytics_data.is_religion ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between py-3 px-7">
                <div>Ever gambled</div>
                {analytics_data.is_gambler ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between py-3 px-7">
                <div>Clubs & Bars</div>
                {highlight.total_entertainment > 0 ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between py-3 px-7">
                <div>Account sweeper</div>
                {isSweeper ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between py-3 px-7">
                <div>POS person</div>
                {analytics_data.is_pos ? (
                  <div>
                    <IconCheck size="20" className="text-green-500" />
                  </div>
                ) : (
                  <div>
                    <IconX size="20" className="text-red-500" />
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
        <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
          <Card className="py-6 px-7">
            <h3 className="font-medium mb-6">Deposit amount</h3>
            <div className="space-y-4">
              <div>
                <div>Debt to deposit ({debtDisbursedDepositRatio}%)</div>
                <Progress width={debtDisbursedDepositRatio} className="mt-3" />
              </div>
              <div>
                <div>Debt repayment to deposit ({debtRepaidDepositRatio}%)</div>
                <Progress width={debtRepaidDepositRatio} className="mt-3" />
              </div>
              <div>
                <div>Debt repayment to salary ({debtRepaidSalaryRatio}%)</div>
                <Progress width={debtRepaidSalaryRatio} className="mt-3" />
              </div>
            </div>
          </Card>
          <Card>
            <div className="px-7 py-6">
              <h3 className="font-medium">Deposit amount</h3>
            </div>
            <div className="divide-y divide-gray-300">
              <div className="flex items-center justify-between py-1.5 px-7">
                <div>Less than 10k</div>
                <div>{highlight.ten_k}</div>
              </div>
              <div className="flex items-center justify-between py-1.5 px-7">
                <div>Less than 100k</div>
                <div>{highlight.hundred_k}</div>
              </div>
              <div className="flex items-center justify-between py-1.5 px-7">
                <div>Less than 1m</div>
                <div>{highlight.one_m}</div>
              </div>
              <div className="flex items-center justify-between py-1.5 px-7">
                <div>Less than 10m</div>
                <div>{highlight.ten_m}</div>
              </div>
              <div className="flex items-center justify-between py-1.5 px-7">
                <div>Less than 100m</div>
                <div>{highlight.hundred_m}</div>
              </div>
              <div className="flex items-center justify-between py-1.5 px-7">
                <div>Over 100m</div>
                <div>{highlight.over_hundred_m}</div>
              </div>
            </div>
          </Card>
          <Card className="md:col-span-2 py-8 px-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <h3 className="font-medium text-lg">Eligibility data score meter</h3>
              <p className="mt-1 text-[.94rem] opacity-80">
                Constitutes behaviour that is seen as a pattern for account owner
              </p>
            </div>
            <div className="md:col-span-8 space-y-4">
              <div>
                <p>Guarantibility</p>
                <Progress width={eligibility.guarantee} className="mt-1" />
              </div>
              <div>
                <p>Strength</p>
                <Progress width={eligibility.strength} className="mt-1" />
              </div>
              <div>
                <p>Threat</p>
                <Progress width={eligibility.threat} className="mt-1" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

BehaviorAnalysis.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BehaviorAnalysis;
