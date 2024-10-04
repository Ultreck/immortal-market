import { useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Skeleton } from '@nextui-org/react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import NoData from '@/components/ui/NoData.jsx';

const RecentProjects = () => {
  const { id: business } = useBusiness();
  const { data: { designs = [] } = {}, isLoading: isDesignsLoading } = useGetDesigns({
    business,
    type: 'project',
    limit: 4,
  });

  return (
    <section>
      <h2 className="font-semibold text-xl mb-8 border-b border-default-200 pb-4">Recent Projects</h2>
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

export default RecentProjects;
