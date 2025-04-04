import PropTypes from 'prop-types';
import { Select, SelectItem } from '@heroui/react';
import LabelConfig from '../../../../elements/charts/standard/helpers/LabelConfig';
import NumberInput from '@/components/ui/NumberInput';
import useDesignStore from '@/store/design';

const AdvanceCircleIconsConfig = ({ element }) => {
  const updateElement = useDesignStore((state) => state.updateElement);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-base">Number of circles:</p>
        <NumberInput
          onChange={(v) => updateElement(element.id, { config: { ...element.config, count: Number(v) } }, true)}
          value={element.config.count}
          min={2}
          max={element.config.data.length}
          aria-label="No of Circles to Show"
        />
      </div>
      <LabelConfig element={element} remove={['position']} />
      <div className="flex justify-between items-center">
        <p className="text-base">Choose shape:</p>
        <Select
          aria-label="Choose shape"
          placeholder="Select one"
          value={element.config.shape}
          defaultSelectedKeys={[element.config.shape]}
          onChange={(e) => updateElement(element.id, { config: { ...element.config, shape: e.target.value } }, true)}
          disableEmptySelection={true}
          classNames={{ base: 'w-60', value: 'text-base px-2' }}
        >
          <SelectItem key="circle" classNames={{ title: 'px-2 text-base' }}>
            Circle
          </SelectItem>
          <SelectItem key="square" classNames={{ title: 'px-2 text-base' }}>
            Square
          </SelectItem>
        </Select>
      </div>
    </div>
  );
};

AdvanceCircleIconsConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default AdvanceCircleIconsConfig;
