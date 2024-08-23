import ElementWrapper from '../../../ElementWrapper.jsx';
import AdvancedCustomBar from './AdvancedCustomBar.jsx';
import AdvancedFunnelChart from './AdvancedFunnelChart.jsx';
import AdvancedGenderStats from './AdvancedGenderStats.jsx';
import AdvancedLinearBar from './AdvancedLinearBar.jsx';
import AdvancedLollipop from './AdvancedLollipop.jsx';
import StandardStackedBar from '../standard/AdvancedStackedBar.jsx';
import AdvancedTenShapes from './AdvancedTenShapes.jsx';
import { ElementPropTypes } from '@/lib/prop-types.js';
import AdvanceNestedCircles from './AdvanceNestedCircles.jsx';
import AdvanceCircleIcons from './AdvanceCircleIcons.jsx';
import { useEffect, useRef } from 'react';
import AdvanceDynamicSortingChart from './AdvanceDynamicSortingChart.jsx';
import AdvancedTreeMap from './AdvancedTreeMap.jsx';

const AdvancedCharts = ({ element, active, highlighted, width, onClick, onChange }) => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current && element.height !== el.current.scrollHeight) {
      onChange({ ...element, height: el.current.scrollHeight });
    }
  }, [element, onChange]);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={(values) => {
        return onChange({ ...element, ...values, height: el.current.scrollHeight });
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
    >
      <div ref={el} className="w-full h-max">
        {element.type === 'chart-a-10-shapes' && <AdvancedTenShapes element={element} />}
        {element.type === 'chart-a-gender-stats' && <AdvancedGenderStats element={element} />}
        {element.type === 'chart-a-funnel' && <AdvancedFunnelChart element={element} />}
        {element.type === 'chart-a-stackedbar-advanced' && <StandardStackedBar element={element} />}
        {element.type === 'chart-a-custom-bar' && <AdvancedCustomBar element={element} />}
        {element.type === 'chart-a-linear-bar' && <AdvancedLinearBar element={element} />}
        {element.type === 'chart-a-lollipop' && <AdvancedLollipop element={element} />}
        {element.type === 'chart-a-nested-circles' && <AdvanceNestedCircles element={element} />}
        {element.type === 'chart-a-circle-icons' && <AdvanceCircleIcons element={element} />}
        {element.type === 'chart-a-dynamic-sorting' && <AdvanceDynamicSortingChart element={element} />}
        {element.type === 'chart-a-tree-map' && <AdvancedTreeMap element={element} />}
      </div>
    </ElementWrapper>
  );
};

AdvancedCharts.propTypes = ElementPropTypes;

export default AdvancedCharts;
