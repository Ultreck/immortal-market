import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';
import ColorPicker from '@/components/ui/ColorPicker';
import PropTypes from 'prop-types';

export const ImageBorderWeight = ({ element, onChange }) => {
  const value = element.style.borderWidth || 0;

  const handleWidthChange = (v) => {
    if (isNaN(v)) return;
    onChange({ ...element, style: { ...element.style, borderWidth: v } });
  };

  return (
    <AutoCompleteNumberInput
      onChange={(width) => handleWidthChange(width)}
      value={value}
      min={0}
      max={50}
      ariaLabel="fontSize"
    />
  );
};

export const ImageBorderColor = ({ element, onChange }) => {
  const value = element.style.borderColor;

  const handleColorChange = (v) => {
    if (!v) return;
    onChange({ ...element, style: { ...element.style, borderColor: v } });
  };

  return <ColorPicker color={value} onChange={(color) => handleColorChange(color)} />;
};

ImageBorderWeight.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

ImageBorderColor.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
