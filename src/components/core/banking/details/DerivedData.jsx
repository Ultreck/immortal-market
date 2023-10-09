import { IconCheck, IconX } from "@tabler/icons-react";
import { formatCurrency } from "@/lib/utils";
import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const DerivedData = ({ data }) => {
  const { highlight, lender_details } = data?.analytics_data ?? {};

  return (
    <Card>
      <h3 className="font-medium px-7 py-6">Derived data</h3>
      <div className="divide-y divide-gray-300">
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Balance</div>
          <div>{ formatCurrency(highlight.balance) }</div>
        </div>
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Suspected account</div>
          <div>{ highlight.no_of_account || 'None' }</div>
        </div>
        {
          lender_details.statement_month ? (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>{ lender_details.statement_month }</div>
              <div><IconCheck size="20" className="text-green-500"/></div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>months statement?</div>
              <div><IconX size="20" className="text-red-500"/></div>
            </div>
          )
        }
        {
          lender_details.lender_name ? (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>{ lender_details.lender_name }</div>
              <div><IconCheck size="20" className="text-green-500"/></div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>Account name?</div>
              <div><IconX size="20" className="text-red-500"/></div>
            </div>
          )
        }
        {
          lender_details.lender_bank.trim() ? (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>{ lender_details.lender_bank }</div>
              <div><IconCheck size="20" className="text-green-500"/></div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>Bank?</div>
              <div><IconX size="20" className="text-red-500"/></div>
            </div>
          )
        }
        {
          lender_details.lender_acc_number_bank.trim() ? (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>{ lender_details.lender_acc_number_bank }</div>
              <div><IconCheck size="20" className="text-green-500"/></div>
            </div>
          ) : (
            <div className="flex items-center justify-between py-1.5 px-7">
              <div>Account no?</div>
              <div><IconX size="20" className="text-red-500"/></div>
            </div>
          )
        }
        <div className="flex items-center justify-between py-1.5 px-7">
          <div>Statement current?</div>
          {
            lender_details.statement_current.toLowerCase() === 'no' ? (
              <div><IconX size="20" className="text-red-500"/></div>
            ) : (
              <div><IconCheck size="20" className="text-green-500"/></div>
            )
          }
        </div>
      </div>
    </Card>
  );
};

DerivedData.propTypes = {
  data: PropTypes.object.isRequired
};

export default DerivedData;
