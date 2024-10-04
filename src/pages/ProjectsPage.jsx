import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Button, Skeleton } from '@nextui-org/react';
import { RiAddLine } from 'react-icons/ri';
import NoData from '@/components/ui/NoData.jsx';
import useGlobalStore from '@/store/global.js';
import DesignCard from '@/components/core/project/DesignCard.jsx';

const ProjectsPage = () => {
  const { id: business } = useBusiness();
  const { data: { designs = [] } = {}, isLoading: isDesignsLoading } = useGetDesigns({ business, type: 'project' });
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <>
      <DashboardTitle
        text="Projects"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Projects', href: '/projects' },
        ]}
        after={
          <Button
            color="primary"
            radius="2xl"
            className="text-base"
            startContent={<RiAddLine size="20" />}
            onClick={() => updateData({ isCreateProjectModalOpen: true })}
          >
            Create project
          </Button>
        }
      />
      <div className="container py-8 md:py-10 min-h-screen flex flex-col space-y-10">
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
      </div>
    </>
  );
};

export default ProjectsPage;
