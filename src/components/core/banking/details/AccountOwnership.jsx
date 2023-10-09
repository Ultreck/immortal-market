import Card from "@/components/global/Card";
import PropTypes from "prop-types";

const AccountOwnership = ({ data }) => {
  const { highlight, lender_details } = data?.analytics_data ?? {};

  return (
    <>
      <Card className="px-7 py-6">
        <h3 className="font-medium mb-6">Account ownership</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2">
          <div>
            <div className="text-[1.05rem]">{ lender_details.lender_name }</div>
            <div className="opacity-80 text-sm leading-none mt-1">Account owner</div>
          </div>
          <div>
            <div className="text-[1.05rem]">{ highlight.no_of_account }</div>
            <div className="opacity-80 text-sm leading-none mt-1">In other banks</div>
          </div>
          <div>
            <div className="text-[1.05rem]">{ highlight.percent_sweeper }%</div>
            <div className="opacity-80 text-sm leading-none mt-1">Sweep rates to other banks</div>
          </div>
          <div>
            <div className="text-[1.05rem]">{ highlight.percent_transfer }%</div>
            <div className="opacity-80 text-sm leading-none mt-1">Deposit rate from external account</div>
          </div>
        </div>
      </Card>
      <div className="grid md:grid-cols-11 gap-8 items-start">
        <Card className="md:col-span-4">
          <h3 className="font-medium px-8 pt-6 pb-4">Outgoing receipt</h3>
          <div className="divide-y divide-gray-300">
            <div className="px-8 py-2">
              { highlight.transfer_to?.length > 10 ? `10+ transfer receipt` : `${ highlight.transfer_to?.length } transfer receipt` }
            </div>
            <div className="px-8 py-2">
              { highlight.transfer_to?.[0]?.name } most frequent
            </div>
          </div>
          <h3 className="font-medium px-8 pt-6 pb-4">Incoming sender</h3>
          <div className="divide-y divide-gray-300">
            <div className="px-8 py-2">
              { highlight.transfer_from?.length > 10 ? `10+ depositors` : `${ highlight.transfer_from?.length } depositor(s)` }
            </div>
            <div className="px-8 py-2">
              { highlight.transfer_from?.[0]?.name } most frequent
            </div>
          </div>
        </Card>
        <Card className="md:col-span-7 relative overflow-x-auto">
          <table className="w-full text-md text-left">
            <thead className="border-b border-gray-300">
            <tr>
              <th scope="col" className="font-medium border pl-6 pr-2 py-3">Entity</th>
              <th scope="col" className="font-medium border px-2 py-3">Times</th>
              <th scope="col" className="font-medium border px-2 py-3">% Transactions</th>
              <th scope="col" className="font-medium border px-2 py-3">Bank</th>
              <th scope="col" className="font-medium border pl-2 pr-6 py-3">Type</th>
            </tr>
            </thead>
            <tbody>
            {
              highlight.transfer_from.slice(0, 4).map((item, i) => (
                <tr className="bg-white border-b border-gray-300 hover:bg-gray-50" key={ `d-${ i }` }>
                  <td className="pl-6 pr-2 py-3 border border-l-0">{ item.name || 'Unknown sender' }</td>
                  <td className="px-2 py-3 border">{ item.times }</td>
                  <td className="px-2 py-3 border">{ item.percent }</td>
                  <td className="px-2 py-3 border">{ item.bank || 'N/A' }</td>
                  <td className="px-2 py-3 border border-r-0">Deposit</td>
                </tr>
              ))
            }
            {
              highlight.transfer_to.slice(0, 4).map((item, i) => (
                <tr className="bg-white border-b border-gray-300 hover:bg-gray-50" key={ `t-${ i }` }>
                  <td className="pl-6 pr-2 py-3 border border-l-0">{ item.name || 'Unknown sender' }</td>
                  <td className="px-2 py-3 border">{ item.times }</td>
                  <td className="px-2 py-3 border">{ item.percent }</td>
                  <td className="px-2 py-3 border">{ item.bank || 'N/A' }</td>
                  <td className="px-2 py-3 border border-r-0">Transfer</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

AccountOwnership.propTypes = {
  data: PropTypes.object.isRequired
};

export default AccountOwnership;
