import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip, useDisclosure } from '@heroui/react';
import {
  TbBoxMultiple,
  TbChevronDown,
  TbChevronUp,
  TbCopyPlus,
  TbDotsVertical,
  TbFolderPlus,
  TbSquarePlus,
  TbTrash,
} from 'react-icons/tb';
import PropTypes from 'prop-types';
import CreatePageBlockModal from '@/components/core/templates/create/CreatePageBlockModal.jsx';
import { CgMenuBoxed } from 'react-icons/cg';
import useDesignStore from '@/store/design.js';
import { LuSquareActivity } from 'react-icons/lu';
import PageActivitiesModal from './ActivitiesModal';

const PageActions = ({ id }) => {
  const { isOpen: isSaveAsBlockOpen, onOpen: onSaveAsBlockOpen, onClose: onSaveAsBlockClose } = useDisclosure();
  const { isOpen: isActivitiesOpen, onOpen: onActivitiesOpen, onClose: onActivitiesClose } = useDisclosure();
  const page = useDesignStore((state) => state.pages.find((p) => p.id === id));
  const index = useDesignStore((state) => state.pages.sort((a, b) => a.order - b.order).findIndex((p) => p.id === id));
  const length = useDesignStore((state) => state.pages.length);
  const movePageUp = useDesignStore((state) => state.movePageUp);
  const movePageDown = useDesignStore((state) => state.movePageDown);
  const duplicatePage = useDesignStore((state) => state.duplicatePage);
  const deletePage = useDesignStore((state) => state.deletePage);
  const createPageAfter = useDesignStore((state) => state.createPageAfter);
  const updatePage = useDesignStore((state) => state.updatePage);
  const updateStore = useDesignStore((state) => state.updateStore);

  return (
    <div className="flex items-center space-x-1">
      {index > 0 && (
        <Tooltip content="Move page up" showArrow>
          <Button variant="light" isIconOnly onPress={() => movePageUp(id)} size="sm">
            <TbChevronUp size="18" />
          </Button>
        </Tooltip>
      )}
      {index < length - 1 && (
        <Tooltip content="Move page down" showArrow>
          <Button variant="light" isIconOnly onPress={() => movePageDown(id)} size="sm">
            <TbChevronDown size="18" />
          </Button>
        </Tooltip>
      )}
      <Tooltip content="Duplicate page" showArrow>
        <Button variant="light" isIconOnly onPress={() => duplicatePage(id)} size="sm">
          <TbCopyPlus size="18" />
        </Button>
      </Tooltip>
      {length > 1 && (
        <Tooltip content="Delete page" showArrow>
          <Button variant="light" isIconOnly onPress={() => deletePage(id)} size="sm">
            <TbTrash size="18" />
          </Button>
        </Tooltip>
      )}
      <Tooltip content="Add page" showArrow>
        <Button variant="light" isIconOnly onPress={() => createPageAfter(id)} size="sm">
          <TbSquarePlus size="18" />
        </Button>
      </Tooltip>
      <Dropdown classNames={{ content: 'shadow border border-default-200' }} placement="top">
        <DropdownTrigger>
          <Button variant="light" isIconOnly size="sm">
            <TbDotsVertical className="text-2xl" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          aria-label="Dropdown menu with description"
          onAction={async (key) => {
            if (key === 'save-as-block') onSaveAsBlockOpen();
            if (key === 'convert-to-modal') updatePage(id, { type: 'modal' });
            if (key === 'convert-to-page') updatePage(id, { type: 'page' });
            if (key === 'activities') onActivitiesOpen();
          }}
        >
          <DropdownItem
            key="save-as-block"
            startContent={<TbFolderPlus size="20" className="ml-1" />}
            textValue="Save as block"
          >
            <span className="text-base">Save as block</span>
          </DropdownItem>
          <DropdownItem
            key="activities"
            startContent={<LuSquareActivity size="20" className="ml-1" />}
            textValue="Activities"
          >
            <span className="text-base"> Activities</span>
          </DropdownItem>
          {page.type !== 'modal' ? (
            <DropdownItem
              key="convert-to-modal"
              startContent={<TbBoxMultiple size="20" className="ml-1" />}
              textValue="Convert to modal"
            >
              <span className="text-base">Convert to modal</span>
            </DropdownItem>
          ) : (
            <DropdownItem
              key="convert-to-page"
              startContent={<CgMenuBoxed size="20" className="ml-1" />}
              textValue="Convert to page"
            >
              <span className="text-base">Convert to page</span>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>

      <CreatePageBlockModal isOpen={isSaveAsBlockOpen} onClose={onSaveAsBlockClose} id={id} />
      <PageActivitiesModal page={id} isOpen={isActivitiesOpen} onClose={onActivitiesClose} />
    </div>
  );
};

PageActions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PageActions;
