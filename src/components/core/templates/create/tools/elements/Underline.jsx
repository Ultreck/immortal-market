import { TbUnderline } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Underline = ({ elements, onChange }) => {
  const values = elements.map((el) => el.style.textDecoration);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : null;

  return (
    <Button
      isIconOnly
      variant={value === 'underline' ? 'solid' : 'text'}
      aria-label="Underline/unbold text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, textDecoration: 'underline' } };
          const style = { ...el.style };
          style.textDecoration = style.textDecoration === 'underline' ? 'none' : 'underline';
          return { ...el, style };
        });
        onChange(_elements);
      }}
    >
      <TbUnderline size="20" />
    </Button>
  );
};

Underline.propTypes = {
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

export default Underline;
