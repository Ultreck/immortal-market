import useTemplateStore from '@/store/template.js';
import { useCreateDesign, useGetDesign } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import PropTypes from 'prop-types';
import { Button, Skeleton } from '@heroui/react';
import { TbPhotoCircle } from 'react-icons/tb';
import { useToast } from '@/hooks/use-toast.jsx';
import { useNavigate } from 'react-router-dom';
import NoData from '@/components/ui/NoData.jsx';
import ThumbnailsCarousel from '@/pages/designs/ThumbnailsCarousel.jsx';

const ApplyTemplate = ({ id, onClose }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { id: business } = useBusiness();
  const addUndoHistory = useTemplateStore((state) => state.addUndoHistory);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { data: { design } = {}, isLoading: isDesignLoading } = useGetDesign(business, id);
  const { mutateAsync: create, isPending: isCreateTemplateLoading } = useCreateDesign(business);

  const handleReplace = (design) => {
    addUndoHistory();
    updateTemplate({
      pages: design.data.pages.map((page) => ({
        ...page,
        id: crypto.randomUUID(),
        elements: page.elements.map((el) => ({
          ...el,
          id: crypto.randomUUID(),
        })),
      })),
      selectedElements: [],
      selectedPage: null,
    });
    onClose();
  };

  const handleCreate = async (design) => {
    try {
      const payload = {
        title: 'Untitled',
        description: '',
        type: 'project',
        data: {
          pages: design.data.pages.map((page) => ({
            ...page,
            id: crypto.randomUUID(),
            elements: page.elements.map((el) => ({
              ...el,
              id: crypto.randomUUID(),
            })),
          })),
        },
      };
      const res = await create(payload);
      navigate(`/templates/${res.data.design._id}/edit`);
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  return (
    <>
      {isDesignLoading ? (
        <div className="px-6 py-6 w-full flex flex-col items-stretch">
          <Skeleton className="w-7/12 h-6 rounded-2xl" />
          <Skeleton className="w-full aspect-square rounded-2xl mt-4" />
          <div className="space-y-2 mt-4">
            <Skeleton className="w-9/12 h-8 rounded-2xl" />
            <Skeleton className="w-8/12 h-8 rounded-2xl" />
          </div>
        </div>
      ) : (
        <>
          {design ? (
            <div className="px-6 py-6 w-full">
              <h3 className="text-base font-medium leading-tight mb-4">
                {design.title} ({design.data.pages.length} pages)
              </h3>
              {design.thumbnails.length ? (
                <ThumbnailsCarousel thumbnails={design.thumbnails} />
              ) : (
                <div className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-xl px-6 py-4 flex items-center justify-center aspect-square">
                  <TbPhotoCircle size="32" className="opacity-50" />
                </div>
              )}
              <div className="space-y-2 mt-6">
                <Button
                  onPress={() => handleReplace(design)}
                  variant="solid"
                  radius="full"
                  className="px-6 text-base"
                  color="primary"
                  isDisabled={isCreateTemplateLoading}
                >
                  Replace current project
                </Button>
                <Button
                  onPress={() => handleCreate(design)}
                  variant="bordered"
                  radius="full"
                  className="px-6 text-base"
                  isLoading={isCreateTemplateLoading}
                >
                  Create new project
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-6 w-full">
              <NoData className="w-full" text="Could not load data" />
            </div>
          )}
        </>
      )}
    </>
  );
};

ApplyTemplate.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ApplyTemplate;
