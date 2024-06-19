import {
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/react';
import { RiArrowRightSLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const BusinessesDropdown = ({ className }) => {
  return (
    <div className={className}>
      <Dropdown classNames={{ content: 'shadow border border-default-200 w-[300px]' }} placement="right-start">
        <DropdownTrigger>
          <Card className="card-shadow cursor-pointer">
            <CardBody className="px-7 py-5 flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-medium leading-none">Awesome business</h2>
                <p className="leading-none mt-2">info@ab.com</p>
              </div>
              <RiArrowRightSLine size="20" />
            </CardBody>
          </Card>
        </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
          <DropdownSection classNames={{ base: 'p-1', heading: 'px-2' }}>
            <DropdownItem
              key="new"
              description="First business description"
              classNames={{ title: 'text-base', description: 'text-sm', wrapper: 'px-2 py-1', base: 'rounded-xl' }}
            >
              Business 2
            </DropdownItem>
            <DropdownItem
              key="copy"
              description="Second business description"
              classNames={{ title: 'text-base', description: 'text-sm', wrapper: 'px-2 py-1', base: 'rounded-xl' }}
            >
              Business 3
            </DropdownItem>
            <DropdownItem
              key="edit"
              description="Third business description"
              classNames={{ title: 'text-base', description: 'text-sm', wrapper: 'px-2 py-1', base: 'rounded-xl' }}
            >
              Business 4
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

BusinessesDropdown.propTypes = {
  className: PropTypes.string,
};

export default BusinessesDropdown;
