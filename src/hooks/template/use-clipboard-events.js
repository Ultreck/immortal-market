import { useEffect } from 'react';
import useDesignStore from '@/store/design.js';
import { useKey } from 'react-use';

const isValidElement = (element) => {
  const validKeys = ['type', 'id', 'size', 'position'];
  return validKeys.every((key) => Object.keys(element).includes(key));
};

const useClipboardEvents = () => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const deleteElements = useDesignStore((state) => state.deleteElements);
  const getElement = useDesignStore((state) => state.getElement);
  const getPageElements = useDesignStore((state) => state.getPageElements);
  const getElementPage = useDesignStore((state) => state.getElementPage);
  const createElements = useDesignStore((state) => state.createElements);
  const activePage = useDesignStore((state) => state.activePage);
  const activeElement = useDesignStore((state) => state.activeElement);
  const tool = useDesignStore((state) => state.tool);
  const duplicateElements = useDesignStore((state) => state.duplicateElements);

  useKey(
    (e) => e.key.toLowerCase() === 'd' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await duplicateElements(selectedElements);
    }
  );

  useEffect(() => {
    const handleCopy = (e) => {
      if (activeElement) return;
      if (selectedElements.length) {
        const page = getElementPage(selectedElements[0]);
        const _elements = getPageElements(page.id).filter((element) => selectedElements.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        e.preventDefault();
      }
    };
    const handleCut = (e) => {
      if (activeElement) return;
      if (selectedElements.length) {
        const page = getElementPage(selectedElements[0]);
        const _elements = getPageElements(page.id).filter((element) => selectedElements.includes(element.id));
        e.clipboardData.setData('text/plain', JSON.stringify(_elements));
        deleteElements(page.id, selectedElements);
        e.preventDefault();
      }
    };
    const handlePaste = (e) => {
      if (activeElement || !!tool) return;
      try {
        for (const item of e.clipboardData.items) {
          if (item.type === 'text/plain') {
            item.getAsString((text) => {
              const payload = {
                type: 'text',
                text,
                position: {
                  x: 10,
                  y: 10,
                },
                size: {
                  width: 300,
                  height: 20,
                },
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
                config: {
                  name: 'paragraph',
                },
              };
              try {
                const _elements = JSON.parse(text);
                if (_elements.every((el) => isValidElement(el))) {
                  createElements(
                    activePage,
                    // eslint-disable-next-line no-unused-vars
                    _elements.map(({ _id, id, ...el }) => ({
                      ...el,
                      position: { x: el.position.x + 10, y: el.position.y + 10 },
                    }))
                  );
                } else {
                  createElements(activePage, [payload]);
                }
                // eslint-disable-next-line no-unused-vars
              } catch (e) {
                createElements(activePage, [payload]);
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
                position: {
                  x: 0,
                  y: 0,
                },
                size: {
                  width: 400,
                  height: 300,
                },
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
                // TODO: Reimagine frame logic
                // updateElements(
                //   [
                //     {
                //       ...selected,
                //       children: [
                //         {
                //           ...payload,
                //           width: selected.width,
                //           height: selected.height,
                //         },
                //       ],
                //     },
                //   ],
                //   activePage,
                //   true
                // );
              } else {
                createElements(activePage, [payload]);
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
  }, [
    activeElement,
    activePage,
    createElements,
    deleteElements,
    getElement,
    getElementPage,
    getPageElements,
    selectedElements,
    tool,
  ]);
};

export default useClipboardEvents;
