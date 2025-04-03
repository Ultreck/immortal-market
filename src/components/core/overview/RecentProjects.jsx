import { useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Button, Skeleton } from '@heroui/react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import NoData from '@/components/ui/NoData.jsx';
import { useNavigate } from 'react-router-dom';
import { TbChevronRight } from 'react-icons/tb';

const RecentProjects = () => {
  const { id: business } = useBusiness();
  const navigate = useNavigate();
  const { data: { designs = [] } = {}, isLoading: isDesignsLoading } = useGetDesigns({
    business,
    type: 'project',
    limit: 10,
  });

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-semibold text-[1.4rem]">Recent projects</h2>
        <Button
          color="default"
          variant="bordered"
          className="text-base"
          radius="full"
          size="sm"
          endContent={<TbChevronRight size="20" />}
          onPress={() => navigate(`/projects`)}
        >
          View all
        </Button>
      </div>
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
                <DesignCard key={i} id={design._id} title={design.title} thumbnail={design.thumbnails?.[0]} />
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
