import { useState } from 'react';
import { format } from 'date-fns';
import NewReceipt from '@/components/core/document/receipts/NewReceipt.jsx';
import { IconExclamationCircle, IconPlus } from '@tabler/icons-react';
import { formatCurrency } from '@/lib/utils.js';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import Button from '@/components/ui/Button.jsx';
import { useGetReceipts } from '@/api/document.js';
import { useGetUserBusiness } from '@/api/business.js';
import { useNavigate } from 'react-router-dom';
import Card from '@/components/ui/Card.jsx';
import DashboardContent from '@/components/core/shared/DashboardContent.jsx';

const Receipts = () => {
  const navigate = useNavigate();
  const { data: business } = useGetUserBusiness();
  const { data: { receipts = [] } = {}, isLoading: isReceiptsLoading } = useGetReceipts(business._id);
  const [isNewOpen, setIsNewOpen] = useState(false);

  return (
    <DashboardContent>
      <div className="flex items-center justify-between mb-10">
        <DashboardTitle text="Receipts" className="!m-0" />
        <Button onClick={() => setIsNewOpen(true)} variant="outlined" color="primary" leftIcon={<IconPlus size="20" />}>
          New receipt
        </Button>
      </div>
      {isReceiptsLoading ? (
        <div className="h-[200px] bg-slate-200 rounded-2xl"></div>
      ) : (
        <>
          {receipts.length > 0 ? (
            <Card className="relative overflow-x-auto">
              <table className="w-full text-[.95rem] text-left">
                <thead className="text-gray-500 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Number
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Vendor name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Receiver name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Expense date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {receipts.map((receipt) => (
                    <tr
                      key={receipt._id}
                      onClick={() => navigate(`/documents/receipts/${receipt._id}`)}
                      className="hover:bg-gray-50 cursor-pointer select-none"
                    >
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        {receipt.number || 'N/A'}
                      </td>
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        {receipt.vendorName || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{receipt.receiverName || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {receipt.date ? format(new Date(receipt.date), 'do MMM, yyyy') : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(receipt.total, receipt.currency)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          ) : (
            <div className="col-span-2 border-2 border-dashed border-gray-300 rounded-2xl relative p-5 flex justify-center items-center py-20 text-gray-600">
              <IconExclamationCircle size="20" className="mr-4" />
              <p>No receipt added yet</p>
            </div>
          )}
        </>
      )}

      <NewReceipt isOpen={isNewOpen} onClose={() => setIsNewOpen(false)} />
    </DashboardContent>
  );
};

export default Receipts;
