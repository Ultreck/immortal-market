import { Button, Popover, PopoverContent, PopoverTrigger, Tab, Tabs } from '@heroui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import MapData from '@/components/core/templates/create/tools/elements/specific/map/MapData.jsx';
import MapSettings from '@/components/core/templates/create/tools/elements/specific/map/MapSettings.jsx';
import MapChart from '@/components/core/templates/create/tools/elements/specific/map/MapChart.jsx';
import { TbSettings2 } from 'react-icons/tb';
import useDesignStore from '@/store/design.js';

const MapConfig = ({ element }) => {
  const [tab, setTab] = useState('data');
  const tool = useDesignStore((state) => state.tool);
  const openTool = useDesignStore((state) => state.openTool);
  const closeTool = useDesignStore((state) => state.closeTool);

  return (
    <Popover
      placement="left"
      showArrow
      offset={10}
      classNames={{ content: 'w-[400px]' }}
      isOpen={tool === 'map'}
      onOpenChange={(v) => (v ? openTool('map') : closeTool())}
    >
      <PopoverTrigger>
        <Button isIconOnly variant="light" aria-label="Map config" className="text-base">
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
              <MapData element={element} />
            </Tab>
            <Tab key="setting" title="Setting" className="text-base">
              <MapSettings element={element} />
            </Tab>
            <Tab key="chart" title="Chart" className="text-base">
              <MapChart element={element} />
            </Tab>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
};

MapConfig.propTypes = {
  element: PropTypes.object.isRequired,
};

export default MapConfig;
