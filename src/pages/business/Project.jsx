
import CreateProjectSteps from '../../components/core/business/project/CreateProjectSteps';
import Myproject from '../../components/core/business/project/Myproject';


const BusinessProject = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-10 ">Project</h1>

      <div className='flex flex-col gap-5'>
        <Myproject />
        <CreateProjectSteps />   
      </div>
    </div>
  );
};

export default BusinessProject;
