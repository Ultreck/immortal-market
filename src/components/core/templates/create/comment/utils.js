import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { Tooltip } from 'antd';
import useCommentStore from '@/store/comment.js';

const Modal = () => {
  const [hasTyped, setHasTyped] = useState(false);
    const openModal = useCommentStore((state) => state.updateModal);
  return (
    <div className="fixed inset-y-0 right-0 bg-white w-1/4 min-h-[200px] max-h-[80vh] rounded-xl h-full z-50 p-4 overflow-y-auto shadow-lg top-2 ">
      <div className=" bg-white p-4 relative ">
        <div className='flex items-center justify-between'>
        <div>Type section</div>
        <button onClick={() => openModal(false)} className="absolute top-4 right-4">
          <CgClose size={24} color="red" />
        </button>
        </div>
        <h2>Your Comments</h2>
        <div>
          {[].map((item, index) => (
            <div key={index} className="border-b py-1">
              <p>{item.comment}</p>
              <p>{item.fullName}</p>
              <p>{item.timestamp}</p>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Reply..."
          className="px-2 mt-4"
        />
        <div className="flex items-center gap-2 mt-3">
        <Tooltip placement="bottom" title={"Submit Comment"}>
          {hasTyped ? (
            <button
            type="submit"
            onClick={handleDone}
            className={`${hasTyped ? 'bg-violet-600 rounded-full' : 'cursor-not-allowed'}`}
            disabled={!hasTyped}
            >
              <IoIosArrowRoundUp size={40} color="white" />
            </button>
          ) : (
            <IoIosArrowRoundUp size={40} className="bg-gray-300 rounded-full" />
          )}
          </Tooltip>
          {/* {hasTyped && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Submit Comment
                  </span>
                )} */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
