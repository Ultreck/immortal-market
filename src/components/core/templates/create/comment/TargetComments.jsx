import { Button, Skeleton } from '@nextui-org/react';
import CommentItem from '@/components/core/templates/create/comment/CommentItem.jsx';
import NoData from '@/components/ui/NoData.jsx';
import { useGetComments } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { TbChevronLeft } from 'react-icons/tb';
import { HiX } from 'react-icons/hi';
import { useEffect } from 'react';

const TargetComments = ({ onBack, onClose }) => {
  const { id: business } = useBusiness();
  const design = useTemplateStore((state) => state.template.id);
  const commentsTargetId = useTemplateStore((state) => state.template.commentsTargetId);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { data: { comments = [] } = {}, isLoading: isCommentsLoading } = useGetComments({
    business,
    design,
    resolved: false,
    targetId: commentsTargetId,
  });

  const handleClick = (comment) => {
    updateTemplate({ activeComment: comment });
  };

  useEffect(() => {
    if (commentsTargetId && !isCommentsLoading && comments.length === 0) {
      updateTemplate({ commentsTargetId: null });
    }
  }, [comments.length, commentsTargetId, isCommentsLoading, updateTemplate]);

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-6 px-8">
        <div className="flex items-center space-x-3">
          <Button variant="light" color="default" radius="full" size="sm" onClick={onBack} isIconOnly>
            <TbChevronLeft size="20" />
          </Button>
          <h2 className="text-lg font-medium leading-none">Comments {comments.length ? `(${comments.length})` : ''}</h2>
        </div>
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

TargetComments.propTypes = {
  onBack: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TargetComments;
