import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import CreateComment from '@/components/core/templates/create/comment/CreateComment.jsx';

const CreateCommentModal = ({ target, targetId, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="p-0">
          {!!isOpen && (
            <div className="pt-2">
              <CreateComment target={target} targetId={targetId} onDone={onClose} />
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

CreateCommentModal.propTypes = {
  target: PropTypes.string.isRequired,
  targetId: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CreateCommentModal;
