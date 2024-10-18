import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { IoIosArrowRoundUp, IoIosArrowBack, IoIosArrowForward, IoIosHappy } from 'react-icons/io';
import { Avatar, Tooltip } from 'antd';
import useCommentStore from '@/store/comment.js';
import { format, isYesterday } from 'date-fns';
import EmojiPickerModal from '../../EmojiPickerModal';
import { MdKeyboardBackspace } from 'react-icons/md';
import { motion } from 'framer-motion';
const messages = [
  {
    comment: 'This is the first comment',
    fullName: 'John Doe',
    timestamp: '2024-10-17 10:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
    ],
  },
  {
    comment: 'This is the second comment',
    fullName: 'Jane Doe',
    timestamp: '2024-10-17 11:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
    ],
  },
  {
    comment: 'This is the third comment',
    fullName: 'Mike Smith',
    timestamp: '2024-10-17 12:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
    ],
  },
  {
    comment: 'This is the fourth comment',
    fullName: 'Alice Johnson',
    timestamp: '2024-10-17 13:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
    ],
  },
  {
    comment: 'This is the fifth comment',
    fullName: 'Bob Brown',
    timestamp: '2024-10-17 14:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
    ],
  },
  {
    comment: 'This is the fifth comment',
    fullName: 'Bob Brown',
    timestamp: '2024-10-17 14:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
    ],
  },
  {
    comment: 'This is the fifth comment',
    fullName: 'Bob Brown',
    timestamp: '2024-10-17 14:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
    ],
  },
  {
    comment: 'This is the fifth comment',
    fullName: 'Bob Brown',
    timestamp: '2024-10-17 14:00',
    reply: [
      { comment: 'This is the first comment', fullName: 'John Doe', timestamp: '2024-10-17 10:00' },
      { comment: 'This is the second comment', fullName: 'Jane Doe', timestamp: '2024-10-17 11:00' },
      { comment: 'This is the third comment', fullName: 'Mike Smith', timestamp: '2024-10-17 12:00' },
      { comment: 'This is the fourth comment', fullName: 'Alice Johnson', timestamp: '2024-10-17 13:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
      { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
    ],
  },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
  { comment: 'This is the fifth comment', fullName: 'Bob Brown', timestamp: '2024-10-17 14:00' },
];

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp || new Date().toDateString());
  const timeFormat = format(date, 'h:mm a');
  if (isYesterday(date)) {
    return `${timeFormat}, yesterday`;
  }
  return format(date, 'h:mm a, MMM d');
};

const Modal = () => {
  const openModal = useCommentStore((state) => state.updateModal);
  const selectComment = useCommentStore((state) => state.data.selectComment);
  const updateSelectComment = useCommentStore((state) => state.updateSelectComment);

  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const [comment, setComment] = useState('');
  const [isEmojiModalOpen, setEmojiModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reply, setReply] = useState([]);

  const commentsPerPage = 3;
  const totalPages = Math.ceil(messages.length / commentsPerPage);
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      }}
      className="fixed inset-y-0 right-0 bg-white w-1/4 min-h-[500px] max-h-[50vh] mt-1 rounded-xl h-full z-50 px-4 overflow-y-auto shadow-lg p top-2 "
    >
      <div className="flex items-center z-50 sticky top-0 justify-between py-3 px-1 bg-white">
        <button disabled={selectComment === null} onClick={() => updateSelectComment(null)}>
          <MdKeyboardBackspace size={26} />
        </button>

        {selectComment ? (
          <div className="flex gap-2 items-center">
            <Tooltip placement="bottom" title={'Previous Button'}>
              <IoIosArrowBack
                size={30}
                onClick={handlePrevious}
                className={`cursor-pointer ${currentPage === 1 ? 'text-gray-300' : 'text-black'}`}
              />
            </Tooltip>

            <div>
              Page {currentPage} / {totalPages}
            </div>

            <Tooltip placement="bottom" title={'Next Button'}>
              <IoIosArrowForward
                size={30}
                onClick={handleNext}
                className={`cursor-pointer ${currentPage === totalPages ? 'text-gray-300' : 'text-black'}`}
              />
            </Tooltip>
          </div>
        ) : (
          <div className="flex gap-2items-center">{messages?.length} comments</div>
        )}
        <button onClick={() => openModal(false)} className="">
          <CgClose size={26} />
        </button>
      </div>
      {selectComment ? <CommentAndReplies /> : <Comments />}
    </motion.div>
  );
};

export default Modal;

const Comments = () => {
  const updateSelectComment = useCommentStore((state) => state.updateSelectComment);
  return (
    <>
      <div className="my-5">
        {messages.map((message, index) => (
          <button
            onClick={() => updateSelectComment(index + 1)}
            key={index}
            className="border-2 w-full hover:bg-gray-100 text-start my-2 py-5 px-2 rounded-lg shadow-md"
          >
            <div className="flex gap-5 items-center">
              <div>
                <Avatar className='bg-purple-800 rounded-full' size={40} />
              </div>
              <div>
                <p className="font-semi-bold text-xl py-1">{message?.fullName?.toUpperCase()}</p>
              </div>
            </div>
            <Tooltip className="text-gray-500 px-12" placement="bottom" title={formatTimestamp(message?.timestamp)}>
              <p>{formatTimestamp(message?.timestamp)}</p>
            </Tooltip>
            <p className='px-12'>{message?.comment}</p>
          </button>
        ))}
      </div>
    </>
  );
};
const CommentAndReplies = () => {
  const [hasTyped, setHasTyped] = useState(false);
  const [comment, setComment] = useState('');
  const [isEmojiModalOpen, setEmojiModalOpen] = useState(false);
  const handleInputChange = (event) => {
    const { value } = event.target;
    setComment(value);
    setHasTyped(value.length > 0);
  };
  const addEmoji = (emoji) => {
    setComment(comment + emoji.native);
    setEmojiModalOpen(false);
  };
  const handleSubmit = () => {
    const timestamp = new Date().toLocaleString();
    const data = {
      comment,
      timestamp,
      name: 'BIG SAM',
    };
    console.log(data);
    setReply(data);
    setComment('');
  };

  return (
    <>
      <div className="my-5">
        {messages.map((message, index) => (
          <div key={index} className="border my-2 py-4 px-2 -z-10 hover:bg-gray-100 rounded-lg shadow-md ">
           <div className="flex gap-5 items-center">
              <div>
                <Avatar className=' bg-purple-800 rounded-full' size={40} />
              </div>
              <div>
                <p className="font-semi-bold text-xl py-1">{message?.fullName?.toUpperCase()}</p>
              </div>
            </div>
            <Tooltip className="text-gray-500 px-12" placement="bottom" title={formatTimestamp(message?.timestamp)}>
              <p>{formatTimestamp(message?.timestamp)}</p>
            </Tooltip>
            <p className='px-12'>{message?.comment}</p>
      </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-white py-3 shadow-sm  items-center gap-2">
        <input
          type="text"
          placeholder="Reply..."
          value={comment}
          onChange={handleInputChange}
          className="px-2 mb-2 py-2 w-full text-xl"
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
          <Tooltip placement="bottom" title={'Submit Comment'}>
            {hasTyped ? (
              <button type="submit" onClick={handleSubmit} className="bg-violet-600 rounded-full" disabled={!hasTyped}>
                <IoIosArrowRoundUp size={40} color="white" />
              </button>
            ) : (
              <IoIosArrowRoundUp size={40} className="bg-gray-300 rounded-full" />
            )}
          </Tooltip>
        </div>
      </div>
    </>
  );
};
