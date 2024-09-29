import { RiApps2Line, RiArrowRightSLine, RiTable2 } from 'react-icons/ri';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Tables from './Tables';
import Widgets from './Widgets';
import { TbStar } from 'react-icons/tb';

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
        key="5"
        aria-label="Widgets"
        title="Widgets"
        startContent={<RiApps2Line size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Widgets />
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

