/* eslint-disable react/prop-types */


import { HiChevronLeft } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5';
import { Avatar } from '@heroui/react';
import clsx from 'clsx';






const Header = ({onClose, setshowchatContainer, selectedUserData}) => {

  return (
  <>
    <div
      className="
        bg-white
        dark:bg-zinc-800
        w-full
        flex
        border-b-[1px]
        dark:border-b-zinc-700
        sm:px-4
        py-3
        px-4
        lg:px-6
        justify-between
        items-center
        shadow-sm
      "
    >
      <div className="flex gap-2 items-center">
        <div
        onClick={setshowchatContainer}
          className="
            md:hidden
            block
            text-sky-500
            hover:text-sky-600
            transition
            cursor-pointer
          "
        >
          <HiChevronLeft size={32} />
        </div>

          <div className='relative'>

                <Avatar
                  size="md"
                 name='N'
                />
                <div>
                  <span
                    className={clsx(
                      "absolute block rounded-full ring-green-700 bg-blue-300  ring-1 h-[0.4rem] w-[0.4rem] md:h-[0.5rem] md:w-[0.5rem] bg-chatactive right-[0.2rem] bottom-[0.1rem] "
                    )}
                  />
                </div>
          </div>

        <div className="flex flex-col">
          <div className='text-[0.82rem]'>{selectedUserData?.name}</div>
          <div className='text-[0.59rem] text-slate-500 flex gap-x-3 flex-wrap'>

            <div className='flex gap-x-1 items-center'>
              <div className='w-1 h-1 rounded-full bg-slate-500'></div>
              <span>{selectedUserData?.name}</span>
            </div>
          </div>
          <div className="text-xs font-light text-neutral-500">
            {
              selectedUserData?.LAST_SEEN && (
                <>
                Last seen 2 days
                </>
              )
            }
          </div>
        </div>
      </div>


      <div className="flex gap-4">

          <div></div>
          <IoClose
            size={32}
            onClick={onClose}
            className="
              cursor-pointer
              rounded-md bg-white dark:bg-zinc-700/60 text-gray-400 hover:text-gray-500 outline-none hover:border-btnColor hover:border-2
              transition
            "
          />
        </div>



    </div>
    </>
  );
}

export default Header;
