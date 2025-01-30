import { useGetDesignBlocks } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Button, Image, Skeleton } from '@heroui/react';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getImageLink } from '@/lib/utils.js';
import NoData from '@/components/ui/NoData.jsx';
import PropTypes from 'prop-types';
import { TbChevronLeft } from 'react-icons/tb';

const DataBlocks = ({ mini = false, onBack }) => {
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
        <>
          {mini ? (
            <>
              {elements.length ? (
                <div className="grid grid-cols-1 gap-4">
                  {elements.map((element) => (
                    <DraggableElementWrapper key={element.id} element={element} />
                  ))}
                </div>
              ) : (
                <NoData text="No datablocks" />
              )}
            </>
          ) : (
            <>
              <div className="flex items-center space-x-3 mb-8">
                <Button onPress={onBack} variant="bordered" radius="full" isIconOnly size="sm">
                  <TbChevronLeft size="20" />
                </Button>
                <h2 className="text-xl font-semibold">Data blocks</h2>
              </div>
              <>
                {elements.length ? (
                  <div className="grid grid-cols-1 gap-4">
                    {elements.map((element) => (
                      <DraggableElementWrapper key={element.id} element={element} />
                    ))}
                  </div>
                ) : (
                  <NoData text="No datablocks" />
                )}
              </>
            </>
          )}
        </>
      )}
    </div>
  );
};

DataBlocks.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default DataBlocks;
