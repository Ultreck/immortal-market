import { useState } from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Skeleton } from '@nextui-org/react';
import useBusiness from '@/hooks/use-business';
import useTemplateStore from '@/store/template';
import { useGetComments } from '@/api/business';
import { LuListFilter } from 'react-icons/lu';
import { HiChevronDown } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';
import NoData from '@/components/ui/NoData.jsx';
import CommentItem from '@/components/core/templates/create/comment/CommentItem.jsx';

const CommentsList = ({ onClose }) => {
  const { id: business } = useBusiness();
  const [filter, setFilter] = useState('pending');
  const design = useTemplateStore((state) => state.template.id);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { data: { comments = [] } = {}, isLoading: isCommentsLoading } = useGetComments({
    business,
    design,
    resolved: filter === 'resolved' ? true : filter === 'pending' ? false : null,
  });

  const handleClick = (comment) => {
    updateTemplate({ activeComment: comment });
  };

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-6 px-8">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="text-base capitalize"
              startContent={<LuListFilter size="20" />}
              endContent={<HiChevronDown size="20" />}
            >
              {filter}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Comments filter"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[filter]}
            onSelectionChange={(e) => {
              if (e.size) setFilter(Array.from(e)[0]);
            }}
          >
            <DropdownItem key="all" textValue="All">
              <span className="text-base">All</span>
            </DropdownItem>
            <DropdownItem key="pending" textValue="Pending">
              <span className="text-base">Pending</span>
            </DropdownItem>
            <DropdownItem key="resolved" textValue="Resolved">
              <span className="text-base">Resolved</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Button onClick={onClose} isIconOnly variant="light" color="danger">
          <HiX size="20" />
        </Button>
      </div>
      <div>
        {isCommentsLoading ? (
          <div className="px-8 space-y-3">
            <Skeleton className="w-full rounded-2xl h-[80px]" />
            <Skeleton className="w-full rounded-2xl h-[80px]" />
          </div>
        ) : (
          <>
            {!!comments.length && (
              <div className="divide-y divide-default-200 -mb-6">
                {comments.map((comment) => (
                  <CommentItem key={comment._id} comment={comment} onClick={() => handleClick(comment)} />
                ))}
              </div>
            )}
            {!comments.length && (
              <div className="px-8">
                <NoData text="No comments" className="py-10" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

CommentsList.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CommentsList;
