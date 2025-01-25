import { useState } from 'react';
import { Tab, Tabs } from '@heroui/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';

const FrameTabs = ({ element, active, onChange }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="h-full flex flex-col">
      <Tabs
        aria-label="Options"
        className="light"
        classNames={{
          base: 'mb-4 z-[2] relative',
          tab: 'text-base',
          panel: 'h-full p-0',
        }}
        variant="bordered"
        radius="full"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        {element.config.tabs.map((t) => {
          return (
            <Tab key={t.id} title={t.title}>
              <FrameContents
                key={t.id}
                id={`frame/${t.id}/${element.id}`}
                element={element}
                onChange={onChange}
                active={active}
                overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" />}
              />
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

FrameTabs.propTypes = ElementPropTypes;

export default FrameTabs;
