import { createElement } from 'react';
import PropTypes from 'prop-types';

import { TableElementContent } from '@/components/core/templates/create/elements/tables/Table.jsx';
import { TableElementContent as Table2ElementContent } from '@/components/core/templates/create/elements/tables/Table2.jsx';
import { TableElementContent as Table3ElementContent } from '@/components/core/templates/create/elements/tables/Table3.jsx';
import { TableElementContent as Table4ElementContent } from '@/components/core/templates/create/elements/tables/Table4.jsx';
import { TableElementContent as Table5ElementContent } from '@/components/core/templates/create/elements/tables/Table5.jsx';
import { TableElementContent as Table6ElementContent } from '@/components/core/templates/create/elements/tables/Table6.jsx';
import { TableElementContent as Table7ElementContent } from '@/components/core/templates/create/elements/tables/Table7.jsx';
import { TableElementContent as Table8ElementContent } from '@/components/core/templates/create/elements/tables/Table8.jsx';


const TablesPresent = ({ element }) => {
  const components = {
    table: TableElementContent,
    table2: Table2ElementContent,
    table3: Table3ElementContent,
    table4: Table4ElementContent,
    table5: Table5ElementContent,
    table6: Table6ElementContent,
    table7: Table7ElementContent,
    table8: Table8ElementContent,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element });
  }
};

TablesPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TablesPresent;

