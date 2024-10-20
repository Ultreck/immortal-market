import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { IoIosArrowRoundUp, IoIosArrowBack, IoIosArrowForward, IoIosHappy } from 'react-icons/io';
import useCommentStore from '@/store/comment.js';
import { format, isYesterday } from 'date-fns';
import EmojiPickerModal from '../../EmojiPickerModal';
import { MdKeyboardBackspace } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Tooltip } from '@nextui-org/react';
// import { useGetComments } from '@/api/business';

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

const Avatar = ({ size = 40, className = '' }) => {
  return (
    <div
      className={`flex items-center justify-center bg-purple-800 rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="text-white text-lg">A</span>
    </div>
  );
};

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
  const [currentPage, setCurrentPage] = useState(1);

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
      className="fixed inset-y-0 right-0 dark:bg-gray-900 bg-white w-1/3 min-h-[500px] max-h-[80vh] mt-4 rounded-2xl h-full z-50 px-6 overflow-y-auto shadow-2xl"
    >
      <div className="flex items-center justify-between sticky top-0 bg-white dark:bg-gray-900 py-4 px-3 rounded-t-2xl shadow-md z-50">
        <button
          disabled={selectComment === null}
          onClick={() => updateSelectComment(null)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          <MdKeyboardBackspace size={26} className="text-gray-600 dark:text-white" />
        </button>

        <div className="flex gap-2 items-center dark:text-white text-gray-800 font-medium">
          {selectComment ? (
            <>
              <>
                <div className="flex items-center gap-4">
                  {/* Tooltip for Previous Button */}
                  <div className="relative">
                    <Tooltip content="Previous Button" showArrow placement="top">
                      <div className="inline-block">
                        <IoIosArrowBack
                          size={30}
                          onClick={handlePrevious}
                          className={`cursor-pointer ${currentPage === 1 ? 'text-gray-300 dark:text-gray-600' : 'text-black dark:text-white'}`}
                        />
                      </div>
                    </Tooltip>
                  </div>
                  <div>
                    Page {currentPage} / {totalPages}
                  </div>

                  {/* Tooltip for Next Button */}
                  <div className="relative">
                    <Tooltip content="Next Button" showArrow placement="top">
                      <div className="inline-block">
                        <IoIosArrowForward
                          size={30}
                          onClick={handleNext}
                          className={`cursor-pointer ${currentPage === totalPages ? 'text-gray-300 dark:text-gray-600' : 'text-black dark:text-white'}`}
                        />
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </>
            </>
          ) : (
            <div>{messages?.length} Comments</div>
          )}
        </div>
        <button
          onClick={() => openModal(false)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
        >
          <CgClose size={26} className="text-gray-600 dark:text-white" />
        </button>
      </div>

      {/* Conditionally render Comments or CommentAndReplies based on selection */}
      {selectComment ? <CommentAndReplies /> : <Comments />}
    </motion.div>
  );
};

export default Modal;

const Comments = () => {
  const updateSelectComment = useCommentStore((state) => state.updateSelectComment);

  return (
    <div className="my-5">
      {messages.map((message, index) => (
        <button
          onClick={() => updateSelectComment(index + 1)}
          key={index}
          className="border-2 dark:border-gray-700 dark:bg-gray-800 bg-white w-full hover:bg-gray-50 dark:hover:bg-gray-700 text-left my-2 py-4 px-4 rounded-xl shadow-sm transition-all"
        >
          <div className="flex gap-4 items-center">
            <Avatar size={40} className="text-lg" />
            <div>
              <p className="font-semibold text-lg text-gray-800 dark:text-white">{message?.fullName?.toUpperCase()}</p>
              <Tooltip
                className="text-gray-500 dark:text-gray-400"
                showArrow
                content={formatTimestamp(message?.timestamp)}
                placement="right"
                title={formatTimestamp(message?.timestamp)}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">{formatTimestamp(message?.timestamp)}</p>
              </Tooltip>
              <p className="text-sm text-gray-600 dark:text-gray-300">{message?.comment}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

const CommentAndReplies = () => {
  const [hasTyped, setHasTyped] = useState(false);
  const [comment, setComment] = useState('');
  const [isEmojiModalOpen, setEmojiModalOpen] = useState(false);
  const [reply, setReply] = useState([]);

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
          <div
            key={index}
            className="border dark:border-gray-700 dark:bg-gray-800 bg-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl shadow-sm p-4 mb-3l"
          >
            <div className="flex gap-4 items-center">
              <Avatar size={40} className="text-lg" />
              <div>
                <p className="font-semibold text-lg text-gray-800 dark:text-white">
                  {message?.fullName?.toUpperCase()}
                </p>
                <Tooltip
                  className="text-gray-500 dark:text-gray-400"
                  content={formatTimestamp(message?.timestamp)}
                  placement="right"
                  title={formatTimestamp(message?.timestamp)}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">{formatTimestamp(message?.timestamp)}</p>
                </Tooltip>
                <p className="text-sm text-gray-600 dark:text-gray-300">{message?.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-white dark:bg-gray-900 py-3 px-4 shadow-md rounded-b-2xl flex items-center gap-3">
        <input
          type="text"
          placeholder="Reply..."
          value={comment}
          onChange={handleInputChange}
          className="flex-1 px-4 py-2 text-lg dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 bg-gray-100 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <Tooltip content="Add Emoji" showArrow placement="top">
          <div
            tabIndex={0}
            className="flex items-center justify-center py-4 px-3 rounded-2xl cursor-pointer"
            onClick={() => setEmojiModalOpen(true)}
          >
            <IoIosHappy
              size={30}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            />
          </div>
        </Tooltip>

        <EmojiPickerModal isOpen={isEmojiModalOpen} onClose={() => setEmojiModalOpen(false)} onEmojiSelect={addEmoji} />
        <Tooltip content="Submit" showArrow placement="top">
          {hasTyped ? (
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white rounded-full p-2 transition-all shadow-lg"
              disabled={!hasTyped}
            >
              <IoIosArrowRoundUp size={26} />
            </button>
          ) : (
            <div className="flex items-center justify-center bg-gray-300 text-white rounded-full p-2">
              <IoIosArrowRoundUp size={26} />
            </div>
          )}
        </Tooltip>
      </div>
    </>
  );
};
