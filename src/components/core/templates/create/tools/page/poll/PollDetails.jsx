import { useGetPoll, useDeletePoll } from '@/api/design';
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
          <div className="border border-default-200 rounded-2xl p-4 text-base mb-6">
            <p className="text-sm opacity-70 mb-2">Question</p>
            <p className="font-medium">{poll.question}</p>
          </div>
          <div className="border border-default-200 rounded-2xl text-base">
            <p className="text-sm opacity-70 px-4 pt-3 pb-2">Options</p>
            <div className="divide-y divide-default-200">
              {poll.options.map((option, index) => (
                <div key={index} className="flex items-center px-4 py-2">
                  <p className="opacity-70">{option}</p>
                </div>
              ))}
            </div>
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
