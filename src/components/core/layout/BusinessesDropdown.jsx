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
import useBusiness from '@/hooks/use-business.js';

const BusinessesDropdown = ({ className }) => {
  const { businesses, business, id, setCurrent } = useBusiness();

  return (
    <div className={className}>
      <Dropdown classNames={{ content: 'shadow border border-default-200 w-[300px]' }} placement="right-start">
        <DropdownTrigger>
          <Card className="card-shadow cursor-pointer">
            <CardBody className="px-7 py-5 flex flex-row items-center justify-between">
              <div>
                <h2 className="text-lg font-medium leading-none">{business.name}</h2>
                <p className="leading-none mt-2">{business.email}</p>
              </div>
              <RiArrowRightSLine size="20" />
            </CardBody>
          </Card>
        </DropdownTrigger>
        <DropdownMenu
          variant="faded"
          aria-label="Dropdown menu with description"
          selectionMode="single"
          selectedKeys={[id]}
          onSelectionChange={(value) => setCurrent(Array.from(value)[0])}
        >
          <DropdownSection classNames={{ base: 'p-1', heading: 'px-2' }}>
            {businesses.map((business) => (
              <DropdownItem
                key={business._id}
                description={business.email}
                classNames={{
                  title: 'text-base',
                  description: 'text-sm',
                  wrapper: 'px-2 py-1',
                  base: 'rounded-xl',
                }}
              >
                {business.name}
              </DropdownItem>
            ))}
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
