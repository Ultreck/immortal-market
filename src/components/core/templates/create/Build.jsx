import React from 'react';
import { Input, Tab, Tabs } from '@nextui-org/react';
import { TbSearch } from 'react-icons/tb';

const Build = () => {
  const [tab, setTab] = React.useState('templates');

  return (
    <div>
      <Tabs
        aria-label="Options"
        variant="bordered"
        color="primary"
        radius="full"
        classNames={{ tab: 'text-base px-4' }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="templates" title="Templates" className="text-base" />
        <Tab key="layouts" title="Layouts" className="text-base" />
      </Tabs>
      <Input
        type="text"
        name="query"
        id="query"
        classNames={{
          input: 'text-base',
          base: 'transition-all duration-300 w-full mt-4',
          inputWrapper: 'h-14 bg-white/[.1] group-hover:bg-white/15 focus-within:!bg-white/15',
        }}
        startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
        placeholder="Search.."
        radius="full"
      />
    </div>
  );
};

export default Build;
