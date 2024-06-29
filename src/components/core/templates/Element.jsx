import 'react-resizable/css/styles.css';
import PropTypes from 'prop-types';
import Heading from '@/components/core/templates/elements/Heading.jsx';
import Chart from '@/components/core/templates/elements/Chart.jsx';
import Text from '@/components/core/templates/elements/Text.jsx';
import Logo from '@/components/core/templates/elements/Logo.jsx';

const Element = ({ element, active, width, onClick, onChange, root }) => {
  return (
    <>
      {element.type === 'heading' && (
        <Heading root={root} element={element} active={active} onClick={onClick} onChange={onChange} width={width} />
      )}
      {element.type === 'text' && (
        <Text root={root} element={element} active={active} onClick={onClick} onChange={onChange} width={width} />
      )}
      {element.type === 'chart' && (
        <Chart root={root} element={element} active={active} onClick={onClick} onChange={onChange} width={width} />
      )}
      {element.type === 'logo' && (
        <Logo root={root} element={element} active={active} onClick={onClick} onChange={onChange} width={width} />
      )}
    </>
  );
};

Element.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }),
  active: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  root: PropTypes.any.isRequired,
};

export default Element;
