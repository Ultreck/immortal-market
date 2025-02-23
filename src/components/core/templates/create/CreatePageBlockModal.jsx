import PropTypes from 'prop-types';
import useTemplateStore from '@/store/template.js';
import {
  addToast,
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardBody,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  Select,
  SelectItem,
} from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { useCreateDesignBlock } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { toBlob } from 'html-to-image';
import { useState } from 'react';
import { capitalize } from '@/lib/utils.js';

const sections = [
  { key: 'cover', label: 'Cover' },
  { key: 'summary', label: 'Summary' },
  { key: 'body', label: 'Body' },
  { key: 'modal', label: 'Modal' },
  { key: 'footer', label: 'Footer' },
];

const options = [
  'chart',
  'infographic',
  'map',
  'table',
  'image',
  'svg',
  'data-tag',
  'frame',
  'button',
  'text',
  'shape',
  'shapes',
  'linear-bar',
  'semi-meter',
  'linear-advanced-bar',
  'circle-icons',
  'bar-global',
  'speedometer',
  'speedometer-simple',
  'speedometer-multiple',
  'dynamic-sorting',
  'scatter-life-expectancy',
  'stacked-card',
  'percentage-card',
  'lollipop',
  'nested-circles',
  'funnel',
  'tree-map',
  'column-card',
  'percentage-card-2',
  'pictogram-shapes',
  'custom-bar',
  'bar',
  'bar-stacked',
  'bar-multiple',
  'alt-bar',
  'pie',
  'line',
  'line-multiple',
  'area',
  'area-multiple',
  'semi-pie',
  'semi-circle',
  'bubble',
  'scatter',
  'line-area',
  'line-bar',
];

const CreatePageBlockModal = ({ isOpen, onClose, id }) => {
  const { id: business } = useBusiness();
  const { control, handleSubmit, reset } = useForm();
  const [isThumbnailLoading, setIsThumbnailLoading] = useState(false);
  const page = useTemplateStore(({ template }) => template.pages.find((page) => page.id === id));
  const pages = useTemplateStore(({ template }) => template.pages);
  const index = pages.findIndex((p) => p.id === id);
  const { mutateAsync: create, isPending: isCreateLoading } = useCreateDesignBlock(business);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  const handleAddTag = () => {
    if (!tag) return;
    if (tags.includes(tag)) {
      addToast({ title: 'Tag already exists', color: 'error' });
      return;
    }
    setTags((prev) => [...prev, tag]);
    setTag('');
  };

  const handleRemoveTag = (tag) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleClose = () => {
    reset();
    setTags([]);
    setTag('');
    onClose();
  };

  const submit = async (values) => {
    try {
      if (!tags.length) {
        addToast({ title: 'Tags is required', color: 'error' });
        return;
      }
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
        tags,
        data,
        thumbnail,
        type: 'page',
      };
      await create(payload);
      handleClose();
      addToast({ title: 'Block saved', color: 'success' });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-8">
          <h2 className="text-lg mb-6">Save page as block</h2>
          <Card className="border border-default-200 rounded-2xl mb-4" shadow="none">
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
              <div>
                <p className="mb-1 px-1">Tags</p>
                <div className="border border-default-200 rounded-2xl p-4">
                  {!!tags.length && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tags.map((tag, i) => (
                        <Chip key={i} onClose={() => handleRemoveTag(tag)}>
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <Autocomplete
                      aria-label="Tags"
                      isClearable={false}
                      type="text"
                      classNames={{ base: 'text-base' }}
                      inputProps={{ classNames: { input: 'text-base px-1' } }}
                      className="text-base"
                      placeholder="Enter tag"
                      allowsEmptyCollection={false}
                      allowsCustomValue={true}
                      inputValue={tag}
                      onInputChange={(v) => setTag(v)}
                      onSelectionChange={(v) => {
                        if (v) setTag(`${v}`);
                      }}
                      variant="bordered"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') e.preventDefault();
                      }}
                    >
                      {options.map((t) => (
                        <AutocompleteItem
                          key={t}
                          value={t}
                          textValue={t.toString()}
                          classNames={{ title: 'text-base' }}
                        >
                          {capitalize(t)}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                    <Button
                      variant="bordered"
                      className="px-3 text-base"
                      onPress={() => handleAddTag()}
                      isDisabled={!tag}
                    >
                      Add tag
                    </Button>
                  </div>
                </div>
              </div>
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
