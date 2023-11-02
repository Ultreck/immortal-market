import { useCallback, useEffect, useRef, useState } from 'react';
import { IconDotsVertical, IconRobot, IconSend, IconTrash, IconUser } from '@tabler/icons-react';
import { io } from 'socket.io-client';
import { useIsomorphicLayoutEffect, useUnmount } from 'react-use';
import IconButton from '@/components/global/IconButton.jsx';
import Loader from '@/components/global/Loader.jsx';
import { useAuth } from '@/hooks/use-auth.jsx';
import SimpleDropdown from '@/components/global/SimpleDropdown.jsx';
import DeleteConversationAlert from '@/components/core/document/conversation/DeleteConversationAlert.jsx';
import ConversationTitle from '@/components/core/document/conversation/ConversationTitle.jsx';
import { useGetConversation } from '@/api/conversations.js';
import { useToast } from '@/hooks/use-toast.jsx';
import PropTypes from 'prop-types';

const baseURL = import.meta.env.VITE_BASE_URL;

const ChatWindow = ({ selected, onClose }) => {
  const toast = useToast();
  const { user } = useAuth();
  const socket = useRef(null);
  const scrollEl = useRef(null);
  const [value, setValue] = useState('');
  const [waiting, setWaiting] = useState(false);
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { data: { conversation = {} } = {}, isLoading: isConversationLoading } = useGetConversation(selected);

  const handleConnected = useCallback(() => {
    setConnected(true);
  }, []);

  const handleDisconnect = useCallback(() => {
    setConnected(false);
    setMessages([]);
    setValue('');
    setWaiting(false);
  }, []);

  const handleMessage = useCallback(async (args) => {
    setMessages(args.messages);
    if (args.messages.at(-1).role === 'assistant') setWaiting(false);
  }, []);

  const handleMessageError = useCallback(() => {
    toast.error('Something went wrong.');
  }, [toast]);

  const start = useCallback(() => {
    socket.current = io(baseURL, {
      query: { type: 'user', user: user._id, conversation: conversation._id },
    });
    socket.current.on('connect', handleConnected);
    socket.current.on('disconnect', handleDisconnect);
    socket.current.on('chatbot/message', handleMessage);
    socket.current.on('chatbot/message/error', handleMessageError);
  }, [conversation._id, handleConnected, handleDisconnect, handleMessage, handleMessageError, user._id]);

  const send = () => {
    if (!value.length || waiting) return;
    socket.current.emit('chatbot/message', { text: value });
    setValue('');
    setWaiting(true);
  };

  const stop = () => socket.current?.disconnect();

  useEffect(() => {
    handleDisconnect();
    if (!conversation._id) stop();
    else start();
    return () => stop();
  }, [handleDisconnect, conversation._id, start]);

  useUnmount(() => stop());

  useIsomorphicLayoutEffect(() => {
    if (!scrollEl.current) return;
    scrollEl.current.scrollTo(0, scrollEl.current.scrollHeight);
  }, [messages]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {!selected ? (
        <p className="m-auto opacity-50 py-10">Select a conversation to get started</p>
      ) : (
        <>
          {!connected || !messages.length || isConversationLoading ? (
            <div className="m-auto">
              <Loader />
            </div>
          ) : (
            <>
              <div className="absolute top-0 inset-x-0 pt-6 pb-10 z-50 bg-gradient-to-b from-white">
                <div className="max-w-3xl mx-auto flex space-x-3 items-center justify-between">
                  <ConversationTitle conversation={conversation} />
                  <SimpleDropdown
                    trigger={
                      <IconButton
                        variant="outlined"
                        icon={<IconDotsVertical size="20" />}
                        color="black"
                        rounded
                        size="sm"
                      />
                    }
                    items={[
                      { text: 'Delete', icon: <IconTrash size="18" />, onClick: () => setIsDeleteModalOpen(true) },
                    ]}
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto flex flex-col relative pt-20" ref={scrollEl}>
                <div className="w-full max-w-3xl mx-auto flex-1 flex flex-col">
                  {!!messages.length && (
                    <div className="w-full flex flex-col py-6 space-y-8">
                      {messages
                        .filter((m) => m.role.match(/^assistant|user$/i))
                        .map((message, i) => (
                          <div key={i}>
                            {message.role === 'assistant' && (
                              <div className="flex space-x-4 justify-start">
                                <div>
                                  <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full mt-1">
                                    <IconRobot size="18" />
                                  </div>
                                </div>
                                <p
                                  className="bg-slate-100 rounded-2xl px-6 py-3 max-w-[75%] whitespace-pre-wrap"
                                  dangerouslySetInnerHTML={{ __html: message.content }}
                                />
                              </div>
                            )}
                            {message.role === 'user' && (
                              <div className="flex space-x-4 justify-end">
                                <p
                                  className="bg-blue-500 text-white rounded-2xl px-6 py-3 max-w-[75%] whitespace-pre-wrap"
                                  dangerouslySetInnerHTML={{ __html: message.content }}
                                />
                                <div>
                                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mt-1">
                                    <IconUser size="18" />
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  )}
                  {waiting && (
                    <div className="w-full flex items-start py-4">
                      <div className="border border-gray-300 rounded-xl px-4 py-1.5">
                        <Loader size="sm" />
                      </div>
                    </div>
                  )}
                  {!messages.filter((m) => m.role !== 'system').length && !waiting && (
                    <p className="m-auto opacity-50 py-10">What type of statistic are you looking for?</p>
                  )}
                </div>
              </div>
              <div className="w-full py-5 border-t">
                <div className="max-w-3xl mx-auto flex space-x-3 items-center">
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    maxLength={120}
                    onKeyUp={(e) => {
                      if (e.key.toLowerCase() === 'enter') send();
                    }}
                    type="text"
                    className="bg-slate-100 w-full py-3 px-8 rounded-full"
                    placeholder="Type your message here.."
                  />
                  <div>
                    <IconButton onClick={send} icon={<IconSend size="20" />} rounded />
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {!!conversation && (
        <DeleteConversationAlert
          size="sm"
          isOpen={isDeleteModalOpen}
          onDone={onClose}
          onClose={() => setIsDeleteModalOpen(false)}
          conversation={conversation}
        />
      )}
    </div>
  );
};

ChatWindow.propTypes = {
  selected: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ChatWindow;
