import { useGetDesignBlocks } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Image, Skeleton } from '@heroui/react';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getImageLink } from '@/lib/utils.js';

const DataBlocks = () => {
  const { id: business } = useBusiness();
  const { data: { blocks = [] } = {}, isLoading: isBlocksLoading } = useGetDesignBlocks({
    business,
    type: 'group',
    category: 'data',
  });

  const elements = blocks.map((b) => {
    return {
      id: b._id,
      data: b.data.elements,
      preview: (
        <div className="bg-white border border-default-200 rounded-2xl p-6">
          <Image src={getImageLink(b.thumbnail)} alt="Data" className="w-full rounded-2xl cursor-grab" />
        </div>
      ),
    };
  });

  return (
    <div>
      {isBlocksLoading ? (
        <div className="grid grid-cols-1 gap-4">
          <Skeleton className="h-32 w-full rounded-2xl bg-white/10" />
          <Skeleton className="h-32 w-full rounded-2xl bg-white/10" />
          <Skeleton className="h-32 w-full rounded-2xl bg-white/10" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {elements.map((element) => (
            <DraggableElementWrapper key={element.id} element={element} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DataBlocks;
