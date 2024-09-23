import { Button, Divider, Popover, PopoverContent, PopoverTrigger, Tab, Tabs } from '@nextui-org/react';
import { HexAlphaColorPicker } from 'react-colorful';
import PropTypes from 'prop-types';
import { HiCheck } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';
import EyeDropTool from './EyeDropTool.jsx';
import { cn, extractColorsFromGradient } from '@/lib/utils.js';
import { useEffect, useState } from 'react';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import { useDeepCompareEffect } from 'react-use';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import { RiAddLine, RiCloseLine } from 'react-icons/ri';

const Background = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style.background));
  const [tab, setTab] = useState('solid');

  useEffect(() => {
    if (value.includes('gradient')) setTab('gradient');
    else setTab('solid');
  }, [value]);

  const handleTabChange = (v) => {
    let color;
    if (v === 'solid') color = '#000';
    if (v === 'gradient' && !colors.includes('gradient')) color = 'linear-gradient(to right, #000000, #ffffff)';
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, background: color } })));
    setTab(v);
  };

  return (
    <Popover placement="left" showArrow offset={10}>
      <PopoverTrigger>
        <button
          className={cn('my-2 w-[20px] h-[20px] rounded-full hover:brightness-105 cursor-pointer')}
          style={{ background: value }}
        />
      </PopoverTrigger>
      <PopoverContent className="px-8 py-6 shadow border border-default-200 w-[260px] items-stretch">
        <Tabs
          variant="bordered"
          aria-label="Options"
          color="primary"
          radius="full"
          classNames={{
            base: 'mb-2',
            tab: 'text-base px-4',
          }}
          selectedKey={tab}
          onSelectionChange={handleTabChange}
        >
          <Tab key="solid" title="Solid">
            <Solid elements={elements} onChange={onChange} />
          </Tab>
          <Tab key="gradient" title="Gradient">
            <Gradient elements={elements} onChange={onChange} />
          </Tab>
        </Tabs>
      </PopoverContent>
    </Popover>
  );
};

const colors = [
  '#000000',
  '#800000',
  '#808000',
  '#008080',
  '#808080',
  '#993366',
  '#660066',
  '#0066CC',
  '#800080',
  '#366883',
  '#1c3575',
  '#2b3793',
];

const Solid = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style.background));

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, background: v } })));
  };

  return (
    <>
      <HexAlphaColorPicker color={value} onChange={(color) => handleChange(color)} className="w-full" />
      <div className="grid grid-cols-6 gap-y-3 gap-x-3 mt-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-[25px] h-[25px] rounded-full hover:scale-105 transition-transform cursor-pointer relative"
            style={{ background: color }}
            onClick={() => handleChange(color)}
          >
            <AnimatePresence mode="wait">
              {value === color && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center"
                >
                  <HiCheck size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <EyeDropTool value={value} onChange={handleChange} />
    </>
  );
};

const gradients = [
  'linear-gradient(to right, #fc466b, #3f5efb) no-repeat',
  'linear-gradient(to right, rgba(22,179,181,1), rgba(0,153,255,1)) no-repeat',
  'linear-gradient(to right, #00b09b, #96c93d) no-repeat',
  'linear-gradient(to right, #396afc, #2948ff) no-repeat',
  'linear-gradient(to right, #b24592, #f15f79) no-repeat',
  'linear-gradient(to right, #ffb347, #ffcc33) no-repeat',
  'linear-gradient(to right, #ff512f, #dd2476) no-repeat',
];

const Gradient = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style.background));
  const [colors, setColors] = useState(extractColorsFromGradient(value));

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, background: v } })));
  };

  useDeepCompareEffect(() => {
    const gradient = `linear-gradient(to right, ${colors.join(', ')}) no-repeat`;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, background: gradient } })));
  }, [colors]);

  return (
    <>
      <div className="grid grid-cols-6 gap-10 items-center mt-2">
        {colors.map((color, index) => (
          <div className="relative w-max group" key={`${index}-${color}`}>
            {colors.length > 2 && (
              <Button
                isIconOnly
                variant="solid"
                aria-label="Remove color"
                radius="full"
                onClick={() => setColors((prev) => prev.filter((c, i) => i !== index))}
                className="w-5 h-5 min-w-[auto] min-h-[auto] absolute -right-0 -top-2 z-[11] opacity-0 group-hover:opacity-100"
                color="default"
              >
                <RiCloseLine size="12" />
              </Button>
            )}
            <ColorPicker
              color={color}
              onChange={(c) =>
                setColors((prev) => {
                  return [...prev.slice(0, index), c, ...prev.slice(index + 1)];
                })
              }
              key={index}
            />
          </div>
        ))}
        <Button isIconOnly variant="bordered" radius="full" onClick={() => setColors((prev) => [...prev, '#000000'])}>
          <RiAddLine size={20} />
        </Button>
      </div>
      <Divider className="my-4" />
      <div className="grid grid-cols-5 gap-y-3 gap-x-3">
        {gradients.map((color, index) => {
          return (
            <div
              key={index}
              className="w-full aspect-square rounded-full hover:scale-105 transition-transform cursor-pointer relative"
              style={{ background: color }}
              onClick={() => {
                setColors(extractColorsFromGradient(color));
                handleChange(color);
              }}
            >
              <AnimatePresence mode="wait">
                {value === color && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center"
                  >
                    <HiCheck size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
};

const propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

Background.propTypes = propTypes;
Solid.propTypes = propTypes;
Gradient.propTypes = propTypes;

export default Background;
