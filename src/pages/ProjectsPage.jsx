import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Link } from 'react-router-dom';
import { Button, Image, Skeleton } from '@nextui-org/react';
import { RiAddLine } from 'react-icons/ri';
import { getImageLink } from '@/lib/utils.js';
import { TbPhotoCircle } from 'react-icons/tb';
import NoData from '@/components/ui/NoData.jsx';
import useGlobalStore from '@/store/global.js';

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
            radius="full"
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
                  <div key={i}>
                    <Link
                      key={i}
                      to={`/designs/${design._id}/edit`}
                      className="flex items-center justify-center p-5 bg-black/5 dark:bg-white/5 rounded-2xl aspect-square"
                    >
                      {design.thumbnail ? (
                        <Image
                          src={getImageLink(design.thumbnail)}
                          alt={design.title}
                          removeWrapper
                          className="object-contain rounded-xl"
                        />
                      ) : (
                        <div className="">
                          <TbPhotoCircle size="48" className="opacity-50" />
                        </div>
                      )}
                    </Link>
                    <div className="mt-4 px-2 flex items-center justify-between">
                      <h4 className="font-medium text-lg leading-tight">{design.title}</h4>
                    </div>
                  </div>
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
