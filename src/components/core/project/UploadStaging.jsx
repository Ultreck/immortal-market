
import Title from './Title';


const steps = [
    { text: 'Uploading files', color: 'bg-green-500', bgColor: 'bg-[#e2f1e7] ', border: "border-green-100" },
    { text: 'Uploading file 2', sub: "Select from multiple sources", color: 'bg-[#c66c2b]', bgColor: 'bg-orange-100', border: "border-orange-500" },
    { text: 'Using AI to prioritize', color: 'bg-black', bgColor: 'bg-[#fefefe]', border: "border-gray-100" },
    { text: 'Generating Infographics', color: 'bg-black', bgColor: 'bg-[#fefefe]', border: "border-gray-100" },
    { text: 'Exit Other investors', color: 'bg-black', bgColor: 'bg-[#fefefe]', border: "border-gray-100"},
  ];
  


const UploadStaging = () => {





  return (
    <div className="flex flex-col gap-10 px-7 md:px-12  py-10 h-[100vh] overflow-auto">
      <Title title={'Preparing your data'} />


      <div className="my-4 w-full">
        <ol className="ms-12 my-4 text-gray-600 border-s-3 border-gray-300 dark:border-gray-700 dark:text-gray-400 py-6">

            {
               steps.map((step, index) => (
                <li key={index} className={`mb-10 ms-6 relative group w-full md:w-[70%] h-20 ${step?.bgColor} border border-gray-300 rounded-lg animate-bounce `}>
                    <div className="  p-2 px-7  rounded   ">
                    <p className="text-lg font-bold">{step?.text}</p>
                    <p className="text-sm ">{step?.sub}</p>

                    <span className={`absolute w-[12px] h-[12px] ${step?.color}  rounded-full -start-[31px] top-6`}></span>

                    <div className={`${step?.bgColor}   w-10 h-5 -rotate-90  -left-7 absolute z-4 top-5`} style={{clipPath: "polygon(50% 0%, 26% 100%, 73% 100%)"}}></div>

                    <div className={` bg-transparent border-t-4 shadow border-gray-700  w-10 h-5 -rotate-90  -left-7 absolute z-10 top-5`} style={{clipPath: "polygon(50% 0%, 26% 100%, 73% 100%)"}}></div>
                   

                    </div>
                </li>
               )) 
            }
        </ol>
      </div>

   

      <div className="relative mx-4 my-10 py-10">
      <div className="absolute left-8 top-0 w-[0.1rem] bg-gray-300 h-full"></div>
      {steps.map((step, index) => (
        <div key={index} className="relative flex items-start mb-8">

          <div className="flex items-center justify-center w-6 h-6 rounded-full  border-gray-300 z-10 ml-5">
            <div className={`w-3 h-3 rounded-full ${step.color}`}></div>
          </div>

          <div className="relative ml-6">
            <div className={`before:content-[''] before:absolute before:top-1/2 before:-left-2 before:border-t-[10px] before:border-t-transparent before:border-r-[10px] before:${step.border} before:border-r-${step.color} before:border-b-[10px] before:border-b-transparent p-4 rounded-lg shadow ${step.bgColor}`}>
              {step.text.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>


  





    </div>
  );
};

export default UploadStaging;

