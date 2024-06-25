import Separator from '@/components/core/shared/Separator.jsx';
import DashboardStatGrid from '@/components/core/overview/DashboardStatGrid';
import OverViewTable from '@/components/core/overview/OverviewTable';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import { Avatar, AvatarGroup, Tooltip } from '@nextui-org/react';
import { TbPlus } from 'react-icons/tb';
import CreateDropdown from '@/components/core/project/CreateDropdown.jsx';
import { useAuth } from '@/hooks/use-auth.jsx';

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
            <div className="relative flex gap-1 items-center">
              <AvatarGroup>
                {users?.map((tr) => (
                  <Tooltip key={tr.name} showArrow={true} placement="bottom" content={tr?.name}>
                    <Avatar size="md" src={tr?.image} name={tr?.name} className=" cursor-pointer" />
                  </Tooltip>
                ))}
              </AvatarGroup>
              <Avatar size="md" className="cursor-pointer" icon={<TbPlus strokeWidth={3} size={20} color="gray" />} />
            </div>
            <CreateDropdown />
          </div>
        }
      />
      <div className="container py-10 space-y-12">
        <DashboardStatGrid />
        <Separator separatorText={'DISCUSSIONS'} />
        <OverViewTable />
      </div>
    </>
  );
};

export default OverviewPage;
