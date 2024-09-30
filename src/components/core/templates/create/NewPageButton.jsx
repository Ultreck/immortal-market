import { TbDotsVertical, TbPlus, TbTemplate } from 'react-icons/tb';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  useDisclosure,
} from '@nextui-org/react';
import useTemplateStore from '@/store/template.js';
import PageBlocksModal from '@/components/core/templates/create/PageBlocksModal.jsx';

const NewPageButton = () => {
  const addPage = useTemplateStore((state) => state.addPage);
  const { isOpen: isTemplatesOpen, onOpen: onTemplatesOpen, onClose: onTemplatesClose } = useDisclosure();

  return (
    <>
      <div className="w-full flex items-center space-x-4 mt-10">
        <div
          tabIndex={0}
          onClick={() => addPage()}
          className="w-full flex items-center border border-default-200 rounded-2xl px-6 py-4 space-x-4 hover:bg-default-200/60 dark:hover:bg-default-100/60 cursor-pointer"
        >
          <TbPlus className="text-2xl" />
          <span>Add page</span>
        </div>
        <Dropdown classNames={{ content: 'shadow border border-default-200' }} placement="top">
          <DropdownTrigger>
            <div
              tabIndex={0}
              className="flex items-center border border-default-200 rounded-2xl px-4 py-4 space-x-4 hover:bg-default-200/60 dark:hover:bg-default-100/60 cursor-pointer"
            >
              <TbDotsVertical className="text-2xl" />
            </div>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
            onAction={(key) => {
              if (key === 'templates') onTemplatesOpen();
            }}
          >
            <DropdownSection classNames={{ base: 'p-1', heading: 'px-2' }}>
              <DropdownItem
                key="templates"
                classNames={{
                  title: 'text-base',
                  description: 'text-sm',
                  wrapper: 'px-2 py-1',
                  base: 'rounded-xl',
                }}
                startContent={<TbTemplate size="20" className="ml-1" />}
              >
                Add new page from template
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>

      <PageBlocksModal isOpen={isTemplatesOpen} onClose={onTemplatesClose} />
    </>
  );
};

export default NewPageButton;
