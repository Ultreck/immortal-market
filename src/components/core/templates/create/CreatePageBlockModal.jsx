import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import { Button, Card, CardBody, Modal, ModalBody, ModalContent, Select, SelectItem } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { useCreateDesignBlock } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { toBlob } from 'html-to-image';
import { useState } from 'react';

const categories = [
  { key: 'headlines', label: 'Headlines' },
  { key: 'charts', label: 'Charts & Graphs' },
  { key: 'statistics', label: 'Statistic & Figures' },
  { key: 'tables', label: 'Tables' },
  { key: 'shapes', label: 'Shapes' },
  { key: 'infographics', label: 'Infographics' },
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
      await create({ ...values, data, thumbnail, type: 'page' });
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
          <Card className="border border-default-200 rounded-2xl mb-6">
            <CardBody className="p-0 divide-y divide-default-200">
              <div className="px-4 py-2">
                Page {index + 1} - {page.title}
              </div>
              <div className="px-4 py-2">{page.elements.length} object(s)</div>
            </CardBody>
          </Card>
          <form onSubmit={handleSubmit(submit)}>
            <Controller
              name="category"
              control={control}
              rules={{ required: 'Category is required' }}
              render={({ field, fieldState: { error } }) => (
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
              )}
            />
            <Button
              type="submit"
              color="primary"
              radius="lg"
              className="mt-6 text-base"
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
