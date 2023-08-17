import NewReceipt from "@/components/core/invoice/NewReceipt.jsx";
import NewInvoice from "@/components/core/invoice/NewInvoice.jsx";
import { useState } from "react";
import DashboardTitle from "@/components/core/shared/DashboardTitle.jsx";
import Card from "@/components/global/Card.jsx";
import { IconArrowRight, IconPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useGetUserBusiness } from "@/api/business.js";
import { useGetInvoicesOverview } from "@/api/invoice.js";

const InvoicesOverview = () => {
  const { data: business } = useGetUserBusiness();
  const { data, isLoading: isOverviewLoading } = useGetInvoicesOverview(business._id);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [isNewReceiptOpen, setIsNewReceiptOpen] = useState(false);

  return (
    <>
      <DashboardTitle text="Overview"/>
      {
        isOverviewLoading ? (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
            <div className="bg-slate-200 rounded-2xl min-h-[100px]"></div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="divide-x grid grid-cols-3 overflow-hidden">
                <div className="px-8 py-4">
                  <div className="text-xl md:text-3xl font-semibold text-gray-800">
                    { data.invoicesCount || 0 }
                  </div>
                  <div className="flex items-center mt-1">
                    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Invoice(s)</p>
                  </div>
                </div>
                <div
                  onClick={ () => setIsNewInvoiceOpen(true) } tabIndex="-1"
                  className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  <div className="text-xl md:text-3xl font-semibold text-gray-800">
                    <IconPlus size="24"/>
                  </div>
                  <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">New invoice</p>
                </div>
                <Link
                  to={ '/invoices/invoices' }
                  className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  <div className="text-xl md:text-3xl font-semibold text-gray-800">
                    <IconArrowRight size="24"/>
                  </div>
                  <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">View all</p>
                </Link>
              </Card>
              <Card className="divide-x grid grid-cols-3 overflow-hidden">
                <div className="px-8 py-4">
                  <div className="text-xl md:text-3xl font-semibold text-gray-800">
                    { data.receiptsCount || 0 }
                  </div>
                  <div className="flex items-center mt-1">
                    <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden">Receipt(s)</p>
                  </div>
                </div>
                <div
                  onClick={ () => setIsNewReceiptOpen(true) } tabIndex="-1"
                  className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  <div className="text-xl md:text-3xl font-semibold text-gray-800">
                    <IconPlus size="24"/>
                  </div>
                  <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">New receipt</p>
                </div>
                <Link
                  to={ '/invoices/receipts' }
                  className="px-8 py-4 flex flex-col items-center justify-center hover:bg-slate-50 cursor-pointer"
                >
                  <div className="text-xl md:text-3xl font-semibold text-gray-800">
                    <IconArrowRight size="24"/>
                  </div>
                  <p className="text-sm text-ellipsis whitespace-nowrap overflow-hidden mt-2">View all</p>
                </Link>
              </Card>
            </div>
          </>
        )
      }

      <NewInvoice
        isOpen={ isNewInvoiceOpen }
        onClose={ () => setIsNewInvoiceOpen(false) }
      />
      <NewReceipt
        isOpen={ isNewReceiptOpen }
        onClose={ () => setIsNewReceiptOpen(false) }
      />
    </>
  );
};

export default InvoicesOverview;
