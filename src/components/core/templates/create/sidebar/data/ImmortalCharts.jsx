import { useGetDesignBlocks } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Button, Image, Skeleton } from '@heroui/react';
import DraggableElementWrapper from '@/components/core/templates/create/sidebar/DraggableElementWrapper.jsx';
import { getImageLink } from '@/lib/utils.js';
import NoData from '@/components/ui/NoData.jsx';
import PropTypes from 'prop-types';
import { TbChevronLeft } from 'react-icons/tb';

const ImmortalCharts = ({ mini = false, onBack }) => {
  const { id: business } = useBusiness();
  const { data: { blocks = [] } = {}, isLoading: isBlocksLoading } = useGetDesignBlocks({
    business,
    type: 'group',
    category: 'chart',
  });

  const elements = blocks.map((b) => {
    return {
      id: b._id,
      data: b.data.elements.sort((a, b) => a.order - b.order),
      preview: (
        <div className="bg-white border border-default-200 rounded-2xl p-[10%]">
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
                <div className="grid grid-cols-2 gap-4">
                  {elements.slice(0, 4).map((element) => (
                    <DraggableElementWrapper key={element.id} element={element} />
                  ))}
                </div>
              ) : (
                <NoData text="No blocks" />
              )}
            </>
          ) : (
            <>
              <div className="flex items-center space-x-3 mb-6 bg-white/[.07] rounded-full px-2 py-1">
                <Button onPress={onBack} variant="light" radius="full" isIconOnly size="sm">
                  <TbChevronLeft size="20" />
                </Button>
                <h2 className="text-base font-semibold">Immortal charts</h2>
              </div>
              <>
                {elements.length ? (
                  <div className="grid grid-cols-1 gap-4">
                    {elements.map((element) => (
                      <DraggableElementWrapper key={element.id} element={element} />
                    ))}
                  </div>
                ) : (
                  <NoData text="No blocks" />
                )}
              </>
            </>
          )}
        </>
      )}
    </div>
  );
};

ImmortalCharts.propTypes = {
  mini: PropTypes.bool,
  onBack: PropTypes.func,
};

export default ImmortalCharts;
