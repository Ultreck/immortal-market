import {
  addToast,
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from '@heroui/react';
import { cn, getImageLink } from '@/lib/utils.js';
import { formatDistanceToNow } from 'date-fns';
import { HiDotsHorizontal, HiReply } from 'react-icons/hi';
import { HiCheck } from 'react-icons/hi2';
import PropTypes from 'prop-types';
import { useDeleteComment, useUpdateComment } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useDesignStore from '@/store/design.js';
import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth.jsx';
import EditComment from '@/components/core/templates/create/comment/EditComment.jsx';

const CommentItem = ({ comment, onClick, className }) => {
  const { user } = useAuth();
  const { id: business } = useBusiness();
  const design = useDesignStore((state) => state.id);
  const updateStore = useDesignStore((state) => state.updateStore);
  const [isEditing, setIsEditing] = useState(false);
  const { mutateAsync: deleteComment, isPending: isDeleteLoading } = useDeleteComment(business, design);
  const { mutateAsync: updateComment, isPending: isUpdateLoading } = useUpdateComment(business, design);

  const handleDeleteComment = async () => {
    try {
      await deleteComment(comment._id);
      updateStore({ activeComment: null });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  const handleResolveComment = async () => {
    try {
      await updateComment({ id: comment._id, data: { resolved: true } });
      updateStore({ activeComment: null });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  const handleRestoreComment = async () => {
    try {
      await updateComment({ id: comment._id, data: { resolved: false } });
      updateStore({ activeComment: null });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  return (
    <div className="relative group">
      {isEditing ? (
        <EditComment comment={comment} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <div
            tabIndex="-1"
            onClick={onClick}
            className={cn(
              'w-full py-4 px-8 transition-all',
              { 'hover:bg-default-100 dark:hover:bg-default-100/70 cursor-pointer': onClick },
              className
            )}
          >
            <div className="flex gap-x-4 items-start">
              <Avatar
                src={getImageLink(comment.author?.image)}
                name={`${comment.author.firstName}`}
                className="text-lg"
                size="sm"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-base leading-none">{comment.author.firstName}</p>
                  <p className="text-md opacity-70 italic">{formatDistanceToNow(new Date(comment.createdAt))}</p>
                </div>
                <p className="text-base">{comment.content}</p>
              </div>
            </div>
          </div>
          {user.id === comment.author.id && (
            <div className="absolute top-2 right-2 bg-white dark:bg-default-100 border border-default-100 rounded-2xl shadow opacity-0 group-hover:opacity-100 transition-opacity py-1 px-2">
              <Tooltip content={comment.resolved ? 'Restore' : 'Resolve'}>
                {comment.resolved ? (
                  <Button onPress={handleRestoreComment} isIconOnly variant="light" isLoading={isUpdateLoading}>
                    <HiReply size="20" />
                  </Button>
                ) : (
                  <Button onPress={handleResolveComment} isIconOnly variant="light" isLoading={isUpdateLoading}>
                    <HiCheck size="20" />
                  </Button>
                )}
              </Tooltip>
              <Dropdown classNames={{ content: 'dark:bg-default-100' }}>
                <DropdownTrigger>
                  <Button variant="light" isIconOnly isLoading={isDeleteLoading}>
                    <HiDotsHorizontal size="20" variant="bordered" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  onAction={async (key) => {
                    if (key === 'delete') await handleDeleteComment();
                    if (key === 'edit') setIsEditing(true);
                  }}
                >
                  <DropdownItem key="edit" textValue="Edit">
                    <span className="text-base">Edit</span>
                  </DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger" textValue="Delete">
                    <span className="text-base">Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
        </>
      )}
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CommentItem;
