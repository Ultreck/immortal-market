import { Button, Popover, PopoverContent, PopoverTrigger, Tab, Tabs } from '@nextui-org/react';
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TbCheck, TbColorSwatch } from 'react-icons/tb';
import { cn } from '@/lib/utils.js';
import { HexColorPicker } from 'react-colorful';

const options = [
  ['#E66B5B', '#1D9085', '#264A5A', '#E8C22C', '#F6881F', '#2673D9', '#2BA385', '#E6A333', '#AB52D9', '#D93566'],
  ['#118AB2', '#FFD166', '#06D6A0', '#EF476F', '#073B4C', '#FF9F1C', '#4ECDC4', '#F15BB5', '#2A9D8F', '#E63946'],
  ['#540D6E', '#EE4266', '#FFD23F', '#3BCEAC', '#0EAD69', '#4361EE', '#FF7D00', '#1A759F', '#7209B7', '#F72585'],
  ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#2EC4B6', '#FF9F1C', '#E71D36', '#011627', '#FDFFFC'],
  ['#2EC4B6', '#011627', '#FF9F1C', '#E71D36', '#2EC4B6', '#011627', '#FF9F1C', '#E71D36', '#2EC4B6', '#011627'],
  ['#850000', '#DC0000', '#850000', '#FFDB89', '#850000', '#FFA300', '#850000', '#FFDB89', '#850000', '#DC0000'],
  ['#573391', '#492E87', '#3F2B96', '#5D54A4', '#9D84B7', '#B8A9C9', '#D7BCE8', '#5D54A4', '#3F2B96', '#573391'],
  ['#064635', '#519259', '#064635', '#F0BB62', '#064635', '#F4EEA9', '#064635', '#519259', '#064635', '#F0BB62'],
  ['#990000', '#FF0000', '#FF5B00', '#FF9500', '#FFC300', '#990000', '#FF0000', '#FF5B00', '#FF9500', '#FFC300'],
  ['#B565A7', '#FF6F61', '#88B04B', '#92A8D1', '#F7CAC9', '#6B5B95', '#FF6F61', '#B565A7', '#92A8D1', '#88B04B'],
  ['#005F6B', '#008C9E', '#00B4CC', '#00DFFC', '#1DE9B6', '#1DC4E9', '#30AADD', '#22577E', '#5584AC', '#00A6ED'],
  ['#3A6351', '#A0937D', '#EAD2AC', '#E88873', '#D8572A', '#7C474F', '#583E26', '#1D7874', '#763626', '#4B4B4B'],
  ['#D7263D', '#FFD23F', '#3F88C5', '#32A287', '#D4A5A5', '#B8F2E6', '#FF928B', '#B5EAEA', '#FFAAA7', '#D4A5A5'],
  ['#355070', '#6D597A', '#B56576', '#E56B6F', '#EAAC8B', '#FFE66D', '#4C4C6D', '#7D8491', '#DD99BB', '#FFCAD4'],
  ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51', '#A8DADC', '#457B9D', '#1D3557', '#F1FAEE', '#F3B3A6'],
  ['#0B3D91', '#1C7C54', '#F56476', '#F3C677', '#F5E0B7', '#FA744F', '#2E2C2F', '#8D86C9', '#76B041', '#4E4A59'],
  ['#D72638', '#3F88C5', '#1A936F', '#FF6B6B', '#FFC93C', '#A4E5D9', '#8ECAE6', '#A0D2DB', '#FF9999', '#3D5A80'],
  ['#FF9F1C', '#FFBF69', '#2EC4B6', '#CBF3F0', '#404E4D', '#5D737E', '#A4036F', '#D4A5A5', '#585563', '#FB6107'],
  ['#7FDBDA', '#9BC53D', '#5BC0EB', '#FDE74C', '#FA7921', '#DC0073', '#B9F18C', '#6A0572', '#EE7674', '#41E2BA'],
  ['#083D77', '#DA4167', '#F4D35E', '#F78764', '#C3B299', '#3C1518', '#69140E', '#A44200', '#D58936', '#FFA69E'],
  ['#1C77C3', '#39A9CB', '#40BCD8', '#F39237', '#D63230', '#3A3042', '#6C567B', '#C06C84', '#6C5B7B', '#355C7D'],
  ['#34344A', '#696773', '#D1D1D1', '#FAB1A0', '#EDC988', '#6A0572', '#8D5A97', '#CEA2AC', '#4E4E50', '#8ABF69'],
  ['#0B132B', '#1C2541', '#3A506B', '#5BC0BE', '#6FFFE9', '#FC5185', '#364F6B', '#F73859', '#61C0BF', '#50514F'],
];

const ChartColor = ({ element, onChange }) => {
  const [tab, setTab] = useState('palettes');

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[300px] !max-h-[500px] overflow-y-auto block' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbColorSwatch size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full">
          <Tabs
            variant="bordered"
            aria-label="Options"
            color="primary"
            radius="full"
            classNames={{
              base: 'mb-6',
              tab: 'text-base px-4',
            }}
            selectedKey={tab}
            onSelectionChange={setTab}
          >
            <Tab key="palettes" title="Palettes" className="text-base" />
            <Tab key="manual" title="Manual" className="text-base" />
          </Tabs>
          {tab === 'palettes' && <Palettes onChange={onChange} element={element} />}
          {tab === 'manual' && <Manual onChange={onChange} element={element} />}
        </div>
      </PopoverContent>
    </Popover>
  );
};

ChartColor.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Palettes = ({ element, onChange }) => {
  const isSameColors = (colors1, colors2) => {
    for (let i = 0; i < colors1.length; i++) {
      if (colors1[i] !== colors2[i]) return false;
    }
    return true;
  };

  const handleChange = useCallback(
    (_colors) => {
      onChange({
        ...element,
        config: { ...element.config, colors: _colors.slice(0, element.config.colors.length) },
      });
    },
    [element, onChange]
  );

  return (
    <div className="space-y-3">
      {options.map((cs, i) => {
        return (
          <div
            key={i}
            onClick={() => handleChange(cs)}
            className={cn(
              'grid grid-cols-10 rounded-lg overflow-hidden w-full hover:brightness-125 relative cursor-pointer'
            )}
          >
            {isSameColors(element.config.colors, cs) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                <TbCheck size="20" />
              </div>
            )}
            {cs.map((c, j) => {
              return <button key={j} style={{ backgroundColor: c }} className="h-8" />;
            })}
          </div>
        );
      })}
    </div>
  );
};

const Manual = ({ element, onChange }) => {
  const [colors, setColors] = useState([]);
  const [selected, setSelected] = useState(0);

  const handleChange = useCallback(
    (_colors) => {
      setColors((v) => ({ ...v, ..._colors }));
      onChange({
        ...element,
        config: { ...element.config, colors: _colors },
      });
    },
    [element, onChange]
  );

  useEffect(() => {
    if (element.config.colors?.length) setColors(element.config.colors);
    if (isNaN(selected)) setSelected(0);
  }, [colors, element.config.colors, handleChange, selected]);

  const onColorChange = (newColor) => {
    handleChange(element.config.colors.map((c, i) => (i === selected ? newColor : c)));
  };

  return (
    <>
      {colors.length > 0 ? (
        <div className="flex items-center flex-wrap gap-1">
          {colors.map((color, index) => (
            <div
              tabIndex="0"
              key={`${color}-${index}`}
              onClick={() => setSelected(index)}
              className={cn('w-8 h-8 p-[3px] rounded-full border border-transparent', {
                'border-default-600': selected === index,
              })}
            >
              <div style={{ backgroundColor: color }} className="w-full h-full hover:brightness-125 rounded-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="border-2 border-default-300 border-dashed rounded-xl p-6">
          <span className="opacity-70">No colors found</span>
        </div>
      )}
      {!isNaN(selected) && (
        <HexColorPicker color={colors[selected]} onChange={(c) => onColorChange(c)} className="!w-full mt-4" />
      )}
    </>
  );
};

Palettes.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

Manual.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChartColor;
