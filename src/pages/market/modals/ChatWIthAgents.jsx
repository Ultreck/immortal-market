import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { Avatar, Button, ScrollShadow, Select, SelectItem, Tooltip } from '@heroui/react';
import { TbSend } from 'react-icons/tb';
import {
  useCreateAIBot,
  useCreateAIChat,
  useGetAIChats,
  useGetAIChatsHistories,
  useGetAIChatsMessages,
} from '@/api/ai-chat';
import AiDataSkeleton from '../components/AiDataSkeleton';
import MessageSkeleton from '../components/MessageSkeleton';
import { useChatAiStore, useCurrentStore, useIsNewChatStore } from '@/store/bot';
import useIsOpenStore from '@/store/chat-sidebar';
import { LuPanelLeftClose } from 'react-icons/lu';
import { LuPanelRightClose } from 'react-icons/lu';
import { LuMessageSquarePlus } from 'react-icons/lu';
import { useTernaryDarkMode } from 'usehooks-ts';
import LogoIcon from '@/components/core/shared/LogoIcon.jsx';
import { useEffect, useRef, useState } from 'react';
import { LuLoaderCircle } from 'react-icons/lu';

const ChatWIthAgentsModal = ({ isOpen, onClose }) => {
  const textareaRef = useRef(null);
  const [message, setMessage] = useState('');
  const { isNewChat, setIsNewChat } = useIsNewChatStore();
  const { selectedBot, setSelectedBot } = useChatAiStore();
  const { isSideBarOpen, setIsSideBarOpen } = useIsOpenStore();
  const { currentChat, setCurrentChat } = useCurrentStore();
  const { isDarkMode } = useTernaryDarkMode();
  const { data: chats } = useGetAIChats();
  const { data: chatHistories, isLoading: isChatHistoriesLoading } = useGetAIChatsHistories(selectedBot?.username);
  const { data: chatMessages, refetch, isLoading: isChatMessagesLoading } = useGetAIChatsMessages(currentChat);
  const { mutateAsync: addChats, isPending: isAddingChatLoading } = useCreateAIChat();
  const { mutateAsync: createChat, isPending: isCreatingChatLoading } = useCreateAIBot();

  console.log(chatHistories?.chats, chatMessages);

  const onSubmit = async () => {
    if (!message.trim()) return;
    const data = {
      text: message.trim(),
      bot: selectedBot?.username,
    };
    try {
      if (isNewChat) {
        const response = await createChat(data);
        await addChats({ data, id: response.data.chat._id });
        setMessage('');
        refetch();
      } else {
        await addChats({ data, id: currentChat });
        setMessage('');
        refetch();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message, currentChat]);

  useEffect(() => {
    refetch();
  }, [refetch, message]);

  useEffect(() => {
    if (chatHistories?.chats?.length === 0) {
      setIsNewChat(true);
      setCurrentChat(null);
    } else {
      setCurrentChat(chatHistories?.chats[0]?._id);
      setIsNewChat(false);
    }
  }, [chatHistories, selectedBot]);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (textarea.scrollHeight > 80) {
      textarea.style.height = '80px';
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      <div className="grid grid-cols-[350px_1fr] h-screen max-w-[auto] p-0">
        <div
          className={`border-r border-default-200 dark:border-default-100 ${!isSideBarOpen && 'w-24'} h-full bg-[#f4f5f6] dark:bg-[#212327] py-8`}
        >
          {!isSideBarOpen ? (
            <div className="text-center space-y-12">
              <div className="text flex justify-center items-center">
                <Button
                  variant="primary"
                  onPress={() => setIsSideBarOpen(true)}
                  className="border-0 hover:bg-inherit bg-transparent"
                >
                  <LogoIcon light={isDarkMode} className="" />{' '}
                </Button>
              </div>
              <Tooltip
                key="Open sidebar"
                showArrow
                className="bg-blue-600"
                content={'Open sidebar'}
                placement="top-start"
              >
                <Button onPress={() => setIsSideBarOpen(true)} variant="ghost" className="border-0 bg-transparent">
                  <LuPanelRightClose size={30} />
                </Button>
              </Tooltip>
              <Tooltip key="New chat" showArrow className="bg-blue-600" content={'New chat'} placement="top-start">
                <Button onPress={() => setIsNewChat(true)} variant="ghost" className="border-0 bg-transparent">
                  <LuMessageSquarePlus size={30} />
                </Button>
              </Tooltip>
            </div>
          ) : (
            <>
              <div className={`text flex items-center justify-around`}>
                <p className="py-5 text-xl font-bold px-10">Chat AI Agents</p>
                <Tooltip
                  key="Close sidebar"
                  showArrow
                  className="bg-blue-600"
                  content={'Close sidebar'}
                  placement="bottom"
                >
                  <Button onPress={() => setIsSideBarOpen(false)} variant="ghost" className="border-0 bg-transparent">
                    <LuPanelLeftClose size={30} />
                  </Button>
                </Tooltip>
              </div>
              <div className="text-white mt-10 flex items-center justify-around">
                <Button
                  onPress={() => setIsNewChat(true)}
                  className="h-14 w-44 text-white font-semibold text-xl flex items-center bg-blue-600"
                  startContent={<LuMessageSquarePlus size={24} className="text-white" />}
                >
                  New Chat
                </Button>
                <div className="text">
                  <Tooltip
                    key="ai bot"
                    showArrow
                    className="bg-blue-600"
                    content={selectedBot ? selectedBot?.firstName + ' ' + selectedBot?.lastName : 'No agent selected'}
                    placement="bottom"
                  >
                    <Button className="bg-transparent">
                      {' '}
                      <Avatar
                        size="md"
                        src={'https://i.pravatar.cc/150?u=a042581f4e29026704d' || selectedBot?.image}
                      />{' '}
                    </Button>
                  </Tooltip>
                </div>
              </div>
              <div className="text-start px-5 mt-10">
                {chatHistories?.chats.length > 0 &&
                  chatHistories?.chats?.map((history, index) => (
                    <div key={index} className="text-start space-y-6 w-full">
                      <button
                        onClick={() => {
                          if (isNewChat) {
                            console.log(chatHistories?.chats[0]?._id);

                            setCurrentChat(chatHistories?.chats[0]?._id);
                            setIsNewChat(false);
                          }
                          setCurrentChat(history._id);
                          setIsNewChat(false);
                        }}
                        className={`w-full rounded-full pl-4 my-1 h-12 ${currentChat === history._id ? 'bg-default-200' : 'bg-transparent'} text-start hover:bg-default-200`}
                      >
                        {history.title}
                      </button>
                    </div>
                  ))}
              </div>
              {!isChatHistoriesLoading && chatHistories?.chats.length === 0 && (
                <div className="text-xl font-semibold min-h-[50vh] flex justify-center items-center">
                  No chats available
                </div>
              )}
            </>
          )}
          <div className="divide-y divide-default-200 dark:divide-default-100">
            {isChatHistoriesLoading &&
              Array.from({ length: 5 }, (_, index) => (
                <div className="text" key={index}>
                  <AiDataSkeleton />
                </div>
              ))}
          </div>
        </div>
        {isNewChat ? (
          <div
            className={`flex flex-col w-full ${isSideBarOpen ? '' : '-ml-40'}  mx-auto items-center justify-center min-h-screen text-white p-6`}
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                {selectedBot ? (
                  <h1 className="text-2xl font-bold">Hi, I'm {selectedBot?.firstName + ' ' + selectedBot.lastName}.</h1>
                ) : (
                  <h1 className="text-2xl font-bold">Hi, Kindly select an agent below.</h1>
                )}
              </div>
              {selectedBot && <p className="text-gray-400 mt-2">How can I help you today?</p>}
            </div>

            <div className={`bg-[#f4f5f6] dark:bg-[#212327] p-4 rounded-lg mt-6 w-4/5 `}>
              <div className=" flex items-center space-x-3">
                <div className="w-full flex">
                  <textarea
                    ref={textareaRef}
                    placeholder={
                      selectedBot
                        ? 'Chat with ' + selectedBot?.firstName + ' ' + selectedBot?.lastName
                        : 'Chat ai agent...'
                    }
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    onInput={handleInput}
                    rows="1"
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none resize-none overflow-hidden min-h-[40px] max-h-48"
                  />
                  <div>
                    <Button
                      disabled={isCreatingChatLoading}
                      onPress={onSubmit}
                      type="submit"
                      isIconOnly
                      radius="full"
                      color="primary"
                    >
                      {isCreatingChatLoading ? (
                        <LuLoaderCircle className="animate-spin" size={20} />
                      ) : (
                        <TbSend size="20" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex justify-between">
                <div className="text flex space-x-2">
                  <Select
                    label="Choose AI Assitant"
                    className="w-56 h-12"
                    selectedKey={selectedBot?._id}
                    onSelectionChange={(key) => {
                      const found = chats?.bots?.find((chat) => chat._id === key.currentKey);
                      setSelectedBot(found);
                      setCurrentChat(null);
                    }}
                    variant="bordered"
                    itemClasses={{
                      base: 'flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm text-white hover:bg-gray-600 transition',
                    }}
                  >
                    {chats?.bots?.map((bot) => (
                      <SelectItem key={bot._id} value={bot._id}>
                        {bot.firstName + ' ' + bot.lastName}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`flex relative flex-col w-full ${isSideBarOpen ? '' : '-ml-40'}  mx-auto items-center justify-center min-h-screen text-white`}
          >
            <div className="overflow-x-auto w-full min-h-[70vh] h-full items-center justify-center space-x-2">
              <ScrollShadow className="w-full h-screen pt-10 pb-80" size={20}>
                {chatMessages?.messages?.map((msg) => (
                  <div key={msg._id}>
                    {msg.role === 'user' ? (
                      <div className="text-end w-2/3 mx-auto">
                        <button className="text-xl text-start rounded-lg mx-auto bg-[#414158] p-3 ">
                          {isChatMessagesLoading ? message : msg.content}
                        </button>
                      </div>
                    ) : (
                      <div className="text-start w-2/3 mx-auto my-3">
                        <button className="text-xl text-start rounded-lg mx-auto p-3 ">
                          {isChatMessagesLoading ? <MessageSkeleton /> : msg.content}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
                <div className="divide-y divide-default-200 dark:divide-default-100">
                  {isChatMessagesLoading && (
                    <div className="text">
                      {' '}
                      <MessageSkeleton />
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollShadow>
            </div>
            <div className="text w-[97%] absolute bottom-[2px] pb-4 bg-[#f4f5f6] dark:bg-[#171717] flex justify-center">
              <div className={`bg-[#f4f5f6] bottom-4 dark:bg-[#212327] p-4 rounded-lg mt-6 w-4/5 border-gray-700`}>
                <div className=" flex items-center space-x-3">
                  <div className="w-full flex">
                    <textarea
                      ref={textareaRef}
                      placeholder={
                        selectedBot
                          ? 'Chat with ' + selectedBot?.firstName + ' ' + selectedBot?.lastName
                          : 'Chat ai agent...'
                      }
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onInput={handleInput}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault(); // Prevents adding a new line
                          onSubmit(); // Calls the submit function
                        }
                      }}
                      rows="1"
                      className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none resize-none overflow-hidden min-h-[40px] max-h-48"
                    />
                    <div>
                      <Button
                        disabled={isAddingChatLoading}
                        onPress={onSubmit}
                        type="submit"
                        isIconOnly
                        radius="full"
                        color="primary"
                      >
                        {isAddingChatLoading ? (
                          <LuLoaderCircle className="animate-spin" size={20} />
                        ) : (
                          <TbSend size="20" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex justify-between">
                  <div className="text flex space-x-2">
                    <Select
                      label="Choose AI Assistant"
                      className="w-56 h-12"
                      selectedKey={selectedBot?._id}
                      onSelectionChange={(key) => {
                        const found = chats?.bots?.find((chat) => chat._id === key.currentKey);
                        setSelectedBot(found);
                      }}
                      variant="bordered"
                      itemClasses={{
                        base: 'flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm text-white hover:bg-gray-600 transition',
                      }}
                    >
                      {chats?.bots?.map((bot) => (
                        <SelectItem key={bot._id} value={bot._id}>
                          {bot.firstName + ' ' + bot.lastName}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};

ChatWIthAgentsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  writers: PropTypes.array,
};

export default ChatWIthAgentsModal;
