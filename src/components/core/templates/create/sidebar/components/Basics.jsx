import Texts from '@/components/core/templates/create/sidebar/components/design/Texts.jsx';
import Shapes from '@/components/core/templates/create/sidebar/components/design/Shapes.jsx';
import Frames from '@/components/core/templates/create/sidebar/components/design/Frames.jsx';
import Icons from '@/components/core/templates/create/sidebar/components/design/Icons.jsx';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { TbAbc, TbIcons, TbShape, TbSortAscendingShapes } from 'react-icons/tb';
import { RiArrowRightSLine } from 'react-icons/ri';

const Basics = () => {
  return (
    <Accordion
      variant="bordered"
      itemClasses={{ base: 'px-3', content: 'pt-4 pb-5', title: 'whitespace-nowrap text-base' }}
    >
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
        <Shapes />
      </AccordionItem>
      <AccordionItem
        key="frames"
        aria-label="Frames"
        title="Frames"
        startContent={<TbShape size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Frames />
      </AccordionItem>
      <AccordionItem
        key="icons"
        aria-label="Icons"
        title="Icons"
        startContent={<TbIcons size="20" />}
        indicator={<RiArrowRightSLine size="20" />}
      >
        <Icons />
      </AccordionItem>
    </Accordion>
  );
};

export default Basics;
