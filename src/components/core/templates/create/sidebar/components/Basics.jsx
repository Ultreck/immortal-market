import { useState } from 'react';
import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { TbAbc, TbAlpha, TbIcons, TbShape, TbSortAscendingShapes } from 'react-icons/tb';

const Basics = () => {
  const [view, setView] = useState('all');

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Texts" title="Texts" startContent={<TbAbc size="25" />}>
        <Texts />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Shapes" title="Shapes" startContent={<TbSortAscendingShapes size="25" />}>
        <Shapes onView={() => setView('shapes')} />
      </AccordionItem>
      <AccordionItem key="3" aria-label="Frames" title="Frames" startContent={<TbShape size="25" />}>
        <Frames onView={() => setView('frames')} />
      </AccordionItem>
      <AccordionItem key="4" aria-label="Icons" title="Icons" startContent={<TbIcons size="25" />}>
        <Icons onView={() => setView('icons')} />
      </AccordionItem>
    </Accordion>
    // <>
    //   {view === 'all' && (
    //     <div className="space-y-8">
    //       <Texts />
    //       <Shapes mini onView={() => setView('shapes')} />
    //       <Frames mini onView={() => setView('frames')} />
    //       <Icons mini onView={() => setView('icons')} />
    //     </div>
    //   )}
    //   {view === 'shapes' && <Shapes onBack={() => setView('all')} />}
    //   {view === 'frames' && <Frames onBack={() => setView('all')} />}
    //   {view === 'icons' && <Icons onBack={() => setView('all')} />}
    // </>
  );
};

export default Basics;

