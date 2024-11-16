import PropTypes from 'prop-types';
import useCreateProjectStore from '@/store/create-project.js';
import { Button, Chip, Input, Skeleton } from '@nextui-org/react';
import { useGetTemplates } from '@/api/business.js';
import { TbPhotoCircle, TbSearch } from 'react-icons/tb';
import { useState } from 'react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import Title from '@/components/core/shared/Title.jsx';
import ThumbnailsCarousel from '@/pages/designs/ThumbnailsCarousel.jsx';

const SelectTemplate = ({ onNext }) => {
  const template = useCreateProjectStore((state) => state.data.template);
  const [view, setView] = useState(template ? 'detail' : 'templates');
  const { data: { designs = [] } = {}, isLoading: isDeignsLoading } = useGetTemplates();
  const updateData = useCreateProjectStore((state) => state.updateData);
  const [category, setCategory] = useState('all');

  const handleClick = (template) => {
    updateData({ template });
    setView('detail');
  };

  return (
    <>
      {view === 'detail' && !!template && (
        <TemplateDetails key={template._id} onPrev={() => setView('templates')} onNext={onNext} />
      )}
      {view === 'templates' && (
        <>
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
            <div className="grid grid-cols-2 gap-3">
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
              <div className="grid grid-cols-2 gap-7">
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
        </>
      )}
    </>
  );
};

const TemplateDetails = ({ onPrev, onNext }) => {
  const template = useCreateProjectStore((state) => state.data.template);

  return (
    <div>
      <Title title="Preview Template" sub="Confirm your selection" className="mb-10" onBack={onPrev} />
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
      <div className="space-y-2 mt-6 pt-2 space-x-4">
        <Button onClick={onNext} variant="solid" radius="full" className="px-6 text-base" color="primary">
          Next
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
