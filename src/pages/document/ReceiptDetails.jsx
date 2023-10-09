import { useToast } from "@/hooks/use-toast.jsx";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useGetUserBusiness } from "@/api/business.js";
import { useDeleteReceipt, useGetReceipt } from "@/api/invoice.js";
import IconButton from "@/components/global/IconButton.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IconChevronLeft, IconDotsVertical, IconTrash } from "@tabler/icons-react";
import SimpleDropdown from "@/components/global/SimpleDropdown.jsx";
import Card from "@/components/global/Card.jsx";
import Image from "@/components/core/shared/Image.jsx";
import Modal from "@/components/global/Modal.jsx";
import Button from "@/components/global/Button.jsx";
import ReceiptSummary from "@/components/core/document/receipts/ReceiptSummary.jsx";
import DashboardContent from "@/components/core/shared/DashboardContent.jsx";

const ReceiptDetails = () => {
  const { id } = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { data: business } = useGetUserBusiness();
  const { data: { receipt } = {}, isLoading: isReceiptLoading } = useGetReceipt(business._id, id);
  const { mutateAsync: deleteReceipt, isLoading: isDeleteLoading } = useDeleteReceipt(business._id, id);

  const handleDelete = async () => {
    try {
      await deleteReceipt(null);
      navigate('/invoice/receipts', { replace: true });
      await qc.invalidateQueries(['receipts'])
      await qc.invalidateQueries(['invoices', 'overview'])
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <DashboardContent>
      {
        isReceiptLoading ? (
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
            {
              receipt ? (
                <>
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center space-x-3">
                      <Link to={ "/invoice/receipts" }>
                        <IconButton
                          variant="subtle" color="black" size="sm" rounded icon={ <IconChevronLeft size="20"/> }
                        />
                      </Link>
                      <h3 className="text-xl font-medium">
                        Receipt { receipt.number ? <>(#{ receipt.number })</> : <>details</> }
                      </h3>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                      <SimpleDropdown
                        trigger={
                          <IconButton
                            variant="text" size="sm" icon={ <IconDotsVertical size="20"/> } color="black" rounded
                          />
                        }
                        items={ [
                          {
                            text: <div className="text-red-600">Delete receipt</div>,
                            icon: <IconTrash size="20" className="text-red-600"/>,
                            onClick: () => setIsDeleteOpen(true)
                          },
                        ] }
                      />
                    </div>
                  </div>
                  <div className="grid lg:grid-cols-11 gap-6 items-start">
                    <Card className="lg:col-span-5 overflow-hidden hidden lg:block md:sticky top-10">
                      <Image src={ receipt.file } alt="Receipt"/>
                    </Card>
                    <div className="md:col-span-6">
                      <ReceiptSummary receipt={ receipt }/>
                    </div>
                  </div>
                </>
              ) : (
                <>Could not fetch receipt</>
              )
            }
          </>
        )
      }

      <Modal isOpen={ isDeleteOpen } onClose={ () => setIsDeleteOpen(false) } size="sm">
        <h4 className="text-lg font-semibold">Delete receipt #{ receipt?.number }</h4>
        <p className="mt-1">Are you sure you want to continue?</p>
        <div className="mt-5 flex items-center space-x-2 justify-end">
          <Button
            onClick={ () => setIsDeleteOpen(false) } color="black" size="sm" variant="outlined"
            disabled={ isDeleteLoading }
          >
            Go back
          </Button>
          <Button onClick={ handleDelete } color="red" size="sm" variant="outlined" loading={ isDeleteLoading }>
            Yes delete
          </Button>
        </div>
      </Modal>
    </DashboardContent>
  );
};

export default ReceiptDetails;
