import PropTypes from 'prop-types';
import { Button, useDisclosure, Tooltip, Divider } from '@heroui/react';
import { RiAddLine } from 'react-icons/ri';
import { LuCopyPlus, LuGroup, LuUngroup } from 'react-icons/lu';
import { AnimatePresence, motion } from 'framer-motion';
import { TbTrash } from 'react-icons/tb';
import CreateGroupBlockModal from '@/components/core/templates/CreateGroupBlockModal.jsx';
import useDesignStore from '@/store/design.js';
import { useActions } from '@/hooks/template/use-actions';

const FloatingToolbar = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const elements = useDesignStore((state) => {
    return state.elements.filter((el) => selectedElements.includes(el.id));
  });
  const { handleAction } = useActions({ id });

  const isGrouped = !!elements[0]?.type === 'group';

  return (
    <>
      <AnimatePresence mode="wait" key={id}>
        {!!elements.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-3 left-1/2 -translate-x-1/2 w-max px-1.5 py-1 z-10 bg-white shadow border border-default-100 dark:bg-default-100 rounded-full flex items-center"
          >
            {elements.length > 1 && (
              <>
                {!isGrouped && (
                  <Tooltip content="Group">
                    <Button
                      variant="light"
                      radius="full"
                      className="text-base px-2"
                      size="sm"
                      startContent={<LuGroup size="18" />}
                      onPress={() => handleAction('group')}
                    >
                      Group
                    </Button>
                  </Tooltip>
                )}
              </>
            )}
            {elements.length === 1 && elements[0].type === 'group' && (
              <Tooltip content="Ungroup">
                <Button
                  variant="light"
                  radius="full"
                  className="text-base px-2"
                  size="sm"
                  startContent={<LuUngroup size="18" />}
                  onPress={() => handleAction('ungroup')}
                >
                  Ungroup
                </Button>
              </Tooltip>
            )}
            <div className="flex items-center gap-2 h-full">
              <Tooltip content="Duplicate">
                <Button variant="light" radius="full" size="sm" isIconOnly onPress={() => handleAction('duplicate')}>
                  <LuCopyPlus size="18" />
                </Button>
              </Tooltip>
              <Tooltip content="Delete">
                <Button
                  variant="light"
                  color="danger"
                  radius="full"
                  size="sm"
                  isIconOnly
                  onPress={() => handleAction('delete')}
                >
                  <TbTrash size="18" />
                </Button>
              </Tooltip>
            </div>
            <Divider orientation="vertical" className="h-[20px] border-2 border-default-100 mx-2" />
            <Tooltip content="Save as block">
              <Button
                variant="light"
                radius="full"
                className="text-base px-2"
                size="sm"
                startContent={<RiAddLine size="18" />}
                onPress={onOpen}
              >
                Save as block
              </Button>
            </Tooltip>
          </motion.div>
        )}
      </AnimatePresence>

      <CreateGroupBlockModal isOpen={isOpen} onClose={onClose} elements={elements} />
    </>
  );
};

FloatingToolbar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FloatingToolbar;
