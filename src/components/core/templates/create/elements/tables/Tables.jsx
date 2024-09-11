import { ElementPropTypes } from '@/lib/prop-types.js';
import Table from '@/components/core/templates/create/elements/Table.jsx';
import Table2 from '@/components/core/templates/create/elements/Table2.jsx';
import Table3 from '@/components/core/templates/create/elements/Table3.jsx';
import Table4 from '@/components/core/templates/create/elements/Table4.jsx';


import { createElement } from 'react';


const Tables = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    'table': Table,
    'table2': Table2,
    'table3': Table3,
    'table4': Table4,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element, active, highlighted, width, onClick, onChange });
  }
};

Tables.propTypes = ElementPropTypes;

export default Tables;
