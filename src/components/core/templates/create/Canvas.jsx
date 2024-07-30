import useTemplateStore from '@/store/template.js';
import TemplatePage from '@/components/core/templates/create/TemplatePage.jsx';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import PageTools from '@/components/core/templates/create/tools/PageTools.jsx';
import { TbPlus } from 'react-icons/tb';
import useClipboardEvents from '@/hooks/template/use-clipboard-events.js';
import useDelete from '@/hooks/template/use-delete.js';
import { useRef } from 'react';

const Canvas = () => {
  const root = useRef();
  const pages = useTemplateStore((state) => state.template.pages);
  const addPage = useTemplateStore((state) => state.addPage);
  const zoom = useTemplateStore((state) => state.template.zoom);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  useClipboardEvents();
  useDelete();

  const handleParentClick = (e) => {
    if (e.target === root.current) updateTemplate({ selectedElements: [], selectedPage: null });
  };

  return (
    <div className="flex-1 overflow-y-auto" ref={root} onClick={handleParentClick} id="scrollable">
      <div className="mx-auto w-max py-10">
        <div
          className="space-y-6 flex flex-col items-center w-max mx-auto"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
        >
          {pages.map((page) => {
            return <TemplatePage key={page.id} id={page.id} />;
          })}
          <div
            tabIndex={0}
            onClick={() => addPage()}
            className="w-full flex items-center mx-10 border border-default-200 rounded-2xl px-6 py-4 space-x-4 mt-10 hover:bg-default-200/60 dark:hover:bg-default-100/60 cursor-pointer"
          >
            <TbPlus className="text-2xl" />
            <span>Add page</span>
          </div>
        </div>
      </div>

      <ElementTools />
      <PageTools />
    </div>
  );
};

export default Canvas;
