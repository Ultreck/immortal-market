import { TbDotsVertical, TbPlus, TbTemplate } from 'react-icons/tb';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@heroui/react';
import useDesignStore from '@/store/design.js';
import PageBlocksModal from '@/components/core/templates/create/PageBlocksModal.jsx';

const NewPageButton = () => {
  const createPage = useDesignStore((state) => state.createPage);
  const { isOpen: isBlocksOpen, onOpen: onBlocksOpen, onClose: onBlocksClose } = useDisclosure();

  return (
    <>
      <div className="w-full flex items-center space-x-4 mt-10">
        <div
          tabIndex={0}
          onClick={() => createPage()}
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
              if (key === 'blocks') onBlocksOpen();
            }}
          >
            <DropdownItem
              key="blocks"
              classNames={{
                title: 'text-base',
                description: 'text-sm',
                wrapper: 'px-2 py-1',
                base: 'rounded-xl',
              }}
              startContent={<TbTemplate size="20" className="ml-1" />}
            >
              Add new page from blocks
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <PageBlocksModal isOpen={isBlocksOpen} onClose={onBlocksClose} />
    </>
  );
};

export default NewPageButton;
