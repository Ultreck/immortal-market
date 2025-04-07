import React from 'react';
import { GoHistory } from 'react-icons/go';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import { Button } from '@heroui/react';
const HistoryDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button title="Chat history" className="rounded-full" variant="">
          <GoHistory size={16} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default HistoryDropdown;
