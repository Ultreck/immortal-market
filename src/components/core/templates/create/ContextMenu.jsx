import useDesignStore from '@/store/design.js';
import PropTypes from 'prop-types';
import { TbClipboardCopy, TbCopyPlus, TbLink, TbLinkPlus, TbPlus, TbTrash } from 'react-icons/tb';
import { Listbox, ListboxItem, useDisclosure } from '@heroui/react';
import { createPortal } from 'react-dom';
import { useEffect, useMemo } from 'react';
import LinkTool from './LinkModal.jsx';
import {
  LuBringToFront,
  LuChevronDown,
  LuChevronRight,
  LuChevronUp,
  LuGroup,
  LuMessageSquarePlus,
  LuSendToBack,
  LuUngroup,
} from 'react-icons/lu';
import { motion } from 'motion/react';
import {
  RiAlignItemBottomLine,
  RiAlignItemHorizontalCenterLine,
  RiAlignItemLeftLine,
  RiAlignItemTopLine,
  RiAlignItemVerticalCenterLine,
} from 'react-icons/ri';
import { useKey } from 'react-use';
import CreateGroupBlockModal from '@/components/core/templates/CreateGroupBlockModal.jsx';
import CreateCommentModal from '@/components/core/templates/CreateCommentModal.jsx';
import { useActions } from '@/hooks/template/use-actions.js';

const ContextMenu = ({ id, position, isOpen, onClose, type }) => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const elements = useDesignStore((state) => state.elements.filter((el) => selectedElements.includes(el.id)));
  const { isOpen: isLinkToolOpen, onOpen: onLinkToolOpen, onClose: onLinkToolClose } = useDisclosure();
  const { isOpen: isCreateBlockOpen, onOpen: onCreateBlockOpen, onClose: onCreateBlockClose } = useDisclosure();
  const { isOpen: isCommentOpen, onOpen: onCommentOpen, onClose: onCommentClose } = useDisclosure();
  const { isOpen: isPageCommentOpen, onOpen: onPageCommentOpen, onClose: onPageCommentClose } = useDisclosure();
  const { handleAction } = useActions({ id });

  useKey('Escape', () => onClose());

  useEffect(() => {
    if (isOpen) {
      const scrollable = document.getElementById('scrollable');
      scrollable.style.overflow = 'hidden';
    } else {
      const scrollable = document.getElementById('scrollable');
      scrollable.style.overflow = 'auto';
    }
  }, [isOpen]);

  const menu = useMemo(() => {
    if (type === 'page') {
      return [
        { key: 'page-duplicate', label: 'Duplicate', icon: <TbCopyPlus size="18" /> },
        { key: 'page-comment', label: 'Comment', icon: <LuMessageSquarePlus size="18" /> },
      ];
    } else if (type === 'element') {
      const items = [
        { key: 'copy', label: 'Copy', icon: <TbClipboardCopy size="18" /> },
        { key: 'duplicate', label: 'Duplicate', icon: <TbCopyPlus size="18" /> },
        { key: 'comment', label: 'Comment', icon: <LuMessageSquarePlus size="18" /> },
      ];
      if (selectedElements.length > 1) {
        if (!elements.every((el) => el.group && el.group === elements[0].group)) {
          items.push({ key: 'group', label: 'Group', icon: <LuGroup size="18" /> });
        }
        items.push({
          key: 'align',
          label: 'Align to',
          icon: <RiAlignItemLeftLine size="18" />,
          children: [
            { key: 'align-left', label: 'Align left', icon: <RiAlignItemLeftLine size="18" /> },
            { key: 'align-center', label: 'Align center', icon: <RiAlignItemHorizontalCenterLine size="18" /> },
            { key: 'align-right', label: 'Align right', icon: <RiAlignItemVerticalCenterLine size="18" /> },
            { key: 'align-top', label: 'Align top', icon: <RiAlignItemTopLine size="18" /> },
            { key: 'align-middle', label: 'Align middle', icon: <RiAlignItemVerticalCenterLine size="18" /> },
            { key: 'align-bottom', label: 'Align bottom', icon: <RiAlignItemBottomLine size="18" /> },
          ],
        });
      } else {
        if (elements[0]?.type === 'group') {
          items.push({ key: 'ungroup', label: 'Ungroup', icon: <LuUngroup size="18" /> });
        }
      }
      items.push({
        key: 'arrange',
        label: 'Arrange',
        icon: <LuBringToFront size="18" />,
        children: [
          { key: 'bring-forward', label: 'Bring forward', icon: <LuChevronUp size="18" /> },
          { key: 'bring-to-front', label: 'Bring to front', icon: <LuBringToFront size="18" /> },
          { key: 'send-backward', label: 'Send backward', icon: <LuChevronDown size="18" /> },
          { key: 'send-to-back', label: 'Send to back', icon: <LuSendToBack size="18" /> },
        ],
      });
      if (elements?.length && elements.every((el) => el.href)) {
        items.push({ key: 'link', label: 'Edit link', icon: <TbLinkPlus size="18" />, showDivider: true });
      } else {
        items.push({ key: 'link', label: 'Link', icon: <TbLink size="18" />, showDivider: true });
      }
      items.push({ key: 'save-as-block', label: 'Save as block', icon: <TbPlus size="18" />, showDivider: true });
      items.push(...[{ key: 'delete', label: 'Delete', icon: <TbTrash size="18" />, color: 'danger' }]);
      return items;
    }
  }, [elements, selectedElements.length, type]);

  return (
    <>
      {isOpen && (
        <>
          {createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-[220px] border-small border-default-200 px-2 py-2 rounded-xl shadow bg-white dark:bg-default-50 fixed top-0 left-0 z-[99]"
              style={{ top: `${position.y}px`, left: `${position.x}px` }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Listbox
                aria-label="Actions"
                onAction={(key) => {
                  if (menu.find((item) => item.key === key)?.children?.length) return;
                  if (key === 'link') onLinkToolOpen();
                  if (key === 'save-as-block') onCreateBlockOpen();
                  if (key === 'comment') onCommentOpen();
                  if (key === 'page-comment') onPageCommentOpen();
                  else handleAction(key);
                  onClose();
                }}
                classNames={{ base: 'overflow-visible' }}
                itemClasses={{ title: 'text-base group' }}
              >
                {menu.map((item) => (
                  <ListboxItem
                    key={item.key}
                    startContent={item.icon}
                    showDivider={item.showDivider}
                    endContent={item.children?.length && <LuChevronRight size="18" />}
                    color={item.color}
                    textValue={item.label}
                  >
                    {item.label}
                    {!!item.children?.length && (
                      <div className="w-[200px] absolute top-0 left-full bg-white dark:bg-default-50 shadow border-small border-default-200 rounded-2xl px-2 py-2 hidden group-hover:block">
                        <Listbox
                          aria-label="Sub actions"
                          onAction={(key) => {
                            handleAction(key);
                            onClose();
                          }}
                          itemClasses={{ title: 'text-base group' }}
                        >
                          {item.children.map((item) => (
                            <ListboxItem
                              key={item.key}
                              startContent={item.icon}
                              showDivider={item.showDivider}
                              textValue={item.label}
                            >
                              {item.label}
                            </ListboxItem>
                          ))}
                        </Listbox>
                      </div>
                    )}
                  </ListboxItem>
                ))}
              </Listbox>
            </motion.div>,
            document.body
          )}
        </>
      )}

      <LinkTool elements={elements} isOpen={isLinkToolOpen} onClose={onLinkToolClose} />
      <CreateGroupBlockModal isOpen={isCreateBlockOpen} onClose={onCreateBlockClose} elements={elements} />
      <CreateCommentModal
        target="element"
        targetId={elements[0]?.id}
        page={id}
        isOpen={isCommentOpen}
        onClose={onCommentClose}
      />
      <CreateCommentModal
        target="page"
        targetId={id}
        page={id}
        isOpen={isPageCommentOpen}
        onClose={onPageCommentClose}
      />
    </>
  );
};

ContextMenu.propTypes = {
  id: PropTypes.string.isRequired,
  position: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default ContextMenu;
