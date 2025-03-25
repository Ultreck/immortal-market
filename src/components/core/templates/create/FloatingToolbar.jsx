import PropTypes from 'prop-types';
import { Button, Tooltip } from '@heroui/react';
import { LuCopyPlus, LuGroup, LuUngroup } from 'react-icons/lu';
import { AnimatePresence, motion } from 'motion/react';
import { TbTrash } from 'react-icons/tb';
import useDesignStore from '@/store/design.js';
import { useElementActions } from '@/hooks/template/use-element-actions';
import ElementQuickTools from './tools/ElementQuickTools';

const FloatingToolbar = ({ id }) => {
  const selectedElements = useDesignStore((state) => state.selectedElements);
  const elements = useDesignStore((state) => {
    return state.elements.filter((el) => selectedElements.includes(el.key));
  });
  const { handleAction } = useElementActions({ id });

  const isGrouped = elements[0]?.type === 'group';

  return (
    <>
      <AnimatePresence mode="wait" key={id}>
        {!!elements.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-3 left-1/2 -translate-x-1/2 w-max px-2 py-1 z-10 gap-2 bg-white shadow border border-default-100 dark:bg-default-100 rounded-full flex items-center"
          >
            <ElementQuickTools />
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

FloatingToolbar.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FloatingToolbar;
