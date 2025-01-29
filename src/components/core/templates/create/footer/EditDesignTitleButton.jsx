import { Button, Input, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@heroui/react';
import { useToast } from '@/hooks/use-toast.jsx';
import useBusiness from '@/hooks/use-business.js';
import useTemplateStore from '@/store/template.js';
import { useGetDesign, useUpdateDesign } from '@/api/business.js';
import { Controller, useForm } from 'react-hook-form';
import { RiPencilLine } from 'react-icons/ri';

const EditDesignTitleButton = () => {
  const toast = useToast();
  const { isOpen, onOpenChange } = useDisclosure();
  const { id: business } = useBusiness();
  const id = useTemplateStore((state) => state.template.id);
  const { data: { design = {} } = {} } = useGetDesign(business, id);
  const { mutateAsync: update, isPending: isUpdateLoading } = useUpdateDesign(business, id);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: design.title,
      tags: design.tags?.join(',') || '',
    },
  });

  const submit = async (values) => {
    try {
      if (values.tags) values.tags = values.tags.split(',');
      await update(values);
      toast.success('Title updated');
      onOpenChange();
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <>
      <Popover
        placement="top"
        showArrow
        offset={10}
        classNames={{ content: 'w-[350px] block' }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <PopoverTrigger>
          <Button isIconOnly radius="full" variant="light" size="sm">
            <RiPencilLine size="18" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 shadow border border-default-200">
          <div className="px-8 py-6">
            <h3 className="text-lg font-semibold mb-6">Update design</h3>
            <form onSubmit={handleSubmit(submit)}>
              <div className="space-y-4">
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: 'Title is required' }}
                  disabled={isUpdateLoading}
                  render={({ field, fieldState: { error } }) => (
                    <div>
                      <p className="mb-1 px-1">Title</p>
                      <Input
                        placeholder="Title"
                        className="text-base"
                        size="lg"
                        classNames={{ input: 'text-base px-2' }}
                        {...field}
                        isInvalid={!!error?.message}
                        error={error?.message}
                        isDisabled={field.disabled}
                      />
                    </div>
                  )}
                />
                <Controller
                  name="tags"
                  control={control}
                  rules={{ required: 'Tags is required' }}
                  disabled={isUpdateLoading}
                  render={({ field, fieldState: { error } }) => (
                    <div>
                      <p className="mb-1 px-1">Tags</p>
                      <Input
                        placeholder="Tags"
                        className="text-base"
                        size="lg"
                        classNames={{ input: 'text-base px-2' }}
                        {...field}
                        isInvalid={!!error?.message}
                        errorMessage={error?.message}
                        isDisabled={field.disabled}
                      />
                    </div>
                  )}
                />
              </div>
              <div className="mt-6">
                <Button color="success" type="submit" isLoading={isUpdateLoading} className="text-base" radius="full">
                  Save
                </Button>
              </div>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default EditDesignTitleButton;
