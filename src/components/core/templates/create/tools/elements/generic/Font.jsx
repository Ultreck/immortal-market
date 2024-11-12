import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { TbBold, TbItalic, TbUnderline } from 'react-icons/tb';
import NumberInput from '@/components/ui/NumberInput.jsx';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import { RiAlignCenter, RiAlignJustify, RiAlignLeft, RiAlignRight, RiFontFamily } from 'react-icons/ri';
import { createElement } from 'react';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useTemplateStore from '@/store/template.js';

const Font = ({ elements, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'font'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'font' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <RiFontFamily size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full space-y-4">
          <div className="flex items-center space-x-2">
            <Bold elements={elements} onChange={onChange} />
            <Italic elements={elements} onChange={onChange} />
            <Underline elements={elements} onChange={onChange} />
            <TextAlign elements={elements} onChange={onChange} />
            <TextColor elements={elements} onChange={onChange} />
          </div>
          <FontFamily elements={elements} onChange={onChange} />
          <FontSize elements={elements} onChange={onChange} />
          <LetterSpacing elements={elements} onChange={onChange} />
          <LineHeight elements={elements} onChange={onChange} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

const fonts = [
  { key: 'Roboto', label: 'Roboto' },
  { key: 'Playwrite BE VLG', label: 'Playwrite BE VLG' },
  { key: 'Kanit', label: 'Kanit' },
  { key: 'Lato', label: 'Lato' },
  { key: 'Open Sans', label: 'Open Sans' },
  { key: 'Poppins', label: 'Poppins' },
  { key: 'Montserrat', label: 'Montserrat' },
  { key: 'Oswald', label: 'Oswald' },
  { key: 'Raleway', label: 'Raleway' },
  { key: 'Inter', label: 'Inter' },
  { key: 'Noto Sans', label: 'Noto Sans' },
  { key: 'Playfair Display', label: 'Playfair Display' },
  { key: 'Rubik', label: 'Rubik' },
  { key: 'Nunito', label: 'Nunito' },
  { key: 'PT Sans', label: 'PT Sans' },
  { key: 'Work Sans', label: 'Work Sans' },
  { key: 'Libre Baskerville', label: 'Libre Baskerville' },
  { key: 'Manrope', label: 'Manrope' },
  { key: 'Source Sans 3', label: 'Source Sans 3' },
  { key: 'Hahmlet', label: 'Hahmlet' },
];

const FontFamily = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style?.fontFamily));

  const handleChange = (event) => {
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, fontFamily: event.target.value } })));
  };

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-base opacity-75 whitespace-nowrap">Font family:</p>
      <Select
        aria-label="Select font family"
        placeholder="Select font family"
        classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
        onChange={handleChange}
        defaultSelectedKeys={[value]}
      >
        {fonts.map((font) => (
          <SelectItem key={font.key}>{font.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

const FontSize = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style?.fontSize));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, fontSize: +v } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Font size:</p>
      <AutoCompleteNumberInput onChange={handleChange} value={value} min={1} max={150} step={1} ariaLabel="Font size" />
    </div>
  );
};

const LetterSpacing = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style?.letterSpacing));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, letterSpacing: +v } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Letter spacing:</p>
      <NumberInput onChange={handleChange} value={value} min={-10} max={10} step={0.1} ariaLabel="Letter spacing" />
    </div>
  );
};

const LineHeight = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style?.lineHeight));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, lineHeight: +v } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Line height:</p>
      <NumberInput onChange={handleChange} value={value} min={0} max={10} step={0.1} ariaLabel="Line height" />
    </div>
  );
};

const Bold = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.style?.fontWeight));

  return (
    <Button
      isIconOnly
      variant={value === 'bold' ? 'solid' : 'text'}
      aria-label="Bold/unbold text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontWeight: 'bold' } };
          const style = { ...el.style };
          style.fontWeight = style.fontWeight === 'bold' ? 'normal' : 'bold';
          return { ...el, style };
        });
        onChange(_elements);
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};

const Italic = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.style?.fontStyle));

  return (
    <Button
      isIconOnly
      variant={value === 'italic' ? 'solid' : 'text'}
      aria-label="Italisize/unitalicize text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontStyle: 'italic' } };
          const style = { ...el.style };
          style.fontStyle = style.fontStyle === 'italic' ? 'normal' : 'italic';
          return { ...el, style };
        });
        onChange(_elements);
      }}
    >
      <TbItalic size="20" />
    </Button>
  );
};

const Underline = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.style?.textDecoration));

  return (
    <Button
      isIconOnly
      variant={value === 'underline' ? 'solid' : 'text'}
      aria-label="Underline/unbold text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, textDecoration: 'underline' } };
          const style = { ...el.style };
          style.textDecoration = style.textDecoration === 'underline' ? 'none' : 'underline';
          return { ...el, style };
        });
        onChange(_elements);
      }}
    >
      <TbUnderline size="20" />
    </Button>
  );
};

const options = [
  { value: 'left', icon: RiAlignLeft },
  { value: 'right', icon: RiAlignRight },
  { value: 'center', icon: RiAlignCenter },
  { value: 'justify', icon: RiAlignJustify },
];

const TextAlign = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style?.textAlign));
  const selected = options.find((option) => option.value === value) || options[0];

  const handleChange = () => {
    const index = options.findIndex((option) => option.value === selected.value);
    const next = options[(index + 1) % options.length];
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, textAlign: next.value } })));
  };

  return (
    <Button variant="text" isIconOnly className="text-base" onClick={() => handleChange()}>
      {createElement(selected.icon, { size: 20 })}
    </Button>
  );
};

const TextColor = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style?.color)) || '';

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, color: v } })));
  };

  return (
    <div>
      <ColorPicker
        color={value}
        onChange={(color) => handleChange(color)}
        trigger={
          <Button variant="text" isIconOnly className="text-base">
            <div className="w-6 flex flex-col items-center justify-center">
              <RiFontFamily size="16" />
              <div className="rounded-2xl h-1.5 mt-0.5 w-full" style={{ background: value }}></div>
            </div>
          </Button>
        }
      />
    </div>
  );
};

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

Font.propTypes = propTypes;
FontSize.propTypes = propTypes;
LetterSpacing.propTypes = propTypes;
LineHeight.propTypes = propTypes;
FontFamily.propTypes = propTypes;
Bold.propTypes = propTypes;
Italic.propTypes = propTypes;
Underline.propTypes = propTypes;
TextAlign.propTypes = propTypes;
TextColor.propTypes = propTypes;

export default Font;
