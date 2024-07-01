import { TbUnderline } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Underline = ({ element, onChange }) => {
  return (
    <Button
      isIconOnly
      variant={element.style.textDecoration === 'underline' ? 'solid' : 'text'}
      aria-label="Underline/unbold text"
      onClick={() => {
        const style = { ...element.style };
        style.textDecoration = style.textDecoration === 'underline' ? 'normal' : 'underline';
        onChange({ ...element, style });
      }}
    >
      <TbUnderline size="20" />
    </Button>
  );
};

Underline.propTypes = {
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

export default Underline;
