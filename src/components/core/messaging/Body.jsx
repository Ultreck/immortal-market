import { useEffect, useRef } from 'react';
import Allchat from './chat';
import MBox from './MBox';

const Body = () => {
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
    </div>
  );
};

export default Body;
