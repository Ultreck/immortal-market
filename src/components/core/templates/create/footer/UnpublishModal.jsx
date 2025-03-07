import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalContent } from '@heroui/react';
import useDesignStore from '@/store/design.js';

const UnpublishModal = ({ isOpen, onClose }) => {
  const updateDesign = useDesignStore((state) => state.updateDesign);

  const handleUnpublish = async () => {
    updateDesign({ status: 'draft' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-5">
          <p>Are you sure you want to unpublish this template?</p>
          <div className="flex justify-end space-x-2">
            <Button color="default" variant="light" onPress={onClose} className="text-base" radius="full">
              No, cancel
            </Button>
            <Button onPress={handleUnpublish} className="text-base" radius="full">
              Yes, unpublish
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

UnpublishModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UnpublishModal;
