import { Button, Popover, PopoverContent, PopoverTrigger, Tab, Tabs, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import MapData from '@/components/core/templates/create/tools/elements/map/MapData.jsx';
import MapSettings from '@/components/core/templates/create/tools/elements/map/MapSettings.jsx';
import { TbSettings2 } from 'react-icons/tb';

const MapConfig = ({ element, onChange }) => {
  const { isOpen, onOpenChange } = useDisclosure({ defaultOpen: false });
  const [tab, setTab] = useState('data');

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Adjust font size" className="text-base">
          <TbSettings2 size="20" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <div className="px-8 py-6 w-full !max-h-[500px] overflow-y-auto">
          <Tabs
            variant="bordered"
            aria-label="Options"
            color="primary"
            radius="full"
            classNames={{
              base: 'mb-3',
              tab: 'text-base px-4',
            }}
            selectedKey={tab}
            onSelectionChange={setTab}
          >
            <Tab key="data" title="Data" className="text-base">
              <MapData element={element} onChange={onChange} />
            </Tab>
            <Tab key="setting" title="Setting" className="text-base">
              <MapSettings element={element} onChange={onChange} />
            </Tab>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
};

MapConfig.propTypes = {
  element: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MapConfig;
