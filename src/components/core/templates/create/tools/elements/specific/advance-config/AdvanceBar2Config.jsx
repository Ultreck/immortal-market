import PropTypes from 'prop-types';
import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput.jsx';
import { Select, SelectItem, Slider } from '@heroui/react';
import LabelConfig from '../../../../elements/charts/standard/helpers/LabelConfig';
import useDesignStore from '@/store/design';

const AdvanceBar2Config = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-base opacity-75 whitespace-nowrap">No. of bars:</p>
        <AutoCompleteNumberInput
          onChange={(v) => updateElement(element.id, { config: { ...element.config, bars: Number(v) } }, true)}
          value={element.config.bars}
          min={1}
          max={element.config.data.length}
          aria-label="No of bars to show"
        />
      </div>
      <LabelConfig element={element} positions={['above', 'below']} remove={['font-family', 'format']} />
      <div className="flex items-center justify-between space-x-4">
        <p className="text-base opacity-75 whitespace-nowrap">Alignment:</p>
        <Select
          aria-label="Alignment"
          variant="bordered"
          labelPlacement="outside-left"
          placeholder="Select one"
          size="lg"
          selectedKeys={element.config.alignment ? [element.config.alignment] : []}
          onChange={(e) =>
            updateElement(element.id, { config: { ...element.config, alignment: e.target.value } }, true)
          }
          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100', base: 'w-[200px]' }}
          disableEmptySelection={true}
        >
          <SelectItem key="default" classNames={{ title: 'text-base px-2' }}>
            Default
          </SelectItem>
          <SelectItem key="left" classNames={{ title: 'text-base px-2' }}>
            Left
          </SelectItem>
          <SelectItem key="right" classNames={{ title: 'text-base px-2' }}>
            Right
          </SelectItem>
        </Select>
      </div>
      <div>
        <Slider
          label="Gap"
          step={1}
          maxValue={30}
          minValue={0}
          onChange={(e) =>
            updateElement(element.id, { config: { ...element.config, gap: Array.isArray(e) ? e[0] : e } }, true)
          }
          value={element.config.gap || 0}
          classNames={{
            thumb: 'before:hidden after:hidden bg-default-700 w-[16px] h-[16px] rounded-full',
            track: 'border-s-default-300',
            filler: 'bg-gradient-to-r from-default-300 to-default-400',
            label: 'text-base',
            value: 'text-base opacity-60',
          }}
          size="sm"
          showOutline
        />
      </div>
    </div>
  );
};

AdvanceBar2Config.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceBar2Config;
