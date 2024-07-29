import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { TbArrowDown, TbArrowUp, TbClipboardCopy, TbCopyPlus, TbTrash } from 'react-icons/tb';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const ContextMenu = ({ position, isOpen, onClose }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const pages = useTemplateStore(({ template }) => template.pages);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElements = useTemplateStore((state) => state.addElements);
  const updatePage = useTemplateStore((state) => state.updatePage);
  const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));

  useEffect(() => {
    if (isOpen) {
      const scrollable = document.getElementById('scrollable');
      scrollable.style.overflow = 'hidden';
    } else {
      const scrollable = document.getElementById('scrollable');
      scrollable.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleDuplicate = () => {
    const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const duplicatedElements = _elements.map((element) => {
      return { ...element, id: crypto.randomUUID(), x: element.x + 10, y: element.y + 10 };
    });
    addElements(duplicatedElements, page.id);
  };

  const handleDelete = () => deleteElements(selectedElements, page.id);

  const handleMoveToTop = () => {
    const right = page.elements.filter((el) => selectedElements.includes(el.id));
    const left = page.elements.filter((el) => !selectedElements.includes(el.id));
    updatePage({ elements: [...left, ...right] }, page.id);
  };

  const handleMoveToBottom = () => {
    const left = page.elements.filter((el) => selectedElements.includes(el.id));
    const right = page.elements.filter((el) => !selectedElements.includes(el.id));
    updatePage({ elements: [...left, ...right] }, page.id);
  };

  const handleCopy = async () => {
    const _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const textBlob = new Blob([JSON.stringify(_elements)], { type: 'text/plain' });
    await navigator.clipboard.write([new ClipboardItem({ 'text/plain': textBlob })]);
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="w-[260px] border-small px-2 py-2 rounded-2xl border-default-200 dark:border-default-100 bg-default-50 fixed"
            style={{ top: `${position.y}px`, left: `${position.x}px` }}
            onContextMenu={(e) => e.preventDefault()}
          >
            <Listbox
              aria-label="Actions"
              onAction={(key) => {
                if (key === 'copy') handleCopy();
                if (key === 'duplicate') handleDuplicate();
                if (key === 'delete') handleDelete();
                if (key === 'move-top') handleMoveToTop();
                if (key === 'move-bottom') handleMoveToBottom();
                onClose();
              }}
              itemClasses={{ title: 'text-base' }}
            >
              <ListboxItem key="copy" startContent={<TbClipboardCopy size="18" />}>
                Copy
              </ListboxItem>
              <ListboxItem key="duplicate" startContent={<TbCopyPlus size="18" />}>
                Duplicate
              </ListboxItem>
              <ListboxItem key="move-top" startContent={<TbArrowUp size="18" />}>
                Move to top
              </ListboxItem>
              <ListboxItem key="move-bottom" startContent={<TbArrowDown size="18" />} showDivider>
                Move to bottom
              </ListboxItem>
              <ListboxItem key="delete" startContent={<TbTrash size="18" />} color="danger">
                Delete
              </ListboxItem>
            </Listbox>
          </div>,
          document.body
        )}
    </>
  );
};

ContextMenu.propTypes = {
  position: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContextMenu;
