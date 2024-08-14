import PageIndicator from '@/components/core/templates/create/PageIndicator.jsx';
import ZoomSlider from '@/components/core/templates/create/ZoomSlider.jsx';
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from '@nextui-org/react';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useUpdateDesign } from '@/api/business.js';
import { useCallback } from 'react';
import { useKey } from 'react-use';
import { TbBookUpload, TbDotsVertical, TbTrash } from 'react-icons/tb';
import DeleteModal from '@/components/core/templates/create/DeleteModal.jsx';
import PublishModal from '@/components/core/templates/create/PublishModal.jsx';

const StatusBar = () => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const title = useTemplateStore((state) => state.template.title);
  const status = useTemplateStore((state) => state.template.status);
  const type = useTemplateStore((state) => state.template.type);
  const pages = useTemplateStore((state) => state.template.pages);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const { isOpen: isPublishOpen, onOpen: onPublishOpen, onClose: onPublishClose } = useDisclosure();

  const handleSave = useCallback(async () => {
    try {
      await update({ data: { pages } });
      toast.success('Saved successfully');
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  }, [update, pages, toast]);

  useKey(
    (e) => e.key.toLowerCase() === 's' && e.ctrlKey && !e.shiftKey,
    async (e) => {
      e.preventDefault();
      await handleSave();
    }
  );

  return (
    <div className="h-[50px] w-full dark:bg-default-50/50 border-t border-default-200 dark:border-default-100 flex items-center justify-between px-12">
      <div className="flex items-center space-x-4">
        <h2 className="text-lg font-medium leading-tight">{title}</h2>
        {type === 'template' && (
          <div className="flex items-center space-x-2">
            <Chip size="sm" color="warning" className="text-sm">
              Template
            </Chip>
            <Chip size="sm" color={{ draft: 'default', published: 'success' }[status]} className="text-sm capitalize">
              {status}
            </Chip>
          </div>
        )}
      </div>
      <div className="flex items-center space-x-8 ml-auto">
        <PageIndicator />
        <ZoomSlider />
        <div className="flex items-center space-x-4">
          <Button
            variant="solid"
            color="success"
            className="text-base px-4"
            radius="full"
            size="sm"
            isLoading={isUpdateLoading}
            onClick={handleSave}
          >
            Save
          </Button>
          <Dropdown placement="bottom" size="lg">
            <DropdownTrigger>
              <Button isIconOnly variant="light" className="text-base" radius="full">
                <TbDotsVertical size="18" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              onAction={(key) => {
                if (key === 'publish') onPublishOpen();
                if (key === 'delete') onDeleteOpen();
              }}
            >
              {[
                type === 'template' && {
                  key: 'publish',
                  label: 'Publish project',
                  icon: <TbBookUpload size="16" />,
                },
                {
                  key: 'delete',
                  label: 'Delete project',
                  icon: <TbTrash size="16" />,
                  color: 'danger',
                },
              ]
                .filter(Boolean)
                .map((action) => (
                  <DropdownItem
                    key={action.key}
                    startContent={action.icon}
                    classNames={{
                      title: 'text-base',
                      description: 'text-sm',
                      base: 'rounded-xl !m-0',
                    }}
                    color={action.color}
                  >
                    {action.label}
                  </DropdownItem>
                ))}
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      <DeleteModal id={id} isOpen={isDeleteOpen} onClose={onDeleteClose} />
      <PublishModal id={id} isOpen={isPublishOpen} onClose={onPublishClose} />
    </div>
  );
};

export default StatusBar;
