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
      updateTemplate({
        selectedElements: [],
        selectedPage: null,
        activePage: null,
        zoom: 1,
        ...data,
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
