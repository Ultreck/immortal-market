import React from 'react';
import { Image, Input, Skeleton, Tab, Tabs } from '@nextui-org/react';
import { TbPhotoCircle, TbSearch } from 'react-icons/tb';
import useTemplateStore from '@/store/template.js';
import { useGetDesignsTemplates } from '@/api/business.js';
import { getImageLink } from '@/lib/utils.js';

const Build = () => {
  const [tab, setTab] = React.useState('templates');

  return (
    <div>
      <Tabs
        aria-label="Options"
        variant="bordered"
        color="primary"
        radius="full"
        classNames={{ tab: 'text-base px-4', base: 'mb-6' }}
        selectedKey={tab}
        onSelectionChange={setTab}
      >
        <Tab key="templates" title="Templates" className="text-base" />
        <Tab key="layouts" title="Layouts" className="text-base" />
      </Tabs>
      {tab === 'templates' && <Templates />}
      {tab === 'layouts' && <Layouts />}
    </div>
  );
};

const Templates = () => {
  const { data: { designs = [] } = {}, isLoading: isDeignsLoading } = useGetDesignsTemplates({
    status: 'published',
    type: 'template',
  });

  return (
    <div>
      <Input
        type="text"
        name="query"
        id="query"
        classNames={{
          input: 'text-base',
          base: 'transition-all duration-300 w-full',
          inputWrapper: 'h-12 bg-white/[.1] group-hover:bg-white/15 focus-within:!bg-white/15',
        }}
        startContent={<TbSearch size="24" className="mx-1 opacity-30" />}
        placeholder="Search.."
        radius="full"
      />
      {isDeignsLoading ? (
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
          <Skeleton className="w-full h-full aspect-square rounded-2xl" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {designs.map((design) => (
            <div key={design._id}>
              {design.preview ? (
                <Image
                  src={getImageLink(design.preview)}
                  alt={design.title}
                  removeWrapper
                  className="w-full h-full object-cover rounded-2xl aspect-square"
                />
              ) : (
                <div className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-2xl px-6 py-4 flex items-center justify-center aspect-square">
                  <TbPhotoCircle size="32" className="opacity-50" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Layouts = () => {
  const template = useTemplateStore((state) => state.template);
  const updateTemplate = useTemplateStore((state) => state.updateTemplate);
  const options = [
    {
      name: 'Default',
      size: {
        width: 800,
        height: 800,
      },
    },
    {
      name: 'Instagram Story',
      size: {
        width: 1080,
        height: 1920,
      },
    },
    {
      name: 'Instagram Post',
      size: {
        width: 1080,
        height: 1350,
      },
    },
    {
      name: 'Facebook Post (Landscape)',
      size: {
        width: 1200,
        height: 630,
      },
    },
    {
      name: 'Presentation (16:9)',
      size: {
        width: 1920,
        height: 1080,
      },
    },
    {
      name: 'Presentation (4:3)',
      size: {
        width: 1280,
        height: 720,
      },
    },
    {
      name: 'Document (A4)',
      size: {
        width: 595,
        height: 842,
      },
    },
    {
      name: 'Document (Letter)',
      size: {
        width: 612,
        height: 792,
      },
    },
    {
      name: 'Twitter Post',
      size: {
        width: 1600,
        height: 900,
      },
    },
  ];

  const handleClick = (option) => {
    updateTemplate({
      pages: template.pages.map((page) => ({
        ...page,
        width: option.size.width,
        height: option.size.height,
      })),
    });
  };

  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <div
          key={index}
          onClick={() => handleClick(option)}
          className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-2xl px-6 py-4 flex items-center justify-between"
        >
          <div>
            <div className="text-base font-medium">{option.name}</div>
            <div className="text-md mt-1 opacity-60">
              {option.size.width} x {option.size.height}
            </div>
          </div>
          <div
            style={{ aspectRatio: `${option.size.width} / ${option.size.height}` }}
            className="relative border border-white/15 w-[40px]"
          />
        </div>
      ))}
    </div>
  );
};

export default Build;
