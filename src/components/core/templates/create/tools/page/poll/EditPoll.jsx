import useBusiness from '@/hooks/use-business';
import Poll from './Poll';
import useDesignStore from '@/store/design';
import { useGetPoll, useUpdatePoll } from '@/api/design';
import { addToast, Button } from '@heroui/react';
import PropTypes from 'prop-types';
import { LuArrowLeft } from 'react-icons/lu';

const EditPoll = ({ page, onBack }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { data: { poll } = {} } = useGetPoll(business, id, page);
  const { mutateAsync: updatePoll, isPending: isUpdatingPoll } = useUpdatePoll(business, id, page);

  const onSubmit = async (values) => {
    try {
      await updatePoll({
        question: values.question,
        options: values.options.filter((option) => option !== ''),
      });
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
          <h3 className="text-lg font-medium">Edit poll</h3>
        </div>
      </div>
      <Poll
        isLoading={isUpdatingPoll}
        onSubmit={onSubmit}
        defaultValues={{
          question: poll?.question,
          options: poll?.options,
        }}
      />
    </div>
  );
};

EditPoll.propTypes = {
  page: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default EditPoll;
