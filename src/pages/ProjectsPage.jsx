import { useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { Input, Skeleton } from '@nextui-org/react';
import { RiAddLine } from 'react-icons/ri';
import useGlobalStore from '@/store/global.js';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import DashboardHeader from '@/components/core/shared/DashboardHeader.jsx';
import { TbSearch } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';

const ProjectsPage = () => {
  const { id: business } = useBusiness();
  const { data: { designs = [] } = {}, isLoading: isDesignsLoading } = useGetDesigns({
    business,
    type: 'project',
    limit: 1000,
  });
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <div className="mb-10">
      <DashboardHeader
        className="mb-2"
        content={
          <div className="flex items-center gap-8">
            <h2 className="font-semibold text-2xl">My Projects</h2>
            <Input
              type="text"
              name="query"
              id="query"
              variant="flat"
              size="lg"
              classNames={{
                input: 'text-base',
                base: 'transition-all duration-300 w-[260px]',
                inputWrapper: 'rounded-full',
              }}
              startContent={<TbSearch size="24" className="mx-2 opacity-30" />}
              placeholder="Search projects.."
            />
          </div>
        }
      />
      <div className="container pb-20">
        {isDesignsLoading ? (
          <div className="grid grid-cols-5 gap-4 md:gap-8">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <Skeleton className="aspect-square w-full rounded-2xl" />
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-4 md:gap-8">
            <button
              onClick={() => updateData({ isCreateProjectModalOpen: true })}
              className={cn(
                'flex items-center justify-center p-5 bg-black/5 dark:bg-white/5 hover:bg-black/[.06] hover:dark:bg-white/[.07] rounded-2xl aspect-square cursor-pointer'
              )}
            >
              <div className="border-dashed-custom rounded-xl w-full h-full flex items-center justify-center">
                <RiAddLine size="32" className="opacity-50" />
              </div>
            </button>
            {designs.map((design, i) => (
              <DesignCard key={i} id={design._id} title={design.title} thumbnail={design.thumbnails[0]} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
