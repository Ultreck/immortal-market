import { useGetPoll, useGetPollResponses } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { Button } from '@heroui/react';
import PropTypes from 'prop-types';
import { CgPoll } from 'react-icons/cg';

const PollStatus = ({ page }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { poll } = {} } = useGetPoll(business, id, page);
  const { data: { responses } = {} } = useGetPollResponses(business, id, page, poll?.id);
  const updateStore = useDesignStore((state) => state.updateStore);

  return (
    <>
      {poll ? (
        <Button
          className="flex items-center gap-2 text-base px-2 font-semibold"
          variant="flat"
          color="default"
          size="sm"
          radius="full"
          onPress={() => updateStore({ tool: 'poll' })}
        >
          <CgPoll size={16} />
          {responses ? responses.length : null}
        </Button>
      ) : null}
    </>
  );
};

PollStatus.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PollStatus;
