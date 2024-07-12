import { useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import Drawer from '@/components/ui/Drawer.jsx';
import CircleUploadFileInput from '@/components/core/shared/CircleUploadFileInput.jsx';
import { useCreateInvoice } from '@/api/document.js';
import { GridLoader } from 'react-spinners';
import { useToast } from '@/hooks/use-toast.jsx';
import Button from '@/components/ui/Button.jsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useBusiness from '@/hooks/use-business.js';

const NewInvoice = ({ isOpen, onClose }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const response = useRef(null);
  const [success, setSuccess] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const { business } = useBusiness();
  const { mutateAsync: createInvoice, isPending: isCreateInvoiceLoading } = useCreateInvoice(business._id);

  const onChange = async (file) => {
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await createInvoice(fd);
      setIsFetching(true);
      await qc.invalidateQueries({
        queryKey: ['invoices'],
      });
      await qc.invalidateQueries({
        queryKey: ['invoices', 'overview'],
      });
      setIsFetching(false);
      response.current = res.data.invoice;
      setSuccess(true);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  const reset = () => {
    setSuccess(false);
    response.current = null;
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose}>
      {isCreateInvoiceLoading || isFetching ? (
        <div className="h-full flex flex-col items-center justify-center">
          <GridLoader color={'#2563eb'} />
          <p className="mt-6">Processing</p>
        </div>
      ) : (
        <>
          {!success ? (
            <div className="h-full flex flex-col items-center justify-center">
              <CircleUploadFileInput
                onChange={onChange}
                error="Only pictures and pdfs allowed"
                accept={{
                  'application/pdf': ['.pdf'],
                  'image/jpeg': ['.jpg'],
                  'image/png': ['.png'],
                }}
                label="Drag and drop a invoice in picture or pdf format or click to select"
              />
            </div>
          ) : (
            <div className="h-full rounded-xl px-10 py-24 flex flex-col items-center justify-center text-center">
              <IconCircleCheckFilled size="80" className="text-green-600" />
              <h6 className="text-xl mt-8 font-semibold max-w-xs">Invoice added</h6>
              <p className="max-w-xs mt-1.5">Click the button below to view invoice</p>
              <div className="flex flex-col mt-8 space-y-3">
                <Link to={`/documents/invoices/${response.current._id}`}>
                  <Button variant="outlined">View result</Button>
                </Link>
                <Button onClick={reset} variant="text">
                  Upload another invoice
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </Drawer>
  );
};

NewInvoice.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NewInvoice;
