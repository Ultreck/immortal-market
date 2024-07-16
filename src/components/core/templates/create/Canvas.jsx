import { useEffect } from 'react';
import useTemplateStore from '@/store/template.js';
import { useKey } from 'react-use';
import TemplatePage from '@/components/core/templates/create/TemplatePage.jsx';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import PageTools from '@/components/core/templates/create/tools/PageTools.jsx';
import { TbPlus } from 'react-icons/tb';

const isValidElement = (element) => {
  const validKeys = ['type', 'id', 'x', 'y', 'width', 'height'];
  return validKeys.every((key) => Object.keys(element).includes(key));
};

const Canvas = () => {
  const pages = useTemplateStore(({ template }) => template.pages);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElements = useTemplateStore((state) => state.addElements);
  const activePage = useTemplateStore((state) => state.template.activePage);
  const addPage = useTemplateStore(({ addPage }) => addPage);

  useEffect(() => {
    const handleCopy = (e) => {
      if (selectedElements.length) {
        const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
        const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        e.preventDefault();
      }
    };
    const handleCut = (e) => {
      if (selectedElements.length) {
        const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
        const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        deleteElements(selectedElements, page.id);
        e.preventDefault();
      }
    };
    const handlePaste = (e) => {
      try {
        const text = e.clipboardData.getData('text/plain');
        const _elements = JSON.parse(text);
        if (_elements.every((el) => isValidElement(el))) {
          addElements(
            _elements.map((el) => ({ ...el, id: crypto.randomUUID(), x: el.x + 10, y: el.y + 10 })),
            activePage
          );
          e.preventDefault();
        }
      } catch (e) {
        /* empty */
      }
    };
    window.addEventListener('cut', handleCut);
    window.addEventListener('paste', handlePaste);
    window.addEventListener('copy', handleCopy);
    return () => {
      window.removeEventListener('paste', handlePaste);
      window.removeEventListener('copy', handleCopy);
      window.removeEventListener('cut', handleCut);
    };
  }, [activePage, addElements, deleteElements, pages, selectedElements]);

  useKey(
    'Delete',
    () => {
      const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
      deleteElements(selectedElements, page.id);
    },
    undefined,
    [selectedElements, pages, deleteElements]
  );

  return (
    <div>
      <div className="space-y-8 flex flex-col items-center">
        {pages.map((page) => {
          return <TemplatePage key={page.id} id={page.id} />;
        })}
      </div>
      <div
        onClick={addPage}
        tabIndex={0}
        className="flex items-center border border-default-200 rounded-2xl px-6 py-4 space-x-4 mt-10 hover:bg-default-200/60 dark:hover:bg-default-100/60 cursor-pointer"
      >
        <TbPlus className="text-2xl" />
        <span>Add page</span>
      </div>

      <ElementTools />
      <PageTools />
    </div>
  );
};

export default Canvas;
