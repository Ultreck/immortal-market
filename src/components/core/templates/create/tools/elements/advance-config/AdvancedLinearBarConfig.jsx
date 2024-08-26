import { Slider } from '@nextui-org/react';
import PropTypes from 'prop-types';

const AdvancedLinearBarConfig = ({ element, onChange }) => {
  return (
    <div>
      <Slider
        defaultValue={element.config.progress}
        min={0}
        max={100}
        className="max-w-md"
        step={1}
        value={element.config.progress}
        label="Progress"
        onChange={(v) => onChange({ ...element, config: { ...element.config, progress: v } })}
      />
    </div>
  );
};

AdvancedLinearBarConfig.propTypes = {
  element: PropTypes.shape({
    config: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AdvancedLinearBarConfig;
