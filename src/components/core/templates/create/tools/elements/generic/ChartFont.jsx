import {
  Accordion,
  AccordionItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from '@heroui/react';
import PropTypes from 'prop-types';
import {
  RiAlignCenter,
  RiAlignJustify,
  RiAlignLeft,
  RiAlignRight,
  RiArrowRightSLine,
  RiFontFamily,
} from 'react-icons/ri';
import { TbBold, TbItalic, TbUnderline } from 'react-icons/tb';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import NumberInput from '@/components/ui/NumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import { createElement } from 'react';
import { gridAndLegendStyling, labelAndValueStyling } from '@/lib/utils';
import useTemplateStore from '@/store/template.js';

const ChartFont = ({ elements, onChange }) => {
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const openTool = useTemplateStore((state) => state.template.openTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      isOpen={openTool === 'chart-font'}
      onOpenChange={(v) => updateTemplate({ openTool: v ? 'chart-font' : null })}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <RiFontFamily size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow">
        <Accordion
          variant=""
          itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
        >
          {labelAndValueStyling.includes(elements[0].config.name) && (
            <AccordionItem
              key="label"
              aria-label="Label & Value styling"
              title="Label & Value styling"
              startContent={''}
              indicator={<RiArrowRightSLine size="20" />}
            >
              <div className="px-6 py-6 w-full space-y-4">
                <div className="flex items-center space-x-2">
                  <Bold elements={elements} onChange={onChange} />
                  <Italic elements={elements} onChange={onChange} />
                  <TextColor elements={elements} onChange={onChange} />
                </div>
                <LabelSize elements={elements} onChange={onChange} />
                <LegendSize elements={elements} onChange={onChange} />
                {elements[0].config.name !== 'dynamic-sorting' && <ValueSize elements={elements} onChange={onChange} />}
              </div>
            </AccordionItem>
          )}
          {gridAndLegendStyling.includes(elements[0].config.name) && (
            <AccordionItem
              key="grid"
              aria-label="Grid & Legend styling"
              title="Grid & Legend styling"
              startContent={''}
              indicator={<RiArrowRightSLine size="20" />}
            >
              <div className="px-6 py-6 w-full space-y-4">
                <div className="flex items-center space-x-2">
                  <GridBold elements={elements} onChange={onChange} />
                  <GridColor elements={elements} onChange={onChange} />
                </div>
                <XGridSize elements={elements} onChange={onChange} />
                <YGridSize elements={elements} onChange={onChange} />
                <LegendSize elements={elements} onChange={onChange} />
              </div>
            </AccordionItem>
          )}
          <AccordionItem
            key="padding"
            aria-label="Chart Padding"
            title="Chart Padding"
            startContent={''}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <div className="px-6 py-6 w-full space-y-4">
              <XPadding elements={elements} onChange={onChange} />
              <YPadding elements={elements} onChange={onChange} />
            </div>
          </AccordionItem>
        </Accordion>
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
  const value = useResolveValue(elements.map((e) => e.config?.styles?.fontFamily));

  const handleChange = (event) => {
    onChange(
      elements.map((e) => ({
        ...e,
        config: { ...e.config, styles: { ...e.config.styles, fontFamily: event.target.value } },
      }))
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
      >
        {fonts.map((font) => (
          <SelectItem key={font.key}>{font.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

const XPadding = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config?.styles?.xPadding));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, styles: { ...e.config.styles, xPadding: +v } } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Chart x padding:</p>
      <NumberInput onChange={handleChange} value={value} min={0} max={150} step={1} ariaLabel="Letter spacing" />
    </div>
  );
};
const YPadding = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config?.styles?.yPadding));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, styles: { ...e.config.styles, yPadding: +v } } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Chart y padding:</p>
      <NumberInput onChange={handleChange} value={value} min={0} max={150} step={1} ariaLabel="Letter spacing" />
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

const LabelSize = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config.styles?.labelSize));
  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, styles: { ...e.config.styles, labelSize: +v } } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Label size:</p>
      <AutoCompleteNumberInput onChange={handleChange} value={value} min={5} max={150} step={1} ariaLabel="Font size" />
    </div>
  );
};

const XGridSize = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.config.styles.xGridSize));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(
      elements.map((el) => ({ ...el, config: { ...el.config, styles: { ...el.config.styles, xGridSize: +v } } }))
    );
  };
  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">X grid size:</p>
      <AutoCompleteNumberInput onChange={handleChange} value={value} min={5} max={150} step={1} ariaLabel="Font size" />
    </div>
  );
};

const YGridSize = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.config.styles.yGridSize));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(
      elements.map((el) => ({ ...el, config: { ...el.config, styles: { ...el.config.styles, yGridSize: +v } } }))
    );
  };
  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Y grid size:</p>
      <AutoCompleteNumberInput onChange={handleChange} value={value} min={5} max={150} step={1} ariaLabel="Font size" />
    </div>
  );
};

const ValueSize = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config.styles?.valueSize));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, styles: { ...e.config.styles, valueSize: +v } } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Value size:</p>
      <AutoCompleteNumberInput onChange={handleChange} value={value} min={5} max={150} step={1} ariaLabel="Font size" />
    </div>
  );
};
const LegendSize = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config.styles?.legendSize));

  const handleChange = (v) => {
    if (v === '') return;
    onChange(elements.map((e) => ({ ...e, config: { ...e.config, styles: { ...e.config.styles, legendSize: +v } } })));
  };

  return (
    <div className="flex items-center justify-between space-x-4">
      <p className="text-base opacity-75">Legend/title size:</p>
      <AutoCompleteNumberInput onChange={handleChange} value={value} min={5} max={150} step={1} ariaLabel="Font size" />
    </div>
  );
};

const Bold = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.config.styles?.lFontWeight));
  return (
    <Button
      isIconOnly
      variant={value === 'bold' ? 'solid' : 'text'}
      aria-label="Bold/unbold text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, config: { ...el.config, styles: { ...el.config.styles, lFontWeight: 'bold' } } };
          const styles = { ...el.config.styles };
          styles.lFontWeight = styles.lFontWeight === 'bold' ? 'normal' : 'bold';
          return { ...el, config: { ...el.config, styles } };
        });
        onChange(_elements);
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};
const GridBold = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.config.styles?.gFontWeight));
  return (
    <Button
      isIconOnly
      variant={value === 'bold' ? 'solid' : 'text'}
      aria-label="Bold/unbold text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, config: { ...el.config, styles: { ...el.config.styles, gFontWeight: 'bold' } } };
          const styles = { ...el.config.styles };
          styles.gFontWeight = styles.gFontWeight === 'bold' ? 'normal' : 'bold';
          return { ...el, config: { ...el.config, styles } };
        });
        onChange(_elements);
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};

const Italic = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((el) => el.config.styles?.lFontStyle));

  return (
    <Button
      isIconOnly
      variant={value === 'italic' ? 'solid' : 'text'}
      aria-label="Italisize/unitalicize text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, config: { ...el.config, styles: { ...el.config.styles, lFontStyle: 'italic' } } };
          const styles = { ...el.config.styles };
          styles.lFontStyle = styles.lFontStyle === 'italic' ? 'normal' : 'italic';
          return { ...el, config: { ...el.config, styles } };
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
  const value = useResolveValue(elements.map((e) => e.config.styles?.valueAndLableColor));

  const handleChange = (v) => {
    if (!v) return;
    onChange(
      elements.map((e) => ({ ...e, config: { ...e.config, styles: { ...e.config.styles, valueAndLableColor: v } } }))
    );
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
const GridColor = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.config.styles?.gridAndLegendColor));

  const handleChange = (v) => {
    if (!v) return;
    onChange(
      elements.map((e) => ({ ...e, config: { ...e.config, styles: { ...e.config.styles, gridAndLegendColor: v } } }))
    );
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

ChartFont.propTypes = propTypes;
LabelSize.propTypes = propTypes;
XPadding.propTypes = propTypes;
YPadding.propTypes = propTypes;
LineHeight.propTypes = propTypes;
FontFamily.propTypes = propTypes;
Bold.propTypes = propTypes;
Italic.propTypes = propTypes;
Underline.propTypes = propTypes;
TextAlign.propTypes = propTypes;
TextColor.propTypes = propTypes;
GridBold.propTypes = propTypes;
ValueSize.propTypes = propTypes;
ValueSize.propTypes = propTypes;
LegendSize.propTypes = propTypes;
GridColor.propTypes = propTypes;
XGridSize.propTypes = propTypes;
YGridSize.propTypes = propTypes;

export default ChartFont;

