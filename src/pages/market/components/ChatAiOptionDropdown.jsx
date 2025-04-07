import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import { Button } from '@heroui/react';
import { TbDotsVertical } from 'react-icons/tb';

const ChatAiOptionDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="rounded-full" variant="">
          <TbDotsVertical size={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownItem key="theme">Theme</DropdownItem>
        <DropdownItem key="change bot" className="text-danger" color="danger">
          Change bot
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatAiOptionDropdown;
