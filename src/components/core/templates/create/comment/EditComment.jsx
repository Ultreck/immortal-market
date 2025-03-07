import useBusiness from '@/hooks/use-business.js';
import { useTernaryDarkMode } from 'usehooks-ts';
import { useState } from 'react';
import useDesignStore from '@/store/design';
import { Button, Popover, PopoverContent, PopoverTrigger, useDisclosure, addToast } from '@heroui/react';
import { useUpdateComment } from '@/api/business.js';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import { LuSmilePlus } from 'react-icons/lu';
import EmojiPicker from '@emoji-mart/react';
import { HiX } from 'react-icons/hi';
import PropTypes from 'prop-types';

const EditComment = ({ comment, onClose }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { isDarkMode } = useTernaryDarkMode();
  const [content, setContent] = useState(comment.content);
  const { isOpen: isEmojiOpen, onOpen: onEmojiOpen, onClose: onEmojiClose } = useDisclosure();
  const { mutateAsync: updateComment, isPending: isUpdateCommentLoading } = useUpdateComment(business, id);

  const handleDone = async () => {
    try {
      await updateComment({ id: comment._id, data: { content } });
      setContent('');
      onClose();
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e.message ?? 'Something went wrong, please try again',
        color: 'danger',
      });
    }
  };

  const handleInsertEmoji = (emoji) => {
    setContent(content + emoji.native);
    onEmojiClose();
  };

  return (
    <div className="rounded-2xl border border-default-200 dark:border-default-100 my-2 w-[96%] mx-auto">
      <div>
        <AutoResizeTextArea
          value={content}
          onChange={(v) => setContent(v)}
          className="text-base px-8 py-6 bg-transparent"
          placeholder="Enter new comment"
        />
        <div className="flex items-center justify-between px-6 pb-4">
          <div>
            <Popover
              isOpen={isEmojiOpen}
              onClose={onEmojiClose}
              placement="bottom"
              showArrow
              offset={10}
              classNames={{ content: 'w-[260px]' }}
              set="native"
            >
              <PopoverTrigger>
                <Button onPress={onEmojiOpen} isIconOnly radius="full" variant="light">
                  <LuSmilePlus size="20" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 shadow border border-default-200 space-y-4 w-auto rounded-2xl">
                <EmojiPicker onEmojiSelect={handleInsertEmoji} perLine={7} theme={isDarkMode ? 'dark' : 'light'} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onPress={handleDone}
              isDisabled={!content.length}
              color="success"
              variant="solid"
              size="sm"
              radius="full"
              className="text-base px-4"
              isLoading={isUpdateCommentLoading}
            >
              Save
            </Button>
            <Button onPress={onClose} isIconOnly variant="light" radius="full" aria-label="Close">
              <HiX size="20" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditComment;
