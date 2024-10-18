import PropTypes, { elementType } from 'prop-types';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { IoIosArrowRoundUp, IoIosHappy } from 'react-icons/io';
import { Tooltip } from 'antd';
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
  // const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  // const design = useTemplateStore(({ template }) => template.id);
  const { mutate: createComment, isLoading, isError } = useCreateComment();
  const openModal = useCommentStore((state) => state.updateModal);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const [comment, setComment] = useState('');
  const [isEmojiModalOpen, setEmojiModalOpen] = useState(false);
  // Note: useMutation is to post, delete, put while useQuery is to get
  const handleDone = () => {
    // const timestamp = new Date().toLocaleString();
    const data = {
      comment,
      // timestamp,
    };
    setComment('');
    onClose();
    openModal(true);
  };

  // const handleDone = () => {
  //   const timestamp = new Date().toLocaleString();
  //   const data = {
  //     content:comment,
  //     elementType:"element",
  //     element:selectedElements[0],
  //     design
  //   };

  //   createComment(data, {
  //     onSuccess: () => {
  //       setComment('');
  //       console.log('Comment created successfully!');
  //       onClose();
  //       openModal(true);
  //     },
  //     onError: (error) => {
  //       console.error('Error creating comment:', error);
  //     },
  //   });
  // };
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
          <Tooltip placement="bottom" title="Add Emoji">
            <IoIosHappy size={30} onClick={() => setEmojiModalOpen(true)} className="cursor-pointer ml-2" />
          </Tooltip>
          <EmojiPickerModal
            isOpen={isEmojiModalOpen}
            onClose={() => setEmojiModalOpen(false)}
            onEmojiSelect={addEmoji}
          />
          <Tooltip placement="bottom" title="Submit Comment">
            {hasTyped ? (
              <button type="submit" onClick={handleDone} className="bg-violet-600 rounded-full" disabled={!hasTyped}>
                <IoIosArrowRoundUp size={40} color="white" />
              </button>
            ) : (
              <IoIosArrowRoundUp size={40} className="bg-gray-300 rounded-full" />
            )}
          </Tooltip>
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
