import React from 'react';
import { Input, Tab, Tabs } from '@nextui-org/react';
import { TbSearch } from 'react-icons/tb';

const Build = () => {
  const [tab, setTab] = React.useState('templates');

  return (
    <div>
      <Tabs
        aria-label="Options"
        color="primary"
        radius="full"
        size="lg"
        classNames={{
          tab: 'text-base px-4',
        }}
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
        size="sm"
        classNames={{ input: 'text-base', base: 'transition-all duration-300 w-full mt-4', inputWrapper: 'h-11' }}
        startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
        placeholder="Search.."
        radius="full"
        variant="bordered"
      />
    </div>
  );
};

export default Build;
