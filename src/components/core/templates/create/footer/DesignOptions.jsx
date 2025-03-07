import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@heroui/react';
import { TbBookDownload, TbBookUpload, TbDotsVertical, TbTrash } from 'react-icons/tb';
import DeleteDesignModal from '@/components/core/templates/create/footer/DeleteDesignModal.jsx';
import PublishModal from '@/components/core/templates/create/footer/PublishModal.jsx';
import UnpublishModal from '@/components/core/templates/create/footer/UnpublishModal.jsx';
import useDesignStore from '@/store/design.js';
import { useNavigate } from 'react-router-dom';

const DesignOptions = () => {
  const navigate = useNavigate();
  const design = useDesignStore((state) => state.design);
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

  if (design.type === 'template') {
    if (design.status === 'draft') {
      options.unshift({
        key: 'publish',
        label: 'Publish template',
        icon: <TbBookUpload size="16" />,
        color: 'default',
      });
    } else if (design.status === 'published') {
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
          <Button isIconOnly variant="light" className="text-base" radius="full" size="sm">
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

      <DeleteDesignModal
        id={design._id}
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        onDeleted={() => navigate('/')}
      />
      <PublishModal isOpen={isPublishOpen} onClose={onPublishClose} />
      <UnpublishModal isOpen={isUnpublishOpen} onClose={onUnpublishClose} />
    </>
  );
};

export default DesignOptions;
