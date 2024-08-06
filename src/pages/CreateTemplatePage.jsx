import TemplateBuilder from '@/components/core/templates/create/TemplateBuilder.jsx';
import { useParams } from 'react-router-dom';
import { useGetTemplate } from '@/api/business.js';
import { useEffect } from 'react';
import useTemplateStore from '@/store/template.js';
import { Spinner } from '@nextui-org/react';
import useBusiness from '@/hooks/use-business.js';

const CreateTemplatePage = () => {
  const { id } = useParams();
  const { id: businessId } = useBusiness();
  const name = useTemplateStore((state) => state.template.name);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const { data: { template } = {}, isLoading: isTemplatesLoading } = useGetTemplate(businessId, id);

  useEffect(() => {
    if (template) {
      const { _id, name, description, data } = template;
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
        name,
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
        <>{!!name && <TemplateBuilder />}</>
      )}
    </>
  );
};

export default CreateTemplatePage;
