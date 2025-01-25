import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalContent, Select, SelectItem } from '@heroui/react';
import ElementsPreview from '@/components/core/templates/create/ElementsPreview.jsx';
import useBusiness from '@/hooks/use-business.js';
import { Controller, useForm } from 'react-hook-form';
import { toBlob } from 'html-to-image';
import { useRef, useState } from 'react';
import { useCreateDesignBlock } from '@/api/business.js';
import { useToast } from '@/hooks/use-toast.jsx';

const categories = [
  { key: 'data', label: 'Data' },
  { key: 'text', label: 'Text' },
  { key: 'shapes', label: 'Shapes' },
];

const CreateGroupBlockModal = ({ isOpen, onClose, elements }) => {
  const el = useRef(null);
  const toast = useToast();
  const { id: business } = useBusiness();
  const { control, handleSubmit, reset } = useForm();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateDesignBlock(business);

  const submit = async (values) => {
    try {
      setIsThumbnailLoading(true);
      const blob = await toBlob(el.current, {
        cacheBust: true,
        skipFonts: true,
      });
      const thumbnail = new File([blob], 'thumbnail.png', { type: 'image/png' });
      setIsThumbnailLoading(false);
      const group = crypto.randomUUID();
      const data = {
        elements: elements.map((el) => ({ ...el, group })),
      };
      await create({ ...values, data, thumbnail, type: 'group' });
      onClose();
      reset();
      toast.success('Block saved');
    } catch (e) {
      toast.error(e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent style={{ width: 'max-content', maxWidth: 'initial' }}>
        <ModalBody className="px-10 py-8 block">
          <h2 className="text-lg font-medium mb-4">Save as block</h2>
          <ElementsPreview elements={elements} ref={el} />
          <form onSubmit={handleSubmit(submit)} className="flex flex-col mt-6">
            <Controller
              name="category"
              control={control}
              rules={{ required: 'Category is required' }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <Select
                    label="Category"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Select category"
                    size="lg"
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => field.onChange(e)}
                    errorMessage={error?.message}
                    isInvalid={!!error?.message}
                    classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
                    disableEmptySelection={true}
                  >
                    {categories.map((c) => (
                      <SelectItem key={c.key} classNames={{ title: 'text-base px-2' }}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              )}
            />
            <div>
              <Button
                type="submit"
                color="primary"
                radius="lg"
                className="mt-6 text-base"
                isLoading={isCreateLoading || isThumbnailLoading}
              >
                Save
              </Button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

CreateGroupBlockModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CreateGroupBlockModal;
