import { useEffect, useState } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';

const FrameTabs = ({ element, active, onChange }) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    // TODO: check
    const children = element.children.map((el) => {
      const w = element.width - element.width;
      const h = element.height - element.height;
      return { ...el, width: el.width + w, height: el.height + h };
    });
    onChange({ ...element, children });
  }, [element.width, element.height, element, onChange]);

  return (
    <Tabs
      aria-label="Options"
      className="light"
      classNames={{ base: 'mb-4 flex-1 h-full z-[1]', tab: 'text-base', panel: 'h-full p-0' }}
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
  );
};

FrameTabs.propTypes = ElementPropTypes;

export default FrameTabs;
