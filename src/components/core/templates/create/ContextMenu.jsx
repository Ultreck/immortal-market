import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { TbClipboardCopy, TbCopyPlus, TbLink, TbLinkPlus, TbTrash } from 'react-icons/tb';
import { Listbox, ListboxItem, useDisclosure } from '@nextui-org/react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import LinkTool from './tools/elements/Link';
import { LuGroup, LuUngroup } from 'react-icons/lu';
import {
  RiAlignItemBottomLine,
  RiAlignItemHorizontalCenterLine,
  RiAlignItemLeftLine,
  RiAlignItemTopLine,
  RiAlignItemVerticalCenterLine,
  RiArrowDownDoubleLine,
  RiArrowDownSLine,
  RiArrowUpDoubleLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

const ContextMenu = ({ position, isOpen, onClose }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const pages = useTemplateStore(({ template }) => template.pages);
  const deleteElements = useTemplateStore((state) => state.deleteElements);
  const addElements = useTemplateStore((state) => state.addElements);
  const updatePage = useTemplateStore((state) => state.updatePage);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const groupElements = useTemplateStore((state) => state.groupElements);
  const ungroupElements = useTemplateStore((state) => state.ungroupElements);
  const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
  const elements = selectedElements.map((id) => page?.elements.find((el) => el.id === id)).filter(Boolean);
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
    updatePage({ elements: [...left, ...right] }, page.id, true);
  };

  const handleMoveToBottom = () => {
    const left = page.elements.filter((el) => selectedElements.includes(el.id));
    const right = page.elements.filter((el) => !selectedElements.includes(el.id));
    updatePage({ elements: [...left, ...right] }, page.id, true);
  };

  const handleMoveUp = () => {
    const _elements = [...page.elements];
    const selectedIndices = selectedElements.map((id) => _elements.findIndex((el) => el.id === id));
    for (let i = selectedIndices.length - 1; i >= 0; i--) {
      const index = selectedIndices[i];
      if (index < _elements.length - 1) {
        [_elements[index], _elements[index + 1]] = [_elements[index + 1], _elements[index]];
      }
    }
    updatePage({ elements: _elements }, page.id, true);
  };

  const handleMoveDown = () => {
    const _elements = [...page.elements];
    const selectedIndices = selectedElements.map((id) => _elements.findIndex((el) => el.id === id));
    for (let i = 0; i < selectedIndices.length; i++) {
      const index = selectedIndices[i];
      if (index > 0) {
        [_elements[index], _elements[index - 1]] = [_elements[index - 1], _elements[index]];
      }
    }
    updatePage({ elements: _elements }, page.id, true);
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

  const handleAlignLeft = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const x = Math.min(..._elements.map((el) => el.x));
    _elements = _elements.map((el) => ({ ...el, x }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignCenter = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const minX = Math.min(..._elements.map((el) => el.x));
    const maxX = Math.max(..._elements.map((el) => el.x + el.width));
    const centerX = (minX + maxX) / 2;
    _elements = _elements.map((el) => ({
      ...el,
      x: centerX - el.width / 2,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignRight = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const maxRight = Math.max(..._elements.map((el) => el.x + el.width));
    _elements = _elements.map((el) => ({
      ...el,
      x: maxRight - el.width,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignTop = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const y = Math.min(..._elements.map((el) => el.y));
    _elements = _elements.map((el) => ({ ...el, y }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignMiddle = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const minY = Math.min(..._elements.map((el) => el.y));
    const maxY = Math.max(..._elements.map((el) => el.y + el.height));
    const centerY = (minY + maxY) / 2;
    _elements = _elements.map((el) => ({
      ...el,
      y: centerY - el.height / 2,
    }));
    updateElements(_elements, page.id, true);
  };

  const handleAlignBottom = () => {
    let _elements = page.elements.filter((element) => selectedElements.includes(element.id));
    const maxBottom = Math.max(..._elements.map((el) => el.y + el.height));
    _elements = _elements.map((el) => ({
      ...el,
      y: maxBottom - el.height,
    }));
    updateElements(_elements, page.id, true);
  };

  const menu = [
    { key: 'copy', label: 'Copy', icon: <TbClipboardCopy size="18" /> },
    { key: 'duplicate', label: 'Duplicate', icon: <TbCopyPlus size="18" /> },
    { key: 'move-top', label: 'Move to top', icon: <RiArrowUpDoubleLine size="18" /> },
    { key: 'move-bottom', label: 'Move to bottom', icon: <RiArrowDownDoubleLine size="18" /> },
    { key: 'move-up', label: 'Move up', icon: <RiArrowUpSLine size="18" /> },
    { key: 'move-down', label: 'Move down', icon: <RiArrowDownSLine size="18" /> },
  ];

  if (selectedElements.length > 1) {
    if (!elements.every((el) => el.group && el.group === elements[0].group)) {
      menu.push({ key: 'group', label: 'Group', icon: <LuGroup size="18" /> });
    } else {
      menu.push({ key: 'ungroup', label: 'Ungroup', icon: <LuUngroup size="18" /> });
    }
    menu.push(
      ...[
        { key: 'align-left', label: 'Align left', icon: <RiAlignItemLeftLine size="18" /> },
        { key: 'align-center', label: 'Align center', icon: <RiAlignItemHorizontalCenterLine size="18" /> },
        { key: 'align-right', label: 'Align right', icon: <RiAlignItemVerticalCenterLine size="18" /> },
        { key: 'align-top', label: 'Align top', icon: <RiAlignItemTopLine size="18" /> },
        { key: 'align-middle', label: 'Align middle', icon: <RiAlignItemVerticalCenterLine size="18" /> },
        { key: 'align-bottom', label: 'Align bottom', icon: <RiAlignItemBottomLine size="18" /> },
      ]
    );
  }

  if (elements?.length && elements.every((el) => el.href)) {
    menu.push({ key: 'link', label: 'Edit link', icon: <TbLinkPlus size="18" />, showDivider: true });
  } else {
    menu.push({ key: 'link', label: 'Link', icon: <TbLink size="18" />, showDivider: true });
  }

  menu.push(...[{ key: 'delete', label: 'Delete', icon: <TbTrash size="18" /> }]);

  return (
    <>
      {isOpen && elements?.length > 0 && (
        <>
          {createPortal(
            <div
              className="w-[220px] max-h-[300px] overflow-y-auto border-small px-1 py-1 rounded-xl border-default-200 dark:border-default-100 bg-white dark:bg-default-50 fixed z-[99]"
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
                  if (key === 'move-up') handleMoveUp();
                  if (key === 'move-down') handleMoveDown();
                  if (key === 'link') onLinkToolOpen();
                  if (key === 'group') handleGroup();
                  if (key === 'ungroup') handleUngroup();
                  if (key === 'align-left') handleAlignLeft();
                  if (key === 'align-center') handleAlignCenter();
                  if (key === 'align-right') handleAlignRight();
                  if (key === 'align-top') handleAlignTop();
                  if (key === 'align-middle') handleAlignMiddle();
                  if (key === 'align-bottom') handleAlignBottom();
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
