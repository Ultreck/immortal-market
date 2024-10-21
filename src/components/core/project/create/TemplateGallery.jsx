import PropTypes from 'prop-types';
import useCreateProjectStore from '@/store/create-project.js';
import { Skeleton, Image, Button } from '@nextui-org/react';
import { useGetTemplates } from '@/api/business.js';
import { getImageLink } from '@/lib/utils.js';
import { TbPhotoCircle } from 'react-icons/tb';
import { useState } from 'react';

const TemplateGallery = ({ onPrev, onNext }) => {
  const { data: { designs = [] } = {}, isLoading: isDeignsLoading } = useGetTemplates();

  const selectedTemplate = useCreateProjectStore((state) => state.data.template);
  const [view, setView] = useState(selectedTemplate ? 'detail' : 'templates');
  const [template, setTemplate] = useState(selectedTemplate || null);

  const setPreview = (template) => {
    setTemplate(template);
    setView('detail');
  };

  return (
    <>
      {view === 'detail' && (
        <TemplateItem
          key={template._id}
          design={template}
          view={view}
          onPrev={onPrev}
          onNext={onNext}
          setView={() => setView('templates')}
        />
      )}
      {view === 'templates' && (
        <>
          {isDeignsLoading ? (
            <div className="grid grid-cols-2 gap-3 mt-6">
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
              <Skeleton className="w-full h-full aspect-square rounded-2xl" />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-7 mt-6">
              {designs.map((design) => (
                <TemplateItem
                  key={design._id}
                  design={design}
                  onPrev={onPrev}
                  onNext={onNext}
                  view={view}
                  setView={() => setPreview(design)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

const TemplateItem = ({ design, setView, view, onPrev }) => {
  const updateData = useCreateProjectStore((state) => state.updateData);

  const handleProceed = () => {
    updateData({ template: design });
    onPrev();
  };

  return (
    <div className="" onClick={setView}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium leading-tight">{design.title || 'Untitled design'}</h3>
        {view === 'detail' && <div className="text-base font-medium capitalize">{design.status}</div>}
      </div>
      {design.thumbnail ? (
        <Image
          src={getImageLink(design.thumbnail)}
          alt={design.title}
          removeWrapper
          className="w-full h-50 object-cover rounded-xl aspect-square cursor-pointer"
        />
      ) : (
        <div className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-xl px-6 py-4 flex items-center justify-center aspect-square">
          <TbPhotoCircle size="32" className="opacity-50" />
        </div>
      )}
      {view === 'detail' && (
        <div className="space-y-2 mt-6 pt-2 space-x-6 border-t-1 border-default-200">
          <Button
            onClick={() => setView('templates')}
            variant="solid"
            radius="full"
            className="px-6 text-base"
            color="primary"
          >
            Back
          </Button>
          <Button onClick={handleProceed} variant="bordered" radius="full" className="px-6 text-base">
            Proceed
          </Button>
        </div>
      )}
    </div>
  );
};

TemplateGallery.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
};
TemplateItem.propTypes = {
  design: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    status: PropTypes.string,
  }),
  setView: PropTypes.func,
  view: PropTypes.string,
  onPrev: PropTypes.func,
};

export default TemplateGallery;

