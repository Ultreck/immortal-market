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
import SaveCanvasAsBlockModal from '@/components/core/templates/create/SaveCanvasAsBlockModal.jsx';

const CanvasActions = ({ id }) => {
  const { isOpen: isSaveAsBlockOpen, onOpen: onSaveAsBlockOpen, onClose: onSaveAsBlockClose } = useDisclosure();
  const deletePage = useTemplateStore((state) => state.deletePage);
  const movePageUp = useTemplateStore((state) => state.movePageUp);
  const movePageDown = useTemplateStore((state) => state.movePageDown);
  const addPage = useTemplateStore((state) => state.addPage);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const pages = useTemplateStore(({ template }) => template.pages);
  const index = pages.findIndex((p) => p.id === id);

  const handleDuplicatePage = () => {
    const payload = {
      ...page,
      id: crypto.randomUUID(),
      elements: page.elements.map((el) => ({ ...el, id: crypto.randomUUID() })),
    };
    addPage(payload, page.id);
  };

  return (
    <div className="flex items-center space-x-1">
      {index > 0 && (
        <Tooltip content="Move page up" showArrow>
          <Button variant="light" isIconOnly onClick={() => movePageUp(page.id)} size="sm">
            <TbChevronUp size="18" />
          </Button>
        </Tooltip>
      )}
      {index < pages.length - 1 && (
        <Tooltip content="Move page down" showArrow>
          <Button variant="light" isIconOnly onClick={() => movePageDown(page.id)} size="sm">
            <TbChevronDown size="18" />
          </Button>
        </Tooltip>
      )}
      <Tooltip content="Duplicate page" showArrow>
        <Button variant="light" isIconOnly onClick={handleDuplicatePage} size="sm">
          <TbCopyPlus size="18" />
        </Button>
      </Tooltip>
      {pages.length > 1 && (
        <Tooltip content="Delete page" showArrow>
          <Button variant="light" isIconOnly onClick={() => deletePage(page.id)} size="sm">
            <TbTrash size="18" />
          </Button>
        </Tooltip>
      )}
      <Tooltip content="Add page" showArrow>
        <Button variant="light" isIconOnly onClick={() => addPage(null, page.id)} size="sm">
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

      <SaveCanvasAsBlockModal isOpen={isSaveAsBlockOpen} onClose={onSaveAsBlockClose} id={id} />
    </div>
  );
};

CanvasActions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CanvasActions;
