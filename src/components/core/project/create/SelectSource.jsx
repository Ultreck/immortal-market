import { Button, Card, Spinner } from '@heroui/react';
import PropTypes from 'prop-types';
import Title from '../../shared/Title.jsx';
import {
  TbBrandGoogleDrive,
  TbBrandMongodb,
  TbBrandMysql,
  TbChevronLeft,
  TbDatabase,
  TbFileExcel,
  TbFileTypeCsv,
  TbFileTypePdf,
  TbFileWord,
  TbJson,
  TbLink,
} from 'react-icons/tb';
import useProjectStore from '@/store/project.js';
import { useState } from 'react';
import UploadFiles from '@/components/core/project/create/UploadFiles.jsx';
import { cn } from '@/lib/utils.js';
import ConnectSql from '@/components/core/project/create/ConnectSql.jsx';
import ConnectMongodb from '@/components/core/project/create/ConnectMongodb.jsx';
import { SiAmazondynamodb, SiMariadb, SiOracle, SiPostgresql } from 'react-icons/si';
import { useToast } from '@/hooks/use-toast.jsx';
import { useNavigate } from 'react-router-dom';
import useBusiness from '@/hooks/use-business.js';
import { useCreateProject } from '@/api/business.js';
import useTemplateStore from '@/store/template.js';
import useCurrentDesign from '@/hooks/template/use-current-design.js';

const sources = [
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-teal-500 bg-teal-100/80 dark:bg-teal-800/30 rounded-full">
        <TbFileExcel size="24" />
      </div>
    ),
    name: 'Excel',
    key: 'xlsx',
    view: 'files',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-blue-500 bg-blue-100/80 dark:bg-blue-800/30 rounded-full">
        <TbFileWord size="24" />
      </div>
    ),
    name: 'Doc',
    key: 'docx',
    view: 'files',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-orange-500 bg-orange-100/80 dark:bg-orange-800/30 rounded-full">
        <TbJson size="24" />
      </div>
    ),
    name: 'JSON',
    key: 'json',
    view: 'files',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-green-500 bg-green-100/80 dark:bg-green-800/30 rounded-full">
        <TbFileTypeCsv size="24" />
      </div>
    ),
    name: 'CSV',
    key: 'csv',
    view: 'files',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-red-500 bg-red-100/80 dark:bg-red-800/30 rounded-full">
        <TbFileTypePdf size="24" />
      </div>
    ),
    name: 'PDF',
    key: 'pdf',
    view: 'files',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-cyan-500 bg-cyan-100/80 dark:bg-cyan-800/30 rounded-full">
        <TbLink size="24" />
      </div>
    ),
    name: 'Link',
    key: 'link',
    disabled: true,
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-orange-500 bg-orange-100/80 dark:bg-orange-800/30 rounded-full">
        <TbBrandGoogleDrive size="24" />
      </div>
    ),
    name: 'Google Drive',
    key: 'google-drive',
    disabled: true,
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-sky-500 bg-sky-100/80 dark:bg-sky-800/30 rounded-full">
        <TbBrandMysql size="24" />
      </div>
    ),
    name: 'MySQL',
    key: 'mysql',
    view: 'sql',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-pink-500 bg-pink-100/80 dark:bg-pink-800/30 rounded-full">
        <SiOracle size="24" />
      </div>
    ),
    name: 'Oracle',
    key: 'oracle',
    view: 'sql',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-teal-500 bg-teal-100/80 dark:bg-teal-800/30 rounded-full">
        <SiPostgresql size="24" strokeWidth={0.8} />
      </div>
    ),
    name: 'Postgresql',
    key: 'postgresql',
    view: 'sql',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-blue-500 bg-blue-100/80 dark:bg-blue-800/30 rounded-full">
        <TbDatabase size="24" />
      </div>
    ),
    name: 'MSSQL',
    key: 'mssql',
    view: 'sql',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-emerald-500 bg-emerald-100/80 dark:bg-emerald-800/30 rounded-full">
        <SiMariadb size="24" />
      </div>
    ),
    name: 'MariaDB',
    key: 'mariadb',
    view: 'sql',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-orange-500 bg-orange-100/80 dark:bg-orange-800/30 rounded-full">
        <SiAmazondynamodb size="24" strokeWidth={0.4} />
      </div>
    ),
    name: 'Amazon DynamoDB',
    key: 'amazon-dynamodb',
    view: 'sql',
  },
  {
    icon: (
      <div className="w-14 h-14 grid place-items-center text-green-500 bg-green-100/80 dark:bg-green-800/30 rounded-full">
        <TbBrandMongodb size="24" />
      </div>
    ),
    name: 'MongoDB',
    key: 'mongodb',
    view: 'mongodb',
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
];

const SelectSource = ({ onNext, onPrev }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { id: business } = useBusiness();
  const updateData = useProjectStore((state) => state.updateData);
  const [view, setView] = useState('options');
  const { mutateAsync: create, isPending: isCreateDesignLoading } = useCreateProject(business);
  const template = useProjectStore((state) => state.data.template);
  const files = useProjectStore((state) => state.data.files);
  const updateTemplateStore = useTemplateStore((state) => state.updateTemplate);
  const { design } = useCurrentDesign();

  const handleClick = (item) => {
    const payload = { source: item.key };
    if (item.view === 'files') {
      payload.type = item.key;
    }
    if (item.view === 'sql') {
      payload.credentials = { type: item.key };
    }
    updateData(payload);
    setView(item.view);
  };

  const handleCreateProject = async () => {
    try {
      const fd = new FormData();
      files.forEach((file) => fd.append('files', file));
      fd.append('title', template ? template.title : 'Untitled');
      fd.append('description', template ? template.description : '');
      fd.append('template', template ? template._id : '');
      if (design) fd.append('design', design._id);
      const res = await create(fd);
      onNext();
      updateTemplateStore({ id: res.data.design._id });
      navigate(`/designs/${res.data.design._id}/edit`);
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  const onSubmit = async () => {
    await handleCreateProject();
  };

  return (
    <div className="h-full flex flex-col">
      {isCreateDesignLoading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <Spinner size="lg" />
          <p className="mt-8">Preparing data..</p>
        </div>
      ) : (
        <>
          {view === 'options' && (
            <>
              <div className="flex-1 overflow-y-auto px-12 py-10">
                <Title title="Connect your data" sub="Choose a data source below to continue" className="mb-10" />
                <div className="grid grid-cols-5 gap-4">
                  {sources.map((source) => (
                    <Card
                      key={source.key}
                      isPressable
                      onPress={() => handleClick(source)}
                      radius="lg"
                      className={cn(
                        'shadow-none border-2 border-default-200 dark:border-default-200/70 hover:bg-default-100 px-10 py-6 flex items-center justify-center',
                        { disabled: source.disabled }
                      )}
                    >
                      {source.icon}
                      <div className="text-md font-medium mt-3 leading-tight">{source.name}</div>
                    </Card>
                  ))}
                </div>
              </div>
              {!design && (
                <div className="px-12 py-4 border-t border-default-200 flex items-center space-x-3">
                  <Button
                    onClick={onPrev}
                    radius="full"
                    variant="bordered"
                    className="text-base px-6"
                    startContent={<TbChevronLeft size="20" />}
                  >
                    Back
                  </Button>
                </div>
              )}
            </>
          )}
          {view === 'files' && <UploadFiles onPrev={() => setView('options')} onNext={onSubmit} />}
          {view === 'sql' && <ConnectSql onPrev={() => setView('options')} onNext={onSubmit} />}
          {view === 'mongodb' && <ConnectMongodb onPrev={() => setView('options')} onNext={onSubmit} />}
        </>
      )}
    </div>
  );
};

SelectSource.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default SelectSource;
