import { Button, Card, Image, Popover, PopoverContent, PopoverTrigger, useDisclosure } from '@nextui-org/react';
import PropTypes from 'prop-types';
import Title from '../../shared/Title.jsx';
import { RiFileUploadLine } from 'react-icons/ri';
import { TbBrandGoogleDrive, TbBrandMongodb, TbBrandMysql, TbChevronLeft, TbLink } from 'react-icons/tb';
import useCreateProjectStore from '@/store/create-project.js';
import { useState } from 'react';
import UploadFiles from '@/components/core/project/create/UploadFiles.jsx';
import { cn, getImageLink } from '@/lib/utils.js';
import ConnectSql from '@/components/core/project/create/ConnectSql.jsx';
import ConnectMongodb from '@/components/core/project/create/ConnectMongodb.jsx';
import TemplateGallery from '@/components/core/project/create/TemplateGallery.jsx';
import { TbPhotoCircle } from 'react-icons/tb';
import ApplyTemplate from '@/components/core/templates/create/sidebar/build/ApplyTemplate.jsx';

const sources = [
  {
    key: 'files',
    name: 'Files',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-teal-500 bg-teal-100/80 dark:bg-teal-800/30 rounded-full">
        <RiFileUploadLine size="24" />
      </div>
    ),
    disabled: false,
  },
  {
    key: 'sql',
    name: 'SQL',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-cyan-500 bg-cyan-100/80 dark:bg-cyan-800/30 rounded-full">
        <TbBrandMysql size="24" />
      </div>
    ),
    disabled: false,
  },
  {
    key: 'urls',
    name: 'URLs',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-blue-500 bg-blue-100/80 dark:bg-blue-800/30 rounded-full">
        <TbLink size="24" />
      </div>
    ),
    disabled: true,
  },
  {
    key: 'cloud',
    name: 'Cloud Storage/Drive',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-red-500 bg-red-100/80 dark:bg-red-800/30 rounded-full">
        <TbBrandGoogleDrive size="24" />
      </div>
    ),
    disabled: true,
  },
  {
    key: 'mongodb',
    name: 'MongoDB',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-green-500 bg-green-100/80 dark:bg-green-800/30 rounded-full">
        <TbBrandMongodb size="24" />
      </div>
    ),
    disabled: false,
  },
];

const SelectSource = ({ onNext }) => {
  const data = useCreateProjectStore((state) => state.data.source);
  const updateData = useCreateProjectStore((state) => state.updateData);
  const [view, setView] = useState(data.source || 'templates');

  const handleClick = (key) => {
    updateData({ source: key });
    setView(key);
  };

  return (
    <>
      {view === 'options' && (
        <>
          <Title title="Connect your data" sub="Choose a data source below to continue" className="mb-10" />
          <div className="grid grid-cols-3 gap-6">
            {sources.map((source) => (
              <Card
                key={source.key}
                isPressable
                onPress={() => handleClick(source.key)}
                className={cn(
                  'shadow-none border-2 border-default-200 dark:border-default-200/70 hover:bg-default-100 px-10 py-8 flex items-center justify-center',
                  { disabled: source.disabled }
                )}
              >
                {source.icon}
                <div className="text-base font-medium mt-3 leading-tight">{source.name}</div>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Button
              onClick={() => setView('templates')}
              color="default"
              variant="bordered"
              radius="full"
              className="text-base px-6"
              startContent={<TbChevronLeft size="20" />}
            >
              Back
            </Button>
          </div>
        </>
      )}
      {view === 'templates' && <TemplateGallery onPrev={() => setView('options')} onNext={onNext} />}
      {view === 'files' && <UploadFiles onPrev={() => setView('options')} onNext={onNext} />}
      {view === 'sql' && <ConnectSql onPrev={() => setView('options')} onNext={onNext} />}
      {view === 'mongodb' && <ConnectMongodb onPrev={() => setView('options')} />}
    </>
  );
};

SelectSource.propTypes = {
  onNext: PropTypes.func,
};

const TemplateItem = ({ design }) => {
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <Popover
      placement="right"
      showArrow
      offset={10}
      classNames={{ content: 'w-[300px]' }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <PopoverTrigger>
        {design.thumbnail ? (
          <Image
            src={getImageLink(design.thumbnail)}
            alt={design.title}
            removeWrapper
            className="w-full h-full object-cover rounded-xl aspect-square cursor-pointer"
          />
        ) : (
          <div className="bg-white/10 hover:bg-white/15 cursor-pointer rounded-xl px-6 py-4 flex items-center justify-center aspect-square">
            <TbPhotoCircle size="32" className="opacity-50" />
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="p-0 shadow border border-default-200">
        <ApplyTemplate id={design._id} onClose={onOpenChange} />
      </PopoverContent>
    </Popover>
  );
};

TemplateItem.propTypes = {
  design: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
  }),
};

export default SelectSource;

