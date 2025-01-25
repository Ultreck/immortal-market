import ReportBody from '../components/core/report/components/ReportBody';
import DashboardTitle from '@/components/core/shared/DashboardTitle.jsx';
import {
  Avatar,
  AvatarGroup,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@heroui/react';
import { TbChevronDown, TbLayout2, TbRefresh, TbUpload } from 'react-icons/tb';

const ReportPage = () => {
  return (
    <>
      <DashboardTitle
        text="Projects"
        breadcrumbs={[
          { text: 'Home', href: '/' },
          { text: 'Projects', href: '/projects' },
          { text: 'Details', href: '/reports' },
        ]}
        after={
          <div className="flex items-center space-x-6">
            <Button variant="light" className="text-base">
              Transform
            </Button>
            <Dropdown placement="bottom" size="lg" showArrow>
              <DropdownTrigger>
                <Button variant="light" className="text-base">
                  More <TbChevronDown size="18" className="ml-1" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownSection>
                  {[
                    {
                      key: 'update',
                      label: 'Update report',
                      icon: <TbRefresh size="16" />,
                    },
                    {
                      key: 'manage',
                      label: 'Manage data',
                      icon: <TbUpload size="16" />,
                    },
                    {
                      key: 'design',
                      label: 'Design template',
                      icon: <TbLayout2 size="16" />,
                    },
                  ].map((action) => (
                    <DropdownItem
                      key={action.key}
                      className="text-base"
                      startContent={action.icon}
                      classNames={{
                        title: 'text-base',
                        description: 'text-sm',
                        wrapper: 'px-2 py-1',
                        base: 'rounded-xl',
                      }}
                    >
                      {action.label}
                    </DropdownItem>
                  ))}
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>
            <div>
              <AvatarGroup isBordered max={3} total={10} size="sm">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
            </div>
          </div>
        }
      />
      <div className="container py-8">
        <ReportBody />
      </div>
    </>
  );
};

export default ReportPage;
