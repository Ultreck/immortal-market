import DashboardStatGrid from '@/components/core/overview/DashboardStatGrid';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Avatar, AvatarGroup, Button, Tooltip } from '@nextui-org/react';
import { TbMessage } from 'react-icons/tb';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { useAuth } from '@/hooks/use-auth.jsx';
import useGlobalStore from '@/store/global.js';
import ProjectTable from '@/components/core/project/ProjectTable.jsx';
import Separator from '@/components/core/shared/Separator.jsx';

const users = [
  {
    name: 'Adamas',
    image: 'https://huma.demo.frontendmatter.com/assets/images/256_michael-dam-258165-unsplash.jpg',
  },
  {
    name: 'Timothy',
    image: 'https://huma.demo.frontendmatter.com/assets/images/256_luke-porter-261779-unsplash.jpg',
  },
];

const OverviewPage = () => {
  const { user } = useAuth();
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <>
      <DashboardTitle
        text={`Welcome ${user?.firstName} 👋🏽`}
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Overview', href: '/' },
        ]}
        after={
          <div className="flex items-center space-x-6">
            <Button onClick={() => updateData({ isChatModalOpen: true })} isIconOnly radius="full" variant="light">
              <TbMessage size="20" />
            </Button>
            <div className="relative flex gap-1 items-center">
              <AvatarGroup>
                {users?.map((tr) => (
                  <Tooltip key={tr.name} showArrow={true} placement="bottom" content={tr?.name}>
                    <Avatar size="sm" src={tr?.image} name={tr?.name} className=" cursor-pointer" />
                  </Tooltip>
                ))}
              </AvatarGroup>
            </div>
            <CreateDropdown />
          </div>
        }
      />
      <div className="container py-10 space-y-10">
        <DashboardStatGrid />
        <Separator text="Projects" />
        <ProjectTable />
      </div>
    </>
  );
};

export default OverviewPage;
