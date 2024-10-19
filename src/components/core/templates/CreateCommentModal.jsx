import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { IoIosArrowRoundUp, IoIosHappy } from 'react-icons/io';
import useCommentStore from '@/store/comment.js';
import { useState } from 'react';
import EmojiPickerModal from './EmojiPickerModal';
import useTemplateStore from '@/store/template';
import { useCreateComment } from '@/api/business';

const CustomTooltip = ({ title, children, placement = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="relative inline-block" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && (
        <div
          className={`absolute z-10 text-white text-sm p-2 bg-gray-800 rounded ${placement === 'bottom' ? 'mt-2' : '-mt-10'}`}
        >
          {title}
        </div>
      )}
    </div>
  );
};

const CreateCommentModal = ({ elements, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-8">{!!isOpen && <Content elements={elements} onClose={onClose} />}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Content = ({ onClose }) => {
  const { mutate: createComment, isLoading, isError } = useCreateComment();
  const openModal = useCommentStore((state) => state.updateModal);
  const [hasTyped, setHasTyped] = useState(false);
  const [comment, setComment] = useState('');
  const [isEmojiModalOpen, setEmojiModalOpen] = useState(false);
  
  const handleDone = () => {
    const data = { comment };
    setComment('');
    onClose();
    openModal(true);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setComment(value);
    setHasTyped(value.length > 0);
  };

  const addEmoji = (emoji) => {
    setComment(comment + emoji.native);
    setEmojiModalOpen(false);
  };

  return (
    <>
      <div className="relative items-center gap-2">
        <input
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={handleInputChange}
          className="px-2 mb-2 border-1 py-2 w-full text-xl"
        />
        <div className="flex items-center justify-between gap-2 mt-3">
          <CustomTooltip title="Add Emoji">
            <IoIosHappy size={30} onClick={() => setEmojiModalOpen(true)} className="cursor-pointer ml-2" />
          </CustomTooltip>
          <EmojiPickerModal
            isOpen={isEmojiModalOpen}
            onClose={() => setEmojiModalOpen(false)}
            onEmojiSelect={addEmoji}
          />
          <CustomTooltip title="Submit Comment">
            {hasTyped ? (
              <button type="submit" onClick={handleDone} className="bg-violet-600 rounded-full" disabled={!hasTyped}>
                <IoIosArrowRoundUp size={40} color="white" />
              </button>
            ) : (
              <IoIosArrowRoundUp size={40} className="bg-gray-300 rounded-full" />
            )}
          </CustomTooltip>
        </div>

        {isLoading && <p>Submitting comment...</p>}
        {isError && <p>Error submitting comment. Please try again.</p>}
      </div>
    </>
  );
};

CreateCommentModal.propTypes = {
  elements: PropTypes.array,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Content.propTypes = {
  elements: PropTypes.array,
  onClose: PropTypes.func,
};

export default CreateCommentModal;
