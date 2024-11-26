import { createElement, useState } from 'react';
import SelectSource from './create/SelectSource.jsx';
import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';
import PreviewFiles from './create/PreviewFiles.jsx';
import GenerateReport from './GenerateReport.jsx';
import PreparingData from './PreparingData.jsx';
import { TbDatabase, TbEye, TbReport, TbUpload } from 'react-icons/tb';
import Stepper from '@/components/ui/Stepper.jsx';
import SelectTemplate from '@/components/core/project/create/SelectTemplate.jsx';
import { useCreateProject } from '@/api/business.js';
import useBusiness from '@/hooks/use-business.js';
import { useToast } from '@/hooks/use-toast.jsx';
import { useNavigate } from 'react-router-dom';
import useCreateProjectStore from '@/store/create-project.js';
import { Spinner } from '@nextui-org/react';

const steps = [
  {
    key: 'template',
    title: 'Select template',
    icon: <TbDatabase size="16" />,
    element: SelectTemplate,
  },
  {
    key: 'data-source',
    title: 'Data Source',
    icon: <TbDatabase size="16" />,
    element: SelectSource,
  },
  {
    key: 'preview-data',
    title: 'Preview Data',
    icon: <TbEye size="16" />,
    element: PreviewFiles,
    disabled: true,
  },
  {
    key: 'generate-report',
    title: 'Generate Report',
    icon: <TbReport size="16" />,
    element: GenerateReport,
    disabled: true,
  },
  {
    key: 'report-staging',
    title: 'Report Staging',
    icon: <TbUpload size="16" />,
    element: PreparingData,
    disabled: true,
  },
].filter((i) => !i.disabled);

const CreateProjectModal = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { id: business } = useBusiness();
  const [step, setStep] = useState(steps[0].key);
  const isCreateProjectModalOpen = useGlobalStore((state) => state.data.isCreateProjectModalOpen);
  const updateGlobalStore = useGlobalStore((state) => state.updateData);
  const { mutateAsync: create, isPending: isCreateDesignLoading } = useCreateProject(business);
  const template = useCreateProjectStore((state) => state.data.template);
  const files = useCreateProjectStore((state) => state.data.files);

  const onSubmit = async () => {
    await handleCreateProject();
  };

  const handleCreateProject = async () => {
    try {
      const fd = new FormData();
      files.forEach((file) => fd.append('files', file));
      fd.append('title', template.title);
      const res = await create(fd);
      updateGlobalStore({ isCreateProjectModalOpen: false });
      navigate(`/designs/${res.data.design._id}/edit`);
    } catch (e) {
      toast.error(e?.response?.data?.message || e.message);
    }
  };

  const gotoNextStep = () => {
    const index = steps.findIndex((s) => s.key === step);
    const next = steps[index + 1];
    if (next) return setStep(next.key);
    onSubmit();
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
      onClose={() => updateGlobalStore({ isCreateProjectModalOpen: false })}
      width={1000}
      padding={false}
    >
      <div className="grid grid-cols-[280px_1fr] h-full">
        <div className="border-r border-default-200 dark:border-default-100 py-12 px-12 h-full bg-[#f4f5f6] dark:bg-[#0b161f]">
          <Stepper
            current={step}
            steps={steps}
            onChange={(key) => setStep(key)}
            classNames={{ circle: 'ring-[#f4f5f6] dark:ring-[#0b161f]' }}
          />
        </div>
        {isCreateDesignLoading ? (
          <div className="py-40 flex flex-col items-center justify-center">
            <Spinner size="lg" />
            <p className="mt-8">Creating project..</p>
          </div>
        ) : (
          <>
            {!!current && (
              <div className="flex flex-col overflow-y-auto px-12 py-10">
                {createElement(current.element, { onNext: gotoNextStep, onPrev: gotoPreviousStep })}
              </div>
            )}
          </>
        )}
      </div>
    </Drawer>
  );
};

export default CreateProjectModal;
