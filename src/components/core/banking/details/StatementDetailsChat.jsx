import { useCallback, useRef, useState } from 'react';
import Drawer from '@/components/global/Drawer.jsx';
import IconButton from '@/components/global/IconButton.jsx';
import { IconRobot, IconSend, IconSparkles, IconUser } from '@tabler/icons-react';
import { io } from 'socket.io-client';
import { useIsomorphicLayoutEffect, useMount, useUnmount } from 'react-use';
import Loader from '@/components/global/Loader.jsx';
import { formatCurrency, getModeArray, shuffle } from '@/lib/utils.js';
import PropTypes from 'prop-types';

const baseURL = import.meta.env.VITE_BASE_URL;

const generatePrompt = (data) => {
  const { highlight, weekly_analytics, salary_details, debit_expenses } = data || {};
  if (!highlight) return '';
  return `Answer the question based on the context below. If the question cannot be answered using the information provided answer with "I don't know". You name is Lens, you are a friendly AI assistant that helps users provide answers from an analyzed bank statement using the context provided. The following is some data scraped from a Nigerian bank statement for ${
    data?.name
  } from ${data?.highlight?.from_statement} to ${
    data?.highlight?.to_statement
  }. Answer any question pertaining to the bank statement data provided. Make all amounts comma separated, rounded to 2dp and prepend with ₦, for example ₦2,000,000. Say you don’t know if you are unable to answer based on the context provided.

###
Context:
Total deposit: ${highlight?.total_deposit}
Total withdrawal: ${highlight?.total_withdrawal}
Date analyzed: ${data?.createdAt}
Average monthly deposit: ${highlight?.average_monthly_deposit}
Average monthly withdrawal: ${highlight?.average_monthly_withdraw}
Average weekly deposit: ${highlight?.average_weekly_deposit}
Average weekly withdrawal: ${highlight?.average_weekly_withdraw}
Average daily deposit: ${highlight?.average_daily_deposit}
Average daily withdrawal: ${highlight?.average_daily_withdrawal}
Net monthly earnings: ${highlight?.net_monthly_earnings}
Constant salary: ${highlight?.['no_month'] - highlight?.['most_frequent_salary_amount'].length > 3}
Most frequent salary: ${getModeArray(highlight?.most_frequent_salary_amount)
    ?.map?.((a) => formatCurrency(a))
    .join(', ')}
Average salary: ${highlight.average_salary}
Last deposit date: ${highlight.last_deposit_date}
Last withdrawal date: ${highlight.last_withdrawal_date}
Highest deposit week: ${highlight.highest_deposit_week}
Average daily balance: ${highlight.average_daily_balance}
Percentage of days with low balance: ${highlight.low_balance_percent_days}
Most frequent balance range: ${highlight.balance_highest_band}
Total turnover: ${highlight.credit_turnover}
Total spent on transfer: ${highlight.total_amount_recipient}
Total spent on ATM withdrawals: ${highlight.total_atm_amount}
Total spent on POS: ${highlight.total_pos_amount}
Total spent on utility: ${highlight.total_utility}
Total spent on bank charges: ${highlight.bank_charges}
Total spent on gambling: ${highlight.total_gamble}
Total spent on religious giving: ${highlight.religion_total}
Total spent on entertainment: ${highlight.total_entertainment}
Total spent on investment: ${highlight.total_investment}
Weekly balances (in JSON): ${JSON.stringify(weekly_analytics)}
Salary details (in JSON): ${JSON.stringify(salary_details)}
Debit expenses (in JSON): ${JSON.stringify(debit_expenses)}
Cash flow (in JSON): ${JSON.stringify(data?.cashFlow)}

###
`;
};

const suggestions = shuffle([
  'What is the balance in the account after considering the total deposit and total withdrawal amounts?',
  'What is the net balance of the bank account during the analyzed period?',
  'What is the average monthly deposit amount?',
  'What is the average monthly withdrawal amount?',
  'Did the account have any overdrafts or negative balances during the analyzed period?',
  'What was the largest single deposit made?',
  'What was the largest single withdrawal made?',
  'Was there any regular or recurring transaction during the analyzed period?',
  'Can you provide details of any transaction categorized as fees or charges?',
  'Can you provide a breakdown of the deposits and withdrawals by month?',
  'Are there any significant transactions during a specific period?',
]);

const StatementDetailsChat = ({ isOpen, onClose, statement, result }) => {
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
    const prompt = generatePrompt({ ...statement, ...result });
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

StatementDetailsChat.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  statement: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
};

export default StatementDetailsChat;
