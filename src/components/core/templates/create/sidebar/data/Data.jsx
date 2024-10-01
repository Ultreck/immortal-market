import { RiApps2Line, RiArrowRightSLine, RiTable2 } from 'react-icons/ri';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Tables from './Tables';
import DataTags from './DataTags.jsx';
import { TbStar } from 'react-icons/tb';
import DataBlocks from '@/components/core/templates/create/sidebar/data/DataBlocks.jsx';

const Data = () => {
  return (
    <Accordion
      variant="bordered"
      itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
    >
      <AccordionItem
        key="1"
        aria-label="Connect"
        title="Connect"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>Connect</div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="My stacks"
        title="My stacks"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>My stacks</div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Shared Data"
        title="Shared Data"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>Shared Data</div>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Tables"
        title="Tables"
        startContent={<RiTable2 size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Tables />
      </AccordionItem>
      <AccordionItem
        key="data-tags"
        aria-label="Data tags"
        title="Data tags"
        startContent={<RiApps2Line size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <DataTags />
      </AccordionItem>
      <AccordionItem
        key="data-blocks"
        aria-label="Data tag blocks"
        title="Data tag blocks"
        startContent={<RiApps2Line size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <DataBlocks />
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Tags"
        title="Tags"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>Tags</div>
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Templates"
        title="Templates"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>Templates</div>
      </AccordionItem>
    </Accordion>
  );
};

export default Data;
