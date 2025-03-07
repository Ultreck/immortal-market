import useBusiness from '@/hooks/use-business.js';
import { useTernaryDarkMode } from 'usehooks-ts';
import { useState } from 'react';
import useDesignStore from '@/store/design.js';
import { Button, Popover, PopoverContent, PopoverTrigger, useDisclosure, addToast } from '@heroui/react';
import { useCreateComment } from '@/api/business.js';
import AutoResizeTextArea from '@/components/ui/AutoResizeTextArea.jsx';
import { LuSmilePlus } from 'react-icons/lu';
import EmojiPicker from '@emoji-mart/react';
import PropTypes from 'prop-types';

const CreateComment = ({
  target,
  targetId,
  parent,
  page,
  placeholder = 'Add a comment',
  buttonText = 'Add comment',
  onDone,
}) => {
  const { id: business } = useBusiness();
  const { isDarkMode } = useTernaryDarkMode();
  const [content, setContent] = useState('');
  const design = useDesignStore((state) => state.id);
  const updateStore = useDesignStore((state) => state.updateStore);
  const { isOpen: isEmojiOpen, onOpen: onEmojiOpen, onClose: onEmojiClose } = useDisclosure();
  const { mutateAsync: createComment, isPending: isCreateCommentLoading } = useCreateComment(business, design);

  const handleDone = async () => {
    try {
      if (!content.trim()) {
        addToast({
          title: 'Error',
          description: 'Comment cannot be empty',
          color: 'danger',
        });
        return;
      }
      await createComment({ content, target, targetId, parent, page });
      setContent('');
      onDone?.();
      updateStore({ isCommentsOpen: true });
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
    <div>
      <AutoResizeTextArea
        value={content}
        onChange={(v) => setContent(v)}
        className="text-base px-8 py-4 bg-transparent"
        placeholder={placeholder}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            handleDone();
          }
        }}
      />
      <div className="flex items-center justify-between px-6 pb-4">
        <Popover isOpen={isEmojiOpen} onClose={onEmojiClose} classNames={{ content: 'w-[260px]' }} set="native">
          <PopoverTrigger>
            <Button onPress={onEmojiOpen} isIconOnly radius="full" variant="light">
              <LuSmilePlus size="20" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 shadow border border-default-200 space-y-4 w-auto rounded-2xl">
            <EmojiPicker onEmojiSelect={handleInsertEmoji} perLine={7} theme={isDarkMode ? 'dark' : 'light'} />
          </PopoverContent>
        </Popover>
        <Button
          onPress={handleDone}
          isDisabled={!content.length}
          color="primary"
          variant="solid"
          size="sm"
          radius="full"
          className="text-base px-4"
          isLoading={isCreateCommentLoading}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

CreateComment.propTypes = {
  target: PropTypes.string.isRequired,
  targetId: PropTypes.string,
  parent: PropTypes.string,
  page: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  onDone: PropTypes.func,
};

export default CreateComment;
