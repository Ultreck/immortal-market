import { useGetComments } from '@/api/business';
import useBusiness from '@/hooks/use-business';
import useTemplateStore from '@/store/template';
import { Button, Skeleton } from '@nextui-org/react';
import { TbChevronLeft } from 'react-icons/tb';
import PropTypes from 'prop-types';
import NoData from '@/components/ui/NoData.jsx';
import CommentReplyItem from '@/components/core/templates/create/comment/CommentReplyItem.jsx';
import CreateComment from '@/components/core/templates/create/comment/CreateComment.jsx';
import CommentItem from '@/components/core/templates/create/comment/CommentItem.jsx';

const CommentReplies = ({ onBack }) => {
  const activeComment = useTemplateStore((state) => state.template.activeComment);
  const { id: business } = useBusiness();
  const design = useTemplateStore((state) => state.template.id);
  const { data: { comments = [] } = {}, isLoading: isCommentsLoading } = useGetComments({
    business,
    design,
    parent: activeComment._id,
  });

  return (
    <>
      <div className="flex items-center space-x-3 py-6 px-8">
        <Button variant="light" color="default" radius="full" size="sm" onClick={onBack} isIconOnly>
          <TbChevronLeft size="20" />
        </Button>
        <h2 className="text-lg font-medium leading-none">Replies</h2>
      </div>
      <div>
        <div className="px-8 mb-4">
          <div className="border border-default-200 rounded-2xl">
            <CommentItem comment={activeComment} className="px-6" />
          </div>
        </div>
        {isCommentsLoading ? (
          <div className="px-8 space-y-3 mb-6">
            <Skeleton className="w-full rounded-2xl h-[80px]" />
            <Skeleton className="w-full rounded-2xl h-[80px]" />
          </div>
        ) : (
          <div className="divide-y divide-default-200">
            {comments.length ? (
              <>
                {comments.map((comment) => (
                  <CommentReplyItem key={comment._id} comment={comment} />
                ))}
              </>
            ) : (
              <div className="px-8 mb-6">
                <NoData text="No reply" className="py-10" />
              </div>
            )}
            <CreateComment
              target={activeComment.target}
              targetId={activeComment.targetId}
              parent={activeComment._id}
              page={activeComment.page}
              placeholder="Add a reply"
              buttonText="Add reply"
            />
          </div>
        )}
      </div>
    </>
  );
};

CommentReplies.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default CommentReplies;
