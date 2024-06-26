import { cn } from '@nextui-org/react';
import PropTypes from 'prop-types';

const steps = ['Data Sources', 'Connect Data', 'Enter Credential', 'Preview Data', 'Generate Report', 'Report Staging'];

const ProjectStep = ({ currentStep, seekStep }) => {
  return (
    <div className="px-4 py-10 border-r border-default-200 dark:border-default-100">
      <div className="bg-[#183346] dark:bg-[#142734] min-h-[100vh]">
        <div className="grid grid-col-6 h-full">
          {steps?.map((step) => (
            <div
              key={step}
              className={cn(
                'flex items-center justify-start pl-4  gap-2 border-b cursor-pointer border-slate-500 text-gray-500/70 dark:text-gray-300/40 ',
                { 'dark:text-blue-300 text-gray-200': currentStep === step }
              )}
              onClick={() => seekStep(step)}
            >
              <div
                className={cn('w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-300/20 ', {
                  'dark:bg-gray-200 bg-gray-200': currentStep === step,
                })}
              ></div>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectStep.propTypes = {
  currentStep: PropTypes.string,
  seekStep: PropTypes.func,
};

export default ProjectStep;
