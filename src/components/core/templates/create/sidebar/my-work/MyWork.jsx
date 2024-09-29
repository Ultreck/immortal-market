import { Accordion, AccordionItem } from '@nextui-org/react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TbDatabase, TbFolders, TbTemplate } from 'react-icons/tb';

const MyWork = () => {
  return (
    <Accordion variant="bordered" className="w-full">
      <AccordionItem title="Projects" indicator={<RiArrowRightSLine size="20" />} startContent={<TbFolders size="20" />}>
        <div className="p-4">Projects</div>
      </AccordionItem>
      <AccordionItem title="Databases" indicator={<RiArrowRightSLine size="20" />} startContent={<TbDatabase size="20" />}>
        <div className="p-4">Databases</div>
      </AccordionItem>
      <AccordionItem title="Templates" indicator={<RiArrowRightSLine size="20" />} startContent={<TbTemplate size="20" />}>
        <div className="p-4">Templates</div>
      </AccordionItem>
    </Accordion>
  );
};

export default MyWork;

