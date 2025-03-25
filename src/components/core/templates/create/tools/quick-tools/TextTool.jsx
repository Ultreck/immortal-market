import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';
import { Button } from '@heroui/react';
import NumberInput from '@/components/ui/NumberInput.jsx';
import { createElement } from 'react';
import { TbBold, TbItalic, TbUnderline } from 'react-icons/tb';
import { RiAlignCenter, RiAlignJustify, RiAlignLeft, RiAlignRight, RiFontFamily } from 'react-icons/ri';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import PropTypes from 'prop-types';

export const FontSize = ({ element, onChange }) => {
  const handleChange = (v) => {
    if (v === '') return;
    onChange({ ...element, style: { ...element.style, fontSize: +v } });
  };

  return (
    <div className="flex items-center justify-between ">
      <AutoCompleteNumberInput
        onChange={handleChange}
        value={element.style.fontSize}
        min={1}
        max={150}
        step={1}
        ariaLabel="Font size"
        radius="full"
        size="sm"
      />
    </div>
  );
};

export const LineHeight = ({ element, onChange }) => {
  const value = element.style?.lineHeight;

  const handleChange = (v) => {
    if (v === '') return;
    onChange({ ...element, style: { ...element.style, lineHeight: +v } });
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <NumberInput onChange={handleChange} value={value} min={0} max={10} step={0.1} ariaLabel="Line height" />
    </div>
  );
};

export const Bold = ({ element, onChange }) => {
  const value = element.style?.fontWeight;

  return (
    <Button
      isIconOnly
      variant={value === 'bold' ? 'solid' : 'light'}
      aria-label="Bold/unbold text"
      radius="full"
      size="sm"
      onPress={() => {
        const _elements = [element].map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontWeight: 'bold' } };
          const style = { ...el.style };
          style.fontWeight = style.fontWeight === 'bold' ? 'normal' : 'bold';
          return { ...el, style };
        });
        onChange(_elements[0]);
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};

export const Italic = ({ element, onChange }) => {
  const value = element.style?.fontStyle;

  return (
    <Button
      isIconOnly
      variant={value === 'italic' ? 'solid' : 'light'}
      aria-label="Italisize/unitalicize text"
      radius="full"
      size="sm"
      onPress={() => {
        const _elements = [element].map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontStyle: 'italic' } };
          const style = { ...el.style };
          style.fontStyle = style.fontStyle === 'italic' ? 'normal' : 'italic';
          return { ...el, style };
        });
        onChange(_elements[0]);
      }}
    >
      <TbItalic size="20" />
    </Button>
  );
};

export const Underline = ({ element, onChange }) => {
  const value = element.style?.textDecoration;

  return (
    <Button
      isIconOnly
      variant={value === 'underline' ? 'solid' : 'light'}
      aria-label="Underline/unbold text"
      radius="full"
      size="sm"
      onPress={() => {
        const _elements = [element].map((el) => {
          if (!value) return { ...el, style: { ...el.style, textDecoration: 'underline' } };
          const style = { ...el.style };
          style.textDecoration = style.textDecoration === 'underline' ? 'none' : 'underline';
          return { ...el, style };
        });
        onChange(_elements[0]);
      }}
    >
      <TbUnderline size="20" />
    </Button>
  );
};

export const TextColor = ({ element, onChange }) => {
  const value = element.style?.color || '';

  const handleChange = (v) => {
    if (!v) return;
    onChange({ ...element, style: { ...element.style, color: v } });
  };

  return (
    <div>
      <ColorPicker
        color={value}
        onChange={(color) => handleChange(color)}
        trigger={
          <Button variant="light" isIconOnly className="text-base" radius="full" size="sm">
            <div className="w-6 flex flex-col items-center justify-center">
              <RiFontFamily size="16" />
              <div className="rounded-2xl h-1 mt-0.5 w-[80%]" style={{ background: value }}></div>
            </div>
          </Button>
        }
      />
    </div>
  );
};

const options = [
  { value: 'left', icon: RiAlignLeft },
  { value: 'right', icon: RiAlignRight },
  { value: 'center', icon: RiAlignCenter },
  { value: 'justify', icon: RiAlignJustify },
];

export const TextAlign = ({ element, onChange }) => {
  const value = element.style?.textAlign;
  const selected = options.find((option) => option.value === value) || options[0];

  const handleChange = () => {
    const index = options.findIndex((option) => option.value === selected.value);
    const next = options[(index + 1) % options.length];
    onChange({ ...element, style: { ...element.style, textAlign: next.value } });
  };

  return (
    <Button variant="light" isIconOnly className="text-base" radius="full" size="sm" onPress={() => handleChange()}>
      {createElement(selected.icon, { size: 20 })}
    </Button>
  );
};

FontSize.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

LineHeight.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

Bold.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

Italic.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

Underline.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextColor.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextAlign.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
