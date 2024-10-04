import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { TbClipboardCopy, TbCopyPlus, TbLink, TbLinkPlus, TbPlus, TbTrash } from 'react-icons/tb';
import { Listbox, ListboxItem, useDisclosure } from '@nextui-org/react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import LinkTool from './LinkModal.jsx';
import {
  LuBringToFront,
  LuChevronDown,
  LuChevronRight,
  LuChevronUp,
  LuGroup,
  LuSendToBack,
  LuUngroup,
} from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';
import {
  RiAlignItemBottomLine,
  RiAlignItemHorizontalCenterLine,
  RiAlignItemLeftLine,
  RiAlignItemTopLine,
  RiAlignItemVerticalCenterLine,
} from 'react-icons/ri';
import { useKey } from 'react-use';
import CreateGroupBlockModal from '@/components/core/templates/CreateGroupBlockModal.jsx';

const ContextMenu = ({ position, isOpen, onClose, onAction }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const pages = useTemplateStore(({ template }) => template.pages);
  const page = pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
  const elements = selectedElements.map((id) => page?.elements.find((el) => el.id === id)).filter(Boolean);
  const { isOpen: isLinkToolOpen, onOpen: onLinkToolOpen, onClose: onLinkToolClose } = useDisclosure();
  const { isOpen: isCreateBlockOpen, onOpen: onCreateBlockOpen, onClose: onCreateBlockClose } = useDisclosure();

  useKey('Escape', () => {
    onClose();
  });

  useEffect(() => {
    if (isOpen) {
      const scrollable = document.getElementById('scrollable');
      scrollable.style.overflow = 'hidden';
    } else {
      const scrollable = document.getElementById('scrollable');
      scrollable.style.overflow = 'auto';
    }
  }, [isOpen]);

  const menu = [
    { key: 'copy', label: 'Copy', icon: <TbClipboardCopy size="18" /> },
    { key: 'duplicate', label: 'Duplicate', icon: <TbCopyPlus size="18" /> },
  ];

  if (selectedElements.length > 1) {
    if (!elements.every((el) => el.group && el.group === elements[0].group)) {
      menu.push({ key: 'group', label: 'Group', icon: <LuGroup size="18" /> });
    } else {
      menu.push({ key: 'ungroup', label: 'Ungroup', icon: <LuUngroup size="18" /> });
    }

    menu.push({
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
  }

  menu.push({
    key: 'arrange',
    label: 'Arrange',
    icon: <LuBringToFront size="18" />,
    children: [
      { key: 'move-top', label: 'Move to top', icon: <LuBringToFront size="18" /> },
      { key: 'move-bottom', label: 'Move to bottom', icon: <LuSendToBack size="18" /> },
      { key: 'move-up', label: 'Move up', icon: <LuChevronUp size="18" /> },
      { key: 'move-down', label: 'Move down', icon: <LuChevronDown size="18" /> },
    ],
  });

  if (elements?.length && elements.every((el) => el.href)) {
    menu.push({ key: 'link', label: 'Edit link', icon: <TbLinkPlus size="18" />, showDivider: true });
  } else {
    menu.push({ key: 'link', label: 'Link', icon: <TbLink size="18" />, showDivider: true });
  }

  menu.push({ key: 'save-as-block', label: 'Save as block', icon: <TbPlus size="18" />, showDivider: true });

  menu.push(...[{ key: 'delete', label: 'Delete', icon: <TbTrash size="18" />, color: 'danger' }]);

  return (
    <AnimatePresence>
      {isOpen && elements?.length > 0 && (
        <>
          {createPortal(
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-[220px] max-h-[300px] border-small border-default-200 px-2 py-2 rounded-xl shadow bg-white dark:bg-default-50 fixed top-0 left-0 z-[99]"
              style={{ top: `${position.y}px`, left: `${position.x}px` }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Listbox
                aria-label="Actions"
                onAction={(key) => {
                  if (menu.find((item) => item.key === key)?.children?.length) return;
                  if (key === 'link') onLinkToolOpen();
                  if (key === 'save-as-block') onCreateBlockOpen();
                  else onAction(key);
                  onClose();
                }}
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
                            onAction(key);
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
    </AnimatePresence>
  );
};

ContextMenu.propTypes = {
  position: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default ContextMenu;
