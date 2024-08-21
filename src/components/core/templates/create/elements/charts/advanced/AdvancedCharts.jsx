import ElementWrapper from '../../../ElementWrapper.jsx';
import AdvancedCustomBar from './AdvancedCustomBar.jsx';
import AdvancedFunnelChart from './AdvancedFunnelChart.jsx';
import AdvancedGenderStats from './AdvancedGenderStats.jsx';
import AdvancedLinearBar from './AdvancedLinearBar.jsx';
import AdvancedLollipop from './AdvancedLollipop.jsx';
import AdvancedStackedBar from './AdvancedStackedBar.jsx';
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
      editable
    >
      {element.type === 'chart-a-10-shapes' && <AdvancedTenShapes element={element} />}
      {element.type === 'chart-a-gender-stats' && <AdvancedGenderStats element={element} />}
      {element.type === 'chart-a-funnel' && <AdvancedFunnelChart element={element} />}
      {element.type === 'chart-a-stackedbar-advanced' && <AdvancedStackedBar element={element} />}
      {element.type === 'chart-a-custom-bar' && <AdvancedCustomBar element={element} />}
      {element.type === 'chart-a-linear-bar' && <AdvancedLinearBar element={element} />}
      {element.type === 'chart-a-lollipop' && <AdvancedLollipop element={element} />}
    </ElementWrapper>
  );
};

AdvancedCharts.propTypes = ElementPropTypes;

export default AdvancedCharts;
