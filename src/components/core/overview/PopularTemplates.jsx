import { Skeleton } from '@nextui-org/react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import NoData from '@/components/ui/NoData.jsx';
import { useGetTemplates } from '@/api/business.js';

const PopularTemplates = () => {
  const { data: { designs = [] } = {}, isLoading: isDesignsLoading } = useGetTemplates();

  return (
    <section>
      <h2 className="font-semibold text-xl mb-8 border-b border-default-200 pb-4">Start with a template</h2>
      {isDesignsLoading ? (
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      ) : (
        <>
          {designs.length > 0 ? (
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {designs.map((design, i) => (
                <DesignCard key={i} id={design._id} title={design.title} thumbnail={design.thumbnail} />
              ))}
            </div>
          ) : (
            <NoData text="No templates created yet" />
          )}
        </>
      )}
    </section>
  );
};

export default PopularTemplates;
