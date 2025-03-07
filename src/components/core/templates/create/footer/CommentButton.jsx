import { Button } from '@heroui/react';
import { LuMessageCircle } from 'react-icons/lu';
import useDesignStore from '@/store/design.js';
import useBusiness from '@/hooks/use-business';
import { useGetComments } from '@/api/business';

const CommentButton = () => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const updateStore = useDesignStore((state) => state.updateStore);
  const activeComment = useDesignStore((state) => state.activeComment);
  const { data: { comments = [] } = {} } = useGetComments({ business, design: id, resolved: false });

  const handleClick = () => {
    if (activeComment) updateStore({ activeComment: null, isCommentsOpen: true });
    else updateStore({ isCommentsOpen: true });
  };

  return (
    <Button
      variant="light"
      color="default"
      radius="full"
      size="sm"
      onPress={handleClick}
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
