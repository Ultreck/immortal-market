import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { TbAbc, TbIcons, TbShape, TbSortAscendingShapes, TbStar } from 'react-icons/tb';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useState } from 'react';
import FavouriteDesigns from './design/FavouriteDesigns';

const Basics = () => {
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
            aria-label="Favourites"
            title="Favourites"
            startContent={<TbStar size="20" />}
            indicator={<RiArrowRightSLine size="20" />}
          >
            <FavouriteDesigns />
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
        </Accordion>
      )}

      {view === 'shapes' && <Shapes onBack={() => setView('all')} />}
      {view === 'frames' && <Frames onBack={() => setView('all')} />}
      {view === 'icons' && <Icons onBack={() => setView('all')} />}
    </>
  );
};

export default Basics;

