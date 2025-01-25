import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';
import { Accordion, AccordionItem } from '@heroui/react';
import {
  TbAbc,
  TbChartBar,
  TbChartPie,
  TbClock,
  TbIcons,
  TbShape,
  TbSortAscendingShapes,
  TbWorld,
} from 'react-icons/tb';
import { RiApps2Line, RiArrowRightSLine, RiTable2 } from 'react-icons/ri';
import { useState } from 'react';
import Recent from './design/Recent.jsx';
import StandardCharts from '@/components/core/templates/create/sidebar/data/StandardCharts.jsx';
import AdvancedCharts from '@/components/core/templates/create/sidebar/data/AdvanceCharts.jsx';
import Maps from '@/components/core/templates/create/sidebar/data/Maps.jsx';
import Tables from '@/components/core/templates/create/sidebar/data/Tables.jsx';
import DataTags from '@/components/core/templates/create/sidebar/data/DataTags.jsx';
import DataBlocks from '@/components/core/templates/create/sidebar/data/DataBlocks.jsx';

const Elements = () => {
  const [view, setView] = useState('all');

  return (
    <>
      {view === 'all' && (
        <Accordion
          variant="bordered"
          itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
        >
          <AccordionItem
            key="1"
            aria-label="Recent"
            title="Recent"
            startContent={<TbClock size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <Recent />
          </AccordionItem>
          <AccordionItem
            key="texts"
            aria-label="Texts"
            title="Texts"
            startContent={<TbAbc size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <Texts />
          </AccordionItem>
          <AccordionItem
            key="shapes"
            aria-label="Shapes"
            title="Shapes"
            startContent={<TbSortAscendingShapes size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <Shapes mini onView={() => setView('shapes')} />
          </AccordionItem>
          <AccordionItem
            key="frames"
            aria-label="Frames"
            title="Frames"
            startContent={<TbShape size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <Frames mini onView={() => setView('frames')} />
          </AccordionItem>
          <AccordionItem
            key="icons"
            aria-label="Icons"
            title="Icons"
            startContent={<TbIcons size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <Icons mini onView={() => setView('icons')} />
          </AccordionItem>
          <AccordionItem
            key="data-tags"
            aria-label="Data tags"
            title="Data tags"
            startContent={<RiApps2Line size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <DataTags mini onView={() => setView('data-tags')} />
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
            key="standard-charts"
            aria-label="Standard Charts"
            title="Standard Charts"
            startContent={<TbChartPie size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <StandardCharts />
          </AccordionItem>
          <AccordionItem
            key="advanced-charts"
            aria-label="Advanced Charts"
            title="Advanced Charts"
            startContent={<TbChartBar size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <AdvancedCharts />
          </AccordionItem>
          <AccordionItem
            key="maps"
            aria-label="Maps"
            title="Maps"
            startContent={<TbWorld size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <Maps mini onView={() => setView('maps')} />
          </AccordionItem>
          <AccordionItem
            key="tables"
            aria-label="Tables"
            title="Tables"
            startContent={<RiTable2 size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <Tables />
          </AccordionItem>
          <AccordionItem
            key="immortal-charts"
            aria-label="Immortal Charts"
            title="Immortal Charts"
            startContent={<TbWorld size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <div>Immortal Charts</div>
          </AccordionItem>
        </Accordion>
      )}

      {view === 'shapes' && <Shapes onBack={() => setView('all')} />}
      {view === 'frames' && <Frames onBack={() => setView('all')} />}
      {view === 'icons' && <Icons onBack={() => setView('all')} />}
      {view === 'maps' && <Maps onBack={() => setView('home')} />}
      {view === 'data-tags' && <DataTags onBack={() => setView('home')} />}
    </>
  );
};

export default Elements;
