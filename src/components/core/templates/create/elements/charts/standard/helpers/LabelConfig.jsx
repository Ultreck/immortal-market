import { Select, SelectItem, Switch } from '@heroui/react';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import ColorPicker from '@/components/ui/ColorPicker.jsx';
import PropTypes from 'prop-types';
import { fontFamily } from '@/lib/utils.js';
import useDesignStore from '@/store/design';

const LabelConfig = ({ element, type, remove = [] }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  const _positions = {
    pie: [
      { key: 'inside', name: 'Inside' },
      { key: 'outside', name: 'Outside' },
    ],
    bar: {
      vertical: [
        { key: 'top', name: 'Outside End' },
        { key: 'insideTop', name: 'Inside Base' },
        { key: 'insideBottom', name: 'Inside End' },
        { key: 'center', name: 'Inside Center' },
      ],
      horizontal: [
        { key: 'top', name: 'Top' },
        { key: 'insideTop', name: 'Inside Top' },
        { key: 'insideBottom', name: 'Inside Bottom' },
        { key: 'center', name: 'Center' },
      ],
    },
  };

  const positions = type === 'pie' ? _positions.pie : _positions[element.config.layout || 'horizontal'];

  return (
    <div className="border border-default-200 px-6 py-5 rounded-2xl space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-base">Label</p>
        <Switch
          isSelected={!!element.config.label?.enabled}
          size="sm"
          onValueChange={(v) => {
            updateElement(
              element.id,
              { config: { ...element.config, label: { ...element.config.label, enabled: v } } },
              true
            );
          }}
        />
      </div>
      {element.config.label.enabled && (
        <div className="space-y-4">
          {!remove.includes('font-size') && (
            <div className="flex items-center justify-between">
              <p className="text-base">Font size</p>
              <AutoCompleteNumberInput
                value={element.config.label.fontSize}
                onChange={(v) =>
                  updateElement(
                    element.id,
                    { config: { ...element.config, label: { ...element.config.label, fontSize: Number(v) } } },
                    true
                  )
                }
                min={1}
                max={100}
                aria-label="Label font size"
              />
            </div>
          )}
          {!remove.includes('position') && (
            <div className="flex items-center justify-between">
              <p className="text-base">Label position</p>
              <Select
                aria-label="Label position"
                classNames={{ base: 'w-[200px]', value: 'px-2 text-base' }}
                placeholder="Select one"
                selectedKeys={[element.config.label.position || 'top']}
                onChange={(e) =>
                  updateElement(
                    element.id,
                    { config: { ...element.config, label: { ...element.config.label, position: e.target.value } } },
                    true
                  )
                }
                disableEmptySelection={true}
              >
                {(positions || _positions.bar.horizontal).map((type) => (
                  <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
          )}
          {!remove.includes('font-family') && (
            <div className="flex justify-between items-center">
              <p className="text-base">Font family</p>
              <Select
                aria-label="Font Family"
                classNames={{ value: 'px-1 text-base', base: 'w-[220px]' }}
                placeholder="Select one"
                selectedKeys={element.config.label.fontFamily ? [element.config.label.fontFamily] : []}
                onChange={(e) =>
                  updateElement(
                    element.id,
                    { config: { ...element.config, label: { ...element.config.label, fontFamily: e.target.value } } },
                    true
                  )
                }
              >
                {fontFamily.map((font) => (
                  <SelectItem key={font.key}>{font.label}</SelectItem>
                ))}
              </Select>
            </div>
          )}
          {!remove.includes('format') && (
            <div className="flex justify-between items-center">
              <p className="text-base">Format</p>
              <Select
                aria-label="Label Format"
                classNames={{ value: 'px-1 text-base', base: 'w-[220px]' }}
                placeholder="Select format"
                selectedKeys={element.config.label.format ? [element.config.label.format] : []}
                onChange={(e) =>
                  updateElement(
                    element.id,
                    { config: { ...element.config, label: { ...element.config.label, format: e.target.value } } },
                    true
                  )
                }
              >
                {[
                  { key: 'value', name: 'Value' },
                  { key: 'percentage', name: 'Percentage (%)' },
                  { key: 'both', name: 'Both (Value, %)' },
                  { key: 'currency', name: 'Currency' },
                  { key: 'wholeNumber', name: 'Whole Number' },
                  { key: 'decimal', name: 'Decimal' },
                ].map((type) => (
                  <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                    {type.name}
                  </SelectItem>
                ))}
              </Select>
            </div>
          )}
          {element.config.label?.format === 'currency' && (
            <div className="flex items-center justify-between">
              <p className="text-base">Currency</p>
              <Select
                aria-label="Currency"
                classNames={{ value: 'px-1 text-base', base: 'w-[220px]' }}
                placeholder="Choose currency"
                selectedKeys={element.config.label.currency ? [element.config.label.currency] : []}
                onChange={(e) =>
                  updateElement(
                    element.id,
                    { config: { ...element.config, label: { ...element.config.label, currency: e.target.value } } },
                    true
                  )
                }
              >
                {['N', '$', '€', '¥', '£'].map((currency) => (
                  <SelectItem key={currency}>{currency}</SelectItem>
                ))}
              </Select>
            </div>
          )}
          {!remove.includes('color') && (
            <div className="flex justify-between items-center">
              <p className="text-base">Color</p>
              <ColorPicker
                color={element.config.label.color}
                onChange={(color) =>
                  updateElement(
                    element.id,
                    { config: { ...element.config, label: { ...element.config.label, color: color } } },
                    true
                  )
                }
                trigger={
                  <div
                    tabIndex="0"
                    className="w-8 h-8 p-[3px] rounded-full border border-transparent border-default-200"
                  >
                    <div
                      style={{ backgroundColor: element.config.label.color }}
                      className="w-full h-full hover:brightness-125 rounded-full"
                    />
                  </div>
                }
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

LabelConfig.propTypes = {
  element: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['bar', 'pie']),
  remove: PropTypes.arrayOf(PropTypes.oneOf(['font-size', 'position', 'font-family', 'format', 'color'])),
};

export default LabelConfig;
