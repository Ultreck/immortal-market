import AutoCompleteNumberInput from '@/components/ui/AutoCompleteNumberInput';
import ColorPicker from '@/components/ui/ColorPicker';
import useResolveValue from '@/hooks/template/use-resolve-value';
import PropTypes from 'prop-types';

export const StandardFontSize = ({ element, onChange }) => {
  const value = useResolveValue([element.config?.yAxis?.fontSize, element.config?.xAxis?.fontSize]);

  const handleChange = (v) => {
    if (v === '') return;
    const config = element.config;
    if (config.yAxis?.enabled) {
      config.yAxis.fontSize = Number(v);
    }
    if (config.xAxis?.enabled) {
      config.xAxis.fontSize = Number(v);
    }
    onChange({
      ...element,
      config,
    });
  };

  if (!element.config.yAxis?.enabled && !element.config.xAxis?.enabled) return null;

  return (
    <div className="flex items-center justify-between ">
      <AutoCompleteNumberInput
        onChange={handleChange}
        value={value}
        min={1}
        max={150}
        step={1}
        aria-label="Font size"
        radius="full"
      />
    </div>
  );
};

export const StandardColor = ({ element, onChange }) => {
  const value = useResolveValue([element.config?.yAxis?.color, element.config?.xAxis?.color]);
  const handleChange = (v) => {
    if (v === '') return;
    onChange({
      ...element,
      config: {
        ...element.config,
        yAxis: { ...element.config.yAxis, color: v },
        xAxis: { ...element.config.xAxis, color: v },
      },
    });
  };

  if (!element.config.yAxis?.enabled || !element.config.xAxis?.enabled) return null;

  return <ColorPicker size="sm" color={value} onChange={(color) => handleChange(color)} radius="full" />;
};

StandardFontSize.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

StandardColor.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
