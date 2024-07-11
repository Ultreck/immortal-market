import { TbBold } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Bold = ({ elements, onChange }) => {
  const values = elements.map((el) => el.style.fontWeight);
  const same = values.every((v) => v === values[0]);
  const value = same ? values[0] : null;

  return (
    <Button
      isIconOnly
      variant={value === 'bold' ? 'solid' : 'text'}
      aria-label="Bold/unbold text"
      onClick={() => {
        const _elements = elements.map((el) => {
          if (!value) return { ...el, style: { ...el.style, fontWeight: 'bold' } };
          const style = { ...el.style };
          style.fontWeight = style.fontWeight === 'bold' ? 'normal' : 'bold';
          return { ...el, style };
        });
        onChange(_elements);
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};

Bold.propTypes = {
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

export default Bold;
