import useTemplateStore from '@/store/template.js';
import Page from '@/components/core/templates/create/Page.jsx';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import PageTools from '@/components/core/templates/create/tools/PageTools.jsx';
import useClipboardEvents from '@/hooks/template/use-clipboard-events.js';
import useDelete from '@/hooks/template/use-delete.js';
import { useRef } from 'react';
import useZoom from '@/hooks/template/use-zoom.js';
import useHistory from '@/hooks/template/use-history.js';
import NewPageButton from '@/components/core/templates/create/NewPageButton.jsx';

const Editor = () => {
  const root = useRef(null);
  const pages = useTemplateStore((state) => state.template.pages);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  useClipboardEvents();
  useZoom(root);
  useDelete();
  useHistory();

  const handleParentClick = (e) => {
    if (e.target === root.current) updateTemplate({ selectedElements: [], selectedPage: null });
  };

  return (
    <div className="flex-1 overflow-y-auto py-10 px-10" ref={root} onClick={handleParentClick} id="scrollable">
      <div className="mx-auto w-max">
        <div className="space-y-6 flex flex-col items-center w-max mx-auto select-none">
          {pages.map((page) => (
            <Page key={page.id} id={page.id} />
          ))}
          <NewPageButton />
        </div>
      </div>
      <ElementTools />
      <PageTools />
    </div>
  );
};

export default Editor;
