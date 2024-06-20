
import { cn } from '@nextui-org/react'
import PropTypes from 'prop-types'

const steps = [
    "Data Sources", "Connect Data", "Enter Credential",  "Preview Data", "Generate Report", "Report Staging", 
]

const ProjectStep = ({currentStep, seekStep}) => {

  return (
    <div className='bg-[#87909c] dark:bg-white/10 min-h-[100vh]'>
        <div className='grid grid-col-6 h-full'>
            {
                steps?.map(step =>(
                    <div key={step} className={cn('flex items-center justify-start pl-4  gap-2 border-b cursor-pointer border-slate-500 text-gray-300/70 dark:text-gray-300/40 ',  { 'dark:text-blue-300 text-gray-900': currentStep === step } )}
                        onClick={()=>seekStep(step)}  >
                        <div className={cn('w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-300/20 ', { 'dark:bg-gray-200 bg-gray-900': currentStep === step } )}></div>
                         {step}
                    </div>
                ))
            }
        </div> 
    </div>
  )
}

ProjectStep.propTypes = {
    currentStep: PropTypes.string,
    seekStep: PropTypes.func
}

export default ProjectStep
