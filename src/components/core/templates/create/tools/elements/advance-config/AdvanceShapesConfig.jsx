import PropTypes from 'prop-types';
import { Checkbox, Select, SelectItem, Slider } from '@nextui-org/react';
import { capitalize } from '@/lib/utils.js';

const AdvanceShapesConfig = ({ element, onChange }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div>
        <Slider
          label="Percentage"
          step={10}
          maxValue={100}
          minValue={10}
          marks={[
            { value: 10, label: '10' },
            { value: 20, label: '20' },
            { value: 30, label: '30' },
            { value: 40, label: '40' },
            { value: 50, label: '50' },
            { value: 60, label: '60' },
            { value: 70, label: '70' },
            { value: 80, label: '80' },
            { value: 90, label: '90' },
            { value: 100, label: '100' },
          ]}
          className="max-w-md"
          onChange={(e) => onChange({ ...element, config: { ...element.config, percentage: e } })}
          value={element.config.percentage}
        />
      </div>

      <div>
        <Slider
          label="No. of shapes"
          step={10}
          maxValue={100}
          minValue={10}
          marks={[
            { value: 10, label: '10' },
            { value: 20, label: '20' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ]}
          className="max-w-md"
          onChange={(e) => onChange({ ...element, config: { ...element.config, noOfShapes: e } })}
          value={element.config.noOfShapes}
        />
      </div>

      <div>
        <Select
          name="shapes"
          label={capitalize('shapes')}
          variant="bordered"
          labelPlacement="outside"
          placeholder="Select one"
          size="lg"
          selectedKeys={element.config.shape ? [element.config.shape] : []}
          onChange={(e) => onChange({ ...element, config: { ...element.config, shape: e.target.value } })}
          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
          disableEmptySelection={true}
        >
          {[
            'circle',
            'square',
            'triangle',
            'star',
            'hexagon',
            'pentagon',
            'hexagonpyramid',
            'octagon',
            'male',
            'female',
          ].map((shape) => (
            <SelectItem key={shape} classNames={{ title: 'text-base px-2' }}>
              {capitalize(shape)}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div>
        <Checkbox
          isSelected={element.config.isCountVisible}
          onValueChange={(v) => onChange({ ...element, config: { ...element.config, isCountVisible: v } })}
        >
          Show Count
        </Checkbox>
      </div>

      <div>
        <Select
          name="countFormat"
          label="Count format"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Select one"
          size="lg"
          selectedKeys={element.config.countFormat ? [element.config.countFormat] : []}
          onChange={(e) => onChange({ ...element, config: { ...element.config, countFormat: e.target.value } })}
          classNames={{ value: 'text-base px-2', popoverContent: 'bg-default-100' }}
          disableEmptySelection={true}
        >
          <SelectItem key="fraction" classNames={{ title: 'text-base px-2' }}>
            Fraction (n/10)
          </SelectItem>
          <SelectItem key="percentage" classNames={{ title: 'text-base px-2' }}>
            Percentage (n%)
          </SelectItem>
        </Select>
      </div>
    </div>
  );
};

AdvanceShapesConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceShapesConfig;
