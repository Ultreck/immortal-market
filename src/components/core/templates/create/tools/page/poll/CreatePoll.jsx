import { useCreatePoll } from '@/api/design';
import useBusiness from '@/hooks/use-business';
import useDesignStore from '@/store/design';
import PropTypes from 'prop-types';
import { addToast } from '@heroui/react';
import Poll from './Poll';

const CreatePoll = ({ page }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { mutate: createPoll, isPending: isCreatingPoll } = useCreatePoll(business, id, page);

  const onSubmit = (values) => {
    try {
      const payload = {
        question: values.question,
        options: values.options.filter((option) => option !== ''),
      };
      createPoll(payload);
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
        <h3 className="text-lg font-medium">Create poll</h3>
        <p className="text-md text-default-500 mt-1 leading-tight">
          Customize the poll to gather opinions from your visitors.
        </p>
      </div>
      <Poll isLoading={isCreatingPoll} onSubmit={onSubmit} />
    </div>
  );
};

CreatePoll.propTypes = {
  page: PropTypes.string.isRequired,
};

export default CreatePoll;

