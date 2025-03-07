import { Button, Skeleton } from '@heroui/react';
import CommentItem from '@/components/core/templates/create/comment/CommentItem.jsx';
import NoData from '@/components/ui/NoData.jsx';
import { useGetComments } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useDesignStore from '@/store/design.js';
import PropTypes from 'prop-types';
import { TbChevronLeft } from 'react-icons/tb';
import { HiX } from 'react-icons/hi';
import { useEffect } from 'react';

const TargetComments = ({ onBack, onClose }) => {
  const { id: business } = useBusiness();
  const design = useDesignStore((state) => state.id);
  const commentsTargetId = useDesignStore((state) => state.commentsTargetId);
  const updateStore = useDesignStore((state) => state.updateStore);
  const { data: { comments = [] } = {}, isLoading: isCommentsLoading } = useGetComments({
    business,
    design,
    resolved: false,
    targetId: commentsTargetId,
  });

  const handleClick = (comment) => {
    updateStore({ activeComment: comment });
  };

  useEffect(() => {
    if (commentsTargetId && !isCommentsLoading && comments.length === 0) {
      updateStore({ commentsTargetId: null });
    }
  }, [comments.length, commentsTargetId, isCommentsLoading, updateStore]);

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-6 px-8">
        <div className="flex items-center space-x-3">
          <Button variant="light" color="default" radius="full" size="sm" onPress={onBack} isIconOnly>
            <TbChevronLeft size="20" />
          </Button>
          <h2 className="text-lg font-medium leading-none">Comments {comments.length ? `(${comments.length})` : ''}</h2>
        </div>
        <Button onPress={onClose} isIconOnly variant="light" color="danger">
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

TargetComments.propTypes = {
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TargetComments;
