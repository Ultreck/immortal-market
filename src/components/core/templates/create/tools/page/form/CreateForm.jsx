import { useCreateForm } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import PropTypes from 'prop-types';
import { addToast } from '@heroui/react';
import Form from './Form';

const CreateForm = ({ page }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { mutate: createForm, isPending: isCreatingForm } = useCreateForm(business, id, page);

  const onSubmit = (values) => {
    try {
      const payload = {
        title: values.title,
        fields: values.fields.map((field) => ({
          ...field,
          options: field.options.filter((option) => option !== ''),
        })),
      };
      createForm(payload);
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
        <h3 className="text-lg font-medium">Create form</h3>
        <p className="text-md text-default-500 mt-1 leading-tight">
          Customize the form to collect the information you need from your visitors.
        </p>
      </div>
      <Form isLoading={isCreatingForm} onSubmit={onSubmit} />
    </div>
  );
};

CreateForm.propTypes = {
  page: PropTypes.string.isRequired,
};

export default CreateForm;
