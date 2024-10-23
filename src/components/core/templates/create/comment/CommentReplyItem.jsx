import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { getImageLink } from '@/lib/utils.js';
import { formatDistanceToNow } from 'date-fns';
import { HiDotsHorizontal } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { useDeleteComment } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useToast } from '@/hooks/use-toast.jsx';

const CommentReplyItem = ({ comment }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const design = useTemplateStore((state) => state.template.id);
  const { mutateAsync: deleteComment, isPending: isDeleteLoading } = useDeleteComment(business, design);

  const handleDeleteComment = async (id) => {
    try {
      await deleteComment(id);
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div key={comment._id} className="relative group">
      <div tabIndex="-1" className="w-full py-4 px-8">
        <div className="flex gap-x-4 items-start">
          <Avatar
            src={getImageLink(comment.author.image)}
            name={`${comment.author.firstName} ${comment.author.lastName}`}
            className="text-lg"
            size="sm"
          />
          <div>
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-base leading-none">
                {comment.author.firstName} {comment.author.lastName}
              </p>
              <p className="text-md opacity-70 italic">
                {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
              </p>
            </div>
            <p className="text-base">{comment.content}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 bg-white dark:bg-default-100 border border-default-100 rounded-2xl shadow opacity-0 group-hover:opacity-100 transition-opacity py-1 px-2">
        <Dropdown classNames={{ content: 'dark:bg-default-100' }}>
          <DropdownTrigger>
            <Button variant="light" isIconOnly isLoading={isDeleteLoading}>
              <HiDotsHorizontal size="20" variant="bordered" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            onAction={(key) => {
              if (key === 'delete') handleDeleteComment(comment._id);
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
    </div>
  );
};

CommentReplyItem.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default CommentReplyItem;
