
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { IconCircleX } from '@tabler/icons-react';

const UploadModal = ({ setShowModal, showModal, children }) => {
  const modal = useRef(null);

  // close on click outside or on sub link clicked
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (!modal.current.contains(target)) return;
    //   setShowModal();
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!showModal || keyCode !== 27) return;
      setShowModal();
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative flex items-start justify-center h-full w-full ">
      <div
        // onClick={() => setShowModal()}
        className={`fixed top-0 left-0 flex items-start justify-center h-full w-full z-[4] cursor-pointer bg-slate-500/40 ${
          showModal ? 'block' : 'hidden'
        } `}
      ></div>

      {showModal && (
        <div
          ref={modal}
          onBlur={() => console.log('here')}
          className={`fixed  z-[5]  flex min-w-[35rem]  min-h-[18rem] overflow-clip  flex-col border dark:border-none rounded-3xl shadow-default top-40 dark:bg-zinc-800 bg-white  ${
            showModal === true ? 'block' : 'hidden'
          }`}
        >
            <IconCircleX className='absolute right-2 top-2 hover:text-red-500 cursor-pointer' onClick={() => setShowModal()} />
          {children}
        </div>
      )}
    </div>
  );
};

UploadModal.propTypes = {
  setShowModal: PropTypes.any,
  showModal: PropTypes.boolean,
  children: PropTypes.any,
};
export default UploadModal;

