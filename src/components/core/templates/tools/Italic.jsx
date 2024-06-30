import { TbItalic } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Italic = ({ element, onChange }) => {
  return (
    <Button
      isIconOnly
      variant={element.style.fontStyle === 'italic' ? 'solid' : 'text'}
      aria-label="Italisize/unitalicize text"
      onClick={() => {
        const style = { ...element.style };
        style.fontStyle = style.fontStyle === 'italic' ? 'normal' : 'italic';
        onChange({ ...element, style });
      }}
    >
      <TbItalic size="20" />
    </Button>
  );
};

Italic.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object,
  }),
  onChange: PropTypes.func.isRequired,
};

export default Italic;
