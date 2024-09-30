import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@nextui-org/react';
import {
  RiAddLine,
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
import { LuGroup, LuUngroup } from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';
import { TbTrash } from 'react-icons/tb';
import ElementsPreview from '@/components/core/templates/create/ElementsPreview.jsx';

const FloatingToolbar = ({ id, onAction }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const elements = useTemplateStore((state) => {
    const els = state.template.pages.find((page) => page.id === id).elements;
    return els.filter((el) => selectedElements.includes(el.id));
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isGrouped = elements.every((el) => el.group && el.group === elements[0].group);

  return (
    <AnimatePresence>
      {!!elements.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-3 left-1/2 -translate-x-1/2 w-max px-2 py-2 z-10 bg-white shadow dark:bg-default-100 rounded-full flex items-center"
        >
          {elements.length > 1 && (
            <>
              <Button
                variant="light"
                radius="full"
                className="text-base px-4"
                size="sm"
                startContent={<RiAddLine size="18" />}
                onClick={onOpen}
              >
                Save as block
              </Button>
              {!isGrouped ? (
                <Button
                  variant="light"
                  radius="full"
                  className="text-base px-4"
                  size="sm"
                  startContent={<LuGroup size="18" />}
                  onClick={() => onAction('group')}
                >
                  Group
                </Button>
              ) : (
                <Button
                  variant="light"
                  radius="full"
                  className="text-base px-4"
                  size="sm"
                  startContent={<LuUngroup size="18" />}
                  onClick={() => onAction('ungroup')}
                >
                  Ungroup
                </Button>
              )}
              <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
                <DropdownTrigger>
                  <Button variant="light" radius="full" className="text-base px-4" size="sm">
                    Align to
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Arrange actions" onAction={(key) => onAction(key)}>
                  {[
                    { key: 'align-left', label: 'Align left', icon: <RiAlignItemLeftLine size="18" /> },
                    { key: 'align-center', label: 'Align center', icon: <RiAlignItemHorizontalCenterLine size="18" /> },
                    { key: 'align-right', label: 'Align right', icon: <RiAlignItemVerticalCenterLine size="18" /> },
                    { key: 'align-top', label: 'Align top', icon: <RiAlignItemTopLine size="18" /> },
                    { key: 'align-middle', label: 'Align middle', icon: <RiAlignItemVerticalCenterLine size="18" /> },
                    { key: 'align-bottom', label: 'Align bottom', icon: <RiAlignItemBottomLine size="18" /> },
                  ].map((item) => (
                    <DropdownItem key={item.key} startContent={item.icon}>
                      <span className="text-base">{item.label}</span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <Dropdown classNames={{ content: 'shadow border border-default-200' }}>
                <DropdownTrigger>
                  <Button variant="light" radius="full" className="text-base px-4" size="sm">
                    Arrange
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Arrange actions" onAction={(key) => onAction(key)}>
                  {[
                    { key: 'move-top', label: 'Move to top', icon: <RiArrowUpDoubleLine size="18" /> },
                    { key: 'move-bottom', label: 'Move to bottom', icon: <RiArrowDownDoubleLine size="18" /> },
                    { key: 'move-up', label: 'Move up', icon: <RiArrowUpSLine size="18" /> },
                    { key: 'move-down', label: 'Move down', icon: <RiArrowDownSLine size="18" /> },
                  ].map((item) => (
                    <DropdownItem key={item.key} startContent={item.icon}>
                      <span className="text-base">{item.label}</span>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </>
          )}
          <Button
            variant="light"
            color="danger"
            radius="full"
            className="text-base px-4"
            size="sm"
            startContent={<TbTrash size="18" />}
            onClick={() => onAction('delete')}
          >
            Delete
          </Button>
        </motion.div>
      )}

      <ElementsPreview isOpen={isOpen} onClose={onClose} elements={elements} />
    </AnimatePresence>
  );
};

FloatingToolbar.propTypes = {
  id: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default FloatingToolbar;
