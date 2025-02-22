import Drawer from '@/components/ui/Drawer.jsx';
import PropTypes from 'prop-types';
import { Avatar, Badge, Button, Input } from '@heroui/react';
import { getImageLink } from '@/lib/utils.js';
import { RiUser3Fill } from 'react-icons/ri';
import { useState } from 'react';
import { TbDotsVertical, TbSend } from 'react-icons/tb';
import { useGetChats } from '@/api/chat.js';

const ChatWIthAgentsModal = ({ isOpen, onClose, writers }) => {
  const [writer, setWriter] = useState(writers[0]);
  const [value, setValue] = useState('');

  const { data: chats, isLoading: isChatHistoryLoading } = useGetChats({ writer });
  console.log({ chats, isChatHistoryLoading });

  return (
    <Drawer isOpen={isOpen} onClose={onClose} width={1200} padding={false}>
      <div className="grid grid-cols-[350px_1fr] h-screen max-w-[auto] p-0">
        <div className="border-r border-default-200 dark:border-default-100 h-full bg-[#f4f5f6] dark:bg-[#0b161f] py-8">
          <p className="mb-4 text-xl font-bold px-10">Chat with Immortal Agents</p>
          <div className="divide-y divide-default-200 dark:divide-default-100">
            {writers?.map((writer, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 cursor-pointer py-4 px-10"
                onClick={() => setWriter(writer)}
              >
                <div className="flex items-center gap-2 space-x-4">
                  <Badge content="AI" isInvisible={writer.type !== 'ai'} placement="bottom-right" size="sm">
                    <Avatar
                      radius="full"
                      src={getImageLink(writer.image)}
                      showFallback
                      fallback={<RiUser3Fill size="24" />}
                      className="!h-[30px] !w-[30px]"
                    />
                  </Badge>
                  <div className="space-y-2">
                    <h4 className="text-base font-medium leading-none text-default-600">
                      {writer.firstName} {writer.lastName}
                    </h4>{' '}
                    <h5 className="text-sm font-medium leading-none text-default-500">{writer.email}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full">
          <div className="flex items-center justify-between gap-4 p-4 border-b border-default-200">
            <div className="flex items-center gap-2 space-x-4">
              <Badge content="AI" isInvisible={writer.type !== 'ai'} placement="bottom-right" size="sm">
                <Avatar
                  radius="full"
                  src={getImageLink(writer.image)}
                  showFallback
                  fallback={<RiUser3Fill size="24" />}
                  className="!h-[40px] !w-[40px]"
                />
              </Badge>
              <div className="space-y-2">
                <h4 className="text-base font-medium leading-none text-default-600">
                  {writer.firstName} {writer.lastName}
                </h4>{' '}
                <h5 className="text-sm font-medium leading-none text-default-500">{writer.email}</h5>
              </div>
            </div>
            <TbDotsVertical />
          </div>
          <div className="flex items-start gap-2.5 p-6">
            <Badge content="AI" isInvisible={writer.type !== 'ai'} placement="bottom-right" size="sm">
              <Avatar
                radius="full"
                src={getImageLink(writer.image)}
                showFallback
                fallback={<RiUser3Fill size="24" />}
                className="!h-[30px] !w-[30px]"
              />
            </Badge>
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 ml-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                That&#39;s awesome. I think our users will really appreciate the improvements.
              </p>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
            </div>
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              data-dropdown-placement="bottom-start"
              className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
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
          <div className="gap-4 absolute bottom-0 w-full px-6 py-4">
            <div className="flex w-full items-center space-x-2 px-8 md:px-10">
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
