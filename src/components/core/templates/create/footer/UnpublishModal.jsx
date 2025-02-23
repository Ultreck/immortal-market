import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalContent, addToast } from '@heroui/react';
import { useUpdateDesign } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';

const UnpublishModal = ({ id, isOpen, onClose }) => {
  const { id: business } = useBusiness();
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);

  const handleUnpublish = async () => {
    try {
      await update({ status: 'draft' });
      addToast({ 
        title: 'Unpublished',
        color: 'success'
      });
      onClose();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'danger'
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-5">
          <p>Are you sure you want to unpublish this template?</p>
          <div className="flex justify-end space-x-2">
            <Button
              color="default"
              variant="light"
              onPress={onClose}
              isDisabled={isUpdateLoading}
              className="text-base"
              radius="full"
            >
              No, cancel
            </Button>
            <Button onPress={handleUnpublish} isLoading={isUpdateLoading} className="text-base" radius="full">
              Yes, unpublish
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

UnpublishModal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UnpublishModal;
