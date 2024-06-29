/* eslint-disable no-unused-vars */

import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';
import Title from '../shared/Title';
import { Accordion, AccordionItem, Button, Card, Checkbox, Input, Select, SelectItem } from '@nextui-org/react';
import { TbChevronRight } from 'react-icons/tb';
import NotfoundIcon from '@/components/icons/notfound.jsx';
import { IconFileTypeCsv, IconFileTypeDoc, IconFileTypePdf, IconFileTypeXls } from '@tabler/icons-react';

const items = [
  {
    type: '.doc',
    title: 'Q1 2023 progress report',
    createdAt: '01/01/2023',
  },
  {
    type: '.xls',
    title: 'Q1 2023 progress report',
    createdAt: '01/01/2023',
  },
  {
    type: '.pdf',
    title: 'Q1 2023 progress report',
    createdAt: '01/01/2023',
  },
  {
    type: '.csv',
    title: 'Q1 2023 progress report',
    createdAt: '01/01/2023',
  },
];

const items2 = [
    'Disbursement by Month',
    'Paid by Month',
    'Percentage paid to disbursed',
    'Paid per month',
    'Disbursement by Month',
    'Paid by Month',
    'Percentage paid to disbursed',
    'Paid per month',
    'Disbursement by Month',
    'Paid by Month',
    'Percentage paid to disbursed',
    'Paid per month',
  ];

const DashboardModal = () => {
  const isDashboardModalOpen = useGlobalStore((state) => state.data.isDashboardModalOpen);
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <Drawer
      isOpen={isDashboardModalOpen}
      onClose={() => updateData({ isDashboardModalOpen: false })}
      width={700}
      padding={false}
      round={false}
    >
      <div className="py-12 px-12 h-full w-full overflow-auto  bg-[#f4f5f6] dark:bg-[#0b161f]">
        <div className=' flex flex-col'>
            <Title title="Create a dashboard" className="mb-10" />
            <div className="space-y-6">
            <div className="grid grid-cols-1 gap-2">
                <p>Dashboard name</p>
                <Input placeholder="Enter project name" size="lg" variant="bordered" classNames={{ input: 'px-2' }} />
            </div>

            <div className="grid grid-cols-1 gap-2">
                <p>Select Project</p>
                <Select variant="bordered" size="lg" classNames={{ value: 'px-2' }} placeholder="Select one">
                {[
                    { key: 'CSV', name: 'CSV Project' },
                    { key: 'JSON', name: 'JSON Project' },
                    { key: 'PDF', name: 'PDF Project' },
                ].map((type) => (
                    <SelectItem key={type.key} classNames={{ title: 'px-2 text-base' }}>
                    {type.name}
                    </SelectItem>
                ))}
                </Select>
            </div>
            </div>
            <div className="mt-6">
       
      </div>

            <div className="mt-10 space-x-4 flex items-center">
            <Button
                onClick={() => {}}
                color="primary"
                radius="full"
                className="text-base px-6 ml-auto"
                endContent={<TbChevronRight size="20" />}
            >
                Save
            </Button>
            </div>
        </div>


        <div className="py-4 mt-16">
          <h5 className="text-lg font-medium mb-6 px-1">Recent project setup</h5>

          <div className='mt-10'>
            {/* <Accordion variant="bordered" defaultExpandedKeys={['summary']}>
            <AccordionItem
                key="summary"
                aria-label="Summary"
                title="Summary (10/20)"
                className="py-0"
                classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
            >
                <div className="grid grid-cols-2 gap-3">
                {items2.map((item) => (
                    <Checkbox key={item}>{item}</Checkbox>
                ))}
                </div>
            </AccordionItem>
            <AccordionItem
                key="disbursement"
                aria-label="Disbursement"
                title="Disbursement (10/20)"
                classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
            >
                <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                    <Checkbox key={item}>{item}</Checkbox>
                ))}
                </div>
            </AccordionItem>
            <AccordionItem
                key="repayment"
                aria-label="Repayment"
                title="Repayment (10/20)"
                classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
            >
                <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                    <Checkbox key={item}>{item}</Checkbox>
                ))}
                </div>
            </AccordionItem>
            <AccordionItem
                key="disbursement-date"
                aria-label="Disbursement date"
                title="Disbursement date (10/20)"
                classNames={{ heading: 'px-4', title: 'text-base font-medium', content: 'px-4 pb-6' }}
            >
                <div className="grid grid-cols-2 gap-3">
                {items.map((item) => (
                    <Checkbox key={item}>{item}</Checkbox>
                ))}
                </div>
            </AccordionItem>
            </Accordion> */}
          </div>

          <div className="mt-10">
            <div className="grid md:grid-cols-2 gap-6 md:gap-6">
              {items.slice(0, 4).map((item) => (
                <Card key={item.title} className="flex items-center space-x-4 px-8 py-6 overflow-hidden" hover>
                  <div>
                    {item.type === '.doc' && <IconFileTypeDoc className="text-blue-700" size="36" />}
                    {item.type === '.pdf' && <IconFileTypePdf className="text-red-700" size="36" />}
                    {item.type === '.csv' && <IconFileTypeCsv className="text-teal-700" size="36" />}
                    {item.type === '.xls' && <IconFileTypeXls className="text-cyan-700" size="36" />}
                  </div>
                  <p className="text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center mt-20">
            <div className="relative ">
              <NotfoundIcon />
              <div className=" text-xl ml-4">You have no setup projects</div>
            </div>
          </div>
        </div>

      </div>
    </Drawer>
  );
};

export default DashboardModal;

