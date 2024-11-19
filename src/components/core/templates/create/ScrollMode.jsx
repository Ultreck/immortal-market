import Page from '@/components/core/templates/create/Page.jsx';
import NewPageButton from '@/components/core/templates/create/NewPageButton.jsx';
import useTemplateStore from '@/store/template.js';
import { useRef } from 'react';

const ScrollMode = () => {
  const root = useRef(null);
  const pages = useTemplateStore((state) => state.template.pages);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);

  const handleParentClick = (e) => {
    if (e.target === root.current) {
      updateTemplate({ selectedElements: [], selectedPage: null, activeElement: null });
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto py-10 px-10" onClick={handleParentClick} ref={root} id="scrollable">
      <div className="mx-auto w-max">
        <div className="space-y-6 flex flex-col items-center w-max mx-auto select-none">
          {pages.map((page) => (
            <Page key={page.id} id={page.id} />
          ))}
          <NewPageButton />
        </div>
      </div>
    </div>
  );
};

export default ScrollMode;
