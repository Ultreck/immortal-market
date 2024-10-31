import { Button } from '@nextui-org/react';
import { LuMessageCircle } from 'react-icons/lu';
import useTemplateStore from '@/store/template.js';
import useBusiness from '@/hooks/use-business';
import { useGetComments } from '@/api/business';

const CommentButton = () => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const activeComment = useTemplateStore((state) => state.template.activeComment);
  const { id: business } = useBusiness();
  const design = useTemplateStore((state) => state.template.id);
  const { data: { comments = [] } = {} } = useGetComments({ business, design, resolved: false });

  const handleClick = () => {
    if (activeComment) updateTemplate({ activeComment: null, isCommentsOpen: true });
    else updateTemplate({ isCommentsOpen: true });
  };

  return (
    <Button
      variant="light"
      color="default"
      radius="full"
      size="sm"
      onClick={handleClick}
      isIconOnly
      className="relative"
    >
      {!!comments.length && (
        <>
          <span className="border-2 border-red-800 bg-red-700 h-2.5 w-2.5 rounded-full absolute top-[6px] right-[6px] animate-ping"></span>
          <span className="border-2 border-red-800 bg-red-700 h-2.5 w-2.5 rounded-full absolute top-[6px] right-[6px]"></span>
        </>
      )}
      <LuMessageCircle size="20" />
    </Button>
  );
};

export default CommentButton;
