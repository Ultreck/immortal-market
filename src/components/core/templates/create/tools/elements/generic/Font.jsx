import { Button, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import PropTypes from 'prop-types';
import { TbBold, TbItalic, TbUnderline } from 'react-icons/tb';
import NumberInput from '@/components/ui/NumberInput.jsx';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import { RiAlignCenter, RiAlignJustify, RiAlignLeft, RiAlignRight, RiFontFamily } from 'react-icons/ri';
import { createElement } from 'react';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import useDesignStore from '@/store/design.js';

const Font = ({ elements }) => {
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={tool === 'font'}
      onOpenChange={(v) => (v ? openTool('font') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <RiFontFamily size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-6 py-6 w-full space-y-4">
          <div className="flex items-center space-x-2">
            <Bold elements={elements} />
            <Italic elements={elements} />
            <Underline elements={elements} />
            <TextAlign elements={elements} />
            <TextColor elements={elements} />
          </div>
          <FontFamily elements={elements} />
          <FontSize elements={elements} />
          <LetterSpacing elements={elements} />
          <LineHeight elements={elements} />
          {elements.every((e) => e.config.name === 'basic') && <TextEffect elements={elements} />}
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

export const FontFamily = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style?.fontFamily));
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = (event) => {
    updateElements(
      elements.map((e) => ({
        elementId: e.id,
        updates: { style: { ...e.style, fontFamily: event.target.value } },
      })),
      true
    );
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
        radius="full"
        size="sm"
      >
        {fonts.map((font) => (
          <SelectItem key={font.key}>{font.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export const FontSize = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style?.fontSize));
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = (v) => {
    if (v === '') return;
    updateElements(
      elements.map((e) => ({
        elementId: e.id,
        updates: { style: { ...e.style, fontSize: +v } },
      })),
      true
    );
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Font size:</p>
      <AutoCompleteNumberInput
        onChange={handleChange}
        value={value}
        min={1}
        max={150}
        step={1}
        aria-label="Font size"
        size="sm"
        radius="full"
      />
    </div>
  );
};

export const LetterSpacing = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style?.letterSpacing));
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = (v) => {
    if (v === '') return;
    updateElements(
      elements.map((e) => ({
        elementId: e.id,
        updates: { style: { ...e.style, letterSpacing: +v } },
      })),
      true
    );
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Letter spacing:</p>
      <NumberInput
        onChange={handleChange}
        value={value}
        min={-10}
        max={10}
        step={0.1}
        aria-label="Letter spacing"
        size="sm"
        radius="full"
      />
    </div>
  );
};

export const LineHeight = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style?.lineHeight));
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = (v) => {
    if (v === '') return;
    updateElements(
      elements.map((e) => ({
        elementId: e.id,
        updates: { style: { ...e.style, lineHeight: +v } },
      })),
      true
    );
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Line height:</p>
      <NumberInput
        onChange={handleChange}
        value={value}
        min={0}
        max={10}
        step={0.1}
        aria-label="Line height"
        size="sm"
        radius="full"
      />
    </div>
  );
};

export const Bold = ({ elements }) => {
  const value = useResolveValue(elements.map((el) => el.style?.fontWeight));
  const updateElements = useDesignStore((state) => state.updateElements);

  return (
    <Button
      isIconOnly
      variant={value === 'bold' ? 'solid' : 'light'}
      aria-label="Bold/unbold text"
      radius="full"
      size="sm"
      onPress={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontWeight: 'bold' } };
          const style = { ...el.style };
          style.fontWeight = style.fontWeight === 'bold' ? 'normal' : 'bold';
          return { ...el, style };
        });
        updateElements(
          _elements.map((e) => ({ elementId: e.id, updates: { style: e.style } })),
          true
        );
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};

export const Italic = ({ elements }) => {
  const value = useResolveValue(elements.map((el) => el.style?.fontStyle));
  const updateElements = useDesignStore((state) => state.updateElements);

  return (
    <Button
      isIconOnly
      variant={value === 'italic' ? 'solid' : 'light'}
      aria-label="Italisize/unitalicize text"
      radius="full"
      size="sm"
      onPress={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontStyle: 'italic' } };
          const style = { ...el.style };
          style.fontStyle = style.fontStyle === 'italic' ? 'normal' : 'italic';
          return { ...el, style };
        });
        updateElements(
          _elements.map((e) => ({ elementId: e.id, updates: { style: e.style } })),
          true
        );
      }}
    >
      <TbItalic size="20" />
    </Button>
  );
};

export const Underline = ({ elements }) => {
  const value = useResolveValue(elements.map((el) => el.style?.textDecoration));
  const updateElements = useDesignStore((state) => state.updateElements);

  return (
    <Button
      isIconOnly
      variant={value === 'underline' ? 'solid' : 'light'}
      aria-label="Underline/ununderline text"
      radius="full"
      size="sm"
      onPress={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, textDecoration: 'underline' } };
          const style = { ...el.style };
          style.textDecoration = style.textDecoration === 'underline' ? 'none' : 'underline';
          return { ...el, style };
        });
        updateElements(
          _elements.map((e) => ({ elementId: e.id, updates: { style: e.style } })),
          true
        );
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

export const TextAlign = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style?.textAlign));
  const selected = options.find((option) => option.value === value) || options[0];
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = () => {
    const index = options.findIndex((option) => option.value === selected.value);
    const next = options[(index + 1) % options.length];
    updateElements(
      elements.map((e) => ({ elementId: e.id, updates: { style: { ...e.style, textAlign: next.value } } })),
      true
    );
  };

  return (
    <Button variant="light" isIconOnly className="text-base" onPress={() => handleChange()} radius="full" size="sm">
      {createElement(selected.icon, { size: 20 })}
    </Button>
  );
};

export const TextColor = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.style?.color)) || '';
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = (v) => {
    if (!v) return;
    updateElements(
      elements.map((e) => ({ elementId: e.id, updates: { style: { ...e.style, color: v } } })),
      true
    );
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

const effects = [
  { key: '', label: 'None' },
  { key: 'revolveScale', label: 'Flipping' },
  { key: 'ballDrop', label: 'Ball Drop' },
  { key: 'sideSlide', label: 'Side slide' },
  { key: 'revolveDrop', label: 'Resolve drop' },
  { key: 'dropVanish', label: 'Drop vanish' },
];

export const TextEffect = ({ elements }) => {
  const value = useResolveValue(elements.map((e) => e.config?.effect)) || '';
  const updateElements = useDesignStore((state) => state.updateElements);

  const handleChange = (event) => {
    updateElements(
      elements.map((e) => ({ elementId: e.id, updates: { config: { ...e.config, effect: event.target.value } } })),
      true
    );
  };

  return (
    <div className="flex flex-col space-y-2">
      <p className="text-base opacity-75 whitespace-nowrap">Effect:</p>
      <Select
        aria-label="Effect"
        placeholder="Select effect"
        classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
        onChange={handleChange}
        defaultSelectedKeys={[value]}
        items={effects}
        radius="full"
        size="sm"
      >
        {(effect) => <SelectItem key={effect.key}>{effect.label}</SelectItem>}
      </Select>
    </div>
  );
};

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
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
TextEffect.propTypes = propTypes;

export default Font;
