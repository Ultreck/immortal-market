import React from 'react';
import { useForm } from 'react-hook-form';
import { useAddInsightComment } from '@/api/insights';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { Button, Textarea } from '@nextui-org/react';
import useGlobalStore from '@/store/global';
import { useShallow } from 'zustand/react/shallow';

const AddMarketComment = ({comment}) => {
  const toast = useToast();
  const { user } = useAuth();
  const updateData = useGlobalStore(useShallow((s) => s.updateData));
  const { register, handleSubmit, reset, watch } = useForm();
  const { mutateAsync: addComment, isPending: isAddInsightLoading } = useAddInsightComment({ comment });

  const submit = async (values) => {
    try {
      if (!user) return updateData({ isLoginModalOpen: true });
      await addComment(values);
      reset();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <div className="px-6 py-6">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <Textarea
            placeholder="Add a comment"
            classNames={{ input: 'px-3 py-2 text-base' }}
            maxRows="1"
            {...register('content', { required: 'Comment is required' })}
            disabled={isAddInsightLoading}
            radius="full"
          />
          <Button
            type="submit"
            color="default"
            variant="flat"
            isLoading={!!watch().content && isAddInsightLoading}
            className="px-8 text-base"
            radius="full"
          >
            Add comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMarketComment;
