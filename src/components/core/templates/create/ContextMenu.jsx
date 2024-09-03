import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { TbArrowDown, TbArrowUp, TbClipboardCopy, TbCopyPlus, TbLink, TbLinkPlus, TbTrash } from 'react-icons/tb';
import { Listbox, ListboxItem, useDisclosure } from '@nextui-org/react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import LinkTool from './tools/elements/Link';
import { LuGroup, LuUngroup } from 'react-icons/lu';

const ContextMenu = ({ position, isOpen, onClose }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const pages = useTemplateStore(({ template }) => template.pages);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElements = useTemplateStore((state) => state.addElements);
  const updatePage = useTemplateStore((state) => state.updatePage);
  const groupElements = useTemplateStore((state) => state.groupElements);
  const ungroupElements = useTemplateStore((state) => state.ungroupElements);
  const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
  const elements = selectedElements.map((id) => page?.elements.find((el) => el.id === id));
  const { isOpen: isLinkToolOpen, onOpen: onLinkToolOpen, onClose: onLinkToolClose } = useDisclosure();

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

  const handleGroup = () => {
    groupElements(selectedElements, page.id);
  };

  const handleUngroup = () => {
    const group = elements.find((el) => el.id === selectedElements[0]).group;
    ungroupElements(group, page.id);
  };

  const menu = [
    { key: 'copy', label: 'Copy', icon: <TbClipboardCopy size="18" /> },
    { key: 'duplicate', label: 'Duplicate', icon: <TbCopyPlus size="18" /> },
    { key: 'move-top', label: 'Move to top', icon: <TbArrowUp size="18" /> },
    { key: 'move-bottom', label: 'Move to bottom', icon: <TbArrowDown size="18" /> },
  ];

  if (selectedElements.length > 1) {
    if (!elements.every((el) => el.group && el.group === elements[0].group)) {
      menu.push({ key: 'group', label: 'Group', icon: <LuGroup size="18" /> });
    } else {
      menu.push({ key: 'ungroup', label: 'Ungroup', icon: <LuUngroup size="18" /> });
    }
  }

  if (elements?.length && elements.every((el) => el.href)) {
    menu.push({ key: 'link', label: 'Edit link', icon: <TbLinkPlus size="18" />, showDivider: true });
  } else {
    menu.push({ key: 'link', label: 'Link', icon: <TbLink size="18" />, showDivider: true });
  }

  menu.push(...[{ key: 'delete', label: 'Delete', icon: <TbTrash size="18" /> }]);

  return (
    <>
      {isOpen && (
        <>
          {createPortal(
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
                  if (key === 'link') onLinkToolOpen();
                  if (key === 'group') handleGroup();
                  if (key === 'ungroup') handleUngroup();
                  onClose();
                }}
                itemClasses={{ title: 'text-base' }}
              >
                {menu.map((item) => (
                  <ListboxItem key={item.key} startContent={item.icon} showDivider={item.showDivider}>
                    {item.label}
                  </ListboxItem>
                ))}
              </Listbox>
            </div>,
            document.body
          )}
        </>
      )}

      <LinkTool elements={elements} isOpen={isLinkToolOpen} onClose={onLinkToolClose} />
    </>
  );
};

ContextMenu.propTypes = {
  position: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContextMenu;
