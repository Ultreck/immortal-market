import ElementWrapper from '../../../ElementWrapper.jsx';
import AdvancedCustomBar from './AdvancedCustomBar.jsx';
import AdvancedFunnelChart from './AdvancedFunnelChart.jsx';
import AdvancedGenderStats from './AdvancedGenderStats.jsx';
import AdvancedLinearBar from './AdvancedLinearBar.jsx';
import AdvancedLollipop from './AdvancedLollipop.jsx';
import AdvancedPyramidChart from './AdvancedPyramidChart.jsx';
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
      {element.type === 'chart-10-shapes' && <AdvancedTenShapes element={element} />}
      {element.type === 'chart-gender-stats' && <AdvancedGenderStats element={element} />}
      {element.type === 'chart-funnel' && <AdvancedFunnelChart element={element} />}
      {element.type === 'chart-stackedbar-advanced' && <AdvancedStackedBar element={element} />}
      {element.type === 'chart-custom-bar' && <AdvancedCustomBar element={element} />}
      {element.type === 'chart-linear-bar' && <AdvancedLinearBar element={element} />}
      {element.type === 'chart-lollipop' && <AdvancedLollipop element={element} />}
    </ElementWrapper>
  );
};

AdvancedCharts.propTypes = ElementPropTypes;

export default AdvancedCharts;
