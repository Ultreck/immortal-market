import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

const EmojiPickerModal = ({ isOpen, onClose, onEmojiSelect }) => {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="p-4">
          <Picker 
            data={data} 
            onEmojiSelect={(emoji) => {
              onEmojiSelect(emoji);
              onClose(); // Close modal after emoji selection
            }} 
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

EmojiPickerModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onEmojiSelect: PropTypes.func.isRequired,
};

export default EmojiPickerModal;
