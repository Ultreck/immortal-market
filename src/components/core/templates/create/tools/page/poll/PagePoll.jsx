import { useGetPoll } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { Badge, Button, Popover, PopoverContent, PopoverTrigger, Spinner } from '@heroui/react';
import { CgPoll } from 'react-icons/cg';
import NoPoll from './NoPoll';
import PropTypes from 'prop-types';
import PollDetails from './PollDetails';

const PagePoll = ({ page }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { poll } = {}, isLoading: isPollLoading } = useGetPoll(business, id, page);

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <Button isIconOnly variant="light" color="default" aria-label="Adjust font size" className="text-base">
          <Badge
            color="success"
            content=""
            isInvisible={!poll}
            classNames={{ badge: 'translate-y-[-10px] translate-x-[10px]' }}
          >
            <CgPoll size="20" />
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200 w-[500px] max-h-[600px] overflow-y-auto block">
        {isPollLoading ? (
          <div className="px-6 py-6 space-y-4 flex items-center justify-center">
            <Spinner variant="dots" />
          </div>
        ) : (
          <>{!poll ? <NoPoll page={page} /> : <PollDetails page={page} />}</>
        )}
      </PopoverContent>
    </Popover>
  );
};

PagePoll.propTypes = {
  page: PropTypes.string.isRequired,
};

export default PagePoll;
