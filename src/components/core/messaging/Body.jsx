/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useRef, } from 'react';

import Allchat from './chat';

import { Chip } from '@nextui-org/react';
import MBox from './MBox';

const Body = ({ mate }) => {
  const bottomRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="flex-1 overflow-y-auto px-4 relative" ref={chatContainerRef}>
      <div className="pt-20" />

      {Allchat?.map((message) => (
        <MBox key={message.id} data={message} isLarge={true} otherUser={true} />
      ))}

      <div className="pt-24" ref={bottomRef} />
      {false && (
        <div className=" sticky bottom-[1.5rem] left-10 z-10 flex">
          <Chip size="lg" className="flex animate-bounce ">
            <div className="flex items-end">
              <div className=" text-gray-600 text-sm">Typing</div>
              <div className=" flex py-1 px-1 gap-x-1 animate-bounce ">
                <div className="animate-bounce duration-200 h-full">
                  <div className="w-1 h-1 bg-gray-600 rounded-full  "></div>
                </div>
                <div className="animate-bounce duration-100 h-full">
                  <div className="w-1 h-1 bg-gray-600 rounded-full  "></div>
                </div>
                <div className="animate-bounce duration-75 h-full">
                  <div className="w-1 h-1 bg-gray-600 rounded-full  "></div>
                </div>
              </div>
            </div>
          </Chip>
        </div>
      )}
    </div>
  );
};

export default Body;
