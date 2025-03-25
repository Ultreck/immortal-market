import { useGetPoll, useDeletePoll, useGetPollResponses } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, addToast } from '@heroui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LuPencil } from 'react-icons/lu';
import EditPoll from './EditPoll';
import { TbDotsVertical, TbTrash } from 'react-icons/tb';

const PollDetails = ({ page }) => {
  const [view, setView] = useState('details');
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { poll } = {} } = useGetPoll(business, id, page);
  const { data: { responses } = {} } = useGetPollResponses(business, id, page, poll?.id);
  const { mutateAsync: deletePoll, isPending: isDeletingPoll } = useDeletePoll(business, id, page);

  const onDeletePoll = async () => {
    try {
      await deletePoll({ id: poll.id });
    } catch (error) {
      addToast({
        title: 'Error',
        description: error?.response?.data?.message || 'Failed to delete poll',
        color: 'error',
      });
    }
  };

  const calculatePercentage = (option) => {
    if (!responses || responses.length === 0) return 0;
    const count = responses.filter((response) => response.selection === option).length;
    return Math.round((count / responses.length) * 100);
  };

  return (
    <div>
      {view === 'details' && (
        <div className="px-10 py-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-medium">Poll Details</h3>
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly variant="light" className="text-base" isLoading={isDeletingPoll}>
                  <TbDotsVertical size="20" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Poll actions" disabledKeys={isDeletingPoll ? ['delete'] : []}>
                <DropdownItem
                  startContent={<TbTrash size="18" />}
                  className="text-danger"
                  color="danger"
                  onPress={onDeletePoll}
                >
                  Delete Poll
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div>
            <h4 className="text-lg mb-4">{poll?.question}</h4>
            <div className="space-y-3">
              {poll?.options.map((option) => {
                const percentage = calculatePercentage(option);
                return (
                  <div
                    key={option}
                    className="relative bg-default-100 rounded-2xl px-5 py-4 cursor-pointer transition-all border-default-200 hover:border-default-300"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-base">{option}</span>
                      <span className="text-base font-medium">{percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-default-200 rounded-full overflow-hidden mt-2">
                      <div className={`h-full bg-blue-500 rounded-full`} style={{ width: `${percentage}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-default-500 text-sm mt-4">Total votes: {responses?.length || 0}</div>
          </div>
          <div className="mt-8">
            <Button
              onPress={() => setView('edit')}
              color="default"
              variant="flat"
              className="text-base px-5"
              radius="full"
              startContent={<LuPencil size="18" />}
            >
              Edit poll
            </Button>
          </div>
        </div>
      )}
      {view === 'edit' && <EditPoll page={page} onBack={() => setView('details')} />}
    </div>
  );
};

PollDetails.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PollDetails;
