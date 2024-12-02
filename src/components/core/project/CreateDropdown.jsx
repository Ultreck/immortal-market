import { Button, cn, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import { RiAddLine, RiFileAddLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import useGlobalStore from '@/store/global.js';

const CreateDropdown = ({ className, mini = false }) => {
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <div className={className}>
      <Dropdown classNames={{ content: 'shadow border border-default-200 w-[320px]' }} placement="right-start">
        <DropdownTrigger>
          {mini ? (
            <Button color="primary" radius="full" isIconOnly className={cn(className)}>
              <RiAddLine size="20" />
            </Button>
          ) : (
            <Button
              color="primary"
              size="lg"
              className="w-full text-base font-medium h-auto py-2.5 px-5 text-start justify-start gap-4 rounded-3xl"
              startContent={<RiAddLine size="20" />}
            >
              Create new
            </Button>
          )}
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          aria-label="Dropdown menu with description"
          onAction={(key) => {
            if (key === 'project') updateData({ isCreateProjectModalOpen: true });
          }}
        >
          <DropdownSection classNames={{ base: 'p-1', heading: 'px-2' }}>
            <DropdownItem
              key="project"
              description="Start exploring banking templates"
              classNames={{ title: 'text-base', description: 'text-sm', wrapper: 'px-2 py-1', base: 'rounded-xl' }}
              startContent={<RiFileAddLine size="20" className="ml-1" />}
            >
              Project
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

CreateDropdown.propTypes = {
  className: PropTypes.string,
  mini: PropTypes.bool,
};

export default CreateDropdown;
