import { Tabs, Tab } from '@heroui/react';
import { useState } from 'react';
import Pages from './pages/Pages.jsx';
import Layers from './layers/Layers.jsx';

const Layout = () => {
  const [tab, setTab] = useState('pages');

  return (
    <div>
      <Tabs
        aria-label="Options"
        variant="bordered"
        color="primary"
        radius="full"
        classNames={{ tab: 'text-base px-4', base: 'mb-5' }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="pages" title="Pages" className="text-base" />
        <Tab key="layers" title="Layers" className="text-base" />
      </Tabs>
      {tab === 'pages' && <Pages />}
      {tab === 'layers' && <Layers />}
    </div>
  );
};

export default Layout;
