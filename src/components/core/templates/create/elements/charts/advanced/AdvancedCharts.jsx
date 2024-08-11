import ElementWrapper from '../../../ElementWrapper.jsx';
import AdvancedGenderStats from './AdvancedGenderStats.jsx';
import AdvancedTenShapes from './AdvancedTenShapes.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const AdvancedCharts = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      {element.type === 'chart-10-shapes' && <AdvancedTenShapes element={element} />}
      {element.type === 'chart-gender-stats' && <AdvancedGenderStats element={element} />}
    </ElementWrapper>
  );
};

AdvancedCharts.propTypes = ElementPropTypes;

export default AdvancedCharts;