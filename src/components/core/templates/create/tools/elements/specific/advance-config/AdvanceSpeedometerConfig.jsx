import { Slider } from '@heroui/react';
import PropTypes from 'prop-types';

const AdvanceSpeedometerConfig = ({ element, onChange }) => {
  return (
    <div>
      {element.config.name === 'speedometer' && (
        <>
          <Slider
            min={0}
            max={100}
            marks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            step={10}
            classNames={{ thumb: 'bg-white' }}
            value={element.config.data}
            onChange={(e) => onChange({ ...element, config: { ...element.config, data: e } })}
            label="Progress"
          />
        </>
      )}
      {element.config.name === 'speedometer-simple' && (
        <Slider
          min={0}
          max={100}
          marks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          step={10}
          classNames={{ thumb: 'bg-white' }}
          value={element.config.data}
          onChange={(e) => onChange({ ...element, config: { ...element.config, data: e } })}
          label="Progress"
        />
      )}
    </div>
  );
};

AdvanceSpeedometerConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvanceSpeedometerConfig;
