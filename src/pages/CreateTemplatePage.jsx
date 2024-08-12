import TemplateBuilder from '@/components/core/templates/create/TemplateBuilder.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTemplate } from '@/api/business.js';
import { useEffect } from 'react';
import useTemplateStore from '@/store/template.js';
import { Spinner } from '@nextui-org/react';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';

const CreateTemplatePage = () => {
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  const { id: businessId } = useBusiness();
  const title = useTemplateStore((state) => state.template.title);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { data: { success = false, template } = {}, isLoading: isTemplatesLoading } = useGetTemplate(businessId, id);

  useEffect(() => {
    if (success && !template) {
      toast.error('Template not found');
      navigate(`/templates/`);
    }
  }, [success, template, navigate, toast]);

  useEffect(() => {
    if (template) {
      const { _id, title, description, data } = template;
      const pages = data.pages.map((page) => ({
        ...page,
        elements: page.elements.map((el) => {
          if (el.type.startsWith('frame-')) {
            return {
              ...el,
              rotate: 0,
              children: el.children.map((el) => {
                if (el.type === 'image' && !el.config?.src && el.src) {
                  return { ...el, rotate: 0, config: { src: el.src } };
                }
                return { ...el, rotate: 0 };
              }),
            };
          }
          if (el.type === 'image' && !el.config?.src && el.src) {
            return { ...el, rotate: 0, config: { src: el.src } };
          }
          return { ...el, rotate: 0 };
        }),
      }));
      updateTemplate({
        selectedElements: [],
        selectedPage: null,
        activePage: null,
        zoom: 1,
        ...data,
        pages,
        title,
        description,
        id: _id,
      });
    }
  }, [template, updateTemplate]);

  return (
    <>
      {isTemplatesLoading ? (
        <div className="h-screen flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : (
        <>{!!title && <TemplateBuilder />}</>
      )}
    </>
  );
};

export default CreateTemplatePage;
