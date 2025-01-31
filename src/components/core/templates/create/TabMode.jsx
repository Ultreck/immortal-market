import useTemplateStore from '@/store/template.js';
import Page from '@/components/core/templates/create/Page.jsx';
import { useRef } from 'react';

const TabMode = () => {
  const root = useRef(null);
  const activePage = useTemplateStore((state) => state.template.activePage);
  const page = useTemplateStore((state) => state.template.pages.find((p) => p.id === activePage));
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  const handleParentClick = (e) => {
    if (e.target === root.current) {
      updateTemplate({ selectedElements: [], selectedPage: null, activeElement: null });
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col flex-1 overflow-y-auto p-10" id="scrollable" onClick={handleParentClick} ref={root}>
        <div className="mx-auto my-auto w-max">
          <Page key={page.id} id={page.id} showTitle={false} />
        </div>
      </div>
    </div>
  );
};

export default TabMode;
