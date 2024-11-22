import DesignBuilder from '@/components/core/templates/create/DesignBuilder.jsx';
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
  const _id = useTemplateStore((state) => state.template.id);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const reset = useTemplateStore((state) => state.reset);
  const currentId = useTemplateStore((state) => state.template.id);
  const { data: { success = false, design } = {}, isLoading: isTemplatesLoading } = useGetDesign(business, id);
  const loaded = useRef(false);

  useEffect(() => {
    if (success && !design) {
      navigate(`/templates/`);
    }
  }, [success, design, navigate, toast]);

  useEffect(() => {
    if (design) {
      const { _id, data } = design;
      const payload = { id: _id };
      if (!loaded.current) {
        payload.pages = data.pages.map((p) => {
          return {
            ...p,
            elements: p.elements.map((e) => {
              if (e.type.match(/heading|subheading|paragraph|caption|count-up-number/gi)) {
                return { ...e, type: 'text', config: { ...e.config, name: e.type } };
              }
              if (e.type === 'infographic') {
                return { ...e, type: 'svg' };
              }
              return e;
            }),
          };
        });
        loaded.current = true;
      }
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
          activePage: payload.pages[0].id,
          scale: 1,
          isModifyReportOpen: false,
          mode: 'scroll',
          ...payload,
        });
      }
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
        <>{!!_id && <DesignBuilder />}</>
      )}
    </>
  );
};

export default EditDesignPage;
