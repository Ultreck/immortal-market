import { useEffect } from 'react';
import useTemplateStore from '@/store/template.js';
import { useKey } from 'react-use';
import TemplatePage from '@/components/core/templates/create/TemplatePage.jsx';
import ElementTools from '@/components/core/templates/create/tools/ElementTools.jsx';
import PageTools from '@/components/core/templates/create/tools/PageTools.jsx';
import { TbPlus } from 'react-icons/tb';
import elements from '@/lib/elements.js';

const isValidElement = (element) => {
  const validKeys = ['type', 'id', 'x', 'y', 'width', 'height'];
  return validKeys.every((key) => Object.keys(element).includes(key));
};

const Canvas = () => {
  const pages = useTemplateStore(({ template }) => template.pages);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const getElement = useTemplateStore((state) => state.getElement);
  const addElements = useTemplateStore((state) => state.addElements);
  const activePage = useTemplateStore((state) => state.template.activePage);
  const updateElements = useTemplateStore((state) => state.updateElements);
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
        for (const item of e.clipboardData.items) {
          if (item.type === 'text/plain') {
            item.getAsString((text) => {
              try {
                const _elements = JSON.parse(text);
                if (_elements.every((el) => isValidElement(el))) {
                  addElements(
                    _elements.map((el) => ({ ...el, id: crypto.randomUUID(), x: el.x + 10, y: el.y + 10 })),
                    activePage
                  );
                } else {
                  const el = elements.find((el) => el.id === 'text');
                  const payload = { ...el.data, text, x: 10, y: 10, id: crypto.randomUUID() };
                  addElements([payload], activePage);
                }
              } catch (e) {
                const el = elements.find((el) => el.id === 'text');
                const payload = { ...el.data, text, x: 10, y: 10, id: crypto.randomUUID() };
                addElements([payload], activePage);
              }
              e.preventDefault();
            });
          }
          if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            const reader = new FileReader();
            reader.onload = (event) => {
              const url = event.target.result;
              const payload = {
                type: 'image',
                text: 'Image',
                src: url,
                width: 400,
                height: 300,
                id: crypto.randomUUID(),
                x: 0,
                y: 0,
              };
              const selected = selectedElements.length > 0 ? getElement(selectedElements[0]) : null;
              if (selected && selected.type.startsWith('frame')) {
                updateElements(
                  [
                    {
                      ...selected,
                      children: [
                        {
                          ...payload,
                          width: selected.width,
                          height: selected.height,
                        },
                      ],
                    },
                  ],
                  activePage
                );
              } else {
                addElements([payload], activePage);
              }
            };
            reader.readAsDataURL(file);
            e.preventDefault();
            return;
          }
        }
      } catch (error) {
        console.error('Error handling paste event:', error);
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
  }, [activePage, addElements, deleteElements, getElement, pages, selectedElements, updateElements]);

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
    <>
      <div className="space-y-6 flex flex-col items-center">
        {pages.map((page) => {
          return <TemplatePage key={page.id} id={page.id} />;
        })}
        <div
          onClick={addPage}
          tabIndex={0}
          className="w-full flex items-center border border-default-200 rounded-2xl px-6 py-4 space-x-4 hover:bg-default-200/60 dark:hover:bg-default-100/60 cursor-pointer"
        >
          <TbPlus className="text-2xl" />
          <span>Add page</span>
        </div>
      </div>

      <ElementTools />
      <PageTools />
    </>
  );
};

export default Canvas;
