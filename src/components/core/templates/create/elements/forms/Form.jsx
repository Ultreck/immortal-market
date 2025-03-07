import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import ElementFormWrapper from '@/components/core/templates/create/elements/forms/ElementFormWrapper.jsx';
import {
  addToast,
  Button,
  Checkbox,
  Input,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
  useRadio,
  VisuallyHidden,
} from '@heroui/react';
import useDesignStore from '@/store/design';
import useBusiness from '@/hooks/use-business';
import { useCreateForm } from '@/api/business';
import { useState } from 'react';

export const Form = ({ element }) => {
  return (
    <ElementFormWrapper element={element}>
      <FormContent element={element} className="cursor-auto shadow-xl" />
    </ElementFormWrapper>
  );
};

export const FormPresent = ({ element }) => {
  const { id: business } = useBusiness();
  const id = useDesignStore((state) => state.id);
  const { mutateAsync: createForm, isPending: isCreateFormLoading } = useCreateForm(business, id);
  const [answers, setAnswers] = useState({});

  const onChange = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    try {
      await createForm({ form: answers, element: element.id });
      addToast({ title: 'Form submitted', color: 'success' });
    } catch (e) {
      addToast({
        title: 'Error',
        description: e?.response?.data?.message ?? e?.message ?? 'Something went wrong, please try again',
        color: 'error',
      });
    }
  };

  return (
    <FormContent
      element={element}
      className="cursor-auto shadow-xl"
      onChange={onChange}
      disabled={isCreateFormLoading}
      handleSubmit={handleSubmit}
      present
    />
  );
};

const FormContent = ({
  element,
  className = '',
  onChange = () => {},
  present = false,
  handleSubmit = () => {},
  disabled = false,
}) => {
  return (
    <div
      style={{
        ...element.style,
        width: element.size.width,
        height: element.size.height,
      }}
      className={cn('transition-all flex flex-col !p-5 duration-300', className)}
    >
      <h1 className="font-bold flex-1 basis-2/3 text-center">form</h1>
      <div className="flex flex-col flex-1 gap-2 basis-1/3 mt-2">
        {element.fields.map((field, index) => {
          if (field.type === 'shortText') {
            return <ShortText key={index} field={field} onChange={onChange} />;
          }
          if (field.type === 'paragraph') {
            return <Paragraph row={present ? 4 : 2} key={index} field={field} onChange={onChange} />;
          }
          if (field.type === 'checkbox') {
            return <MultipleChoice key={index} isDisabled={present} field={field} onChange={onChange} />;
          }
          if (field.type === 'radio') {
            return <SingleOption key={index} field={field} onChange={onChange} />;
          }
          if (field.type === 'dropdown') {
            return <DropdownSelect key={index} field={field} onChange={onChange} />;
          }
          return null;
        })}
        <Button
          onPress={handleSubmit}
          disabled={disabled}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

const ShortText = ({ field, onChange }) => {
  return (
    <div className="group">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
        {field.text}
      </label>
      <Input
        placeholder="Answer"
        type={field.dataType}
        id={field.id}
        className="rounded border !bg-gray-400"
        radius="none"
        onChange={(e) => onChange(field.id, e.target.value)}
      />
    </div>
  );
};

const Paragraph = ({ field, onChange, row }) => {
  return (
    <div className="group">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
        {field.text}
      </label>
      <Textarea
        placeholder="Answer"
        radius="none"
        type={field.dataType}
        onChange={(e) => onChange(field.id, e.target.value)}
        className="border rounded !bg-gray-400"
        maxRows={row}
      />
    </div>
  );
};

const MultipleChoice = ({ field, onChange, isDisabled }) => {
  const values = {};

  const handleChange = (id, e) => {
    values[id] = e;
    onChange(field.id, values);
  };

  return (
    <div className="flex flex-col group my-2">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
        {field.text}
      </label>
      <div className="flex flex-col space-y-3">
        {field.options.map((val, index) => (
          <Checkbox
            isDisabled={!isDisabled}
            isSelected={values[val.id]}
            onValueChange={(e) => handleChange(val.id, e)}
            key={`value${index}`}
            classNames={{
              base: cn(
                'inline-flex max-w-md bg-content1 mt-1 bordered border-default-200 border-solid',
                'hover:bg-content2 items-center justify-start',
                'w-full cursor-pointer rounded-lg gap-2 p-2 border-2 border-transparent',
                'data-[selected=true]:border-primary'
              ),
              label: 'w-full',
            }}
          >
            <span>{val.text}</span>
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

const SingleOption = ({ field, onChange }) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
        {field.text}
      </label>
      <RadioGroup
        orientation="horizontal"
        onValueChange={(e) => {
          onChange(field.id, e);
        }}
      >
        {field.options.map((option) => (
          <CustomRadio value={option.id} key={option.id}>
            {option.text}
          </CustomRadio>
        ))}
      </RadioGroup>
    </div>
  );
};

const DropdownSelect = ({ field, onChange }) => {
  return (
    <div className="flex flex-col gap-2 my-2">
      <span> {field.text}</span>
      <Select
        className="text-black z-[333999999]"
        label="option"
        popoverProps={{
          classNames: {
            content: 'z-[20000000]',
          },
        }}
        onChange={(e) => {
          onChange(field.id, e.target.value);
        }}
      >
        {field.options.map((option) => (
          <SelectItem key={option.id}>
            <span className="text-base">{option.text}</span>
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export const CustomRadio = (props) => {
  const {
    Component,
    children,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent',
        'cursor-pointer border-1 border-default rounded-lg gap-2 p-2',
        'data-[selected=true]:border-primary'
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()}>{children && <span {...getLabelProps()}>{children}</span>}</div>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
    </Component>
  );
};

Form.propTypes = {
  element: PropTypes.object.isRequired,
};
FormPresent.propTypes = {
  element: PropTypes.object.isRequired,
};
FormContent.propTypes = {
  element: PropTypes.object.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  present: PropTypes.bool,
  handleSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};
ShortText.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dataType: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
Paragraph.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    dataType: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
};
MultipleChoice.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
SingleOption.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
DropdownSelect.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
