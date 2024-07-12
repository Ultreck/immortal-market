import NewReceipt from '@/components/core/document/receipts/NewReceipt.jsx';
import NewInvoice from '@/components/core/document/invoices/NewInvoice.jsx';
import { useState } from 'react';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import Card from '@/components/ui/Card.jsx';
import {
  IconArrowRight,
  IconFilePlus,
  IconFileTypeCsv,
  IconFileTypeDoc,
  IconFileTypePdf,
  IconFileTypeXls,
  IconPlus,
} from '@tabler/icons-react';
import { useGetDocumentOverview } from '@/api/document.js';
import { formatCurrency } from '@/lib/utils.js';
import { Link } from 'react-router-dom';
import DashboardContent from '@/components/core/shared/DashboardContent.jsx';
import useBusiness from '@/hooks/use-business.js';

const items = [
  {
    type: '.doc',
    title: 'Q1 2023 progress report for our company',
    createdAt: '01/01/2023',
  },
  {
    type: '.xls',
    title: 'Q1 2023 progress report for our company 2',
    createdAt: '01/01/2023',
  },
  {
    type: '.pdf',
    title: 'Q1 2023 progress report for our company 3',
    createdAt: '01/01/2023',
  },
  {
    type: '.csv',
    title: 'Q1 2023 progress report for our company 4',
    createdAt: '01/01/2023',
  },
  {
    type: '.pdf',
    title: 'Q1 2023 progress report for our company 5',
    createdAt: '01/01/2023',
  },
];

const DocumentOverview = () => {
  const { business } = useBusiness();
  const { data, isLoading: isOverviewLoading } = useGetDocumentOverview(business._id);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [isNewReceiptOpen, setIsNewReceiptOpen] = useState(false);

  return (
    <DashboardContent>
      <DashboardTitle text="Overview" />
      {isOverviewLoading ? (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
          <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            <div className="grid grid-cols-4 gap-6 md:gap-6">
              <Card className="flex flex-col justify-center px-8 py-4">
                <div className="text-xl md:text-2xl font-semibold text-gray-800">0</div>
                <div className="flex items-center mt-1">
                  <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Reports analyzed</p>
                </div>
              </Card>
              <Card className="flex flex-col justify-center px-8 py-4">
                <div className="text-xl md:text-2xl font-semibold text-gray-800">Basic</div>
                <div className="flex items-center mb-1">
                  <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Subscription</p>
                </div>
              </Card>
              <Card className="flex flex-col justify-center px-8 py-4">
                <div className="text-xl md:text-2xl font-semibold text-gray-800">{formatCurrency(0)}</div>
                <div className="flex items-center mb-1">
                  <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-1">Wallet balance</p>
                </div>
              </Card>
              <Card className="flex flex-col justify-center px-8 py-6">Lorem ipsum dolor sit amet, consectetur.</Card>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-6">
              <div className="space-y-6 flex flex-col">
                <Card className="flex-1 grid grid-cols-3 overflow-hidden">
                  <div className="px-8 py-4 flex flex-col items-center text-center">
                    <div className="text-xl md:text-3xl font-semibold text-gray-800">{data.totalInvoices || 0}</div>
                    <div className="flex items-center mt-1">
                      <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Invoice(s)</p>
                    </div>
                  </div>
                  <div
                    onClick={() => setIsNewInvoiceOpen(true)}
                    tabIndex="-1"
                    className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                  >
                    <div className="text-xl md:text-3xl font-semibold text-gray-800">
                      <IconPlus size="24" />
                    </div>
                    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">New invoice</p>
                  </div>
                  <Link
                    to={'/documents/invoices'}
                    className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                  >
                    <div className="text-xl md:text-3xl font-semibold text-gray-800">
                      <IconArrowRight size="24" />
                    </div>
                    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">View all</p>
                  </Link>
                </Card>
                <Card className="flex-1 grid grid-cols-3 overflow-hidden">
                  <div className="px-8 py-4 flex flex-col items-center text-center">
                    <div className="text-xl md:text-3xl font-semibold text-gray-800">{data.totalReceipts || 0}</div>
                    <div className="flex items-center mt-1">
                      <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Receipt(s)</p>
                    </div>
                  </div>
                  <div
                    onClick={() => setIsNewReceiptOpen(true)}
                    tabIndex="-1"
                    className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                  >
                    <div className="text-xl md:text-3xl font-semibold text-gray-800">
                      <IconPlus size="24" />
                    </div>
                    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">New receipt</p>
                  </div>
                  <Link
                    to={'/documents/receipts'}
                    className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                  >
                    <div className="text-xl md:text-3xl font-semibold text-gray-800">
                      <IconArrowRight size="24" />
                    </div>
                    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">View all</p>
                  </Link>
                </Card>
              </div>
              <Card
                hover
                role="button"
                tabIndex={0}
                aria-label="Upload a new document"
                aria-describedby="Upload a new document"
                aria-hidden={false}
                aria-disabled={false}
                className="px-6 py-12 flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-50 text-white text-xl md:text-3xl font-semibold">
                  <IconFilePlus
                    size="36"
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-blue-600"
                  />
                </div>
                <p className="text-ellipsis whitespace-nowrap overflow-hidden mt-4 text-lg font-medium">
                  Upload a new document
                </p>
                <p className="text-sm mt-0.5 opacity-80">.pdf, .docx, .csv, .xlsx</p>
              </Card>
            </div>
          </div>
          <div className="mt-10">
            <h5 className="text-lg font-medium mb-6 px-1">Recent documents</h5>
            <div className="grid md:grid-cols-3 gap-6 md:gap-6">
              {items.slice(0, 3).map((item) => (
                <Card key={item.title} className="flex items-center space-x-4 px-8 py-6 overflow-hidden" hover>
                  <div>
                    {item.type === '.doc' && <IconFileTypeDoc className="text-blue-700" size="36" />}
                    {item.type === '.pdf' && <IconFileTypePdf className="text-red-700" size="36" />}
                    {item.type === '.csv' && <IconFileTypeCsv className="text-teal-700" size="36" />}
                    {item.type === '.xls' && <IconFileTypeXls className="text-cyan-700" size="36" />}
                  </div>
                  <p className="text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}

      <NewInvoice isOpen={isNewInvoiceOpen} onClose={() => setIsNewInvoiceOpen(false)} />
      <NewReceipt isOpen={isNewReceiptOpen} onClose={() => setIsNewReceiptOpen(false)} />
    </DashboardContent>
  );
};

export default DocumentOverview;
