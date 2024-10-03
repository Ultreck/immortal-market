import { Accordion, AccordionItem } from '@nextui-org/react';
import StandardCharts from './StandardCharts.jsx';
import AdvancedCharts from './AdvanceCharts.jsx';
import Maps from './Maps.jsx';
import { TbChartBar, TbChartPie, TbStar, TbWorld } from 'react-icons/tb';
import { RiArrowRightSLine, RiTable2 } from 'react-icons/ri';
import FavouriteCharts from './FavouriteCharts.jsx';
import Tables from './Tables.jsx';

const Charts = () => {
  return (
    <Accordion
      variant="bordered"
      itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
    >
      <AccordionItem
        key="1"
        aria-label="Favourites"
        title="Favourites"
        startContent={<TbStar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <FavouriteCharts />
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Standard Charts"
        title="Standard Charts"
        startContent={<TbChartPie size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <StandardCharts />
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Advanced Charts"
        title="Advanced Charts"
        startContent={<TbChartBar size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <AdvancedCharts />
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Maps"
        title="Maps"
        startContent={<TbWorld size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Maps />
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
        aria-label="Immortal Charts"
        title="Immortal Charts"
        startContent={<TbWorld size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <div>Immortal Charts</div>
      </AccordionItem>
    </Accordion>
  );
};

export default Charts;

