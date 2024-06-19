import { Card, CardBody, Image } from '@nextui-org/react';

const RecentProjects = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <Card className="card-shadow rounded-2xl flex flex-col gap-2">
        <CardBody className="px-5 py-6">
          <Image src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png" className="mb-4" />
          <div className="text-lg font-medium">Business Project</div>
          <div className="flex items-center ">
            <p className="opacity-70">2 days ago</p>
          </div>
        </CardBody>
      </Card>
      <Card className="card-shadow rounded-2xl flex flex-col gap-2">
        <CardBody className="px-5 py-6">
          <Image src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png" className="mb-4" />
          <div className="text-lg font-medium">Business Project</div>
          <div className="flex items-center ">
            <p className="opacity-70">2 days ago</p>
          </div>
        </CardBody>
      </Card>
      <Card className="card-shadow rounded-2xl flex flex-col gap-2">
        <CardBody className="px-5 py-6">
          <Image src="https://www.syskit.com/wp-content/uploads/2023/05/Power-BI-Dashboard.png" className="mb-4" />
          <div className="text-lg font-medium">Business Project</div>
          <div className="flex items-center ">
            <p className="opacity-70">2 days ago</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecentProjects;
