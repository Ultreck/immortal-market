import { Chip, Skeleton } from '@nextui-org/react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import NoData from '@/components/ui/NoData.jsx';
import { useGetTemplates } from '@/api/business.js';

const PopularTemplates = () => {
  const { data: { designs = [] } = {}, isLoading: isDesignsLoading } = useGetTemplates();

  return (
    <section>
      <h2 className="font-semibold text-xl mb-5">Start with a template</h2>
      <div className="mb-8 flex flex-wrap gap-3">
        <Chip variant="solid" size="lg" classNames={{ base: 'cursor-pointer', content: 'font-medium' }} color="primary">
          All
        </Chip>
        <Chip variant="flat" size="lg" classNames={{ base: 'cursor-pointer', content: 'font-medium' }}>
          Tech
        </Chip>
        <Chip variant="flat" size="lg" classNames={{ base: 'cursor-pointer', content: 'font-medium' }}>
          Customer
        </Chip>
        <Chip variant="flat" size="lg" classNames={{ base: 'cursor-pointer', content: 'font-medium' }}>
          Marketing
        </Chip>
        <Chip variant="flat" size="lg" classNames={{ base: 'cursor-pointer', content: 'font-medium' }}>
          Report
        </Chip>
      </div>
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
            <div className="grid grid-cols-5 gap-4 md:gap-8">
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
