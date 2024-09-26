import { RiApps2Line, RiArrowRightSLine, RiTable2 } from 'react-icons/ri';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Tables from './Tables';
import Widgets from './Widgets';

const Data = () => {
  return (
    <Accordion
      variant="bordered"
      itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
    >
      <AccordionItem
        key="1"
        aria-label="Tables"
        title="Tables"
        startContent={<RiTable2 size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Tables />
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Widgets"
        title="Widgets"
        startContent={<RiApps2Line size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Widgets />
      </AccordionItem>
    </Accordion>
  );
};

export default Data;
