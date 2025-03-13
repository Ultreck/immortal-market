import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { Avatar, Badge, Button, Input, Select, SelectItem, Tooltip } from '@heroui/react';
import { dateFormatter, getImageLink } from '@/lib/utils.js';
import { RiUploadCloud2Fill, RiUser3Fill } from 'react-icons/ri';
import { TbDotsVertical, TbSend } from 'react-icons/tb';
import {
  // useCreateAIBot,
  useCreateAIChat,
  useGetAIChats,
} from '@/api/ai-chat';
import AiDataSkeleton from '../components/AiDataSkeleton';
import {useChatAiStore, useIsNewChatStore} from '@/store/bot';
import useIsOpenStore from '@/store/chat-sidebar';
import { Controller, useForm } from 'react-hook-form';
// import { LuMessageSquareText } from 'react-icons/lu';
import { FaGlobe, FaPlus } from 'react-icons/fa6';
import HistoryDropdown from '../components/HistoryDropdown';
import ChatAiOptionDropdown from '../components/ChatAiOptionDropdown';
import { LuPanelLeftClose } from 'react-icons/lu';
import { LuPanelRightClose } from 'react-icons/lu';
import { LuMessageSquarePlus } from "react-icons/lu";
import { useTernaryDarkMode } from 'usehooks-ts';
import LogoIcon from '@/components/core/shared/LogoIcon.jsx';
import { HiPaperClip } from 'react-icons/hi';
import { useRef, useState } from 'react';
// import { Paperclip, UploadCloud, Globe } from "lucide-react";

// import useChatStore from '@/sore/bot';

const ChatWIthAgentsModal = ({ isOpen, onClose }) => {
  const textareaRef = useRef(null);
  const [message, setMessage] = useState("");
  const { handleSubmit, control, setValue } = useForm();
  const { isNewChat, setIsNewChat } = useIsNewChatStore();
  const { selectedBot, setSelectedBot } = useChatAiStore();
  const { isSideBarOpen, setIsSideBarOpen } = useIsOpenStore();
  const { data: chats, isLoading: isChatLoading } = useGetAIChats();
  const { isDarkMode } = useTernaryDarkMode();
  const { mutateAsync: createChat, isPending: isCreatingChatLoading } = useCreateAIChat(selectedBot?._id);
  console.log(chats, isCreatingChatLoading, isNewChat);

  const onSubmit = async (chat) => {
    const data = {
      text: chat.chat,
      bot: selectedBot.bot,
    };
    try {
      await createChat(data);
      console.log(data);
      setValue('chat', ' ');
    } catch (error) {}
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    console.log("It's right clicked");
  };
  const bots = [
    { id: "deepthink", name: "DeepThink (R1)" },
    { id: "neuralmind", name: "NeuralMind (X2)" },
    { id: "aivoyager", name: "AI Voyager (Z3)" },
    { id: "synthchat", name: "SynthChat (S1)" },
    { id: "hypercore", name: "HyperCore (H5)" },
  ];
  const handleInput = (e) => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; 
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (textarea.scrollHeight > 80) {
      textarea.style.height = "80px"; 
      textarea.style.overflowY = "auto";
    } else {
      textarea.style.overflowY = "hidden";
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
                <Button variant="primary" onPress={() => setIsSideBarOpen(true)} className="border-0 hover:bg-inherit bg-transparent">
                <LogoIcon light={isDarkMode} className="" />{' '}
                </Button>
              </div>
              <Tooltip key="Open sidebar" showArrow color="success" content={'Open sidebar'} placement="top-start">
                <Button onPress={() => setIsSideBarOpen(true)} variant="ghost" className="border-0 bg-transparent">
                  <LuPanelRightClose size={30} />
                </Button>
              </Tooltip>
              <Tooltip key="New chat" showArrow color="success" content={'New chat'} placement="top-start">
                <Button onPress={() => setIsNewChat(true)} variant="ghost" className="border-0 bg-transparent">
                  <LuMessageSquarePlus size={30}/>
                </Button>
              </Tooltip>
            </div>
          ) : (
            <div className={`text flex items-center justify-around`}>
              <p className="py-5 text-xl font-bold px-10">Chat AI Agents</p>
              <Tooltip key="Close sidebar" showArrow color="success" content={'Close sidebar'} placement="bottom">

              <Button onPress={() => setIsSideBarOpen(false)} variant="ghost" className="border-0 bg-transparent">
                <LuPanelLeftClose size={30} />
              </Button>
              </Tooltip>
            </div>
          )}
          <div className="divide-y divide-default-200 dark:divide-default-100">
            {chats &&
              chats.chats?.map((bot, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 cursor-pointer py-4 px-10"
                  onClick={() => {
                    setSelectedBot(bot);
                  }}
                >
                  <div className="flex items-center gap-2 space-x-4">
                    <Badge content="AI" placement="bottom-right" size="sm">
                      <Avatar
                        radius="full"
                        src={getImageLink(bot.image)}
                        showFallback
                        fallback={<RiUser3Fill size="24" />}
                        className="!h-[30px] !w-[30px]"
                      />
                    </Badge>
                    <div className="space-y-2">
                      <h4 className="text-base font-medium leading-none text-default-600">{bot.bot}</h4>
                      <h5 className="text-sm font-medium leading-none text-default-500">{bot.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            {isChatLoading &&
              Array.from({ length: 8 }, (_, index) => (
                <div className="text" key={index}>
                  <AiDataSkeleton />
                </div>
              ))}
          </div>
        </div>
        {selectedBot && (
          <div onContextMenu={handleRightClick} className="relative w-full">
            <div className="flex items-center justify-between gap-4 p-4 border-b border-default-200">
              <div className="flex items-center gap-2 space-x-4">
                <Badge content="AI" placement="bottom-right" size="sm">
                  <Avatar
                    radius="full"
                    src={getImageLink(selectedBot?.image)}
                    showFallback
                    fallback={<RiUser3Fill size="24" />}
                    className="!h-[40px] !w-[40px]"
                  />
                </Badge>
                <div className="space-y-2">
                  <h4 className="text-base font-medium leading-none text-default-600">{selectedBot?.bot}</h4>
                  <h5 className="text-sm font-medium leading-none text-default-500">{selectedBot?.title}</h5>
                </div>
              </div>
              <div className="text flex items-center">
                <Button title="Create new chat" className="rounded-full outline-none ring-0" variant="">
                  <FaPlus className="text-gray-400" size={16} />
                </Button>
                <HistoryDropdown />
                <ChatAiOptionDropdown />
              </div>
            </div>
            <div className="gap-4 absolute bottom-0 w-full px-6 py-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  <Controller
                    name="chat"
                    control={control}
                    rules={{ required: 'This field is required' }}
                    // disabled={isCreateLoading}
                    render={({ field, fieldState: { error } }) => {
                      return (
                        <div className="pt-[1px] flex gap-3 px-6 items-center">
                          <Input
                            radius="full"
                            color="default"
                            size="lg"
                            variant="flat"
                            placeholder="Ask me anything.."
                            value={field.value}
                            onChange={field.onChange}
                            errorMessage={error?.message}
                            isInvalid={!!error?.message}
                            isDisabled={field.disabled}
                          />
                          <div>
                            <Button type="submit" isIconOnly radius="full" color="primary">
                              <TbSend size="20" />
                            </Button>
                          </div>
                        </div>
                      );
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-6">

      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <img src="/logo.svg" alt="DeepSeek Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Hi, I'm DeepSeek.</h1>
        </div>
        <p className="text-gray-400 mt-2">How can I help you today?</p>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg  mt-6 w-full max-w-2xl border border-gray-700">
        <div className=" flex items-center space-x-3 ">
          <textarea
            ref={textareaRef}
            placeholder="Message DeepSeek..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInput={handleInput}
            rows="1"
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none resize-none overflow-hidden min-h-[40px] max-h-48"
          />

          <button className="text-gray-400 hover:text-white">
            <HiPaperClip className="w-5 h-5" />
          </button>

          <button
            className={`text-gray-400 hover:text-white transition ${
              message.trim() ? "text-blue-500 hover:text-blue-400" : ""
            }`}
            disabled={!message.trim()}
          >
            <RiUploadCloud2Fill className="w-5 h-5" />
          </button>
        </div>


        <div className="mt-3 flex space-x-2">
           <Select
            label="Choose AI Bot"
            className="w-56 h-12"
            selectedKey={selectedBot}
            onSelectionChange={setSelectedBot}
            variant='bordered'
            itemClasses={{
              base: "flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm text-white hover:bg-gray-600 transition",
            }}
          >
            {bots.map((bot) => (
              <SelectItem key={bot.id} value={bot.id}>
                {bot.name}
              </SelectItem>
            ))}
          </Select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg text-sm text-white hover:bg-gray-600 transition">
            <FaGlobe className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
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
