import PropTypes from 'prop-types';
import ColorPicker from '@/components/ui/ColorPicker.jsx';

const PageBackground = ({ page, onChange }) => {
  return (
    <ColorPicker
      color={page.background.value}
      onChange={(color) => onChange({ background: { ...page.background, value: color } })}
      size="sm"
      trigger={
        <button
          className="my-2 w-[20px] h-[20px] rounded-full hover:brightness-105 cursor-pointer border-2"
          style={{ background: page.background.value }}
        />
      }
    />
  );
};

PageBackground.propTypes = {
  page: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PageBackground;
