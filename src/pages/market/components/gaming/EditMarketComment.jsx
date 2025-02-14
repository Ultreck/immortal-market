import React from 'react';
import { useForm } from 'react-hook-form';
import { useEditInsightComment } from '@/api/insights';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { Button, Textarea } from '@nextui-org/react';
import useGlobalStore from '@/store/global';
import { useShallow } from 'zustand/react/shallow';

const EditMarketComment = ({comment, onClose}) => {
  const toast = useToast();
  const { user } = useAuth();
  const updateData = useGlobalStore(useShallow((s) => s.updateData));
  const { register, handleSubmit, reset } = useForm();
  const { mutateAsync: editComment, isPending: isEditLoading } = useEditInsightComment({
    insight: comment.insight,
    comment: comment.id,
  });
  const submit = async (values) => {
    try {
      if (!user) return updateData({ isLoginModalOpen: true });
      await editComment(values);
      reset();
      onClose();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? 'Something went wrong, please try again');
    }
  };
  return (
    <div className="py-6">
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col space-y-3">
          <Textarea
            defaultValue={comment.content}
            placeholder="Add a comment"
            classNames={{ input: 'px-3 py-2 text-base' }}
            maxRows="1"
            {...register('content', { required: 'Comment is required' })}
            disabled={isEditLoading}
            radius="full"
          />
          <div className="flex space-x-2">
            <Button onPress={onClose} color="danger" size="sm" variant="bordered" className="text-base" radius="full">
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              color="success"
              isLoading={isEditLoading}
              className="text-base"
              radius="full"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMarketComment;
