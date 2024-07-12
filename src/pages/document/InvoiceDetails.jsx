import { useToast } from '@/hooks/use-toast.jsx';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useDeleteInvoice, useGetInvoice } from '@/api/document.js';
import { Link, useNavigate, useParams } from 'react-router-dom';
import IconButton from '@/components/ui/IconButton.jsx';
import { IconChevronLeft, IconDotsVertical, IconTrash } from '@tabler/icons-react';
import SimpleDropdown from '@/components/ui/SimpleDropdown.jsx';
import Card from '@/components/ui/Card.jsx';
import Modal from '@/components/ui/Modal.jsx';
import Button from '@/components/ui/Button.jsx';
import Image from '@/components/core/shared/Image.jsx';
import InvoiceSummary from '@/components/core/document/invoices/InvoiceSummary.jsx';
import DashboardContent from '@/components/core/shared/DashboardContent.jsx';
import useBusiness from '@/hooks/use-business.js';

const InvoiceDetails = () => {
  const toast = useToast();
  const { id } = useParams();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { business } = useBusiness();
  const { data: { invoice } = {}, isLoading: isInvoiceLoading } = useGetInvoice(business._id, id);
  const { mutateAsync: deleteInvoice, isPending: isDeleteLoading } = useDeleteInvoice(business._id, id);

  const handleDelete = async () => {
    try {
      await deleteInvoice(null);
      navigate('/documents/invoices', { replace: true });
      await qc.invalidateQueries({
        queryKey: ['invoices'],
      });
      await qc.invalidateQueries({
        queryKey: ['invoices', 'overview'],
      });
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <DashboardContent>
      {isInvoiceLoading ? (
        <>
          <div className="bg-slate-200 rounded-2xl w-[150px] py-4"></div>
          <div className="bg-slate-200 rounded-2xl w-[190px] md:w-[200px] py-4 mt-4"></div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-slate-200 rounded-2xl w-full h-[300px]"></div>
            <div className="bg-slate-200 rounded-2xl w-full h-[300px]"></div>
          </div>
        </>
      ) : (
        <>
          {invoice ? (
            <>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center space-x-3">
                  <Link to={'/documents/invoices'}>
                    <IconButton variant="subtle" color="black" size="sm" rounded icon={<IconChevronLeft size="20" />} />
                  </Link>
                  <h3 className="text-xl font-medium">
                    Invoice {invoice.number ? <>(#{invoice.number})</> : <>details</>}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 md:space-x-4">
                  <SimpleDropdown
                    trigger={
                      <IconButton
                        variant="text"
                        size="sm"
                        icon={<IconDotsVertical size="20" />}
                        color="black"
                        rounded
                      />
                    }
                    items={[
                      {
                        text: <div className="text-red-600">Delete invoice</div>,
                        icon: <IconTrash size="20" className="text-red-600" />,
                        onClick: () => setIsDeleteOpen(true),
                      },
                    ]}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-11 gap-6 items-start">
                <Card className="lg:col-span-5 overflow-hidden hidden lg:block md:sticky top-10">
                  <Image src={invoice.file} alt="Invoice" />
                </Card>
                <div className="md:col-span-6">
                  <InvoiceSummary invoice={invoice} />
                </div>
              </div>
            </>
          ) : (
            <>Could not fetch invoice</>
          )}
        </>
      )}

      <Modal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} size="sm">
        <h4 className="text-lg font-semibold">Delete invoice #{invoice?.number}</h4>
        <p className="mt-1">Are you sure you want to continue?</p>
        <div className="mt-5 flex items-center space-x-2 justify-end">
          <Button
            onClick={() => setIsDeleteOpen(false)}
            color="black"
            size="sm"
            variant="outlined"
            disabled={isDeleteLoading}
          >
            Go back
          </Button>
          <Button onClick={handleDelete} color="red" size="sm" variant="outlined" loading={isDeleteLoading}>
            Yes delete
          </Button>
        </div>
      </Modal>
    </DashboardContent>
  );
};

export default InvoiceDetails;
