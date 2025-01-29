import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import { Button, Card, CardBody, Input, Modal, ModalBody, ModalContent, Select, SelectItem } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { useCreateDesignBlock } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { toBlob } from 'html-to-image';
import { useState } from 'react';

const sections = [
  { key: 'cover', label: 'Cover' },
  { key: 'summary', label: 'Summary' },
  { key: 'body', label: 'Body' },
  { key: 'modal', label: 'Modal' },
  { key: 'footer', label: 'Footer' },
];

const CreatePageBlockModal = ({ isOpen, onClose, id }) => {
  const toast = useToast();
  const { id: business } = useBusiness();
  const { control, handleSubmit, reset } = useForm();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const pages = useTemplateStore(({ template }) => template.pages);
  const index = pages.findIndex((p) => p.id === id);
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateDesignBlock(business);

  const submit = async (values) => {
    try {
      setIsThumbnailLoading(true);
      const blob = await toBlob(document.getElementById(`canvas-${page.id}`), {
        cacheBust: true,
        skipFonts: true,
      });
      const thumbnail = new File([blob], 'thumbnail.png', { type: 'image/png' });
      setIsThumbnailLoading(false);
      const data = {
        width: page.width,
        height: page.height,
        elements: page.elements,
        style: page.style,
        title: page.title,
      };
      const payload = {
        ...values,
        tags: values.tags.split(','),
        data,
        thumbnail,
        type: 'page',
      };
      await create(payload);
      onClose();
      reset();
      toast.success('Block saved');
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-8">
          <h2 className="text-lg mb-6">Save page as block</h2>
          <Card className="border border-default-200 rounded-2xl mb-4">
            <CardBody className="p-0 divide-y divide-default-200">
              <div className="px-4 py-2">
                Page {index + 1} - {page.title}
              </div>
              <div className="px-4 py-2">{page.elements.length} object(s)</div>
            </CardBody>
          </Card>
          <form onSubmit={handleSubmit(submit)}>
            <div className="space-y-4">
              <Controller
                name="section"
                control={control}
                rules={{ required: 'Section is required' }}
                disabled={isCreateLoading || isThumbnailLoading}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <p className="mb-1 px-1">Section</p>
                    <Select
                      aria-label="Section"
                      variant="bordered"
                      labelPlacement="outside"
                      placeholder="Select one"
                      size="lg"
                      selectedKeys={field.value ? [field.value] : []}
                      onChange={(e) => field.onChange(e)}
                      errorMessage={error?.message}
                      isInvalid={!!error?.message}
                      isDisabled={field.disabled}
                      classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                      disableEmptySelection={true}
                      items={sections}
                    >
                      {(c) => <SelectItem classNames={{ title: 'text-base px-2' }}>{c.label}</SelectItem>}
                    </Select>
                  </div>
                )}
              />
              <Controller
                name="tags"
                control={control}
                rules={{ required: 'Tags is required' }}
                disabled={isCreateLoading || isThumbnailLoading}
                render={({ field, fieldState: { error } }) => (
                  <div>
                    <p className="mb-1 px-1">Tags</p>
                    <Input
                      variant="bordered"
                      labelPlacement="outside"
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
            <Button
              type="submit"
              color="primary"
              radius="full"
              className="mt-8 text-base"
              isLoading={isCreateLoading || isThumbnailLoading}
            >
              Save
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

CreatePageBlockModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CreatePageBlockModal;
