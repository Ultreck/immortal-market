import { createElement } from 'react';
import SelectSource from './create/SelectSource.jsx';
import { TbDatabase, TbTemplate } from 'react-icons/tb';
import Stepper from '@/components/ui/Stepper.jsx';
import SelectTemplate from '@/components/core/project/create/SelectTemplate.jsx';
import useProjectStore from '@/store/project.js';
import { LuCombine, LuWorkflow } from 'react-icons/lu';
import PreviewData from '@/components/core/project/create/PreviewData.jsx';
import ModifyReport from '@/components/core/project/create/modify-report/ModifyReport.jsx';
import { Drawer, DrawerContent } from '@nextui-org/react';

const steps = [
  {
    key: 'template',
    title: 'Select template',
    icon: <TbTemplate size="18" />,
    element: SelectTemplate,
  },
  {
    key: 'source',
    title: 'Data source',
    icon: <TbDatabase size="18" />,
    element: SelectSource,
  },
  {
    key: 'model',
    title: 'Preview data',
    icon: <LuWorkflow size="18" />,
    element: PreviewData,
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
    <Drawer isOpen={isOpen} onClose={handleClose} padding={false} hideCloseButton classNames={{ base: 'w-[1200px]' }}>
      <DrawerContent className="grid grid-cols-[250px_1fr] h-full w-[1200px] max-w-[auto] p-0">
        <div className="border-r border-default-200 dark:border-default-100 py-9 px-10 h-full bg-[#f4f5f6] dark:bg-[#0b161f]">
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
      </DrawerContent>
    </Drawer>
  );
};

export default CreateProjectModal;
