import { Button } from '@nextui-org/react';
import { LuMessageCircle } from 'react-icons/lu';
import useTemplateStore from '@/store/template.js';

const CommentButton = () => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const activeComment = useTemplateStore((state) => state.template.activeComment);

  const handleClick = () => {
    if (activeComment) updateTemplate({ activeComment: null, isCommentsOpen: true });
    else updateTemplate({ isCommentsOpen: true });
  };

  return (
    <Button variant="light" color="default" radius="full" size="sm" onClick={handleClick} isIconOnly>
      <LuMessageCircle size="18" />
    </Button>
  );
};

export default CommentButton;
