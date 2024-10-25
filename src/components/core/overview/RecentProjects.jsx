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
    limit: 10,
  });

  return (
    <section>
      <h2 className="font-semibold text-2xl mb-6">Recent Projects</h2>
      {isDesignsLoading ? (
        <div className="grid grid-cols-4 gap-4 md:gap-x-8 md:gap-y-6">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      ) : (
        <>
          {designs.length > 0 ? (
            <div className="grid grid-cols-5 gap-4 md:gap-x-8 md:gap-y-6">
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
