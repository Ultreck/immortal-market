import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';
import StandardCharts from '../data/StandardCharts';
import AdvancedCharts from '../data/AdvanceCharts';
import Maps from '../data/Maps';
import { TbChartBar, TbChartPie, TbMap, TbWorld } from 'react-icons/tb';

const Charts = () => {
  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Standard Charts" title="Standard Charts" startContent={<TbChartPie size="25" />}>
        <StandardCharts />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Advanced Charts" title="Advanced Charts" startContent={<TbChartBar size="25" />}>
        <AdvancedCharts />
      </AccordionItem>
      <AccordionItem key="3" aria-label="Maps" title="Maps" startContent={<TbWorld size="25" />}>
        <Maps />
      </AccordionItem>
    </Accordion>
  );
};

export default Charts;

