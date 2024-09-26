import { Accordion, AccordionItem } from '@nextui-org/react';
import StandardCharts from './StandardCharts.jsx';
import AdvancedCharts from './AdvanceCharts.jsx';
import Maps from './Maps.jsx';
import { TbChartBar, TbChartPie, TbWorld } from 'react-icons/tb';
import { RiArrowRightSLine } from 'react-icons/ri';

const Charts = () => {
  return (
    <Accordion
      variant="bordered"
      itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
    >
      <AccordionItem
        key="1"
        aria-label="Standard Charts"
        title="Standard Charts"
        startContent={<TbChartPie size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <StandardCharts />
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Advanced Charts"
        title="Advanced Charts"
        startContent={<TbChartBar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <AdvancedCharts />
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Maps"
        title="Maps"
        startContent={<TbWorld size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Maps />
      </AccordionItem>
    </Accordion>
  );
};

export default Charts;
