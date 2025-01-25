import { HiColorSwatch } from 'react-icons/hi';
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { HiChevronDown } from 'react-icons/hi2';
import { useTernaryDarkMode } from 'usehooks-ts';

const AppearanceSettingsPage = () => {
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  return (
    <div>
      <h3 className="mb-10 text-lg font-medium">Appearance settings</h3>
      <div className="divide-y divide-default-100 space-y-4">
        <div className="flex items-center">
          <HiColorSwatch size="20" />
          <div className="flex-1 px-4">
            <h5>Theme</h5>
            <p className="text-[.95rem] opacity-70">Select your preferred theme</p>
          </div>
          <ButtonGroup variant="flat">
            <Button className="text-base capitalize">{ternaryDarkMode}</Button>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly>
                  <HiChevronDown />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Theme options"
                selectedKeys={[ternaryDarkMode]}
                selectionMode="single"
                onSelectionChange={(keys) => {
                  setTernaryDarkMode(Array.from(keys)[0]);
                }}
                className="max-w-[300px]"
              >
                <DropdownItem key="light">
                  <span className="text-base">Light</span>
                </DropdownItem>
                <DropdownItem key="dark">
                  <span className="text-base">Dark</span>
                </DropdownItem>
                <DropdownItem key="system">
                  <span className="text-base">System</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSettingsPage;
