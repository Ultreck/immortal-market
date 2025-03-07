import { Button, Input, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { RiPencilLine } from 'react-icons/ri';
import useDesignStore from '@/store/design.js';

const EditDesignTitleButton = () => {
  const design = useDesignStore((state) => state.design);
  const updateDesign = useDesignStore((state) => state.updateDesign);
  const { isOpen, onOpenChange } = useDisclosure();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: design.title,
      tags: design.tags?.join(',') || '',
    },
  });

  const submit = async (values) => {
    if (values.tags) values.tags = values.tags.split(',');
    updateDesign({ title: values.title, tags: values.tags });
    onOpenChange();
  };

  return (
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
              <Button color="success" type="submit" className="text-base" radius="full">
                Save
              </Button>
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EditDesignTitleButton;
