import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { useDeleteDesign } from '@/api/business.js';
import { useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast.jsx';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';

const DeleteModal = ({ id, isOpen, onClose }) => {
  const toast = useToast();
  const qc = useQueryClient();
  const { id: business } = useBusiness();
  const { mutateAsync: deleteTemplate, isPending: isDeleteLoading } = useDeleteDesign(business);

  const handleDelete = async () => {
    try {
      await deleteTemplate({ id });
      await qc.invalidateQueries({ queryKey: ['businesses', id, 'designs'] });
      toast.success('Project deleted');
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-5">
          <p>Are you sure you want to delete this project? This action cannot be undone.</p>
          <div className="flex justify-end space-x-2">
            <Button
              color="default"
              variant="light"
              onPress={onClose}
              isDisabled={isDeleteLoading}
              className="text-base"
              radius="full"
            >
              No, cancel
            </Button>
            <Button
              color="danger"
              onPress={handleDelete}
              isLoading={isDeleteLoading}
              className="text-base"
              radius="full"
            >
              Yes, delete
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteModal;
