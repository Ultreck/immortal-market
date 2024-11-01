import TemplateBuilder from '@/components/core/templates/create/TemplateBuilder.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetDesign } from '@/api/business.js';
import { useEffect, useRef } from 'react';
import useTemplateStore from '@/store/template.js';
import { Spinner } from '@nextui-org/react';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useUnmount } from 'react-use';
import { useQueryClient } from '@tanstack/react-query';

const EditDesignPage = () => {
  const toast = useToast();
  const { id } = useParams();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const { id: business } = useBusiness();
  const title = useTemplateStore((state) => state.template.title);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const reset = useTemplateStore((state) => state.reset);
  const currentId = useTemplateStore((state) => state.template.id);
  const { data: { success = false, design } = {}, isLoading: isTemplatesLoading } = useGetDesign(business, id);
  const loaded = useRef(false);

  useEffect(() => {
    if (success && !design) {
      toast.error('Design not found');
      navigate(`/templates/`);
    }
  }, [success, design, navigate, toast]);

  useEffect(() => {
    if (design && !loaded.current) {
      if (design) {
        const { _id, title, description, status, type, data } = design;
        const payload = {
          id: _id,
          title,
          description,
          status,
          type,
          data,
          pages: data.pages,
        };
        if (currentId === _id) {
          updateTemplate(payload);
        } else {
          updateTemplate({
            isCommentsOpen: false,
            activeComment: null,
            commentsTargetId: null,
            isCommentsVisible: true,
            selectedElements: [],
            undoHistory: [],
            redoHistory: [],
            selectedPage: null,
            activePage: null,
            scale: 1,
            ...payload,
          });
        }
      }
      loaded.current = true;
    }
  }, [currentId, design, updateTemplate]);

  useUnmount(() => {
    reset();
    qc.removeQueries({ queryKey: ['business', business, 'designs'] });
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
