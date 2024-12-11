import { createElement } from 'react';
import SelectSource from './create/SelectSource.jsx';
import Drawer from '@/components/ui/Drawer.jsx';
import { TbDatabase, TbTemplate } from 'react-icons/tb';
import Stepper from '@/components/ui/Stepper.jsx';
import SelectTemplate from '@/components/core/project/create/SelectTemplate.jsx';
import useProjectStore from '@/store/project.js';
import { LuCombine, LuWorkflow } from 'react-icons/lu';
import ModelData from '@/components/core/project/create/ModelData.jsx';
import ModifyReport from '@/components/core/templates/create/project/modify-report/ModifyReport.jsx';

const steps = [
  {
    key: 'template',
    title: 'Select template',
    icon: <TbTemplate size="18" />,
    element: SelectTemplate,
  },
  {
    key: 'data-source',
    title: 'Data source',
    icon: <TbDatabase size="18" />,
    element: SelectSource,
  },
  {
    key: 'model',
    title: 'Data model',
    icon: <LuWorkflow size="18" />,
    element: ModelData,
  },
  {
    key: 'modify-report',
    title: 'Modify report',
    icon: <LuCombine size="16" />,
    element: ModifyReport,
  },
].filter((i) => !i.disabled);

const CreateProjectModal = () => {
  const step = useProjectStore((state) => state.data.step);
  const isOpen = useProjectStore((state) => state.data.isOpen);
  const updateProjectStore = useProjectStore((state) => state.updateData);

  const current = steps.find((s) => s.key === step);

  const gotoNextStep = () => {
    const index = steps.findIndex((s) => s.key === step);
    const next = steps[index + 1];
    if (next) return updateProjectStore({ step: next.key });
    handleClose();
  };

  const gotoPreviousStep = () => {
    const index = steps.findIndex((s) => s.key === step);
    const prev = steps[index - 1];
    if (prev) updateProjectStore({ step: prev.key });
  };

  const handleClose = () => {
    updateProjectStore({ step: 'template', template: null, isOpen: false });
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleClose} width={1100} padding={false}>
      <div className="grid grid-cols-[260px_1fr] h-full">
        <div className="border-r border-default-200 dark:border-default-100 py-12 px-12 h-full bg-[#f4f5f6] dark:bg-[#0b161f]">
          <Stepper
            current={step}
            steps={steps}
            onChange={(key) => updateProjectStore({ step: key })}
            classNames={{ circle: 'ring-[#f4f5f6] dark:ring-[#0b161f]' }}
          />
        </div>
        {!!current && (
          <div className="flex flex-col overflow-y-auto h-full">
            {createElement(current.element, { onNext: gotoNextStep, onPrev: gotoPreviousStep, onClose: handleClose })}
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CreateProjectModal;
