import { Button, Card } from '@nextui-org/react';
import { HiUsers } from 'react-icons/hi2';

const EngageView = () => {
  return (
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
      <Button className="mr-auto" color="primary" size="lg" radius="full">
        Start Now
      </Button>
      <div className="absolute -bottom-1/4 -right-0 hidden sm:block ">
        <HiUsers size="260" className="text-warning-100" />
      </div>
    </Card>
  );
};

export default EngageView;
