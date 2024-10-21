import PropTypes from 'prop-types';
import useCreateProjectStore from '@/store/create-project.js';
import { Button, Image, Skeleton } from '@nextui-org/react';
import { useGetTemplates } from '@/api/business.js';
import { getImageLink } from '@/lib/utils.js';
import { TbPhotoCircle } from 'react-icons/tb';
import { useState } from 'react';
import DesignCard from '@/components/core/project/DesignCard.jsx';
import Title from '@/components/core/shared/Title.jsx';

const SelectTemplate = ({ onNext }) => {
  const template = useCreateProjectStore((state) => state.data.template);
  const [view, setView] = useState(template ? 'detail' : 'templates');
  const { data: { designs = [] } = {}, isLoading: isDeignsLoading } = useGetTemplates();
  const updateData = useCreateProjectStore((state) => state.updateData);

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
          <Title title="Choose template" sub="Select a template to get started" className="mb-10" />
          {isDeignsLoading ? (
            <div className="grid grid-cols-2 gap-3">
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-7">
              {designs.map((design) => (
                <DesignCard
                  onClick={() => handleClick(design)}
                  key={design._id}
                  title={design.title}
                  id={design._id}
                  thumbnail={design.thumbnail}
                />
              ))}
            </div>
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
      <Title title="Preview Template" sub="Confirm your selection" className="mb-10" />
      {template.thumbnail ? (
        <Image
          src={getImageLink(template.thumbnail)}
          alt={template.title}
          removeWrapper
          className="w-full h-50 object-cover rounded-xl aspect-square cursor-pointer border border-default-200"
        />
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
        <Button onClick={onPrev} variant="bordered" radius="full" className="px-6 text-base">
          Back
        </Button>
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
