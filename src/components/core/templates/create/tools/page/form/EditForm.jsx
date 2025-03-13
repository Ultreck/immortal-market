import useBusiness from '@/hooks/use-business';
import Form from './Form';
import useDesignStore from '@/store/design';
import { useGetForm, useUpdateForm } from '@/api/design';
import { addToast, Button } from '@heroui/react';
import PropTypes from 'prop-types';
import { LuArrowLeft } from 'react-icons/lu';

const EditForm = ({ page, onBack }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { form } = {} } = useGetForm(business, id, page);
  const { mutateAsync: updateForm, isPending: isUpdatingForm } = useUpdateForm(business, id, page);

  const onSubmit = async (values) => {
    try {
      await updateForm(values);
      onBack();
    } catch (error) {
      addToast({
        title: 'Error',
        description: error?.response?.data?.message || 'Something went wrong',
        color: 'danger',
      });
    }
  };

  return (
    <div className="px-10 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <Button variant="bordered" onPress={onBack} isIconOnly size="sm" radius="full">
            <LuArrowLeft size="18" />
          </Button>
          <h3 className="text-lg font-medium">Edit form</h3>
        </div>
      </div>
      <Form
        isLoading={isUpdatingForm}
        onSubmit={onSubmit}
        defaultValues={{
          title: form?.title,
          fields: form?.fields,
        }}
      />
    </div>
  );
};

EditForm.propTypes = {
  page: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EditForm;
