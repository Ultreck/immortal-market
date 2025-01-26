import PropTypes from 'prop-types';
import useProjectStore from '@/store/project.js';
import { Button, Chip, Input, Skeleton } from '@heroui/react';
import { useGetTemplates } from '@/api/business.js';
import { TbChevronLeft, TbChevronRight, TbFileOff, TbPhotoCircle, TbSearch } from 'react-icons/tb';
import { useState } from 'react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import Title from '@/components/core/shared/Title.jsx';
import ThumbnailsCarousel from '@/pages/designs/ThumbnailsCarousel.jsx';
import { cn } from '@/lib/utils.js';

const SelectTemplate = ({ onNext }) => {
  const template = useProjectStore((state) => state.data.template);
  const { data: { designs = [] } = {}, isLoading: isDeignsLoading } = useGetTemplates();
  const updateData = useProjectStore((state) => state.updateData);
  const [category, setCategory] = useState('all');

  const handleClick = (template) => {
    updateData({ template });
    if (!template) return onNext();
  };

  return (
    <div className="h-full">
      {template ? (
        <TemplateDetails key={template._id} onPrev={() => updateData({ template: null })} onNext={onNext} />
      ) : (
        <div className="px-12 py-10 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <Title title="Choose template" sub="Select a template to get started" />
            <div className="relative">
              <Input
                type="text"
                name="query"
                id="query"
                size="lg"
                classNames={{
                  input: 'text-base',
                  base: 'transition-all duration-300 w-[260px]',
                  inputWrapper: 'min-h-[auto] h-11 rounded-full',
                }}
                startContent={<TbSearch size="24" className="mx-3 opacity-30" />}
                placeholder="Search templates.."
              />
            </div>
          </div>
          {isDeignsLoading ? (
            <div className="grid grid-cols-3 gap-3">
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
            </div>
          ) : (
            <>
              <div className="mb-8 flex flex-wrap gap-x-3 gap-y-2">
                {[
                  'All',
                  'Tech',
                  'Customer',
                  'Marketing',
                  'Report',
                  'Finance',
                  'HR',
                  'Sales',
                  'Operations',
                  'Analytics',
                  'Lorem',
                  'Ipsum',
                  'Dolor',
                ].map((item) => (
                  <Chip
                    key={item}
                    variant={category === item.toLowerCase() ? 'solid' : 'flat'}
                    size="lg"
                    classNames={{ base: 'cursor-pointer', content: 'font-medium' }}
                    color={category === item.toLowerCase() ? 'primary' : 'default'}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </Chip>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-7">
                <div>
                  <button
                    onClick={() => handleClick(null)}
                    className={cn(
                      'w-full flex items-center justify-center p-5 bg-black/5 dark:bg-white/5 hover:bg-black/[.06] hover:dark:bg-white/[.07] rounded-2xl aspect-square cursor-pointer'
                    )}
                  >
                    <TbFileOff size="48" className="opacity-30" />
                  </button>
                  <div className="mt-3 px-2 flex items-center justify-between">
                    <h4 className="font-medium text-base leading-tight truncate">Blank</h4>
                  </div>
                </div>
                {designs.map((design) => (
                  <DesignCard
                    onClick={() => handleClick(design)}
                    key={design._id}
                    title={design.title}
                    id={design._id}
                    thumbnail={design.thumbnails[0]}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const TemplateDetails = ({ onPrev, onNext }) => {
  const template = useProjectStore((state) => state.data.template);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto px-12 py-10">
        <Title title="Preview Template" sub="Confirm your selection" className="mb-10" />
        {template.thumbnails.length ? (
          <ThumbnailsCarousel thumbnails={template.thumbnails} />
        ) : (
          <div className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-xl px-6 py-4 flex items-center justify-center aspect-square">
            <TbPhotoCircle size="32" className="opacity-50" />
          </div>
        )}
        <div className="mt-8">
          <h4 className="font-medium text-lg leading-tight truncate">{template.title}</h4>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores esse impedit maxime nesciunt
            quae saepe. Deleniti distinctio dolorem fugit officiis sapiente! Beatae, error nemo neque ullam vitae
            voluptates. Omnis?
          </p>
        </div>
      </div>
      <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
        <Button
          onPress={onPrev}
          radius="full"
          variant="bordered"
          className="text-base px-6"
          startContent={<TbChevronLeft size="20" />}
        >
          Back
        </Button>
        <Button
          onPress={onNext}
          color="primary"
          radius="full"
          className="text-base px-6"
          endContent={<TbChevronRight size="20" />}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

SelectTemplate.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};
TemplateDetails.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};

export default SelectTemplate;
