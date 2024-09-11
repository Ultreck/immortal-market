import { ElementPropTypes } from '@/lib/prop-types.js';
import Table from '@/components/core/templates/create/elements/tables/Table.jsx';
import Table2 from '@/components/core/templates/create/elements/tables/Table2.jsx';
import Table3 from '@/components/core/templates/create/elements/tables/Table3.jsx';
import Table4 from '@/components/core/templates/create/elements/tables/Table4.jsx';
import Table5 from '@/components/core/templates/create/elements/tables/Table5.jsx';
import Table6 from '@/components/core/templates/create/elements/tables/Table6.jsx';
import Table7 from '@/components/core/templates/create/elements/tables/Table7.jsx';
import Table8 from '@/components/core/templates/create/elements/tables/Table8.jsx';


import { createElement } from 'react';


const Tables = ({ element, active, highlighted, width, onClick, onChange }) => {
  const components = {
    'table': Table,
    'table2': Table2,
    'table3': Table3,
    'table4': Table4,
    'table5': Table5, 
    'table6': Table6,
    'table7': Table7,
    'table8': Table8,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element, active, highlighted, width, onClick, onChange });
  }
};

Tables.propTypes = ElementPropTypes;

export default Tables;
