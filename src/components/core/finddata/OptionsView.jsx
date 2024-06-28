import useGlobalStore from '@/store/global.js';



const options = [
  {
    subject: "CX",
    amount: "$1,999",
    title: "DBA - PhD in Quality Management",
    mainImg: "https://portal.msbm.org.uk/uploads/course_image/202302/27134456__dba-quality-management-thumbnail.jpg",
    details: "The aim of the 180 ECTS credits DBA in Quality Management programme, is to provide business students, managers, practitioners, and leaders with advanced knowledge, research, and analytical skills to address complex business issues. Unlike master's programs, this DBA program utilises theoretical concepts to tackle practical business challenges. It promotes a transformative learning process that enhances research skills. It enables students to view business situations differently and use research methods to identify solutions that foster organizational efficiency, growth, and long-term sustainability."
  },
  {
    subject: "Market",
    amount: "$3,900",
    title: "Doctor of Business Administration",
    mainImg: "https://portal.msbm.org.uk/uploads/course_image/202302/27093736__dba-supply-chain-management-thumbnail.jpg", 
    details: "The aim of the 180 ECTS credits DBA in Quality Management programme, is to provide business students, managers, practitioners, and leaders with advanced knowledge, research, and analytical skills to address complex business issues. Unlike master's programs, this DBA program utilises theoretical concepts to tackle practical business challenges. It promotes a transformative learning process that enhances research skills. It enables students to view business situations differently and use research methods to identify solutions that foster organizational efficiency, growth, and long-term sustainability"
  },
  {
    subject: "Complain",
    amount: "$450",
    title: "DBA - PhD in Quality Management",
    mainImg: "https://portal.msbm.org.uk/uploads/course_image/202302/27134456__dba-quality-management-thumbnail.jpg",
    details: "The aim of the 180 ECTS credits DBA in Quality Management programme, is to provide business students, managers, practitioners, and leaders with advanced knowledge, research, and analytical skills to address complex business issues. Unlike master's programs, this DBA program utilises theoretical concepts to tackle practical business challenges. It promotes a transformative learning process that enhances research skills. It enables students to view business situations differently and use research methods to identify solutions that foster organizational efficiency, growth, and long-term sustainability."
  },
]
const OptionsView = () => {

  const updateData = useGlobalStore((state) => state.updateData);



    return (
      <div className="border dark:border-zinc-900 flex flex-col p-4 md:p-6 bg-white rounded-xl  dark:bg-[#18181b] gap-10 relative overflow-hidden">
      <div className="tracking-wider text-2xl font-light ">Choose from options</div>
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4  max-w-full">
          {
            options?.map((opt, i) => (
              <div key={i} onClick={() => updateData({ isOptionModalOpen: true, data: opt }) } className="flex flex-col cursor-pointer group shadow-md transition-all hover:shadow-sm duration-500">
                  <div className="flex flex-col relative h-56 max-h-56 overflow-hidden">
                      <img src={opt.mainImg} alt="mainimg" className="h-56 max-h-56 group-hover:scale-125 transition-all duration-1000 " />
                      <div className=" absolute bg-[#5f73df] text-white dark:text-gray-50 text-sm px-2 py-1 m-2 shadow rounded "> <span className=" text-default-100 dark:text-gray-50">Save</span>  $5  <span className=" text-default-100 dark:text-gray-50">- Limited time offer</span></div>
                  </div>
                  <div className="flex flex-col bg-[#fafafa] dark:dark:bg-zinc-800  px-4 py-6 gap-4 group-hover:bg-[#ededee]">
                      <small className="text-default-500 text-xs">Business Idea</small>
                      <big className="font-bold">{opt.title}</big>
                      <p className=" line-clamp-5 text-default-500">{opt.details}</p>
                  </div>
              </div>
            // <div key={i} className="border dark:border-zinc-700 flex flex-col p-2 px-6  gap-10 rounded-md hover:scale-95 transition-all duration-1000 cursor-pointer bg-[#f8f8f8] dark:bg-zinc-800">
            //     <span className="text-4xl py-2 pt-6 text-[#52658c]">{opt?.subject}</span>
            //     <ul style={{listStyleType:"circle"}} className="flex flex-col gap-2 tracking-wider ml-4">
            //         <li>Select from multiple projects</li>
            //         <li>Build your dashboard from template</li>
            //         <li>Get notified realtime.</li>
            //     </ul>

            //     <div className="flex flex-col py-6">
            //       <small>Starts</small>
            //       <big className="text-[#52658c] text-3xl">{opt?.amount}</big>
            //     </div>
            // </div>
            ))
          }
      </div>
  </div>
    )
  }
  
  export default OptionsView
  