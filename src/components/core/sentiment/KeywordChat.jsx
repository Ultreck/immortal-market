import { useCallback, useRef, useState } from 'react';
import Drawer from '@/components/ui/Drawer.jsx';
import IconButton from '@/components/ui/IconButton.jsx';
import { IconRobot, IconSend, IconSparkles, IconUser } from '@tabler/icons-react';
import { io } from 'socket.io-client';
import { useIsomorphicLayoutEffect, useMount, useUnmount } from 'react-use';
import Loader from '@/components/ui/Loader.jsx';
import { shuffle } from '@/lib/utils.js';
// import { formatCurrency, getModeArray, shuffle } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const baseURL = import.meta.env.VITE_BASE_URL;

const generatePrompt = () => {
  return `Hello, how can I help you?.`;
};

const suggestions = shuffle([
  'How old are you?',
]);

const KeywordChat = ({ isOpen, onClose}) => {
  const socket = useRef(null);
  const [value, setValue] = useState('');
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const scrollEl = useRef(null);

  const handleConnected = useCallback(() => {
    setConnected(true);
  }, []);

  const handleDisconnect = useCallback(() => {
    setConnected(false);
    setMessages([]);
    setValue('');
    setWaiting(false);
  }, []);

  const handleMessage = useCallback((args) => {
    setMessages(args.messages);
    if (args.messages.at(-1).role === 'assistant') setWaiting(false);
  }, []);

  const start = () => {
    const prompt = generatePrompt();
    socket.current = io(baseURL, { query: { type: 'custom', prompt } });
    socket.current.on('connect', handleConnected);
    socket.current.on('disconnect', handleDisconnect);
    socket.current.on('message', handleMessage);
  };

  const send = () => {
    if (!value.length) return;
    socket.current.emit('message', { text: value });
    setValue('');
    setWaiting(true);
  };

  const sendFromSuggestion = (m) => {
    if (!m.length) return;
    socket.current.emit('message', { text: m });
    setWaiting(true);
  };

  const stop = () => socket.current?.disconnect();

  useMount(() => start());

  useUnmount(() => stop());

  useIsomorphicLayoutEffect(() => {
    if (!scrollEl.current) return;
    scrollEl.current.scrollTo(0, scrollEl.current.scrollHeight);
  }, [messages]);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} padding={false}>
      {!connected ? (
        <div className="p-20 flex flex-col items-center justify-center text-center h-full">
          <Loader />
          <p className="mt-4">Connecting..</p>
        </div>
      ) : (
        <div className="h-full flex flex-col overflow-hidden">
          <div className="border-b">
            <div className="max-w-xl mx-auto flex items-center px-10 py-6">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full">
                <IconRobot size="18" />
              </div>
              <p className="ml-2">Chat</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto" ref={scrollEl}>
            {!!messages.length && (
              <div className="w-full max-w-xl mx-auto flex flex-col px-10 py-6 space-y-6">
                {messages
                  .filter((m) => m.role.match(/^assistant|user$/i))
                  .map((message, i) => (
                    <div key={i}>
                      {message.role === 'assistant' && (
                        <div className="flex">
                          <div>
                            <div className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                              <IconRobot size="18" />
                            </div>
                          </div>
                          <p
                            className="ml-4 mt-1 whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: message.content }}
                          />
                        </div>
                      )}
                      {message.role === 'user' && (
                        <div className="flex">
                          <div>
                            <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                              <IconUser size="18" />
                            </div>
                          </div>
                          <p
                            className="ml-4 mt-1 whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: message.content }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {waiting ? (
              <div className="w-full max-w-xl mx-auto flex items-start px-10 py-4">
                <div className="border border-gray-300 rounded-xl px-4 py-1.5">Generating response...</div>
              </div>
            ) : (
              <div className="space-y-4 px-10 py-6">
                {[...(messages.length ? suggestions.slice(0, 3) : suggestions)].map((s) => (
                  <div
                    key={s}
                    onClick={() => sendFromSuggestion(s)}
                    className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-[1rem] leading-1 cursor-pointer rounded-2xl flex items-center"
                  >
                    <div>
                      <IconSparkles size="16" className="mr-4" />
                    </div>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="w-full max-w-xl mx-auto px-10 py-4 flex space-x-2 items-center">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyUp={(e) => {
                if (e.key.toLowerCase() === 'enter') send();
              }}
              type="text"
              className="bg-slate-200 w-full py-3 px-10 rounded-full"
              placeholder="Type your message here.."
            />
            <div>
              <IconButton onClick={send} icon={<IconSend size="20" />} rounded />
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
};

KeywordChat.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default KeywordChat;
