import { useState } from 'react';
import ProjectSource from './ProjectSource.jsx';
import Drawer from '@/components/ui/Drawer.jsx';
import useGlobalStore from '@/store/global.js';
import ProjectStep from './ProjectStep.jsx';
import ConnectDBData from './ConnectDBData.jsx';
import DBcredential from './DBcredential.jsx';
import PreviewData from './PreviewData.jsx';


const CreateProjectModal = () => {
  const [step, setStep] = useState('Data Sources');
  const [sourceType, setSourceType] = useState(null);

  const isCreateProjectModalOpen = useGlobalStore((state) => state.data.isCreateProjectModalOpen);
  const updateData = useGlobalStore((state) => state.updateData);


  const handleSourClick = (source)=>{
    setSourceType(source)
    setStep("Connect Data")
  }

  return (
    <Drawer
      isOpen={isCreateProjectModalOpen}
      onClose={() => updateData({ isCreateProjectModalOpen: false })}
      width={1100}
      padding={false}
    >
      <div className='grid grid-cols-[200px_1fr]'>
        <ProjectStep currentStep={step} seekStep={setStep}/>
        <div className="flex flex-col">
          <div className="flex flex-col gap-5">
            {step === 'Data Sources' && <ProjectSource setSourceType={handleSourClick} />}
            {step === 'Connect Data' && <ConnectDBData sourceType={sourceType} />}
            {step === 'Enter Credential' && <DBcredential />}
            {step === 'Preview Data' && <PreviewData/>}
            {step === 'Generate Report' && <div>Tables</div>}
            {step === 'Report Staging' && <div>Tables</div>}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default CreateProjectModal;





