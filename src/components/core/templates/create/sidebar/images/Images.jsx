import { useState } from 'react';
import { Accordion, AccordionItem, Tab, Tabs } from '@heroui/react';
import ExternalImages from '@/components/core/templates/create/sidebar/images/ExternalImages.jsx';
import UploadedImages from '@/components/core/templates/create/sidebar/images/UploadedImages.jsx';
import Svgs from './Svgs.jsx';
import { RiArrowRightSLine, RiImage2Line } from 'react-icons/ri';
import { TbBrush, TbStar } from 'react-icons/tb';

const Images = () => {
  const [tab, setTab] = useState('uploads');

  return (
    <Accordion
      variant="bordered"
      itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
    >
      <AccordionItem
        key="3"
        aria-label="Favourites"
        title="Favourites"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente delectus quas in exercitationem fugit
        voluptate libero, assumenda sed, laudantium autem enim molestias repudiandae pariatur architecto consequatur
        dicta, ratione tempore alias!
      </AccordionItem>
      <AccordionItem
        key="1"
        aria-label="Images"
        title="Images"
        startContent={<RiImage2Line size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
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
      <AccordionItem
        key="2"
        aria-label="Specials"
        title="Specials"
        startContent={<TbBrush size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Svgs />
      </AccordionItem>
    </Accordion>
  );
};

export default Images;
