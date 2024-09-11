import { createElement } from 'react';
import PropTypes from 'prop-types';

import { TableElementContent } from '@/components/core/templates/create/elements/Table.jsx';
import { TableElementContent as Table2ElementContent } from '@/components/core/templates/create/elements/Table2.jsx';
import { TableElementContent as Table3ElementContent } from '@/components/core/templates/create/elements/Table3.jsx';
import { TableElementContent as Table4ElementContent } from '@/components/core/templates/create/elements/Table4.jsx';

const TablesPresent = ({ element }) => {
  const components = {
    table: TableElementContent,
    table2: Table2ElementContent,
    table3: Table3ElementContent,
    table4: Table4ElementContent,
  };

  if (components[element.type]) {
    return createElement(components[element.type], { element });
  }
};

TablesPresent.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TablesPresent;

