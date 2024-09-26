import { useState } from 'react';
import { Accordion, AccordionItem, Tab, Tabs } from '@nextui-org/react';
import ExternalImages from '@/components/core/templates/create/sidebar/images/ExternalImages.jsx';
import UploadedImages from '@/components/core/templates/create/sidebar/images/UploadedImages.jsx';
import Infographics from '../graphics/Infographics';
import { RiImage2Line } from 'react-icons/ri';
import { TbBrush } from 'react-icons/tb';

const Images = () => {
  const [tab, setTab] = useState('uploads');

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Images" title="Images" startContent={<RiImage2Line size="25" />}>
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
      </AccordionItem>
      <AccordionItem key="2" aria-label="Specials" title="Specials" startContent={<TbBrush size="25" />}>
      <Infographics />
      </AccordionItem>
    </Accordion>
  );
};

export default Images;

