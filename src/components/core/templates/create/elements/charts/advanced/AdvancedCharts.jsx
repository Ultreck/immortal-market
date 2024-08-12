import ElementWrapper from '../../../ElementWrapper.jsx';
import AdvancedGenderStats from './AdvancedGenderStats.jsx';
import AdvancedPyramidChart from './AdvancedPyramidChart.jsx';
import AdvancedStackedBar from './AdvancedStackedBar.jsx';
import AdvancedTenShapes from './AdvancedTenShapes.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';

const AdvancedCharts = ({ element, active, highlighted, width, onClick, onChange }) => {
  console.log({element, active, highlighted, width, onClick, onChange});
  
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
      {element.type === 'chart-pyramid' && <AdvancedPyramidChart element={element} />}
      {element.type === 'chart-funnel' && <AdvancedPyramidChart element={element} />}
      {element.type === 'chart-stackedbar-advanced' && <AdvancedStackedBar element={element} />}
    </ElementWrapper>
  );
};

AdvancedCharts.propTypes = ElementPropTypes;

export default AdvancedCharts;