import { useState } from 'react';
import ProjectSource from './ProjectSource.jsx';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { IconFile, IconGrid3x3, IconTable } from '@tabler/icons-react';
import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';

const CreateProjectModal = () => {
  const [step, setStep] = useState('details');
  const isCreateProjectModalOpen = useGlobalStore((state) => state.data.isCreateProjectModalOpen);
  const updateData = useGlobalStore((state) => state.updateData);

  return (
    <Drawer
      isOpen={isCreateProjectModalOpen}
      onClose={() => updateData({ isCreateProjectModalOpen: false })}
      width={1100}
    >
      <div className="flex flex-col">
        <Breadcrumbs variant="bordered" onAction={setStep} className="mb-10" radius="lg" classNames={{ list: 'px-4' }}>
          <BreadcrumbItem isCurrent={step === 'details'} key={'details'} startContent={<IconGrid3x3 />}>
            Details
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent={step === 'upload-files'} key={'upload-files'} startContent={<IconFile />}>
            Upload Files
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent={step === 'tables-report'} key={'tables-report'} startContent={<IconTable />}>
            Tables Report
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="flex flex-col gap-5">
          {step === 'details' && <ProjectSource />}
          {step === 'upload-files' && <div>Forms</div>}
          {step === 'tables-report' && <div>Tables</div>}
        </div>
      </div>
    </Drawer>
  );
};

export default CreateProjectModal;
