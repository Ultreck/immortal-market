import DesignBuilder from '@/components/core/templates/create/DesignBuilder.jsx';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import useTemplateStore from '@/store/template.js';
import { Spinner } from '@nextui-org/react';
import { useQueryClient } from '@tanstack/react-query';
import useCurrentDesign from '@/hooks/template/use-current-design.js';
import useBusiness from '@/hooks/use-business.js';
import { useUnmount } from 'react-use';

const patchPages = (pages) => {
  return pages.map((p) => {
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
};

const initPages = () => {
  return [
    {
      id: crypto.randomUUID(),
      title: 'Untitled',
      width: 600,
      height: 600,
      style: {
        background: '#ffffff',
      },
      elements: [],
    },
  ];
};

const EditDesignPage = () => {
  const params = useParams();
  const qc = useQueryClient();
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const reset = useTemplateStore((state) => state.reset);
  const { id: business } = useBusiness();
  const ready = useTemplateStore((state) => state.template.ready);
  const id = useTemplateStore((state) => state.template.id);
  const { design, isDesignLoading, isSourceLoading } = useCurrentDesign();
  const loaded = useRef(false);

  useEffect(() => {
    if (params.id !== id) updateTemplate({ id: params.id });
  }, [params.id, id, updateTemplate]);

  useEffect(() => {
    if (design && !loaded.current) {
      loaded.current = true;
      let payload = { ready: true };
      if (design?.data?.pages?.length) payload.pages = patchPages(design.data.pages);
      else payload.pages = initPages();
      payload = {
        activePage: payload.pages[0].id,
        mode: design.type === 'project' ? 'tab' : 'scroll',
        ...payload,
      };
      updateTemplate(payload);
    }
  }, [design, updateTemplate, params.id]);

  useUnmount(() => {
    reset();
    setTimeout(() => {
      qc.removeQueries({ queryKey: ['business', business, 'designs'] });
    });
  });

  return (
    <>
      {isDesignLoading || isSourceLoading ? (
        <div className="h-screen w-full flex flex-col justify-center items-center text-center">
          <Spinner size="lg" />
          <p className="mt-6">Loading design..</p>
        </div>
      ) : (
        <>{ready && design && <DesignBuilder />}</>
      )}
    </>
  );
};

export default EditDesignPage;
