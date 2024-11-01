import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import {
  TbChevronDown,
  TbChevronUp,
  TbCopyPlus,
  TbDotsVertical,
  TbFolderPlus,
  TbSquarePlus,
  TbTrash,
} from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';
import PropTypes from 'prop-types';
import CreatePageBlockModal from '@/components/core/templates/create/CreatePageBlockModal.jsx';
import { useActions } from '@/hooks/template/use-actions.js';

const PageActions = ({ id }) => {
  const { handleAction } = useActions({ id });
  const { isOpen: isSaveAsBlockOpen, onOpen: onSaveAsBlockOpen, onClose: onSaveAsBlockClose } = useDisclosure();
  const index = useTemplateStore(({ template }) => template.pages.findIndex((p) => p.id === id));
  const length = useTemplateStore(({ template }) => template.pages.length);

  return (
    <div className="flex items-center space-x-1">
      {index > 0 && (
        <Tooltip content="Move page up" showArrow>
          <Button variant="light" isIconOnly onClick={() => handleAction('page-move-up')} size="sm">
            <TbChevronUp size="18" />
          </Button>
        </Tooltip>
      )}
      {index < length - 1 && (
        <Tooltip content="Move page down" showArrow>
          <Button variant="light" isIconOnly onClick={() => handleAction('page-move-down')} size="sm">
            <TbChevronDown size="18" />
          </Button>
        </Tooltip>
      )}
      <Tooltip content="Duplicate page" showArrow>
        <Button variant="light" isIconOnly onClick={() => handleAction('page-duplicate')} size="sm">
          <TbCopyPlus size="18" />
        </Button>
      </Tooltip>
      {length > 1 && (
        <Tooltip content="Delete page" showArrow>
          <Button variant="light" isIconOnly onClick={() => handleAction('page-delete')} size="sm">
            <TbTrash size="18" />
          </Button>
        </Tooltip>
      )}
      <Tooltip content="Add page" showArrow>
        <Button variant="light" isIconOnly onClick={() => handleAction('page-add')} size="sm">
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
          onAction={(key) => {
            if (key === 'save') onSaveAsBlockOpen();
          }}
        >
          <DropdownItem
            key="save"
            classNames={{}}
            startContent={<TbFolderPlus size="20" className="ml-1" />}
            textValue="Save as block"
          >
            <span className="text-base">Save as block</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <CreatePageBlockModal isOpen={isSaveAsBlockOpen} onClose={onSaveAsBlockClose} id={id} />
    </div>
  );
};

PageActions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PageActions;
