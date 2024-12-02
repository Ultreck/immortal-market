import { Chip, Skeleton, useDisclosure } from '@nextui-org/react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import NoData from '@/components/ui/NoData.jsx';
import { useGetTemplates } from '@/api/business.js';
import TemplatePreviewModal from '@/pages/designs/TemplatePreviewModal.jsx';
import { useState } from 'react';

const PopularTemplates = () => {
  const { data: { designs = [] } = {}, isLoading: isDesignsLoading } = useGetTemplates();
  const { isOpen: isTemplatesOpen, onOpen: onTemplatesOpen, onClose: onTemplatesClose } = useDisclosure();
  const [current, setCurrent] = useState(null);

  const handlePreview = ({ _id, title, thumbnail }) => {
    const template = { id: _id, title, thumbnail };
    setCurrent(template);
    onTemplatesOpen();
  };

  return (
    <>
      <section>
        <h2 className="font-semibold text-[1.4rem] mb-4">Start with a template</h2>
        <div className="mb-8 flex flex-wrap gap-3">
          <Chip
            variant="solid"
            size="lg"
            classNames={{ base: 'cursor-pointer', content: 'font-medium' }}
            color="primary"
          >
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
              <div className="grid grid-cols-5 gap-4 md:gap-x-8 md:gap-y-6">
                {designs.map((design, i) => (
                  <DesignCard
                    onClick={() => handlePreview(design)}
                    key={i}
                    id={design._id}
                    title={design.title}
                    thumbnail={design.thumbnails[0]}
                  />
                ))}
              </div>
            ) : (
              <NoData text="No templates created yet" />
            )}
          </>
        )}
      </section>
      <TemplatePreviewModal isOpen={isTemplatesOpen} onClose={onTemplatesClose} template={current} />
    </>
  );
};

export default PopularTemplates;
