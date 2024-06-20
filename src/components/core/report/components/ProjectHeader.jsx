import {
  Avatar,
  AvatarGroup,
  BreadcrumbItem,
  Breadcrumbs,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  NavbarItem,
  Switch,
} from '@nextui-org/react';
import React from 'react';
import { TbChevronDown } from 'react-icons/tb';

const ProjectHeader = () => {
  return (
    <div className="flex justify-between border-b border-default-200 pb-4">
      <div>
        <p className='text-3xl'>Project XYZ</p>
        <p>
          <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Project</BreadcrumbItem>
            <BreadcrumbItem>Project XYZ</BreadcrumbItem>
          </Breadcrumbs>
        </p>
      </div>
      <div className="flex space-x-5">
        <div className="flex">
          {/* <Switch size="sm" defaultSelected aria-label="Automatic updates" /> */}
          <p>Transform</p>
        </div>
        <div>
          <Dropdown placement="bottom-end" size="lg">
            <DropdownTrigger>
              <div className="flex cursor-pointer items-center">
                More <TbChevronDown size="18" className="ml-1" />
              </div>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownSection>
                <DropdownItem
                  key="new"
                  className="text-base"
                  description="First business description"
                  classNames={{ title: 'text-base', description: 'text-sm', wrapper: 'px-2 py-1', base: 'rounded-xl' }}
                >
                  New
                </DropdownItem>
                <DropdownItem
                  key="edit"
                  className="text-base"
                  description="First business description"
                  classNames={{ title: 'text-base', description: 'text-sm', wrapper: 'px-2 py-1', base: 'rounded-xl' }}
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  key="copy"
                  className="text-base"
                  description="Second business description"
                  classNames={{ title: 'text-base', description: 'text-sm', wrapper: 'px-2 py-1', base: 'rounded-xl' }}
                >
                  Copy
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
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
    </div>
  );
};

export default ProjectHeader;

