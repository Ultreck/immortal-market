import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { useCreatePoll, useGetPolls } from '@/api/business.js';
import { useAuth } from '@/hooks/use-auth.jsx';
import { addToast } from '@heroui/react';

export const Poll = ({ element }) => {
  return <PollContent element={element} className="cursor-auto" />;
};

export const PollPresent = ({ element }) => {
  const { user } = useAuth();
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { polls = [] } = {} } = useGetPolls({ business, design: id, element: element.id });
  const { mutateAsync: createPoll, isPending: isCreatePollLoading } = useCreatePoll(business, id);
  const hasVoted = polls.find((poll) => poll.user === user._id)?.option;

  const handleClick = async (pollId, optionId) => {
    try {
      await createPoll({ element: pollId, option: optionId });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <PollContent
      element={element}
      onClick={handleClick}
      className="cursor-auto hover:brightness-125"
      hasVoted={hasVoted}
      isLoading={isCreatePollLoading}
      polls={polls}
    />
  );
};

const PollContent = ({ element, className = '', onClick = () => {}, polls = [], isLoading = false, hasVoted = '' }) => {
  return (
    <div
      style={{
        ...element.style,
        width: element.size.width,
        height: element.size.height,
      }}
      className={cn('transition-all flex flex-col  !p-5 duration-300', className)}
    >
      <h1 className="font-bold flex-1 basis-2/3">{element.question}</h1>
      <div className="flex flex-col  flex-1 gap-2 basis-1/3 mt-2">
        {element?.options?.map((option, index) => {
          const optionPolls = polls.filter((poll) => poll.option === option.id);
          const value = (optionPolls.length / polls.length) * 100;
          return (
            <button
              onClick={() => onClick(element.id, option.id)}
              key={index}
              disabled={hasVoted || isLoading}
              style={{
                background: hasVoted === option.id ? element.style.color : element.style.background,
                color: hasVoted === option.id ? element.style.background : element.style.color,
              }}
              className={cn('flex p-3 rounded text-sm justify-between brightness-75 cursor text-start ', {
                'hover:brightness-90': !hasVoted,
                ' border ': hasVoted === option.id,
              })}
            >
              <span>{option.text}</span>
              {hasVoted && <span>{value}%</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};
Poll.propTypes = {
  element: PropTypes.object.isRequired,
};
PollPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
PollContent.propTypes = {
  element: PropTypes.object.isRequired,
  className: PropTypes.string,
};
