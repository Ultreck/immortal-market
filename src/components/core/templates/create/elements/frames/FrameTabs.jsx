import { useState } from 'react';
import { Tab, Tabs } from '@nextui-org/react';
import { ElementPropTypes } from '@/lib/prop-types.js';
import ElementWrapper from '@/components/core/templates/create/ElementWrapper.jsx';
import FrameContents from '@/components/core/templates/create/elements/frames/FrameContents.jsx';

const FrameTabs = ({ element, active, highlighted, width, onClick, onChange }) => {
  const [selected, setSelected] = useState(0);

  return (
    <ElementWrapper
      element={element}
      onClick={onClick}
      onChange={(args) => {
        if (args.width !== element.width || args.height !== element.height) {
          args.children = args.children.map((el) => {
            const w = args.width - element.width;
            const h = args.height - element.height;
            return { ...el, width: el.width + w, height: el.height + h };
          });
        }
        onChange(args);
      }}
      maxWidth={width}
      active={active}
      highlighted={highlighted}
      editable
      className="flex flex-col"
    >
      {({ isEditing }) => (
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
                  isEditing={isEditing}
                  active={active}
                  highlighted={highlighted}
                  overlay={<div className="absolute inset-0 z-[9] pointer-events-none bg-white/50" />}
                />
              </Tab>
            );
          })}
        </Tabs>
      )}
    </ElementWrapper>
  );
};

FrameTabs.propTypes = ElementPropTypes;

export default FrameTabs;
