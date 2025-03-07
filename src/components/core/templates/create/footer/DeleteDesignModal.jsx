import { addToast, Button, Modal, ModalBody, ModalContent } from '@heroui/react';
import { useDeleteDesign } from '@/api/business.js';
import PropTypes from 'prop-types';
import useBusiness from '@/hooks/use-business.js';

const DeleteDesignModal = ({ id, isOpen, onClose, onDeleted }) => {
  const { id: business } = useBusiness();
  const { mutateAsync: deleteDesign, isPending: isDeleteLoading } = useDeleteDesign(business);

  const handleDelete = async () => {
    try {
      await deleteDesign({ id });
      addToast({ title: 'Design deleted', color: 'success' });
      onClose();
      onDeleted?.();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'danger',
      });
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

DeleteDesignModal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDeleted: PropTypes.func,
};

export default DeleteDesignModal;
