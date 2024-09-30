import { useEffect } from 'react';
import useTemplateStore from '@/store/template.js';

const isValidElement = (element) => {
  const validKeys = ['type', 'id', 'x', 'y', 'width', 'height'];
  return validKeys.every((key) => Object.keys(element).includes(key));
};

const useClipboardEvents = () => {
  const pages = useTemplateStore((state) => state.template.pages);
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const getElement = useTemplateStore((state) => state.getElement);
  const addElements = useTemplateStore((state) => state.addElements);
  const activePage = useTemplateStore((state) => state.template.activePage);
  const updateElements = useTemplateStore((state) => state.updateElements);

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
      if (selectedElements.length) return;
      try {
        for (const item of e.clipboardData.items) {
          if (item.type === 'text/plain') {
            item.getAsString((text) => {
              const payload = {
                type: 'heading',
                text,
                x: 10,
                y: 10,
                width: 300,
                height: 20,
                id: crypto.randomUUID(),
                style: {
                  fontSize: 16,
                  fontWeight: 'normal',
                  color: '#000000',
                  textAlign: 'left',
                  opacity: 1,
                  fontFamily: 'Roboto',
                  letterSpacing: 0,
                  lineHeight: 1,
                },
              };
              try {
                const _elements = JSON.parse(text);
                if (_elements.every((el) => isValidElement(el))) {
                  addElements(
                    _elements.map((el) => ({ ...el, id: crypto.randomUUID(), x: el.x + 10, y: el.y + 10 })),
                    activePage
                  );
                } else {
                  addElements([payload], activePage);
                }
              } catch (e) {
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
                width: 400,
                height: 300,
                id: crypto.randomUUID(),
                x: 0,
                y: 0,
                style: {
                  backgroundColor: '#eee',
                  borderWidth: 0,
                  borderColor: '#000000',
                  opacity: 1,
                  borderRadius: 0,
                },
                config: {
                  src: url,
                },
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
                  activePage,
                  true
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
};

export default useClipboardEvents;
