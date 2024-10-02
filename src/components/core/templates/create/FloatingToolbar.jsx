import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import { Button, useDisclosure } from '@nextui-org/react';
import { RiAddLine } from 'react-icons/ri';
import { LuCopyPlus, LuGroup, LuUngroup } from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';
import { TbTrash } from 'react-icons/tb';
import CreateGroupBlockModal from '@/components/core/templates/CreateGroupBlockModal.jsx';

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
          className="absolute top-3 left-1/2 -translate-x-1/2 w-max px-2 py-2 z-10 bg-white shadow border border-default-100 dark:bg-default-100 rounded-full flex items-center"
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
            </>
          )}
          <div className="flex items-center gap-2">
            <Button variant="light" radius="full" size="sm" isIconOnly onClick={() => onAction('duplicate')}>
              <LuCopyPlus size="18" />
            </Button>
            <Button
              variant="light"
              color="danger"
              radius="full"
              size="sm"
              isIconOnly
              onClick={() => onAction('delete')}
            >
              <TbTrash size="18" />
            </Button>
          </div>
        </motion.div>
      )}

      <CreateGroupBlockModal isOpen={isOpen} onClose={onClose} elements={elements} />
    </AnimatePresence>
  );
};

FloatingToolbar.propTypes = {
  id: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default FloatingToolbar;
