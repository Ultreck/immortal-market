import { TbBold } from 'react-icons/tb';
import { Button } from '@nextui-org/react';
import PropTypes from 'prop-types';

const Bold = ({ element, onChange }) => {
  return (
    <Button
      isIconOnly
      variant={element.style.fontWeight === 'bold' ? 'solid' : 'text'}
      aria-label="Bold/unbold text"
      onClick={() => {
        const style = { ...element.style };
        style.fontWeight = style.fontWeight === 'bold' ? 'normal' : 'bold';
        onChange({ ...element, style });
      }}
    >
      <TbBold size="20" />
    </Button>
  );
};

Bold.propTypes = {
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

export default Bold;
