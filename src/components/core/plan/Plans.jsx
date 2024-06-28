import Features from './Features';
import SinglePlan from './SinglePlan';

const Plans = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-center mb-20 mt-10">
        <span className="text-3xl  text-[#52658c] font-bold">
          Team of us all sizes engage us to gather business data insigths
        </span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <SinglePlan type={'Basic plan'} amount={10} />
        <SinglePlan type={'Standard plan'} amount={49} />
        <SinglePlan type={'Premium plan'} amount={100} />
      </div>


      <Features/>
    </div>
  );
};

export default Plans;

