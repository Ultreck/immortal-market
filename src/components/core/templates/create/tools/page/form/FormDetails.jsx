import { useGetForm, useDeleteForm } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import { Chip, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, addToast } from '@heroui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LuPencil } from 'react-icons/lu';
import EditForm from './EditForm';
import { TbDotsVertical, TbTrash } from 'react-icons/tb';

const FormDetails = ({ page }) => {
  const [view, setView] = useState('details');
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {} } = useGetForm(business, id, page);
  const { mutateAsync: deleteForm, isPending: isDeletingForm } = useDeleteForm(business, id, page);

  const onDeleteForm = async () => {
    try {
      await deleteForm({ id: form.id });
    } catch (error) {
      addToast({
        title: 'Error',
        description: error?.response?.data?.message || 'Failed to delete form',
        color: 'error',
      });
    }
  };

  return (
    <div>
      {view === 'details' && (
        <div className="px-10 py-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium">{form.title}</h3>
            <Dropdown classNames={{ content: 'shadow border border-default-200' }} placement="top">
              <DropdownTrigger>
                <Button variant="light" isIconOnly size="sm" isLoading={isDeletingForm}>
                  <TbDotsVertical size="20" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
                onAction={async (key) => {
                  if (key === 'delete') onDeleteForm();
                }}
              >
                <DropdownItem
                  key="delete"
                  startContent={<TbTrash size="20" className="ml-1" />}
                  textValue="Delete form"
                >
                  <span className="text-base">Delete form</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="border border-default-200 rounded-2xl text-base">
            <p className="text-sm opacity-70 px-4 pt-3 pb-2">Fields</p>
            <div className="divide-y divide-default-200">
              {form.fields.map((field) => (
                <div key={field.id} className="flex items-center px-4 py-2 space-x-4">
                  <p className="opacity-70">{field.label}</p>
                  <div className="flex items-start gap-2">
                    <Chip color="default" variant="flat" size="sm" className="text-md px-2 capitalize">
                      {field.type}
                    </Chip>
                    <Chip color="default" variant="flat" size="sm" className="text-md px-2 capitalize">
                      {field.required ? 'Required' : 'Optional'}
                    </Chip>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Button
              onPress={() => setView('edit')}
              color="default"
              variant="flat"
              className="text-base px-5"
              radius="full"
              startContent={<LuPencil size="18" />}
            >
              Edit form
            </Button>
          </div>
        </div>
      )}
      {view === 'edit' && <EditForm page={page} onBack={() => setView('details')} />}
    </div>
  );
};

FormDetails.propTypes = {
  page: PropTypes.string.isRequired,
};

export default FormDetails;
