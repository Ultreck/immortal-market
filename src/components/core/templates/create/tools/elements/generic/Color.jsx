import PropTypes from 'prop-types';
import useResolveValue from '@/hooks/template/use-resolve-value.js';
import ColorPicker from '@/components/ui/ColorPicker.jsx';

const Color = ({ elements, onChange }) => {
  const value = useResolveValue(elements.map((e) => e.style.color));

  const handleChange = (v) => {
    if (!v) return;
    onChange(elements.map((e) => ({ ...e, style: { ...e.style, color: v } })));
  };

  return (
    <div className="my-1">
      <ColorPicker
        color={value}
        onChange={handleChange}
        trigger={
          <button
            className="my-2 w-[22px] h-[22px] rounded-full hover:brightness-105 cursor-pointer border-2"
            style={{ background: value }}
          />
        }
      />
    </div>
  );
};

Color.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
};

export default Color;
