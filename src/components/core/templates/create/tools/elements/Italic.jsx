import { TbItalic } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Italic = ({ elements, onChange }) => {
  const values = elements.map((el) => el.style.fontStyle);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : null;

  return (
    <Button
      isIconOnly
      variant={value === 'italic' ? 'solid' : 'text'}
      aria-label="Italisize/unitalicize text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontStyle: 'italic' } };
          const style = { ...el.style };
          style.fontStyle = style.fontStyle === 'italic' ? 'normal' : 'italic';
          return { ...el, style };
        });
        onChange(_elements);
      }}
    >
      <TbItalic size="20" />
    </Button>
  );
};

Italic.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      style: PropTypes.object,
    })
  ),
  onChange: PropTypes.func.isRequired,
};

export default Italic;
