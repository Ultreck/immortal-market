import { createElement, useState } from 'react';
import ProjectSource from './ProjectSource.jsx';
import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';
import SelectFiles from './SelectFiles.jsx';
import PreviewFiles from './PreviewFiles.jsx';
import GenerateReport from './GenerateReport.jsx';
import PreparingData from './PreparingData.jsx';
import { TbDatabase, TbEye, TbPassword, TbPlugConnected, TbReport, TbUpload } from 'react-icons/tb';
import Stepper from '@/components/ui/Stepper.jsx';
import ConnectSql from '@/components/core/project/ConnectSql.jsx';

const CreateProjectModal = () => {
  const steps = [
    {
      key: 'data-source',
      title: 'Data Source',
      icon: <TbDatabase size="16" />,
      element: ProjectSource,
    },
    {
      key: 'project-details',
      title: 'Project Details',
      icon: <TbPlugConnected size="16" />,
      element: SelectFiles,
    },
    {
      key: 'sql',
      title: 'Connect to SQL',
      icon: <TbPassword size="16" />,
      element: ConnectSql,
    },
    {
      key: 'preview-data',
      title: 'Preview Data',
      icon: <TbEye size="16" />,
      element: PreviewFiles,
    },
    {
      key: 'generate-report',
      title: 'Generate Report',
      icon: <TbReport size="16" />,
      element: GenerateReport,
    },
    {
      key: 'report-staging',
      title: 'Report Staging',
      icon: <TbUpload size="16" />,
      element: PreparingData,
    },
  ];
  const [step, setStep] = useState(steps[0].key);
  const isCreateProjectModalOpen = useGlobalStore((state) => state.data.isCreateProjectModalOpen);
  const updateData = useGlobalStore((state) => state.updateData);

  const gotoNextStep = () => {
    const index = steps.findIndex((s) => s.key === step);
    const next = steps[index + 1];
    if (next) setStep(next.key);
  };

  const gotoPreviousStep = () => {
    const index = steps.findIndex((s) => s.key === step);
    const prev = steps[index - 1];
    if (prev) setStep(prev.key);
  };

  const current = steps.find((s) => s.key === step);
  return (
    <Drawer
      isOpen={isCreateProjectModalOpen}
      onClose={() => updateData({ isCreateProjectModalOpen: false })}
      width={1000}
      padding={false}
    >
      <div className="grid grid-cols-[320px_1fr] h-full">
        <div className="border-r border-default-200 dark:border-default-100 py-12 px-12 h-full bg-[#f4f5f6] dark:bg-[#0b161f]">
          <Stepper
            current={step}
            steps={steps}
            onChange={(key) => setStep(key)}
            classNames={{ circle: 'ring-[#f4f5f6] dark:ring-[#0b161f]' }}
          />
        </div>
        {!!current && (
          <div className="flex flex-col overflow-y-auto px-12 py-10">
            {createElement(current.element, { onNext: gotoNextStep, onPrev: gotoPreviousStep })}
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CreateProjectModal;
