import TemplateBuilder from '@/components/core/templates/create/TemplateBuilder.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDesign } from '@/api/business.js';
import { useEffect } from 'react';
import useTemplateStore from '@/store/template.js';
import { Spinner } from '@nextui-org/react';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useUnmount } from 'react-use';

const EditDesignPage = () => {
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  const { id: businessId } = useBusiness();
  const title = useTemplateStore((state) => state.template.title);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const reset = useTemplateStore((state) => state.reset);
  const { data: { success = false, design } = {}, isLoading: isTemplatesLoading } = useGetDesign(businessId, id);

  useEffect(() => {
    if (success && !design) {
      toast.error('Design not found');
      navigate(`/templates/`);
    }
  }, [success, design, navigate, toast]);

  useEffect(() => {
    if (design) {
      const { _id, title, description, status, type, data } = design;
      updateTemplate({
        selectedElements: [],
        undoHistory: [],
        redoHistory: [],
        selectedPage: null,
        activePage: null,
        scale: 1,
        status,
        type,
        pages: data.pages,
        title,
        description,
        id: _id,
      });
    }
  }, [design, updateTemplate]);

  useUnmount(() => {
    reset();
  });

  return (
    <>
      {isTemplatesLoading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
          <Spinner size="lg" />
          <p className="mt-6">Loading design..</p>
        </div>
      ) : (
        <>{!!title && <TemplateBuilder />}</>
      )}
    </>
  );
};

export default EditDesignPage;
