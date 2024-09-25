import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';
import StandardCharts from '../data/StandardCharts';
import AdvancedCharts from '../data/AdvanceCharts';
import Maps from '../data/Maps';

const Charts = () => {
  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Standard Charts" title="Standard Charts">
        <StandardCharts />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Advanced Charts" title="Advanced Charts">
        <AdvancedCharts />
      </AccordionItem>
      <AccordionItem key="3" aria-label="Maps" title="Maps">
        <Maps />
      </AccordionItem>
    </Accordion>
  );
};

export default Charts;

