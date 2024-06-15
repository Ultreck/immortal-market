import { useState } from 'react';
// import ProjectTable from '../ProjectTable';
import SelectFileSource from '../SelectFileSource';
import Stepper from '../Stepper';
import ProjectChartDashboard from './ProjectChartDashboard';
import BusinessTable from '../BusinessTable';

const CreateProjectSteps = () => {
  const [currentStep, setCurrentStep] = useState('Details');

  const CurrentView = () => {
    return (
      <div className="flex flex-col gap-5">
        {currentStep === 'Details' && <SelectFileSource />}
        {currentStep === 'Upload Files' && <div>Forms</div>}
        {currentStep === 'Tables Report' && <div>
            <BusinessTable />
            {/* <ProjectTable /> */}
        </div> 
        }
        {currentStep === 'Charts Dashboard' && <ProjectChartDashboard/>}
      </div>
    );
  };

  return (
    <div className="flex flex-col py-10">
         <div className="flex gap-2 items-start py-1 ">
                <span className="font-semibold text-xl">Create New Project</span>
            </div>
      <Stepper onNextStep={setCurrentStep} currentPage={currentStep} />
      <CurrentView />
    </div>
  );
};

export default CreateProjectSteps;

