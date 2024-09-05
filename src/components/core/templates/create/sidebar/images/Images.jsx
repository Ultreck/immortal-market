import { useState } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import ExternalImages from '@/components/core/templates/create/sidebar/images/ExternalImages.jsx';
import UploadedImages from '@/components/core/templates/create/sidebar/images/UploadedImages.jsx';

const Images = () => {
  const [tab, setTab] = useState('uploads');

  return (
    <div>
      <Tabs
        variant="bordered"
        aria-label="Options"
        color="primary"
        radius="full"
        classNames={{
          base: 'mb-6',
          tab: 'text-base px-4',
        }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="uploads" title="Uploads" className="text-base" />
        <Tab key="search" title="Search" className="text-base" />
      </Tabs>
      {tab === 'search' && <ExternalImages />}
      {tab === 'uploads' && <UploadedImages />}
    </div>
  );
};

export default Images;
