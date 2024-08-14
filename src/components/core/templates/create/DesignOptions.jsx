import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@nextui-org/react';
import { TbBookDownload, TbBookUpload, TbDotsVertical, TbTrash } from 'react-icons/tb';
import DeleteModal from '@/components/core/templates/create/DeleteModal.jsx';
import PublishModal from '@/components/core/templates/create/PublishModal.jsx';
import useTemplateStore from '@/store/template.js';
import UnpublishModal from '@/components/core/templates/create/UnpublishModal.jsx';

const DesignOptions = () => {
  const id = useTemplateStore((state) => state.template.id);
  const type = useTemplateStore((state) => state.template.type);
  const status = useTemplateStore((state) => state.template.status);
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const { isOpen: isPublishOpen, onOpen: onPublishOpen, onClose: onPublishClose } = useDisclosure();
  const { isOpen: isUnpublishOpen, onOpen: onUnpublishOpen, onClose: onUnpublishClose } = useDisclosure();

  const options = [
    {
      key: 'delete',
      label: 'Delete',
      icon: <TbTrash size="16" />,
      color: 'danger',
    },
  ];

  if (type === 'template') {
    if (status === 'draft') {
      options.unshift({
        key: 'publish',
        label: 'Publish template',
        icon: <TbBookUpload size="16" />,
        color: 'default',
      });
    } else if (status === 'published') {
      options.unshift({
        key: 'unpublish',
        label: 'Unpublish template',
        icon: <TbBookDownload size="16" />,
        color: 'default',
      });
    }
  }

  return (
    <>
      <Dropdown placement="bottom" size="lg">
        <DropdownTrigger>
          <Button isIconOnly variant="light" className="text-base" radius="full">
            <TbDotsVertical size="18" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          onAction={(key) => {
            if (key === 'publish') onPublishOpen();
            if (key === 'unpublish') onUnpublishOpen();
            if (key === 'delete') onDeleteOpen();
          }}
        >
          {options.filter(Boolean).map((action) => (
            <DropdownItem
              key={action.key}
              startContent={action.icon}
              classNames={{
                base: 'rounded-xl !m-0',
              }}
              color={action.color}
              textValue={action.label}
            >
              <span className="text-base">{action.label}</span>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <DeleteModal id={id} isOpen={isDeleteOpen} onClose={onDeleteClose} />
      <PublishModal id={id} isOpen={isPublishOpen} onClose={onPublishClose} />
      <UnpublishModal id={id} isOpen={isUnpublishOpen} onClose={onUnpublishClose} />
    </>
  );
};

export default DesignOptions;
