import { Card } from '@nextui-org/react';
import { HiOutlineViewGrid } from 'react-icons/hi';

const SingleView = () => {
  return (
    <Card className="card-shadow px-12 py-10 rounded-xl gap-10 relative overflow-hidden">
      <div className="text-4xl font-semibold">Create a single view for all your key data.</div>
      <ul style={{ listStyleType: 'circle' }} className="flex flex-col gap-2 ml-4">
        <li>Select from multiple projects</li>
        <li>Build your dashboard from template</li>
        <li>Get notified realtime.</li>
      </ul>
      <div className="absolute -bottom-1/4 -right-[6%] hidden sm:block ">
        <HiOutlineViewGrid size="260" className="text-warning-100" />
      </div>
    </Card>
  );
};

export default SingleView;
