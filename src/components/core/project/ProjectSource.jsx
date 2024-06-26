import { Card } from '@nextui-org/react';

import PropTypes from 'prop-types';
import Title from '../shared/Title';
import { RiFileUploadLine } from 'react-icons/ri';
import { TbBrandGoogleDrive, TbBrandMongodb, TbBrandMysql, TbLink } from 'react-icons/tb';

const sources = [
  {
    key: 'files',
    name: 'Files',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-teal-500 bg-teal-100/80 dark:bg-teal-800/30 rounded-full">
        <RiFileUploadLine size="24" />
      </div>
    ),
  },
  {
    key: 'urls',
    name: 'URLs',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-blue-500 bg-blue-100/80 dark:bg-blue-800/30 rounded-full">
        <TbLink size="24" />
      </div>
    ),
  },
  {
    key: 'cloud',
    name: 'Cloud Storage/Drive',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-red-500 bg-red-100/80 dark:bg-red-800/30 rounded-full">
        <TbBrandGoogleDrive size="24" />
      </div>
    ),
  },
  {
    key: 'mongodb',
    name: 'MongoDB',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-green-500 bg-green-100/80 dark:bg-green-800/30 rounded-full">
        <TbBrandMongodb size="24" />
      </div>
    ),
  },
  {
    key: 'sql',
    name: 'SQL',
    icon: (
      <div className="w-14 h-14 grid place-items-center text-cyan-500 bg-cyan-100/80 dark:bg-cyan-800/30 rounded-full">
        <TbBrandMysql size="24" />
      </div>
    ),
  },
];

const ProjectSource = ({ onNext }) => {
  const handleClick = (key) => {
    onNext(key);
  };

  return (
    <>
      <Title title="Connect your data" sub="Choose a data source below to continue" className="mb-10" />
      <div className="grid grid-cols-3 gap-6">
        {sources.map((source) => (
          <Card
            key={source.key}
            isPressable
            onPress={() => handleClick(source.key)}
            className="shadow-none border-2 border-default-200 dark:border-default-200/70 hover:bg-default-100 px-10 py-8 flex items-center justify-center"
          >
            {source.icon}
            <div className="text-base font-medium mt-3 leading-tight">{source.name}</div>
          </Card>
        ))}
      </div>
    </>
  );
};

ProjectSource.propTypes = {
  onNext: PropTypes.func,
};

export default ProjectSource;
