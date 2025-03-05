import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { Avatar, Badge, Button, Input } from '@heroui/react';
import { dateFormatter, getImageLink } from '@/lib/utils.js';
import { RiUser3Fill } from 'react-icons/ri';
import { TbDotsVertical, TbSend } from 'react-icons/tb';
import {
  // useCreateAIBot,
  useCreateAIChat,
  useGetAIChats,
} from '@/api/ai-chat';
import AiDataSkeleton from '../components/AiDataSkeleton';
import useChatAiStore from '@/store/bot';
import { Controller, useForm } from 'react-hook-form';
import { LuMessageSquareText } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa6';
import HistoryDropdown from '../components/HistoryDropdown';
import ChatAiOptionDropdown from '../components/ChatAiOptionDropdown';

// import useChatStore from '@/sore/bot';

const ChatWIthAgentsModal = ({ isOpen, onClose }) => {
  const { handleSubmit, control, setValue } = useForm();
  const { selectedBot, setSelectedBot } = useChatAiStore();
  const { data: chats, isLoading: isChatLoading } = useGetAIChats();
  const { mutateAsync: createChat, isPending: isCreatingChatLoading } = useCreateAIChat(selectedBot?._id);
  console.log(chats);

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
    setIsChatOpen(true);
    console.log("It's right clicked");
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      <div className="grid grid-cols-[350px_1fr] h-screen max-w-[auto] p-0">
        <div className="border-r border-default-200 dark:border-default-100 h-full bg-[#f4f5f6] dark:bg-[#0b161f] py-8">
          <p className="mb-4 text-xl font-bold px-10">Chat with Immortal Agents</p>
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
                  <FaPlus className='text-gray-400' size={16} />
                </Button>
                <HistoryDropdown />
               <ChatAiOptionDropdown/>
              </div>
            </div>
            <div className="flex items-start gap-2.5 p-6 min-h-[85vh]">
              <Badge content="AI" placement="bottom-right" size="sm">
                <Avatar
                  radius="full"
                  src={getImageLink(selectedBot?.image)}
                  showFallback
                  fallback={<RiUser3Fill size="24" />}
                  className="!h-[30px] !w-[30px]"
                />
              </Badge>
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 ml-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{selectedBot?.bot}</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {dateFormatter(selectedBot?.updatedAt)}
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                  That&#39;s awesome. I think our users will really appreciate the improvements.
                </p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
              </div>
              <div className="text">
                <button
                  id="dropdownMenuIconButton"
                  data-dropdown-toggle="dropdownDots"
                  data-dropdown-placement="bottom-start"
                  className=" self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                  >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </button>
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
              {/* <div className="flex w-full items-center space-x-2 px-8 md:px-10">
              <Input
                radius="full"
                color="default"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  }}
                  onKeyUp={(e) => {
                    if (e.key.toLowerCase() === 'enter') {
                      // Handle enter key press
                      }
                      }}
                type="text"
                variant="flat"
                placeholder="Ask me anything.."
                classNames={{ input: 'text-base px-4' }}
              />
              <div>
                <Button isIconOnly radius="full" color="primary">
                  <TbSend size="20" />
                </Button>
              </div>
            </div> */}
            </div>
          </div>
        )}
        {!selectedBot && (
          <div className="flex items-center justify-center max-w-full h-screen">
            <div className="text-center">
              <LuMessageSquareText size={70} className="text-default-200 mx-auto" />
              <p className="text-default-400">Start chatting with AIs</p>
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
