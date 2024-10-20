import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalContent, Tooltip } from '@nextui-org/react';
import { IoIosArrowRoundUp, IoIosHappy } from 'react-icons/io';
import useCommentStore from '@/store/comment.js';
import { useState } from 'react';
import EmojiPickerModal from './EmojiPickerModal';
import useTemplateStore from '@/store/template';
import { useCreateComment } from '@/api/business';

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
      <div className="relative items-center gap-2 w-full max-w-lg mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={handleInputChange}
          className="px-4 py-3 mb-3 border border-gray-300 dark:border-gray-700 rounded-full w-full text-lg dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />

        <div className="flex items-center justify-between mt-4">
          <Tooltip content="Add Emoji" showArrow placement="right">
            <div
              tabIndex={0}
              className="flex items-center justify-center py-4 px-3 rounded-2xl cursor-pointer"
              onClick={() => setEmojiModalOpen(true)}
            >
              <IoIosHappy size={30} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" />
            </div>
          </Tooltip>

          <EmojiPickerModal
            isOpen={isEmojiModalOpen}
            onClose={() => setEmojiModalOpen(false)}
            onEmojiSelect={addEmoji}
          />
          <Tooltip content="Submit" showArrow placement="top">
            {hasTyped ? (
              <button
                type="submit"
                onClick={handleDone}
                className="flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white rounded-full p-2 transition-all shadow-lg"
                disabled={!hasTyped}
              >
                <IoIosArrowRoundUp size={30} />
              </button>
            ) : (
              <div className="flex items-center justify-center bg-gray-300 text-white rounded-full p-2">
                <IoIosArrowRoundUp size={30} />
              </div>
            )}
          </Tooltip>
        </div>

        {/* Loading/Error States */}
        {isLoading && <p className="mt-4 text-gray-600 dark:text-gray-400">Submitting comment...</p>}
        {isError && <p className="mt-4 text-red-600 dark:text-red-400">Error submitting comment. Please try again.</p>}
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
