import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useGetUserBusiness } from '@/api/business.js';
import { useGetInvoices } from '@/api/document.js';
import { useState } from 'react';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import Button from '@/components/ui/Button.jsx';
import { IconExclamationCircle, IconPlus } from '@tabler/icons-react';
import Card from '@/components/ui/Card.jsx';
import NewInvoice from '@/components/core/document/invoices/NewInvoice.jsx';
import { formatCurrency } from '@/lib/utils.js';
import DashboardContent from '@/components/core/shared/DashboardContent.jsx';

const Invoices = () => {
  const navigate = useNavigate();
  const { data: business } = useGetUserBusiness();
  const { data: { invoices = [] } = {}, isLoading: isInvoicesLoading } = useGetInvoices(business._id);
  const [isNewOpen, setIsNewOpen] = useState(false);

  return (
    <DashboardContent>
      <div className="flex items-center justify-between mb-10">
        <DashboardTitle text="Invoices" className="!m-0" />
        <Button onClick={() => setIsNewOpen(true)} variant="outlined" color="primary" leftIcon={<IconPlus size="20" />}>
          New invoice
        </Button>
      </div>
      {isInvoicesLoading ? (
        <div className="h-[200px] bg-slate-200 rounded-2xl"></div>
      ) : (
        <>
          {invoices.length > 0 ? (
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
                      Due date
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr
                      key={invoice._id}
                      onClick={() => navigate(`/documents/invoices/${invoice._id}`)}
                      className="hover:bg-gray-50 cursor-pointer select-none"
                    >
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        {invoice.number || 'N/A'}
                      </td>
                      <td scope="row" className="px-6 py-4 whitespace-nowrap">
                        {invoice.vendorName || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{invoice.receiverName || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {invoice.date ? format(new Date(invoice.date), 'do MMM, yyyy') : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {invoice.dueDate ? format(new Date(invoice.dueDate), 'do MMM, yyyy') : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(invoice.total, invoice.currency)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          ) : (
            <>
              <div className="col-span-2 border-2 border-dashed border-gray-300 rounded-2xl relative p-5 flex justify-center items-center py-20 text-gray-600">
                <IconExclamationCircle size="20" className="mr-4" />
                <p>No invoice added yet</p>
              </div>
            </>
          )}
        </>
      )}

      <NewInvoice isOpen={isNewOpen} onClose={() => setIsNewOpen(false)} />
    </DashboardContent>
  );
};

export default Invoices;
