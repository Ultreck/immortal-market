import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import PropTypes from 'prop-types';
import { ElementPropTypes } from '@/lib/prop-types.js';
import Basic from '@/components/core/templates/create/elements/tables/Basic.jsx';
import BasicStriped from '@/components/core/templates/create/elements/tables/BasicStriped.jsx';
import TrendAnalysis from '@/components/core/templates/create/elements/tables/TrendAnalysis.jsx';
import MarketingReport from '@/components/core/templates/create/elements/tables/MarketingReport.jsx';

const Table = ({ element, active, highlighted, width, onClick, onChange }) => {
  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={onChange}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
    >
      <div className="overflow-hidden relative w-full h-full">
        {element.config?.data && <TableContent element={element} />}
      </div>
    </ElementWrapper>
  );
};

Table.propTypes = ElementPropTypes;

export const TableContent = ({ element }) => {
  return (
    <>
      {element.config.theme === 'basic' && <Basic element={element} />}
      {element.config.theme === 'basic-striped' && <BasicStriped element={element} />}
      {element.config.theme === 'trend-analysis' && <TrendAnalysis element={element} />}
      {element.config.theme === 'marketing-report' && <MarketingReport element={element} />}
    </>
  );
};

TableContent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default Table;
