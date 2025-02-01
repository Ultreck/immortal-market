import PropTypes from 'prop-types';
import { Autocomplete, AutocompleteItem, Button, Modal, ModalBody, ModalContent } from '@heroui/react';
import { TbLinkOff } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';
import { useState } from 'react';

const LinkModal = ({ elements, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} hideCloseButton>
      <ModalContent>
        <ModalBody className="px-8 py-8">{!!isOpen && <Content elements={elements} onClose={onClose} />}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

const Content = ({ elements, onClose }) => {
  const selectedElements = useTemplateStore((state) => state.template.selectedElements);
  const updateElements = useTemplateStore((state) => state.updateElements);
  const page = useTemplateStore(({ template }) => {
    return template.pages.find((p) => p.elements.some((el) => selectedElements.includes(el.id)));
  });
  const pages = useTemplateStore(({ template }) => template.pages);
  const values = elements.map((e) => e.href);
  const same = values.every((v) => v === values[0]);
  const [value, setValue] = useState(same ? values[0] || '' : '');

  const onChange = (elements) => {
    updateElements(elements, page.id, true);
  };

  const handleDone = () => {
    onChange(elements.map((e) => ({ ...e, href: value })));
    onClose();
  };

  const handleRemoveLink = () => {
    onChange(elements.map((e) => ({ ...e, href: '' })));
    onClose();
  };

  const options = pages.map((page, index) => ({
    label: `Page ${index + 1} ${page.type === 'modal' ? '(Modal)' : ''} - ${page.title}`,
    value: `#page-${page.id}`,
  }));

  return (
    <>
      <Autocomplete
        aria-label="Font size"
        type="text"
        isClearable={false}
        allowsCustomValue
        menuTrigger="manual"
        label="Enter a link or select page"
        labelPlacement="outside"
        placeholder="https://example.com"
        classNames={{ base: 'text-base' }}
        inputProps={{ classNames: { input: 'px-2' } }}
        allowsEmptyCollection={false}
        inputValue={value}
        selectedKey={value}
        validate={(v) => {
          return v.length > 0;
        }}
        onInputChange={(v) => {
          setValue(v);
        }}
        onSelectionChange={(v) => {
          if (v) setValue(v);
        }}
        size="lg"
      >
        {options.map((option) => (
          <AutocompleteItem key={option.value} value={option.value} textValue={option.value}>
            {option.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <div className="flex items-center gap-2 mt-3">
        {!!values[0] && (
          <Button
            color="danger"
            type="button"
            onPress={handleRemoveLink}
            startContent={<TbLinkOff />}
            className="text-base"
            radius="full"
            variant="bordered"
          >
            Remove link
          </Button>
        )}
        <Button color="success" type="submit" onPress={handleDone} className="text-base" radius="full">
          Done
        </Button>
      </div>
    </>
  );
};

LinkModal.propTypes = {
  elements: PropTypes.array,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Content.propTypes = {
  elements: PropTypes.array,
  onClose: PropTypes.func,
};

export default LinkModal;
