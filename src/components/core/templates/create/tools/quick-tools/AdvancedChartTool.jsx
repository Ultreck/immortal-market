import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';
import ColorPicker from '@/components/ui/ColorPicker';
import PropTypes from 'prop-types';

export const AdvancedChartLabelColor = ({ element, onChange }) => {
  const value = element.config?.labelFontColor;

  const handleChange = (v) => {
    if (v === '') return;
    onChange({
      ...element,
      config: {
        ...element.config,
        labelFontColor: v,
      },
    });
  };

  return (
    <ColorPicker
      size="sm"
      color={value}
      onChange={(color) => handleChange(color)}
      className="!w-[26px] !h-[26px] min-w-[initial] min-h-[initial]"
    />
  );
};

export const AdvancedChartLabelFontSize = ({ element, onChange }) => {
  const handleChange = (v) => {
    if (v === '') return;
    onChange({ ...element, config: { ...element.config, labelFontSize: +v } });
  };

  return (
    <div className="flex items-center justify-between ">
      <AutoCompleteNumberInput
        onChange={handleChange}
        value={element.config.labelFontSize}
        min={1}
        max={1000}
        ariaLabel="fontSize"
        size="sm"
        radius="full"
      />
    </div>
  );
};

AdvancedChartLabelColor.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

AdvancedChartLabelFontSize.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
