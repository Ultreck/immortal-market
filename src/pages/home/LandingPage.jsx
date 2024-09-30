import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  ScrollShadow,
  Skeleton,
} from '@nextui-org/react';
import { useCreateDesign, useGetDesigns } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { Link, useNavigate } from 'react-router-dom';
import NoData from '@/components/ui/NoData.jsx';
import { RiAddLine, RiLayout2Line, RiLayoutRowLine } from 'react-icons/ri';
import { getImageLink } from '@/lib/utils.js';
import { TbShape } from 'react-icons/tb';
import { RiImage2Line } from 'react-icons/ri';
import { TbChartBar, TbTemplate } from 'react-icons/tb';
import { CiGlobe } from 'react-icons/ci';
import { useState } from 'react';
import CardComponent from './CardComponent';
import { FaPlusSquare } from "react-icons/fa";
import img1 from '../../assets/video_autocut.ffdd64f3.png';
import img2 from '../../assets/capcut2.png';
import img3 from '../../assets/capcut3.png';
import img4 from '../../assets/capcut4.png';
import { ElementPropTypes } from '@/lib/prop-types';
import TemplateCardComponent from './TemplateCardComponent';

const LandingPage = () => {
  const [tabs, settabs] = useState(0);
  return (
    <div className="container">
      <DashboardTitle
        text="Dashboard"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Dashboard', href: '/home' },
        ]}
        after={
          <>
            <Dropdown classNames={{ content: 'shadow border border-default-200 w-[320px]' }} placement="bottom-end">
              <DropdownTrigger>
                <Button
                  color="primary"
                  radius="full"
                  className="text-base"
                  startContent={<RiAddLine size="20" />}
                  //   isLoading={isCreateTemplateLoading}
                >
                  Create
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
                // onAction={async (key) => {
                //   if (key === 'project') await handleCreateDesign('project');
                //   if (key === 'template') await handleCreateDesign('template');
                // }}
              >
                <DropdownSection classNames={{ base: 'p-1', heading: 'px-2' }}>
                  <DropdownItem
                    key="project"
                    description="Design a report, infographic, etc"
                    classNames={{
                      title: 'text-base',
                      description: 'text-sm',
                      wrapper: 'px-2 py-1',
                      base: 'rounded-xl',
                    }}
                    startContent={<RiLayoutRowLine size="20" className="ml-1" />}
                  >
                    Project
                  </DropdownItem>
                  <DropdownItem
                    key="template"
                    description="Publish a template to all users"
                    classNames={{
                      title: 'text-base',
                      description: 'text-sm',
                      wrapper: 'px-2 py-1',
                      base: 'rounded-xl',
                    }}
                    startContent={<RiLayout2Line size="20" className="ml-1" />}
                  >
                    Template
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
          </>
        }
      />
      <div className="text">
        <section className="text">
          <div className="text-center rounded-xl bg-custom-gradient bg-cover  container py-16 space-y-10">
            <h1 className="text-[36px] font-extrabold ">What can we help you create today?</h1>
            <p className="text-[16px] text-[#00000099] leading-none">
              Start by creating a new design or exploring banking templates.
            </p>
          </div>
          <div className="text flex justify-center">
            <ul className="text flex w-auto px-8 rounded-full -mt-10 mx-auto justify-center gap-5 bg-white">
              {[
                { text: 'Charts', icon: <TbChartBar className=" w-full" /> },
                { text: 'Maps', icon: <CiGlobe className=" w-full" /> },
                { text: 'Frames', icon: <TbShape className=" w-full" /> },
                { text: 'Images', icon: <RiImage2Line className=" w-full" /> },
                { text: 'Templates', icon: <TbTemplate className=" w-full" /> },
              ].map((tab, index) => (
                <li
                  key={index}
                  onClick={() => settabs(index)}
                  className={`text px-3 py-5 border-[#2CBCEF] ${index === tabs ? 'border-b-4 font-semibold transition-all ease-in-out duration-500' : ''}`}
                >
                  <Link to={``}>
                    <div className="">
                      {tab.icon}
                      <span>{tab.text}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="text my-16">
          <h1 className="text font-semibold text-[20px]">You may want to try</h1>
          <div className="overflow-x-auto">
            {/* <div className="flex overflow-x-auto space-x-6 w-150%"> */}
            <ScrollShadow hideScrollBar orientation="horizontal" className="w-full h-full flex gap-5 px-6 ">
              {[
                { title: 'New Design', icon: <FaPlusSquare className='text-2xl' />, imageUrl: '' },
                { title: 'Maps to Template', icon: '', imageUrl: img1 },
                { title: 'Charts to Template', icon: '', imageUrl: img2 },
                { title: 'Framed Image Creation', icon: '', imageUrl: img3 },
                { title: 'Table Creation', icon: '', imageUrl: img4 },
              ].map((card) => (
                <CardComponent key={card.title} data={card} />
              ))}
            </ScrollShadow>
            {/* </div> */}
          </div>
        </section>
        <section className="text">
          <div className="text grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 overflow-hidden">
            {Array.from({ length: 15 }).map((_, index) => (
              <TemplateCardComponent key={index} data={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
LandingPage.propTypes = ElementPropTypes;
export default LandingPage;
