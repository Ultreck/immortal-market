import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalContent } from '@heroui/react';
import CreateComment from '@/components/core/templates/create/comment/CreateComment.jsx';

const CreateCommentModal = ({ target, targetId, page, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="p-0">
          {!!isOpen && (
            <div className="pt-2">
              <CreateComment target={target} targetId={targetId} page={page} onDone={onClose} />
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
  page: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CreateCommentModal;
