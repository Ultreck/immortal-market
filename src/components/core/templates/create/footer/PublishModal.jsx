import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { useUpdateDesign } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';

const PublishModal = ({ id, isOpen, onClose }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);

  const handlePublish = async () => {
    try {
      await update({ status: 'published' });
      toast.success('Published');
      onClose();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false} isKeyboardDismissDisabled={true} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-5">
          <p>Are you sure you want to publish this template?</p>
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
            <Button
              color="success"
              onPress={handlePublish}
              isLoading={isUpdateLoading}
              className="text-base"
              radius="full"
            >
              Yes, publish
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

PublishModal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PublishModal;
