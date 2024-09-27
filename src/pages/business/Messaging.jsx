import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';
import ChatSidebar from '../../components/core/messaging/ChatSidebar';
import Header from '../../components/core/messaging/Header';
import Body from '../../components/core/messaging/Body';
import Form from '../../components/core/messaging/Form';
import { useState } from 'react';

const MessagingModal = () => {
  const isChatModalOpen = useGlobalStore((state) => state.data.isChatModalOpen);
  const updateData = useGlobalStore((state) => state.updateData);

  const [showSearchInp, setShowSearchInp] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedChat, setSelectedChat] = useState(null);

  const toggleInp = () => {
    if (showSearchInp) {
      setSearchTerm('');
    }
    setShowSearchInp(!showSearchInp);
  };

  const selectAChat = (user) => {
    setSelectedChat(user);
  };

  const closeConversation = () => {
    setSelectedChat(null);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const onClose = () => {
    setSelectedChat(null);
    updateData({ isChatModalOpen: false });
  };

  return (
    <Drawer
      isOpen={isChatModalOpen || false}
      onClose={() => updateData({ isChatModalOpen: false })}
      width={1100}
      padding={false}
      round={false}
    >
      <div className="flex max-h-screen overflow-hidden">
        <ChatSidebar
          showSearchInp={showSearchInp}
          selectedUserData={selectedChat}
          searchTerm={searchTerm}
          handleChange={handleChange}
          selectAChat={selectAChat}
          toggleInp={toggleInp}
        />
        <div className="h-full flex-1 flex flex-col">
          <Header onClose={onClose} setshowchatContainer={closeConversation} selectedUserData={selectedChat} />
          <Body mate={selectedChat} />
          <Form mate={selectedChat} />
        </div>
      </div>
    </Drawer>
  );
};

export default MessagingModal;
