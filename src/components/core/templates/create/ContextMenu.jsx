import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { TbClipboardCopy, TbCopyPlus, TbLink, TbLinkPlus, TbTrash } from 'react-icons/tb';
import { Listbox, ListboxItem, useDisclosure } from '@nextui-org/react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import LinkTool from './ElementLink.jsx';
import { LuGroup, LuUngroup } from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';

const ContextMenu = ({ position, isOpen, onClose, onAction }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const pages = useTemplateStore(({ template }) => template.pages);
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
  }

  if (elements?.length && elements.every((el) => el.href)) {
    menu.push({ key: 'link', label: 'Edit link', icon: <TbLinkPlus size="18" />, showDivider: true });
  } else {
    menu.push({ key: 'link', label: 'Link', icon: <TbLink size="18" />, showDivider: true });
  }

  menu.push(...[{ key: 'delete', label: 'Delete', icon: <TbTrash size="18" /> }]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && elements?.length > 0 && (
        <>
          {createPortal(
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-[220px] max-h-[300px] overflow-y-auto border-small px-1 py-1 rounded-xl shadow bg-white dark:bg-default-50 fixed top-0 left-0 z-[99]"
              style={{ top: `${position.y}px`, left: `${position.x}px` }}
              onContextMenu={(e) => e.preventDefault()}
            >
              <Listbox
                aria-label="Actions"
                onAction={(key) => {
                  if (key === 'link') onLinkToolOpen();
                  else onAction(key);
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
            </motion.div>,
            document.body
          )}
        </>
      )}
      <LinkTool elements={elements} isOpen={isLinkToolOpen} onClose={onLinkToolClose} />
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
