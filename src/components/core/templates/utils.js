import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { CgClose } from 'react-icons/cg';
import useTemplateStore from '@/store/template.js';
import { useState } from 'react';

const CreateCommentModal = ({ elements, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-8">{!!isOpen && <Content elements={elements} onClose={onClose} />}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Content = ({ elements, onClose }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const page = useTemplateStore(({ template }) => {
    return template.pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
  });

  const [comment, setComment] = useState('');
  const [fullName, setFullName] = useState('');
  const [hasTyped, setHasTyped] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const onChange = (elements) => {
    updateElements(elements, page.id, true);
  };

  const handleDone = () => {
    const timestamp = new Date().toLocaleString();
    const data = {
      comment,
      fullName,
      timestamp,
    };

    console.log(JSON.stringify(data));

    setComments([...comments, { comment, fullName, timestamp }]);
    setComment('');
    setFullName('');
    setHasTyped(false);
    
    // onClose();
    setIsDrawerOpen(true);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setComment(value);
    setHasTyped(value.length > 0 || fullName.length > 0);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setFullName(value);
    setHasTyped(value.length > 0 || comment.length > 0);
  };

  return (
    <>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Enter a comment" 
          value={comment} 
          onChange={handleInputChange} 
          className="px-2 mb-2" 
        />
        <input 
          type="text" 
          placeholder="Enter your full name" 
          value={fullName} 
          onChange={handleNameChange} 
          className="px-2 mb-3" 
        />

        <div className="flex items-center gap-2 mt-3">
          {hasTyped ? (
            <button
              type="submit"
              onClick={handleDone}
              className="bg-violet-600 rounded-full"
            >
              <IoIosArrowRoundUp size={40} color="white" />
            </button>
          ) : (
            <IoIosArrowRoundUp size={40} className="bg-gray-300 rounded-full" />
          )}

          {hasTyped && (
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Submit Comment
            </span>
          )}
        </div>

        {/* Drawer */}
        {isDrawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-start">
            <div className="w-1/2 h-1/2 bg-white p-4 relative">
              <button onClick={() => setIsDrawerOpen(false)} className="absolute top-4 right-4">
                <CgClose size={24} color="red" />
              </button>
              <h2>Your Comments</h2>
              <div>
                {comments.map((item, index) => (
                  <p key={index} className="border-b py-1">
                    <strong>{item.fullName}</strong>: {item.comment} <em>({item.timestamp})</em>
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
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
