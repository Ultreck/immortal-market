import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { HiChartBar, HiClock, HiOutlineUsers, HiUsers } from 'react-icons/hi2';

const OutsourcePage = () => {
  return (
    <>
      <DashboardTitle
        text="Outsource"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Outsource', href: '/outsource' },
        ]}
      />
      <div className="container py-10">
        <div className="flex flex-col space-y-12">
          <Card className="card-shadow px-12 py-10 rounded-xl gap-10 relative overflow-hidden">
            <div className="text-4xl font-semibold">
              Engage us to gather <br />
              your business data
            </div>
            <ul className="flex flex-col gap-2 ml-4 list-disc">
              <li>Select from multiple projects</li>
              <li>Build your dashboard from template</li>
              <li>Get notified realtime.</li>
            </ul>
            <div className="absolute -bottom-1/4 -right-0 hidden sm:block ">
              <HiUsers size="260" className="text-warning-100" />
            </div>
          </Card>
          <div className="grid grid-cols-2 gap-10">
            <Card className="rounded-2xl card-shadow bg-gradient-to-tr from-[#FFB457] to-[#FF705B] overflow-hidden text-white">
              <Image
                removeWrapper
                alt="Card background"
                className="h-[200px] object-cover rounded-none"
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <CardBody className="flex flex-col items-start p-10">
                <h4 className="text-white font-medium text-2xl">Get field force</h4>
                <p className="mt-2 text-white">Get the right field force to help you with your business needs</p>
                <Button className="mt-8 px-6 text-base" size="lg" radius="full" isDisabled>
                  <HiClock size="20" /> <span>Coming soon</span>
                </Button>
              </CardBody>
              <HiOutlineUsers size="260" className="text-white/20 absolute -bottom-[70px] -right-[50px] -rotate-12" />
            </Card>
            <Card className="rounded-2xl card-shadow bg-gradient-to-tr from-[#9c3cf7] to-[#1e1ae8] overflow-hidden">
              <Image
                removeWrapper
                alt="Card background"
                className="h-[200px] object-cover rounded-none"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <CardBody className="flex flex-col items-start p-10">
                <h4 className="text-white font-medium text-2xl">Find analysts</h4>
                <p className="mt-2 text-white">
                  Looking for a new business partner? Finding the right analysts to help you with your business
                </p>
                <Button className="mt-8 px-6 text-base" size="lg" radius="full" isDisabled>
                  <HiClock size="20" /> <span>Coming soon</span>
                </Button>
              </CardBody>
              <HiChartBar size="260" className="text-white/20 absolute -bottom-[70px] -right-[50px] -rotate-12" />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutsourcePage;
